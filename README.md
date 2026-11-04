# INVICTUS

🌐 **Live website:** https://giriboinar.github.io/INVICTUS/ (goes live when Pages is enabled)

A fan story project in anime style. Sung Jin-Woo lives a normal life in
Bengaluru, not knowing that great power sleeps inside him. When a secret app's
data is stolen in BTM 2nd Stage, Captain America gathers Hulk, Walter White
and Rolex, and the hunt leads them to Jin-Woo. Part 1 ends at a cliffhanger:
Basupathi is caught, the data is missing, and Thanos is unnamed.

## Story — Part 1 (short version)

EN: Jin-Woo works in Bengaluru, office to room, every day. A software company
in BTM 2nd Stage secretly builds an app that keeps software workers safe at
home on weekends. Thanos orders Basupathi, a spirit, to steal the app data.
Captain America learns of the theft, gathers the squad, and a secret agent
leads them to Jin-Woo. Jin-Woo investigates, his power wakes, and Walter
White's mantra trap catches Basupathi — but the data is not found, and
Basupathi says nothing about Thanos.

TE: జిన్-వూ బెంగళూరులో ఆఫీసు నుంచి గదికి, ప్రతిరోజూ సాధారణ జీవితం గడుపుతాడు.
బీటీఎం 2వ స్టేజ్‌లో ఒక సాఫ్ట్‌వేర్ కంపెనీ రహస్యంగా ఒక యాప్‌ను తయారుచేస్తుంది.
థానోస్ ఆదేశంతో ఆత్మ అయిన బసుపతి డేటాను దొంగిలిస్తాడు. కెప్టెన్ అమెరికా
స్క్వాడ్‌ను కూడగట్టి, సీక్రెట్ ఏజెంట్ ఆధారంతో జిన్-వూ దగ్గరకు వస్తాడు.
వాల్టర్ వైట్ మంత్రపు ఉచ్చు బసుపతిని పట్టుకుంటుంది — కానీ డేటా దొరకదు,
థానోస్ గురించి ఏమీ తెలియదు.

Full story in English and Telugu: `story.json` (shown on the site).

## Characters

- Sung Jin-Woo — hero, squad leader (portrait ready, from his photo)
- Captain America — soldier 2, caption America (story scene: squad gathering, step-05)
- Hulk — soldier 3 (story scene: mantra trap, step-07)
- Walter White — soldier 4 (portrait ready)
- Rolex (Surya) — soldier 5 (portrait ready, Surya as Rolex — realistic, well highlighted)
- Thanos, Basupathi, Homelander — villains (Thanos story scene: his order, step-03; Basupathi realistic Arundhati-style portrait ready, well highlighted; Homelander ready; villain squad picture ready)

## Project layout

- `index.html`, `style.css`, `app.js` — the story website
- `story.json`, `characters.json` — story and character data (English + Telugu)
- `images/` — anime portraits; `audio/` — voice narration per step
- `scripts/build_gallery.py` — checks images and story data
- `src/InvictusStory.java` — prints the story timeline
- `Dockerfile`, `docker-compose.yml`, `.github/workflows/ci.yml`,
  `k8s/`, `ansible/`, `monitoring/` — DevOps setup

## Status

- Part 1 story, site, and DevOps files are ready.
- Voice narration: all 8 steps in English and Telugu are ready, with a player under each step.
- This repo is images + voice only — no videos. Motion videos stay local only and are not uploaded here.
- The site opens with the story, step by step: content, then image, then voice — and ends with the Part 2 suspense questions.
- Part 1 ends at the cliffhanger on purpose. The story continues.
