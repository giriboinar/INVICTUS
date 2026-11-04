let lang = 'en';
let storyData = null;
let charData = null;
let squadData = null;

function t(obj, field) {
  return lang === 'te' ? (obj[field + '_te'] || obj[field + '_en']) : obj[field + '_en'];
}

function render() {
  document.getElementById('btn-en').className = lang === 'en' ? 'active' : '';
  document.getElementById('btn-te').className = lang === 'te' ? 'active' : '';
  document.getElementById('tagline').textContent = lang === 'te'
    ? 'సుంగ్ జిన్-వూ, దొంగిలించబడిన డేటా — పార్ట్ 1. కథ ఇక్కడితో ముగియదు.'
    : 'Sung Jin-Woo and the stolen data — Part 1. The story does not end here.';
  document.getElementById('h-heroes').textContent = lang === 'te' ? 'స్క్వాడ్' : 'The Squad';
  document.getElementById('h-villains').textContent = lang === 'te' ? 'విలన్లు' : 'The Villains';
  document.getElementById('h-squads').textContent = lang === 'te' ? 'స్క్వాడ్‌లు' : 'The Squads';
  document.getElementById('h-story').textContent = lang === 'te' ? 'కథ — పార్ట్ 1' : 'The Story — Part 1';
  document.getElementById('h-suspense').textContent = lang === 'te' ? 'సస్పెన్స్ — పార్ట్ 2 వస్తోంది' : 'The Suspense — Part 2 is coming';
  document.getElementById('suspense-list').innerHTML = (lang === 'te' ? [
    'యాప్ డేటా ఎక్కడ?',
    'బసుపతి థానోస్ పేరు ఎందుకు చెప్పడం లేదు?',
    'జిన్-వూలో ఇంకా నిద్రపోతున్న శక్తి ఏమిటి?'
  ] : [
    'Where is the app data?',
    'Why will Basupathi not name Thanos?',
    'What power is still sleeping inside Jin-Woo?'
  ]).map(function (q) { return '<li>' + q + '</li>'; }).join('');

  function card(c) {
    const img = c.image
      ? '<img src="' + c.image + '" alt="' + c.name + '">'
      : '<div class="placeholder">' + (lang === 'te' ? 'చిత్రం త్వరలో' : 'Portrait coming soon') + '</div>';
    return '<div class="card">' + img + '<h3>' + c.name + '</h3>'
      + '<div class="role">' + t(c, 'role') + '</div>'
      + '<p>' + t(c, 'powers') + '</p></div>';
  }

  document.getElementById('heroes').innerHTML =
    charData.characters.filter(function (c) { return c.team === 'heroes'; }).map(card).join('');
  document.getElementById('villains').innerHTML =
    charData.characters.filter(function (c) { return c.team === 'villains'; }).map(card).join('');

  document.getElementById('squads').innerHTML = squadData.squads.map(function (s) {
    const img = s.image
      ? '<img src="' + s.image + '" alt="' + t(s, 'name') + '">'
      : '<div class="placeholder">' + (lang === 'te' ? 'చిత్రం త్వరలో' : 'Picture coming soon') + '</div>';
    return '<div class="card">' + img + '<h3>' + t(s, 'name') + '</h3><p>' + t(s, 'members') + '</p></div>';
  }).join('');

  document.getElementById('steps').innerHTML = storyData.steps.map(function (s) {
    let html = '<div class="step"><h3>' + s.id + '. ' + t(s, 'title') + '</h3><p>' + t(s, 'text') + '</p>';
    if (s.image) { html += '<img src="' + s.image + '" alt="">'; }
    const audio = lang === 'te' ? s.audio_te : s.audio_en;
    if (audio) { html += '<audio controls src="' + audio + '"></audio>'; }
    return html + '</div>';
  }).join('');
}

document.getElementById('btn-en').onclick = function () { lang = 'en'; render(); };
document.getElementById('btn-te').onclick = function () { lang = 'te'; render(); };

Promise.all([
  fetch('story.json').then(function (r) { return r.json(); }),
  fetch('characters.json').then(function (r) { return r.json(); }),
  fetch('squads.json').then(function (r) { return r.json(); })
]).then(function (data) {
  storyData = data[0];
  charData = data[1];
  squadData = data[2];
  render();
}).catch(function () {
  document.getElementById('steps').innerHTML = '<p>Story data could not be loaded.</p>';
});
