from PIL import Image, ImageFilter
import os
import io
import numpy as np
import cv2

from rembg import remove, new_session

src = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora'
dst = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora\extracted'
os.makedirs(dst, exist_ok=True)

# Use the best background-removal model for product photography.
MODEL = "birefnet-general"


def remove_bg_premium(im: Image.Image, session=None) -> Image.Image:
    """Remove background with premium model and alpha matting."""
    if im.mode != 'RGBA':
        im = im.convert('RGBA')
    buf = io.BytesIO()
    im.save(buf, format='PNG')
    data = buf.getvalue()
    # alpha_matting improves edges around hair/fur/transparent objects
    out = remove(
        data,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=10,
        alpha_matting_erode_size=10,
    )
    return Image.open(io.BytesIO(out)).convert('RGBA')


def clean_edges(im: Image.Image) -> Image.Image:
    """Smooth edges and remove halo artifacts."""
    r, g, b, a = im.split()
    # Slight blur on alpha to anti-alias edges
    a = a.filter(ImageFilter.GaussianBlur(radius=0.5))
    im = Image.merge('RGBA', (r, g, b, a))
    return im


def auto_crop_transparent(im: Image.Image, padding=30, min_size=None) -> Image.Image:
    """Crop tightly to visible content."""
    arr = np.array(im)
    alpha = arr[:, :, 3]
    coords = cv2.findNonZero((alpha > 15).astype(np.uint8))
    if coords is None:
        return im
    x, y, w, h = cv2.boundingRect(coords)
    x1 = max(0, x - padding)
    y1 = max(0, y - padding)
    x2 = min(im.width, x + w + padding)
    y2 = min(im.height, y + h + padding)
    cropped = im.crop((x1, y1, x2, y2))
    if min_size:
        cw, ch = cropped.size
        new_w = max(cw, min_size[0])
        new_h = max(ch, min_size[1])
        if (new_w, new_h) != (cw, ch):
            new = Image.new('RGBA', (new_w, new_h), (0, 0, 0, 0))
            new.paste(cropped, ((new_w - cw) // 2, (new_h - ch) // 2), cropped)
            cropped = new
    return cropped


def save(im: Image.Image, name: str):
    path = os.path.join(dst, name)
    im.save(path, 'PNG', optimize=True)
    print(f"Saved {name}: {im.size}")


def extract_region(input_name, output_name, box, padding=30, min_size=None):
    im = Image.open(os.path.join(src, input_name)).convert('RGBA')
    x1, y1, x2, y2 = box
    region = im.crop((x1, y1, x2, y2))
    region = remove_bg_premium(region)
    region = clean_edges(region)
    region = auto_crop_transparent(region, padding=padding, min_size=min_size)
    save(region, output_name)
    return region


def create_background(input_name, output_name, max_width=1920, quality=88):
    im = Image.open(os.path.join(src, input_name)).convert('RGB')
    if im.width > max_width:
        ratio = max_width / im.width
        new_h = int(im.height * ratio)
        im = im.resize((max_width, new_h), Image.LANCZOS)
    path = os.path.join(dst, output_name)
    im.save(path, 'JPEG', quality=quality, optimize=True)
    print(f"Saved {output_name}: {im.size}")


def main():
    session = new_session(MODEL)

    # --- BACKGROUNDS ---
    create_background('hero-logo-reference.png', 'bg-hero.jpg')
    create_background('combo-packaging-reference.jpeg', 'bg-combo.jpg')
    create_background('dental-care-kit-reference.png', 'bg-care-kit.jpg')
    create_background('manual-care-kit-reference.jpeg', 'bg-manual-kit.jpg')

    # --- HERO: real 3D chrome tooth + ribbon logo ---
    # Tight crop around the central logo
    extract_region(
        'hero-logo-reference.png',
        'chrome-tooth-3d.png',
        (430, 30, 980, 460),
        padding=40,
        min_size=(600, 450)
    )

    # Real floating strip
    extract_region(
        'hero-logo-reference.png',
        'strip-floating-3d.png',
        (200, 560, 1200, 1020),
        padding=50,
        min_size=(900, 420)
    )

    # --- COMBO PACKAGING ---
    extract_region(
        'combo-packaging-reference.jpeg',
        'combo-box-closed-3d.png',
        (20, 170, 540, 820),
        padding=30,
        min_size=(560, 680)
    )
    extract_region(
        'combo-packaging-reference.jpeg',
        'combo-box-open-3d.png',
        (540, 160, 1110, 810),
        padding=30,
        min_size=(620, 680)
    )
    extract_region(
        'combo-packaging-reference.jpeg',
        'combo-sachets-3d.png',
        (540, 820, 1050, 1050),
        padding=30,
        min_size=(560, 260)
    )

    # --- DENTAL CARE KIT ---
    extract_region(
        'dental-care-kit-reference.png',
        'care-kit-tray-3d.png',
        (130, 190, 1010, 720),
        padding=25,
        min_size=(900, 560)
    )
    extract_region(
        'dental-care-kit-reference.png',
        'toothbrushes-3d.png',
        (125, 215, 270, 660),
        padding=40,
        min_size=(180, 500)
    )
    extract_region(
        'dental-care-kit-reference.png',
        'floss-mint-3d.png',
        (260, 225, 425, 475),
        padding=40,
        min_size=(240, 320)
    )
    extract_region(
        'dental-care-kit-reference.png',
        'floss-picks-3d.png',
        (420, 200, 1020, 700),
        padding=30,
        min_size=(620, 520)
    )

    # --- MANUAL CARE KIT ---
    extract_region(
        'manual-care-kit-reference.jpeg',
        'manual-kit-scene-3d.png',
        (240, 40, 990, 540),
        padding=25,
        min_size=(780, 520)
    )
    extract_region(
        'manual-care-kit-reference.jpeg',
        'manual-toothbrush-3d.png',
        (445, 55, 550, 475),
        padding=45,
        min_size=(160, 460)
    )
    extract_region(
        'manual-care-kit-reference.jpeg',
        'manual-floss-3d.png',
        (535, 255, 705, 505),
        padding=45,
        min_size=(220, 300)
    )
    extract_region(
        'manual-care-kit-reference.jpeg',
        'manual-water-flosser-3d.png',
        (665, 45, 855, 525),
        padding=45,
        min_size=(250, 520)
    )
    extract_region(
        'manual-care-kit-reference.jpeg',
        'manual-kit-box-3d.png',
        (840, 70, 1240, 530),
        padding=35,
        min_size=(460, 500)
    )

    print("Premium extraction complete.")


if __name__ == "__main__":
    main()
