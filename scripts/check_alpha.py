from PIL import Image

files = [
    'toothbrushes-3d.png','floss-mint-3d.png','floss-picks-3d.png','manual-kit-scene-3d.png',
    'manual-toothbrush-3d.png','manual-floss-3d.png','manual-water-flosser-3d.png'
]
for f in files:
    path = f'public/assets/luxora/extracted/{f}'
    im = Image.open(path)
    if im.mode != 'RGBA':
        im = im.convert('RGBA')
    arr = list(im.getdata(3))  # alpha channel
    non_zero = sum(1 for a in arr if a > 0)
    total = len(arr)
    print(f, im.mode, im.size, 'alpha>0:', non_zero, '/', total, 'ratio:', round(non_zero/total,3))
