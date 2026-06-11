/* 

   sketch.js — all JavaScript for "You Have Been Observed"

   HOW THIS FILE IS ORGANISED
   ─────────────────────────────────────────────────────────────────────
   SECTION 1 — YOUR CONTENT   ← edit freely, this is your data
   SECTION 2 — PAGE RENDERER  ← builds the DOM from your data
   SECTION 3 — INTERACTIONS   ← video, timeline, Three.js map logic

   Only edit Section 1 unless you need to change layout or behaviour.

 */



/* 
   SECTION 1 — CONTENT
   ────────────────────────────────────────────────────────────────────
   Everything here feeds into the pages automatically.
   Each block is labelled with what page it controls.
*/


/* ------------------------------------------------------------------
   1a. INTRO PAGE
   ------------------------------------------------------------------ */
const INTRO = {

  // Large text shown faintly behind the popup
  bgTitle: 'You Have\nBeen Observed',

  // The blinking label at the top of the popup
  popupEyebrow: 'Consent Required',

  // Main heading inside the popup
  popupHeading: 'Before you continue,\nwe need your agreement.',

  // Body paragraphs — each string becomes a <p>
 
  popupBody: [
    'This experience uses <strong>tracking technologies</strong> to personalise content, measure engagement, and share data with our network of <strong>312 verified partners</strong> within a 48 mile radius (8 miles for urban areas).',
    'By continuing, you consent to the collection of your browsing behaviour, device fingerprint, location data, and inferred personal attributes for an indefinite period.',
  ],

  // Small print beneath the body
  popupFineprint: 'Your data may be processed outside your jurisdiction. You may withdraw consent at any time by submitting a written subject access request found on our website, subject to a 30-day processing window (not including likely extensions). See our 10,765-page Privacy Policy for full details. Continued use constitutes acceptance. Refusal to consent may result in denial of entry.',

  // Button labels
  popupAcceptLabel:  'Accept & Continue',
  popupDeclineLabel: 'Opt Out',           // always greyed out / disabled

  // Data strings scrolled faintly in the background
  // Add, remove, or change any of these
  bgDataStrings: [
    'DEVICE_ID:A3F2-9C11-8B4D', 'LAT:51.5074 LNG:-0.1278',
    'FINGERPRINT:HASH_7a2f9c',  'CONSENT:PENDING',
    'PROFILE_SCORE:847',        'INFERRED:ANXIOUS',
    'PURCHASES:TRACKED',        'POLITICAL:MODERATE_LEFT',
    'HEALTH_FLAGS:3',           'LOCATION_HISTORY:ENABLED',
    'AD_SEGMENTS:214',          'RISK_SCORE:LOW',
    'BROKER_ID:DX-0041',        'DATA_AGE:REALTIME',
    'JURISDICTION:UNKNOWN',     'RETENTION:INDEFINITE',
  ],
};


/* 
   1b. VIDEO PAGE
  */
const VIDEO = {
  src:           'video.mp4',  
  fallbackDelay: 4000,
  allowSkip:     true,          
};


/* ------------------------------------------------------------------
   1c. TIMELINE PAGE
   Each event appears as a node on the isometric 3D timeline.
   Hover or click a node to load its full text below.
   ------------------------------------------------------------------ */
const TIMELINE = {
  eyebrow: 'Chapter 02 — Timeline',
  heading: 'Live Facial Recognition VS CCTV',

 
};


/* ------------------------------------------------------------------
   1d. MAP PAGE
   Each node is a building in the Three.js isometric city.

   x, z   — position on the grid. (0, 0) is the centre.
             x goes left/right, z goes forward/back.
   type   — must match a key in the `colors` object below
   h      — building height. 1.0 = short, 4.0 = tall

   Lines connecting buildings to the nearest 'platform' node
   are drawn automatically.
   ------------------------------------------------------------------ */
const MAP = {
  eyebrow: 'Chapter 03 — Network',
  heading: 'The Facewatch Network',

 

  // ── MAP PAGE POPUP 
 
  mapPopup: {
    eyebrow: 'NOTICE',
    heading: 'RE: SUSPECTED LOCATIONS',
    body: [
      'This visualisation renders a number of "potential" or suspected locations that utilise FaceWatch technology.',
      'These are spaces where the COMPANY is known to use Facewatch, so there is potential for these spaces to use it. <strong>THESE ARE NOT CONFIRMED, AND NOT AN ACCUSATION!</strong> We are merely pointing out that the company is known to use it, not the specific store.',
      'To inform us/confirm or deny whether a space uses Facewatch, please contact us at <strong>cruzofer94@proton.me</strong>',
    ],
    fineprint: 'We do not have confirmation that all of these locations use Facewatch, but they are all within the network\'s potential reach. The actual number of locations using Facewatch is not publicly disclosed, but estimates suggest it could be thousands across the UK.',
    acceptLabel:  'I Understand. Show the Network.',
    declineLabel: 'Leave this Page',
  },
};


