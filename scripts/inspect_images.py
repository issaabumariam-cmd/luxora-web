import asyncio
from playwright.async_api import async_playwright
import json

async def inspect():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:3000', wait_until='networkidle', timeout=60000)

        images = await page.evaluate('''() => {
            return Array.from(document.querySelectorAll('img')).map(img => ({
                src: img.src,
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

asyncio.run(inspect())
