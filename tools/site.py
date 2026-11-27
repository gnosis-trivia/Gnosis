"""Build the GitHub Pages index.html from the Claude artifact's index.html.

Usage: python3 tools/site.py path/to/artifact-index.html
Adds the Firebase settings, the Firebase room script and the link-preview tags.
data.js, engine.js and kjv.json are copied alongside unchanged.
"""
import sys, json
src = open(sys.argv[1], encoding='utf-8').read()
i = src.find('<!DOCTYPE html>')
if i > 0: src = src[i:]                                   # drop any viewer wrapper
if src.rstrip().endswith('</body></html>') and src.count('</html>') > 1:
    src = src.rstrip()[:-len('</body></html>')].rstrip() + '\n'
CFG = {"apiKey": "AIzaSyBDFR42M3I8JmpVYx52y4lBVN57CvUw4ok", "authDomain": "chokmah-garden.firebaseapp.com",
       "databaseURL": "https://chokmah-garden-default-rtdb.asia-southeast1.firebasedatabase.app",
       "projectId": "chokmah-garden", "storageBucket": "chokmah-garden.firebasestorage.app",
       "messagingSenderId": "868718706390", "appId": "1:868718706390:web:de0744340b2bdcf0df5377"}
U = 'https://gnosis-trivia.github.io/Gnosis/'
D = ('Name worship songs, Bible verses and Bible characters. The rarer your answer, the more Manna you harvest. '
     'Play live with up to 12 friends in Chokmah Garden.')
meta = f'''<meta name="description" content="Christian trivia: {D}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Gnosis">
<meta property="og:title" content="Gnosis : Christian trivia"><meta property="og:description" content="{D}">
<meta property="og:url" content="{U}"><meta property="og:image" content="{U}preview.jpg"><meta property="og:image:secure_url" content="{U}preview.jpg">
<meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Gnosis: a glowing stained-glass window beside the words Christian trivia">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Gnosis : Christian trivia"><meta name="twitter:image" content="{U}preview.jpg">
<meta name="theme-color" content="#0b1028"><link rel="icon" type="image/png" href="icon-180.png"><link rel="apple-touch-icon" href="icon-180.png"><meta name="apple-mobile-web-app-title" content="Gnosis">
'''
T = '<title>Gnosis : Christian trivia</title>'
D_ = '<script src="data.js"></script>'
assert src.count(T) == 1 and src.count(D_) == 1, 'unexpected index.html layout'
src = src.replace(T, T + '\n' + meta)
src = src.replace(D_, f'<script>window.GN_FIREBASE={json.dumps(CFG)};</script>\n<script src="room.js"></script>\n' + D_)
open('index.html', 'w', encoding='utf-8').write(src)
print('index.html written', len(src))