/* ARTICLE PAGE */
const ARTICLE = {
  kicker:  'Facewatch Case Study',
  heading: 'Watched Before\nYou\'ve Done Anything Wrong',
  deck:    'How Facewatch\'s facial recognition system is quietly turning Britain\'s high streets into biometric checkpoints — and what happens when it gets it wrong.',
  meta:    ['Published 2026', '12 min read', 'Private Sector Surveillance'],

 
  body: `
Imagine this: you've walked into your local Home Bargains and within seconds staff are surrounding you, forcing you out while other customers look on in shock, telling you that 'Facewatch', their private in-store facial recognition, has identified you as a thief.

Months after the incident, you enter a different Home Bargains with your elderly mother. Again you are forced out without meaningful explanation, policed by a private, invisible entity.

Your picture has been circulated to all stores using the company in your local area — which can include Sainsbury's, Iceland and even Costcutters — creating an effective community ban with little idea of the crime you've committed. You try to rectify the situation, but the store nor Facewatch return your communications for months, and eventually when they do, you find you have been accused of stealing £10 worth of toilet roll.

This is the story of Danielle Horan, a woman who was incorrectly identified as a shoplifter by Home Bargains's Facewatch facial recognition system. She was repeatedly asked to leave a store despite having committed no offence.

>> "Danielle Horan's experience with Facewatch reveals the consequences of a surveillance technology that most shoppers are unlikely to notice."

Although Facewatch later admitted the error, the incident raises broader questions about the role of facial recognition in British retail. Marketed as a solution to rising shoplifting rates, Facewatch allows retailers to scan customers in real time and compare their biometric data against shared watchlists. Yet as the technology becomes increasingly embedded within everyday shopping environments, concerns remain over who is monitored, who is excluded, and who is held accountable when mistakes occur.

## From Passive Recording to Active Identification

Britain has long been considered one of the most heavily surveilled countries in the world, largely due to the widespread adoption of CCTV cameras across all essential living spaces — from transport hubs, to streets, retail spaces and everywhere else. Introduced as a tool for recording crime and improving public safety, CCTV gradually became normalised in everyday life, largely because of its passive function: it captures events after they happen rather than intervening in real time.

Facewatch represents a shift away from that retrospective, passive model. While CCTV can see what people do, Facewatch's live facial recognition actively identifies who you are. Instead of retrospectively reviewing footage, Facewatch scans faces for biometric data as they enter participating stores, including (but not limited to):

Sainsbury's, Iceland, Home Bargains, Costcutter, Southern Co-Op, and Frasers Group stores including Sports Direct, Flannels and Evans Cycles.

Using this biometric data, automatic alerts are generated when a match is found against a shared watchlist that can operate over a 46-mile radius in rural areas and 8 miles in urban areas — for context, Greater London stretches 25 miles across.

The distinction between CCTV and Facewatch is crucial: CCTV watches behaviour, whereas Facewatch classifies identity in live time, enabling immediate intervention by staff.

## A Watchlist With No Court Order

The shared watchlist is a key point of contention. The criteria for being added is vague, discretionary, and does not require any criminal conviction, legal process, or actual crime to have been committed. Decisions are made by retailers based on internal incidents, suspicions or alleged behaviour, meaning that entry onto the system is not ratified by any court or independent authority.

As more businesses adopt Facewatch, individual watchlists become increasingly networked, meaning a single incident recorded in one store can influence access to many others. Surveillance, in this sense, is no longer confined to a single location but extends across a growing commercial infrastructure.

Unlike CCTV, participation in this system is not something shoppers actively agree to. Customers are not asked whether they consent to being scanned; facial recognition operates automatically at the point of entry. In practical terms, avoiding the system requires avoiding the shops altogether — raising serious questions about how meaningful "choice" is in everyday consumer environments.

## Who Decides Who Belongs?

At the heart of Facewatch's system is a question that would normally sit with the criminal justice system: who gets defined as a threat in the first place?

Individuals can be added to Facewatch watchlists following incidents such as alleged theft, violence, or anti-social behaviour, typically reported by retail staff or store managers. While the company presents this as a tool for repeat-offender prevention, the threshold for inclusion is not publicly comparable to a legal standard of proof. In practice, this raises uncertainty over how much evidence is required before someone is recorded as a "subject of interest" — and whether suspicion alone can be enough to trigger long-term exclusion from multiple retail environments.

Unlike criminal records issued through the courts, Facewatch operates outside traditional judicial processes. The system is run by a private company and implemented by participating retailers, meaning decisions about inclusion are made within commercial settings rather than legal ones. Oversight is limited to existing data protection frameworks, with the Information Commissioner's Office previously raising concerns about the use of live facial recognition and the need for strong safeguards.

>> "Civil liberties groups have questioned whether private surveillance systems are effectively creating parallel structures of policing without the transparency or accountability required of state institutions."

## When the System Gets It Wrong

The consequences of this structure become most visible when mistakes occur. False matches, inaccurate reporting, or human error in the creation of watchlists can all lead to individuals being incorrectly identified. Once added, removing oneself from such systems can be difficult, particularly when data is shared across multiple retail partners. The result is a form of automated suspicion that can follow individuals beyond a single incident or location.

In the criminal justice system, a conviction requires evidence, due process, and a court judgment. By contrast, a Facewatch alert can function as a practical label of suspicion in everyday life without judicial oversight or formal conviction.

As facial recognition spreads quietly through Britain's high streets, a question remains unanswered: who should have the power to decide who belongs in public life — and who does not?

!! This article was produced as part of an investigative series on surveillance in everyday spaces. Danielle Horan's case is a matter of public record. Facewatch has disputed some characterisations of how its system operates.
  `,

};



