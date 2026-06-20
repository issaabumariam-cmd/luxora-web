from PIL import Image
import os
import io
import numpy as np
import cv2

# rembg import (will download model on first run)
from rembg import remove

src = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora'
dst = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora\extracted'
os.makedirs(dst, exist_ok=True)


def save(im, name):
    path = os.path.join(dst, name)
    im.save(path, optimize=True)
    print(f"Saved {name}: {im.size}")


def remove_bg(im: Image.Image) -> Image.Image:
    """Remove background using rembg."""
    if im.mode != 'RGBA':
        im = im.convert('RGBA')
    buf = io.BytesIO()
    im.save(buf, format='PNG')
    data = buf.getvalue()
    out = remove(data, force_return_bytes=True)
    return Image.open(io.BytesIO(out)).convert('RGBA')


def auto_crop_transparent(im: Image.Image, padding=40, min_size=None) -> Image.Image:
    """Crop to content bounding box with padding, ignoring transparent pixels."""
    arr = np.array(im)
    alpha = arr[:, :, 3]
    coords = cv2.findNonZero((alpha > 30).astype(np.uint8))
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
        if cw < min_size[0] or ch < min_size[1]:
            new_w = max(cw, min_size[0])
            new_h = max(ch, min_size[1])
            new = Image.new('RGBA', (new_w, new_h), (0, 0, 0, 0))
            new.paste(cropped, ((new_w - cw) // 2, (new_h - ch) // 2), cropped)
            cropped = new
    return cropped


def extract_region(input_name, output_name, box, remove_background=True, padding=40, min_size=None):
    im = Image.open(os.path.join(src, input_name)).convert('RGBA')
    x1, y1, x2, y2 = box
    region = im.crop((x1, y1, x2, y2))
    if remove_background:
        region = remove_bg(region)
        region = auto_crop_transparent(region, padding=padding, min_size=min_size)
    save(region, output_name)
    return region


def create_background(input_name, output_name, max_width=1920, quality=90):
    """Create a full-bleed optimized background image."""
    im = Image.open(os.path.join(src, input_name)).convert('RGB')
    if im.width > max_width:
        ratio = max_width / im.width
        new_h = int(im.height * ratio)
        im = im.resize((max_width, new_h), Image.LANCZOS)
    path = os.path.join(dst, output_name)
    im.save(path, 'JPEG', quality=quality, optimize=True)
    print(f"Saved {output_name}: {im.size}")


# --- FULL BACKGROUNDS ---
create_background('hero-logo-reference.png', 'bg-hero.jpg')
create_background('combo-packaging-reference.jpeg', 'bg-combo.jpg')
create_background('dental-care-kit-reference.png', 'bg-care-kit.jpg')
create_background('manual-care-kit-reference.jpeg', 'bg-manual-kit.jpg')

# --- HERO: 3D chrome tooth + ribbon logo ---
extract_region('hero-logo-reference.png', 'chrome-tooth-3d.png', (330, 30, 1050, 500), padding=60, min_size=(700, 500))

# Floating strip from hero
extract_region('hero-logo-reference.png', 'strip-floating-3d.png', (180, 560, 1200, 1010), padding=60, min_size=(900, 420))

# --- COMBO PACKAGING ---
# Closed box
extract_region('combo-packaging-reference.jpeg', 'combo-box-closed-3d.png', (20, 170, 560, 830), padding=40, min_size=(560, 680))
# Open box with products
extract_region('combo-packaging-reference.jpeg', 'combo-box-open-3d.png', (530, 160, 1130, 830), padding=40, min_size=(620, 700))
# Sachets in front
extract_region('combo-packaging-reference.jpeg', 'combo-sachets-3d.png', (540, 820, 1060, 1050), padding=40, min_size=(560, 260))

# --- DENTAL CARE KIT ---
# Full tray
extract_region('dental-care-kit-reference.png', 'care-kit-tray-3d.png', (130, 190, 1010, 720), padding=30, min_size=(900, 570))
# Toothbrushes pair
extract_region('dental-care-kit-reference.png', 'toothbrushes-3d.png', (120, 210, 270, 660), padding=40, min_size=(180, 500))
# Floss container
extract_region('dental-care-kit-reference.png', 'floss-mint-3d.png', (260, 220, 430, 480), padding=50, min_size=(240, 320))
# Floss picks
extract_region('dental-care-kit-reference.png', 'floss-picks-3d.png', (420, 200, 1020, 700), padding=40, min_size=(620, 520))

# --- MANUAL CARE KIT ---
# Full product scene
extract_region('manual-care-kit-reference.jpeg', 'manual-kit-scene-3d.png', (240, 40, 990, 540), padding=30, min_size=(780, 540))
# Manual toothbrush
extract_region('manual-care-kit-reference.jpeg', 'manual-toothbrush-3d.png', (440, 50, 550, 480), padding=50, min_size=(160, 500))
# Manual floss
extract_region('manual-care-kit-reference.jpeg', 'manual-floss-3d.png', (530, 250, 710, 510), padding=50, min_size=(220, 320))
# Manual water flosser
extract_region('manual-care-kit-reference.jpeg', 'manual-water-flosser-3d.png', (660, 40, 860, 530), padding=50, min_size=(250, 520))
# Manual kit box
extract_region('manual-care-kit-reference.jpeg', 'manual-kit-box-3d.png', (840, 70, 1240, 530), padding=40, min_size=(460, 500))

print("Advanced extraction complete.")
