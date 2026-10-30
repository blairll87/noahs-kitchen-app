const COLORS = { mango:"#ffa63d", berry:"#6f7cf2", toast:"#e3b878", pepper:"#ef5a4a", chef:"#f6c9a4",
  cookie:"#d9a066", carrot:"#ff8a2b", waffle:"#f2c46d", muffin:"#c98ad6", pickle:"#7fb53f",
  egg:"#fbf7ee", bagel:"#d39b55", taco:"#f4c542" };
function face(kind, mood) {
  const c = COLORS[kind];
  let body = "";
  if (kind === "toast") body = `<rect x="18" y="26" width="84" height="80" rx="22" fill="#b97f3e"/><rect x="25" y="33" width="70" height="66" rx="16" fill="${c}"/>`;
  else if (kind === "mango") body = `<ellipse cx="60" cy="68" rx="40" ry="44" fill="${c}"/><path d="M60 26 q14 -16 28 -8 q-10 14 -28 8z" fill="#3fa34d"/>`;
  else if (kind === "berry") body = `<circle cx="60" cy="68" r="42" fill="${c}"/><path d="M46 28 l7 8 l7 -10 l7 10 l7 -8 v8 h-28z" fill="#3d4bb8"/>`;
  else if (kind === "pepper") body = `<path d="M60 30 c30 0 40 20 36 46 c-4 26 -20 36 -36 36 c-16 0 -32 -10 -36 -36 c-4 -26 6 -46 36 -46z" fill="${c}"/><path d="M58 30 q0 -14 12 -18" stroke="#3fa34d" stroke-width="7" fill="none" stroke-linecap="round"/>`;
  else if (kind === "cookie") body = `<circle cx="60" cy="68" r="42" fill="${c}"/><circle cx="34" cy="50" r="5" fill="#6b3f1d"/><circle cx="88" cy="56" r="4" fill="#6b3f1d"/><circle cx="30" cy="92" r="4" fill="#6b3f1d"/><circle cx="90" cy="92" r="5" fill="#6b3f1d"/><circle cx="62" cy="40" r="4" fill="#6b3f1d"/>`;
  else if (kind === "carrot") body = `<path d="M24 34 h72 q4 0 2 6 l-32 74 q-6 8 -12 0 l-32 -74 q-2 -6 2 -6z" fill="${c}"/><path d="M50 34 q-10 -20 0 -26 q6 12 10 26 q4 -14 10 -26 q10 6 0 26z" fill="#3fa34d"/>`;
  else if (kind === "waffle") body = `<rect x="18" y="26" width="84" height="84" rx="16" fill="${c}"/><path d="M39 26 v84 M60 26 v84 M81 26 v84 M18 47 h84 M18 101 h84" stroke="#d9a441" stroke-width="3"/>`;
  else if (kind === "egg") body = `<path d="M60 18 c26 0 40 40 40 62 c0 22 -18 34 -40 34 c-22 0 -40 -12 -40 -34 c0 -22 14 -62 40 -62z" fill="${c}" stroke="#d8cfb8" stroke-width="3"/>`;
  else if (kind === "bagel") body = `<circle cx="60" cy="68" r="44" fill="${c}"/><ellipse cx="60" cy="40" rx="10" ry="6" fill="#8a5a2b"/><circle cx="36" cy="58" r="2" fill="#fff8e1"/><circle cx="86" cy="62" r="2" fill="#fff8e1"/><circle cx="40" cy="98" r="2" fill="#fff8e1"/>`;
  else if (kind === "taco") body = `<path d="M14 100 a46 46 0 0 1 92 0z" fill="${c}"/><path d="M22 70 q8 -10 16 -2 q8 -12 18 -4 q10 -10 18 0 q10 -8 16 2 q8 -2 10 8" stroke="#4caf50" stroke-width="6" fill="none" stroke-linecap="round"/>`;
  else if (kind === "pickle") body = `<rect x="32" y="16" width="56" height="98" rx="28" fill="${c}"/><circle cx="44" cy="36" r="3" fill="#5a8a2a"/><circle cx="78" cy="100" r="3" fill="#5a8a2a"/><circle cx="40" cy="104" r="3" fill="#5a8a2a"/><circle cx="80" cy="40" r="3" fill="#5a8a2a"/>`;
  else if (kind === "muffin") body = `<path d="M30 76 h60 l-8 36 h-44z" fill="#e9b0f2"/><path d="M34 80 l4 30 M48 80 l2 30 M60 80 v30 M72 80 l-2 30 M86 80 l-4 30" stroke="#b56cc4" stroke-width="2"/><path d="M20 78 q0 -50 40 -50 q40 0 40 50z" fill="${c}"/>`;
  else body = `<circle cx="60" cy="72" r="38" fill="${c}"/><path d="M26 44 q-6 -24 16 -24 q4 -14 18 -10 q14 -4 18 10 q22 0 16 24z" fill="#ffffff" stroke="#d8d2c4" stroke-width="2"/>`;
  const ey = 66;
  let eyes;
  if (mood === "sad") eyes = `<path d="M40 ${ey} q6 -5 12 0 M68 ${ey} q6 -5 12 0" stroke="#23343a" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  else if (mood === "scared") eyes = `<circle cx="46" cy="${ey}" r="9" fill="#fff"/><circle cx="74" cy="${ey}" r="9" fill="#fff"/><circle cx="46" cy="${ey}" r="4" fill="#23343a"/><circle cx="74" cy="${ey}" r="4" fill="#23343a"/><path d="M38 50 q8 -6 14 -2 M68 48 q6 -4 14 2" stroke="#23343a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  else if (mood === "mad") eyes = `<circle cx="46" cy="${ey + 2}" r="5" fill="#23343a"/><circle cx="74" cy="${ey + 2}" r="5" fill="#23343a"/><path d="M36 52 l16 8 M84 52 l-16 8" stroke="#23343a" stroke-width="4" stroke-linecap="round"/>`;
  else eyes = `<circle cx="46" cy="${ey}" r="5" fill="#23343a"/><circle cx="74" cy="${ey}" r="5" fill="#23343a"/>`;
  let mouth = "";
  if (mood === "scared") mouth = `<ellipse cx="60" cy="90" rx="7" ry="9" fill="#23343a"/>`;
  else if (mood === "mad") mouth = `<path d="M46 92 q14 -8 28 0" stroke="#23343a" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  else
  if (mood === "happy") mouth = `<path d="M44 82 q16 16 32 0" stroke="#23343a" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  else if (mood === "excited") mouth = `<path d="M42 80 q18 22 36 0z" fill="#23343a"/>`;
  else if (mood === "sad") mouth = `<path d="M46 92 q14 -12 28 0" stroke="#23343a" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M80 72 q4 8 0 12 q-4 -4 0 -12z" fill="#7cc6ff"/>`;
  else mouth = `<path d="M48 86 h24" stroke="#23343a" stroke-width="4" stroke-linecap="round"/>`;
  const cheeks = ["sad", "scared", "mad"].includes(mood) ? "" : `<circle cx="36" cy="80" r="5" fill="#ff8f8f" opacity=".6"/><circle cx="84" cy="80" r="5" fill="#ff8f8f" opacity=".6"/>`;
  return `<svg viewBox="0 0 120 120" role="img" aria-label="${kind} feeling ${mood}">${body}${cheeks}${eyes}${mouth}</svg>`;
}