/* ====================================================================
   SECTION 2 — PAGE RENDERER
   ────────────────────────────────────────────────────────────────────
   Reads from Section 1 and builds the DOM.
   You don't need to edit anything below this line unless you want
   to change layout structure or add new page types.
==================================================================== */


// ── Utility: create an element with an optional CSS class and innerHTML
function make(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)             e.className   = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// ── Utility: build the bottom nav bar for a page
// backId    — page id to go back to (null = no back button)
// label     — centre indicator text e.g. '03 / 05 — Timeline'
// fwdLabel  — forward button label (null = no forward button)
// fwdId     — page id to go forward to
function buildNav(backId, label, fwdLabel, fwdId) {
  const nav = make('div', 'page-nav');

  if (backId) {
    const b = make('button', 'btn-back', '← Back');
    b.onclick = () => goTo(backId);
    nav.appendChild(b);
  } else {
    nav.appendChild(make('span', 'btn-ghost'));
  }

  nav.appendChild(make('span', 'nav-label', label));

  if (fwdLabel) {
    const f = make('button', 'btn-fwd', fwdLabel + ' →');
    if (fwdId) {
      f.onclick = () => goTo(fwdId);
    }
    nav.appendChild(f);
  } else {
    nav.appendChild(make('span', 'btn-ghost'));
  }

  return nav;
}

// ── Page transition
function goTo(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'page-map')      showMapPopup();
  if (id === 'page-timeline') buildTimeline();
  if (id === 'page-video')    playVideo();
}


// ── BUILD PAGE 1 — INTRO ─────────────────────────────────────────────
function buildIntroPage() {
  const page = make('div', 'page active');
  page.id = 'page-intro';

  page.appendChild(make('div', 'intro-bg'));

  // scrolling background data text
  const grid = make('div'); grid.id = 'intro-data-grid';
  for (let i = 0; i < 32; i++) {
    const row = make('span');
    row.textContent = Array(8).fill(0)
      .map(() => INTRO.bgDataStrings[Math.floor(Math.random() * INTRO.bgDataStrings.length)])
      .join('   ');
    grid.appendChild(row);
  }
  page.appendChild(grid);

  // faint title behind popup
  const titleWrap = make('div', 'intro-bg-title');
  const h1 = make('h1');
  h1.textContent = INTRO.bgTitle;
  titleWrap.appendChild(h1);
  page.appendChild(titleWrap);

  // popup
  const overlay = make('div', 'popup-overlay');
  const popup   = make('div', 'popup');

  popup.appendChild(make('div', 'popup-eyebrow', INTRO.popupEyebrow));

  const h2 = make('h2');
  h2.textContent = INTRO.popupHeading;
  popup.appendChild(h2);

  INTRO.popupBody.forEach(txt => {
    const p = make('p');
    p.innerHTML = txt;
    popup.appendChild(p);
  });

  popup.appendChild(make('div', 'popup-fine', INTRO.popupFineprint));

  const actions = make('div', 'popup-actions');
  const accept  = make('button', 'btn-accept', INTRO.popupAcceptLabel);
  accept.onclick = startVideo;
  const decline = make('button', 'btn-decline', INTRO.popupDeclineLabel);
  decline.disabled = true;
  decline.setAttribute('aria-disabled', 'true');
  decline.tabIndex = -1;
  actions.appendChild(accept);
  actions.appendChild(decline);
  popup.appendChild(actions);

  overlay.appendChild(popup);
  page.appendChild(overlay);
  document.body.appendChild(page);
}


