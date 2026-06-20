from PIL import Image
import os

src_dir = r'D:\Opencode\Luxora\luxora-web\public\assets\luxora\extracted'

for name in os.listdir(src_dir):
    if not name.endswith('.png'):
        continue
    path = os.path.join(src_dir, name)
    try:
        im = Image.open(path)
        # Force RGBA to ensure alpha channel is preserved
        if im.mode != 'RGBA':
            im = im.convert('RGBA')
        # Re-save as clean PNG
        im.save(path + '.tmp', 'PNG', optimize=True)
        os.replace(path + '.tmp', path)
        print(f'Resaved {name}: {im.size} mode={im.mode}')
    except Exception as e:
        print(f'FAILED {name}: {e}')

print('PNG normalization complete.')
