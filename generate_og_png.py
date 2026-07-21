from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs('images/og', exist_ok=True)
width, height = 1200, 630
img = Image.new('RGB', (width, height), '#0e0818')
draw = ImageDraw.Draw(img)

for i in range(height):
    r1, g1, b1 = 14, 8, 24
    r2, g2, b2 = 18, 10, 36
    t = i / height
    r = int(r1 * (1 - t) + r2 * t)
    g = int(g1 * (1 - t) + g2 * t)
    b = int(b1 * (1 - t) + b2 * t)
    draw.line([(0, i), (width, i)], fill=(r, g, b))

card = Image.new('RGBA', (1120, 550), (11, 7, 16, 220))
card_draw = ImageDraw.Draw(card)
card_draw.rounded_rectangle([(0, 0), (1120, 550)], radius=28, fill=(11, 7, 16, 220), outline=(255, 255, 255, 50), width=1)
img.paste(card, (40, 40), card)

draw.rounded_rectangle([(60, 80), (1140, 108)], radius=14, fill=(200, 160, 58, 255))

try:
    font_brand = ImageFont.truetype('arial.ttf', 72)
    font_sub = ImageFont.truetype('arial.ttf', 28)
    font_note = ImageFont.truetype('arial.ttf', 20)
except Exception:
    font_brand = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_note = ImageFont.load_default()

brand = 'Alfa & Levy'
sub = 'Catálogo Digital · Tecidos · 2026'
note = 'https://alfaelevytextil.github.io/Catalogo'

bbox = draw.textbbox((0, 0), brand, font=font_brand)
w = bbox[2] - bbox[0]
draw.text(((width - w) / 2, 250), brand, fill='#f6eccf', font=font_brand)

bbox2 = draw.textbbox((0, 0), sub, font=font_sub)
w2 = bbox2[2] - bbox2[0]
draw.text(((width - w2) / 2, 330), sub, fill='#e8c55a', font=font_sub)

bbox3 = draw.textbbox((0, 0), note, font=font_note)
w3 = bbox3[2] - bbox3[0]
draw.text(((width - w3) / 2, 500), note, fill='#bda86b', font=font_note)

output_path = 'images/og/og-image.png'
img.save(output_path, format='PNG')
print('saved', output_path)