/* ---------- speech (English + short Spanish phrases) ---------- */
let soundOn = true, speechId = 0, lastSpoken = "", lastLang = "en-US", speechUnlocked = false, timers = [];
window.__utt = []; window.__said = [];
function clearTimers() { timers.forEach(clearTimeout); timers = []; }
function later(fn, ms) { const t = setTimeout(fn, ms); timers.push(t); return t; }
function hush() { speechId++; try { speechSynthesis.cancel(); } catch (e) {} }
function unlockSpeech() {
  if (speechUnlocked) return; speechUnlocked = true;
  try { const u = new SpeechSynthesisUtterance(" "); u.volume = 0; speechSynthesis.speak(u); } catch (e) {}
}
["pointerdown", "touchend", "click", "keydown"].forEach(ev => document.addEventListener(ev, unlockSpeech, true));
function pickVoice(lang) {
  try {
    const vs = speechSynthesis.getVoices();
    return vs.find(v => v.lang === lang) || vs.find(v => v.lang.replace("_", "-").toLowerCase().startsWith(lang.slice(0, 2))) || null;
  } catch (e) { return null; }
}
function speak(text, onEnd, lang) {
  lang = lang || "en-US";
  lastSpoken = text; lastLang = lang;
  const id = ++speechId;
  window.__said.push(text);
  try { speechSynthesis.cancel(); speechSynthesis.resume(); } catch (e) {}
  setTimeout(() => { if (id === speechId) speakNow(text, onEnd, lang); }, 180);
}
function speakNow(text, onEnd, lang) {
  try {
    if (!soundOn || !window.speechSynthesis) { if (onEnd) setTimeout(onEnd, 900); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.88; u.pitch = 1.1; u.lang = lang;
    const v = pickVoice(lang); if (v) u.voice = v;
    if (onEnd) u.onend = onEnd;
    window.__utt.push(u); if (window.__utt.length > 20) window.__utt.shift();
    speechSynthesis.speak(u);
  } catch (e) { if (onEnd) setTimeout(onEnd, 900); }
}
// English first, then the short Spanish phrase, one utterance at a time
function sayBoth(en, es, onEnd) { speak(en, () => later(() => speak(es, onEnd, "es-MX"), 250)); }

let actx;
function chime(good) {
  if (!soundOn) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = good ? [523, 659, 784] : [330, 262];
    notes.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.frequency.value = f; o.type = "sine";
      g.gain.setValueAtTime(0.0001, actx.currentTime + i * .12);
      g.gain.exponentialRampToValueAtTime(0.2, actx.currentTime + i * .12 + .02);
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + i * .12 + .35);
      o.connect(g).connect(actx.destination); o.start(actx.currentTime + i * .12); o.stop(actx.currentTime + i * .12 + .4);
    });
  } catch (e) {}
}
const FEELS = [["happy","Happy"],["sad","Sad"],["scared","Scared"],["mad","Mad"]];
function feelGrid(kind) {
  return `<div class="feels">${FEELS.map(([m, l]) => `<button class="choice feel" data-m="${m}">${face(kind, m)}${l}</button>`).join("")}</div>`;
}
function dots(n, i) { let h = '<div class="dots" aria-hidden="true">'; for (let k = 0; k < n; k++) h += `<i class="${k < i ? "on" : k === i ? "now" : ""}"></i>`; return h + "</div>"; }
function wireChrome(goHome) {
  document.getElementById("againBtn").onclick = () => { if (lastSpoken) speak(lastSpoken, null, lastLang); };
  document.getElementById("soundBtn").onclick = (e) => {
    soundOn = !soundOn; if (!soundOn) hush();
    e.currentTarget.textContent = soundOn ? "Sound on" : "Sound off";
    e.currentTarget.setAttribute("aria-pressed", soundOn);
  };
  const h = document.getElementById("menuBtn"); if (h) h.onclick = goHome;
}