// ── BUILD PAGE 2 — VIDEO ─────────────────────────────────────────────
function buildVideoPage() {
  const page = make('div', 'page');
  page.id = 'page-video';

  const scroll = make('div', 'page-scroll');

  const video = document.createElement('video');
  video.id = 'surveillance-video';
  video.src = VIDEO.src;
  video.setAttribute('playsinline', '');
  video.muted = true;
  scroll.appendChild(video);

  const flash = make('div');
  flash.id = 'tv-flash';
  scroll.appendChild(flash);

  page.appendChild(scroll);

  const nav = buildNav('page-intro', '02 / 05 — Documentary', VIDEO.allowSkip ? 'Skip' : null, null);
  // override the forward button to trigger the tv-off effect instead of a plain page jump
  const fwdBtn = nav.querySelector('.btn-fwd');
  if (fwdBtn) fwdBtn.onclick = triggerTvOff;
  page.appendChild(nav);

  document.body.appendChild(page);
}


// ── BUILD PAGE 3 — TIMELINE ──────────────────────────────────────────
function buildTimelinePage() {
  const page = make('div', 'page');
  page.id = 'page-timeline';

  // sticky header
  const header = make('div', 'tl-header');
  header.appendChild(make('div', 'eyebrow', TIMELINE.eyebrow));
  const h2 = make('h2', 'page-heading');
  h2.textContent = TIMELINE.heading;
  header.appendChild(h2);
  page.appendChild(header);

  // scrollable area — embed the timeline dist as an iframe
  const scroll = make('div', 'page-scroll');

  // make the scroll container a flex column so the iframe can flex to fill it
  scroll.style.display = 'flex';
  scroll.style.flexDirection = 'column';
  scroll.style.minHeight = '0';

  const iframe = document.createElement('iframe');
  iframe.id = 'timeline-iframe';
  iframe.src = '../timeline/dist/index.html';
  iframe.title = 'Timeline';
  iframe.style.width = '100%';
  iframe.style.flex = '1';
  iframe.style.height = '100%';
  iframe.style.border = '0';
  scroll.appendChild(iframe);

  page.appendChild(scroll);
  page.appendChild(buildNav('page-video', '03 / 05 — Timeline', 'Next: The Network', 'page-map'));
  document.body.appendChild(page);
}


// ── BUILD PAGE 4 — MAP ───────────────────────────────────────────────
function buildMapPage() {
  const page = make('div', 'page');
  page.id = 'page-map';

  const header = make('div', 'map-header');
  header.appendChild(make('div', 'eyebrow', MAP.eyebrow));
  header.appendChild(make('h2', 'page-heading', MAP.heading));
  page.appendChild(header);

  const iframe = document.createElement('iframe');
  iframe.id = 'react-map-iframe';
  iframe.src = '../map/dist/index.html';
  iframe.title = 'Interactive network map';
  iframe.style.width = '100%';
  iframe.style.flex = '1';
  iframe.style.minHeight = '0';
  iframe.style.border = '0';
  page.appendChild(iframe);

  // ── Map popup overlay — built here, shown/hidden by showMapPopup()
  const cfg = MAP.mapPopup;
  const overlay = make('div', 'popup-overlay');
  overlay.id = 'map-popup-overlay';

  const popup = make('div', 'popup');

  popup.appendChild(make('div', 'popup-eyebrow', cfg.eyebrow));

  const h2 = make('h2');
  h2.textContent = cfg.heading;
  popup.appendChild(h2);

  cfg.body.forEach(txt => {
    const p = make('p');
    p.innerHTML = txt;
    popup.appendChild(p);
  });

  popup.appendChild(make('div', 'popup-fine', cfg.fineprint));

  const actions = make('div', 'popup-actions');

  const accept = make('button', 'btn-accept', cfg.acceptLabel);
  accept.onclick = dismissMapPopup;

  const decline = make('button', 'btn-decline', cfg.declineLabel);
  decline.disabled = true;
  decline.setAttribute('aria-disabled', 'true');
  decline.tabIndex = -1;

  actions.appendChild(accept);
  actions.appendChild(decline);
  popup.appendChild(actions);

  overlay.appendChild(popup);
  page.appendChild(overlay);

  page.appendChild(buildNav('page-timeline', '04 / 05 — Network Map', 'Next: The Report', 'page-article'));
  document.body.appendChild(page);
}


