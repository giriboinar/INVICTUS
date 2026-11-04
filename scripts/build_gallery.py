import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
story = json.loads((root / "story.json").read_text(encoding="utf-8"))
chars = json.loads((root / "characters.json").read_text(encoding="utf-8"))

steps = story["steps"]
print("story steps:", len(steps))
for step in steps:
    print(step["id"], "-", step["title_en"], "| image:", step["image"] or "pending", "| audio:", "yes" if step["audio_en"] else "pending")

print("characters:", len(chars["characters"]))
for char in chars["characters"]:
    status = char["image"] if char["image"] else char["image_status"]
    print("-", char["name"], "| image:", status)

missing = [c["name"] for c in chars["characters"] if c["image"] and not (root / c["image"]).exists()]
missing += [s["title_en"] for s in steps if s["image"] and not (root / s["image"]).exists()]
if missing:
    print("MISSING FILES:", missing)
else:
    print("every listed image file exists.")
