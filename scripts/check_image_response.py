import asyncio
from playwright.async_api import async_playwright

async def check_image():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('http://localhost:3000', wait_until='networkidle', timeout=60000)

        # fetch one failing image directly via browser eval -> won't work; use page.request
        url = 'http://localhost:3000/assets/luxora/extracted/toothbrushes-3d.png'
        resp = await page.request.fetch(url)
        body = await resp.body()
        print('Status:', resp.status)
        print('Content-Type:', resp.headers.get('content-type'))
        print('Content-Length:', len(body))
        print('First bytes:', body[:20])
        print('Is PNG:', body[:8] == b'\x89PNG\r\n\x1a\n')
        await browser.close()

asyncio.run(check_image())