// ── BUILD PAGE 5 — ARTICLE ───────────────────────────────────────────
function buildArticlePage() {
  const page = make('div', 'page');
  page.id = 'page-article';

  const scroll = make('div', 'page-scroll');

  const header = make('div', 'article-header');
  header.appendChild(make('div', 'article-kicker', ARTICLE.kicker));
  const h2 = make('h2');
  h2.textContent = ARTICLE.heading;
  header.appendChild(h2);
  header.appendChild(make('p', 'article-deck', ARTICLE.deck));
  const meta = make('div', 'article-meta');
  ARTICLE.meta.forEach(m => meta.appendChild(make('span', '', m)));
  header.appendChild(meta);
  scroll.appendChild(header);

  const body = make('div', 'article-body');

  // Parse the plain-text body string into styled elements.
  // Lines starting with ##, >>, or !! get special treatment;
  // everything else becomes a paragraph. Blank lines are skipped.
  ARTICLE.body
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .forEach(line => {
      if (line.startsWith('## ')) {
        body.appendChild(make('h3', '', line.slice(3)));
      } else if (line.startsWith('>> ')) {
        const pq = make('div', 'article-pullquote');
        pq.appendChild(make('p', '', line.slice(3)));
        body.appendChild(pq);
      } else if (line.startsWith('!! ')) {
        body.appendChild(make('div', 'article-note', line.slice(3)));
      } else {
        body.appendChild(make('p', '', line));
      }
    });

  scroll.appendChild(body);

  page.appendChild(scroll);
  page.appendChild(buildNav('page-map', '05 / 05 — Report', null, null));
  document.body.appendChild(page);
}



/* ====================================================================
   SECTION 3 — INTERACTIONS
   ────────────────────────────────────────────────────────────────────
   Video playback, TV-off transition, timeline node rendering,
   and Three.js map initialisation.
   You don't need to edit anything in this section.
==================================================================== */


// Video state — module-level so timers and listeners can be cancelled
let _videoEndedHandler  = null;
let _videoFallbackTimer = null;

// Called by the consent button; goTo() now handles playback internally
function startVideo() {
  goTo('page-video');
}

function playVideo() {
  const video = document.getElementById('surveillance-video');
  if (!video) return;

  // Cancel anything left over from the previous visit
  _cancelVideoTimers(video);

  // Clear the tv-off animation so the video renders cleanly
  video.style.animation = '';

  // Rewind, register a fresh ended listener, then play
  video.currentTime = 0;

  _videoEndedHandler = function () {
    _videoEndedHandler = null;
    triggerTvOff();
  };
  video.addEventListener('ended', _videoEndedHandler, { once: true });

  video.play().catch(() => {
    _videoFallbackTimer = setTimeout(triggerTvOff, VIDEO.fallbackDelay);
  });
}

function _cancelVideoTimers(video) {
  if (_videoEndedHandler) {
    (video || document.getElementById('surveillance-video'))
      .removeEventListener('ended', _videoEndedHandler);
    _videoEndedHandler = null;
  }
  if (_videoFallbackTimer !== null) {
    clearTimeout(_videoFallbackTimer);
    _videoFallbackTimer = null;
  }
}
// ── TV-off flicker transition ────────────────────────────────────────
function triggerTvOff() {
  const video = document.getElementById('surveillance-video');
  _cancelVideoTimers(video);          // prevent double-fire if skip was pressed

  if (video) {
    video.pause();
    video.style.animation = 'tv-off 1.2s ease-in forwards';
  }

  const flash = document.getElementById('tv-flash');
  let f = 0;
  const interval = setInterval(() => {
    flash.style.opacity = f % 2 === 0 ? '0.9' : '0';
    if (++f > 6) { clearInterval(interval); flash.style.opacity = '0'; }
  }, 75);
  setTimeout(() => goTo('page-timeline'), 1350);
}


// ── Map popup: show on every visit, dismiss to reveal the map ────────
let mapPopupDismissed = false;

