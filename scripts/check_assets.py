import asyncio
from playwright.async_api import async_playwright
import json

async def check():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})

        failed = []
        page.on('response', lambda resp: (
            failed.append({'url': resp.url, 'status': resp.status})
            if not resp.ok and any(resp.url.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'])
            else None
        ))

        await page.goto('http://localhost:3000', wait_until='networkidle', timeout=60000)

        # report dimensions and visibility of each section
        sections = await page.evaluate('''() => {
            const ids = ['products','duo','what-matters','complete-care','manual-kit','why-luxora','ritual','cta'];
            return ids.map(id => {
                const el = document.getElementById(id) || document.querySelector(`section:has([id="${id}"])`) || document.querySelector(`[id="${id}"]`);
                if (!el) return {id, found: false};
                const rect = el.getBoundingClientRect();
                return {id, found: true, width: rect.width, height: rect.height, top: rect.top, bottom: rect.bottom, text: el.innerText?.slice(0,60)};
            });
        }''')

        print('Failed image requests:', json.dumps(failed, indent=2))
        print('Section dimensions:', json.dumps(sections, indent=2))
        await browser.close()

asyncio.run(check())
