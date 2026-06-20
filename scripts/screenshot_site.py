import asyncio
from playwright.async_api import async_playwright
import os

out_dir = r'D:\Opencode\Luxora\luxora-web\scripts\screenshots'
os.makedirs(out_dir, exist_ok=True)

async def wait_for_images(page):
    await page.wait_for_load_state('networkidle')
    # Scroll through page to trigger lazy image decoding
    for _ in range(12):
        await page.evaluate('window.scrollBy(0, 1200)')
        await asyncio.sleep(0.25)
    await page.evaluate('window.scrollTo(0, 0)')
    # Wait until every image is decoded (naturalWidth > 0)
    await page.wait_for_function('''() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.length > 0 && imgs.every(img => img.complete && img.naturalWidth > 0);
    }''', timeout=60000)

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:3000', wait_until='networkidle', timeout=60000)
        await wait_for_images(page)
        await page.screenshot(path=os.path.join(out_dir, 'fullpage.png'), full_page=True)
        await browser.close()

asyncio.run(capture())
print('Screenshot saved to', out_dir)