function showMapPopup() {
  // Re-show the popup each time the map page is visited
  const overlay = document.getElementById('map-popup-overlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  // Trigger the Three.js map to initialise in the background
  initMap();
}

function dismissMapPopup() {
  const overlay = document.getElementById('map-popup-overlay');
  if (!overlay) return;
  // Fade out gently then hide
  overlay.style.transition = 'opacity 0.4s ease';
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.style.opacity = '1';
    overlay.style.transition = '';
  }, 420);
}


// ── Timeline: build nodes once, show info panel on interaction ───────
let timelineReady = false;

function buildTimeline() {
  if (timelineReady) return;
  timelineReady = true;

  const stage = document.getElementById('iso-stage');
  const total = TIMELINE.events.length;

  TIMELINE.events.forEach((evt, i) => {
    const pct   = (i / (total - 1)) * 82 + 9;   // spread 9% – 91% across track
    const above = i % 2 === 0;
    const poleH = 55 + Math.random() * 35;

    const node = make('div', `iso-node ${above ? 'above' : 'below'}`);
    node.style.left = `${pct}%`;

    const card = `<div class="card">
      <div class="card-year">${evt.year}</div>
      <div class="card-title">${evt.title}</div>
      <div class="card-tag">${evt.tag}</div>
    </div>`;
    const pole = `<div class="pole" style="height:${poleH}px"></div>`;
    const pin  = `<div class="pin"></div>`;

    node.innerHTML = above ? card + pole + pin : pin + pole + card;
    node.addEventListener('click',      () => showInfo(i));
    node.addEventListener('mouseenter', () => showInfo(i));
    stage.appendChild(node);
  });

  showInfo(0);
}

function showInfo(i) {
  const evt = TIMELINE.events[i];
  document.getElementById('ib-year').textContent  = `${evt.year} — ${evt.tag}`;
  document.getElementById('ib-title').textContent = evt.title;
  document.getElementById('ib-body').textContent  = evt.body;
  const box = document.getElementById('info-box');
  box.classList.remove('visible');
  requestAnimationFrame(() => box.classList.add('visible'));
}


// ── Three.js map: initialise once when the map page is first shown ───
let mapReady = false;

function initMap() {
  if (mapReady) return;
  mapReady = true;

  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;
  const W = canvas.clientWidth;
  const H = canvas.clientHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(W, H);
  renderer.setClearColor(0x080808, 1);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
  camera.position.set(0, 14, 22);
  camera.lookAt(0, 0, 0);

  const root = new THREE.Group();
  root.rotation.x = -0.3;
  scene.add(root);
  root.add(new THREE.GridHelper(40, 40, 0x1e1e1e, 0x141414));

  // Build buildings
  const meshes = [];
  MAP.nodes.forEach(n => {
    const geo  = new THREE.BoxGeometry(1.4, n.h, 1.4);
    const mat  = new THREE.MeshLambertMaterial({ color: MAP.colors[n.type] });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(n.x, n.h / 2, n.z);
    root.add(mesh);
    meshes.push({ mesh, n });

    // Draw a line from non-platform nodes to the nearest platform
    if (n.type !== 'platform') {
      const nearest = MAP.nodes
        .filter(p => p.type === 'platform')
        .sort((a, b) => Math.hypot(a.x - n.x, a.z - n.z) - Math.hypot(b.x - n.x, b.z - n.z))[0];
      const pts = [
        new THREE.Vector3(n.x, n.h, n.z),
        new THREE.Vector3(nearest.x, nearest.h, nearest.z),
      ];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lineMat = new THREE.LineBasicMaterial({ color: MAP.colors[n.type], transparent: true, opacity: 0.2 });
      root.add(new THREE.Line(lineGeo, lineMat));
    }
  });

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const dir = new THREE.DirectionalLight(0xff4444, 1.0);
  dir.position.set(5, 15, 10);
  scene.add(dir);

  // Render loop — slow orbit + subtle height pulse
  let frame = 0;
  (function animate() {
    requestAnimationFrame(animate);
    frame++;
    root.rotation.y = frame * 0.003;
    meshes.forEach(({ mesh, n }, i) => {
      const pulse = 1 + Math.sin(frame * 0.03 + i * 0.8) * 0.04;
      mesh.scale.y    = pulse;
      mesh.position.y = (n.h * pulse) / 2;
    });
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
}


/* ====================================================================
   INIT — build all pages, then show the intro
==================================================================== */
buildIntroPage();
buildVideoPage();
buildTimelinePage();
buildMapPage();
buildArticlePage();
