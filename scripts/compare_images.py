from PIL import Image
import numpy as np
import cv2
from skimage.metrics import structural_similarity as ssim
import os

ref_dir = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora'
web_dir = r'D:\Opencode\Luxora\luxora-web\scripts\screenshots'
out_dir = r'D:\Opencode\Luxora\luxora-web\scripts\comparison'
os.makedirs(out_dir, exist_ok=True)


def compare_images(ref_path, web_path, name):
    ref = cv2.imread(ref_path)
    web = cv2.imread(web_path)
    if ref is None or web is None:
        print(f"Skipping {name}: could not load images")
        return

    # Resize web to match reference for pixel comparison
    web_resized = cv2.resize(web, (ref.shape[1], ref.shape[0]), interpolation=cv2.INTER_LANCZOS4)

    # Pixel diff
    diff = cv2.absdiff(ref, web_resized)
    diff_gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    _, diff_mask = cv2.threshold(diff_gray, 30, 255, cv2.THRESH_BINARY)

    # SSIM
    ref_gray = cv2.cvtColor(ref, cv2.COLOR_BGR2GRAY)
    web_gray = cv2.cvtColor(web_resized, cv2.COLOR_BGR2GRAY)
    score, _ = ssim(ref_gray, web_gray, full=True)

    # Highlight differences
    web_highlight = web_resized.copy()
    web_highlight[diff_mask > 0] = [0, 0, 255]

    # Save diff image
    out_path = os.path.join(out_dir, f'diff_{name}.jpg')
    cv2.imwrite(out_path, web_highlight)

    # Save resized web
    cv2.imwrite(os.path.join(out_dir, f'web_{name}.jpg'), web_resized)

    mismatch_percent = (np.count_nonzero(diff_mask) / diff_mask.size) * 100
    print(f"{name}: SSIM={score:.3f}, Mismatch={mismatch_percent:.2f}%, Saved diff to {out_path}")


# Compare hero reference vs hero portion of website screenshot
web_full = Image.open(os.path.join(web_dir, 'fullpage.png'))
hero_crop = web_full.crop((0, 0, 1440, 1144))
hero_crop.save(os.path.join(out_dir, 'web_hero_crop.jpg'), quality=90)
compare_images(os.path.join(ref_dir, 'hero-logo-reference.png'), os.path.join(out_dir, 'web_hero_crop.jpg'), 'hero')

# Compare combo packaging reference
combo_web = web_full.crop((0, 1144, 1195, 1144 + 1068))
combo_web.save(os.path.join(out_dir, 'web_combo_crop.jpg'), quality=90)
compare_images(os.path.join(ref_dir, 'combo-packaging-reference.jpeg'), os.path.join(out_dir, 'web_combo_crop.jpg'), 'combo')

# Compare care kit reference
care_web = web_full.crop((0, 1144 + 1068, 1254, 1144 + 1068 + 1254))
care_web.save(os.path.join(out_dir, 'web_care_kit_crop.jpg'), quality=90)
compare_images(os.path.join(ref_dir, 'dental-care-kit-reference.png'), os.path.join(out_dir, 'web_care_kit_crop.jpg'), 'care_kit')

# Compare manual kit reference
manual_web = web_full.crop((0, 1144 + 1068 + 1254, 1280, 1144 + 1068 + 1254 + 853))
manual_web.save(os.path.join(out_dir, 'web_manual_crop.jpg'), quality=90)
compare_images(os.path.join(ref_dir, 'manual-care-kit-reference.jpeg'), os.path.join(out_dir, 'web_manual_crop.jpg'), 'manual_kit')

print("Comparison complete.")
