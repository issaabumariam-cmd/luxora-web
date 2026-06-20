import asyncio
from playwright.async_api import async_playwright

async def count():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:3000', wait_until='networkidle', timeout=60000)
        for _ in range(12):
            await page.evaluate('window.scrollBy(0, 1200)')
            await asyncio.sleep(0.25)

        result = await page.evaluate('''() => {
            const section = document.getElementById('why-luxora');
            if (!section) return {found: false};
            const cards = section.querySelectorAll('.group');
            return {found: true, cardCount: cards.length, heights: Array.from(cards).map(c => c.getBoundingClientRect().height)};
        }''')
        print(result)
        await browser.close()

asyncio.run(count())
