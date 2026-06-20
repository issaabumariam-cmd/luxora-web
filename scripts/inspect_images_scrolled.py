import asyncio
from playwright.async_api import async_playwright
import json

async def inspect_scrolled():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:3000', wait_until='networkidle', timeout=60000)

        # Scroll to bottom to trigger lazy loads
        for _ in range(10):
            await page.evaluate('window.scrollBy(0, 1000)')
            await asyncio.sleep(0.3)

        images = await page.evaluate('''() => {
            return Array.from(document.querySelectorAll('img')).map(img => ({
                src: img.src.split('/').pop(),
                alt: img.alt,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
                width: img.getBoundingClientRect().width,
                height: img.getBoundingClientRect().height,
                complete: img.complete,
            }));
        }''')

        print(json.dumps(images, indent=2))
        await browser.close()

asyncio.run(inspect_scrolled())
