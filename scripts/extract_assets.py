from PIL import Image
import os

src = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora'
dst = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora\extracted'


def crop_and_save(input_name, output_name, box, padding=0, fill_white=False):
    im = Image.open(os.path.join(src, input_name)).convert('RGBA')
    x1, y1, x2, y2 = box
    if padding > 0:
        x1 = max(0, x1 - padding)
        y1 = max(0, y1 - padding)
        x2 = min(im.width, x2 + padding)
        y2 = min(im.height, y2 + padding)
    cropped = im.crop((x1, y1, x2, y2))
    if fill_white:
        bg = Image.new('RGBA', cropped.size, (255, 255, 255, 255))
        bg.paste(cropped, (0, 0), cropped)
        cropped = bg.convert('RGB')
    cropped.save(os.path.join(dst, output_name), 'PNG', optimize=True)
    print(f"Saved {output_name}: {cropped.size}")


crop_and_save('hero-logo-reference.png', 'logo-chrome-ribbon.png', (300, 40, 1050, 480), padding=20)
crop_and_save('hero-logo-reference.png', 'floating-strip.png', (150, 560, 1200, 1000), padding=30)
crop_and_save('hero-logo-reference.png', 'hero-benefits-row.png', (100, 1020, 1250, 1120), padding=10)

crop_and_save('combo-packaging-reference.jpeg', 'combo-closed-box.png', (30, 180, 560, 820), padding=20)
crop_and_save('combo-packaging-reference.jpeg', 'combo-open-box.png', (560, 160, 1130, 820), padding=20)
crop_and_save('combo-packaging-reference.jpeg', 'combo-sachets.png', (540, 820, 1050, 1040), padding=20)

crop_and_save('dental-care-kit-reference.png', 'care-kit-full.png', (130, 190, 1010, 720), padding=20)
crop_and_save('dental-care-kit-reference.png', 'toothbrushes.png', (130, 220, 260, 650), padding=10)
crop_and_save('dental-care-kit-reference.png', 'floss-mint.png', (270, 230, 420, 470), padding=10)
crop_and_save('dental-care-kit-reference.png', 'floss-picks.png', (420, 200, 1010, 700), padding=10)

crop_and_save('manual-care-kit-reference.jpeg', 'manual-kit-full.png', (250, 40, 980, 540), padding=20)
crop_and_save('manual-care-kit-reference.jpeg', 'manual-toothbrush.png', (450, 60, 540, 470), padding=15)
crop_and_save('manual-care-kit-reference.jpeg', 'manual-floss.png', (540, 260, 700, 500), padding=15)
crop_and_save('manual-care-kit-reference.jpeg', 'manual-water-flosser.png', (670, 50, 850, 520), padding=15)
crop_and_save('manual-care-kit-reference.jpeg', 'manual-kit-box.png', (850, 80, 1230, 520), padding=20)

print("All extractions complete.")
