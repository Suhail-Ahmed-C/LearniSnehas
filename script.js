/* ============================================
   LearniSneha – Nursery Learning App
   script.js – All Interactive Logic
   ============================================ */

"use strict";

// ============================================
// 📦 DATA
// ============================================

const ALPHABETS = [
  { letter:"A", emoji:"🍎", word:"Apple" },
  { letter:"B", emoji:"🐝", word:"Bee" },
  { letter:"C", emoji:"🐱", word:"Cat" },
  { letter:"D", emoji:"🐶", word:"Dog" },
  { letter:"E", emoji:"🐘", word:"Elephant" },
  { letter:"F", emoji:"🐸", word:"Frog" },
  { letter:"G", emoji:"🍇", word:"Grapes" },
  { letter:"H", emoji:"🐴", word:"Horse" },
  { letter:"I", emoji:"🍦", word:"Ice Cream" },
  { letter:"J", emoji:"🫙", word:"Jar" },
  { letter:"K", emoji:"🪁", word:"Kite" },
  { letter:"L", emoji:"🦁", word:"Lion" },
  { letter:"M", emoji:"🐒", word:"Monkey" },
  { letter:"N", emoji:"🌙", word:"Night" },
  { letter:"O", emoji:"🐙", word:"Octopus" },
  { letter:"P", emoji:"🐧", word:"Penguin" },
  { letter:"Q", emoji:"👸", word:"Queen" },
  { letter:"R", emoji:"🐰", word:"Rabbit" },
  { letter:"S", emoji:"☀️", word:"Sun" },
  { letter:"T", emoji:"🐯", word:"Tiger" },
  { letter:"U", emoji:"☂️", word:"Umbrella" },
  { letter:"V", emoji:"🎻", word:"Violin" },
  { letter:"W", emoji:"🐋", word:"Whale" },
  { letter:"X", emoji:"🎸", word:"Xylophone" },
  { letter:"Y", emoji:"🪀", word:"Yo-yo" },
  { letter:"Z", emoji:"🦓", word:"Zebra" }
];

const NUMBERS = [
  { num:1,  word:"One",       emoji:"🍎" },
  { num:2,  word:"Two",       emoji:"⭐" },
  { num:3,  word:"Three",     emoji:"🌸" },
  { num:4,  word:"Four",      emoji:"🦋" },
  { num:5,  word:"Five",      emoji:"🍭" },
  { num:6,  word:"Six",       emoji:"🎈" },
  { num:7,  word:"Seven",     emoji:"🌈" },
  { num:8,  word:"Eight",     emoji:"🐝" },
  { num:9,  word:"Nine",      emoji:"🍑" },
  { num:10, word:"Ten",       emoji:"🎉" },
  { num:11, word:"Eleven",    emoji:"🌟" },
  { num:12, word:"Twelve",    emoji:"🍪" },
  { num:13, word:"Thirteen",  emoji:"🦊" },
  { num:14, word:"Fourteen",  emoji:"🌺" },
  { num:15, word:"Fifteen",   emoji:"🍓" },
  { num:16, word:"Sixteen",   emoji:"💎" },
  { num:17, word:"Seventeen", emoji:"🎶" },
  { num:18, word:"Eighteen",  emoji:"🌙" },
  { num:19, word:"Nineteen",  emoji:"🦄" },
  { num:20, word:"Twenty",    emoji:"🎊" }
];

const WORDS = [
  { word:"Cat",      emoji:"🐱", hint:"An animal that meows" },
  { word:"Dog",      emoji:"🐶", hint:"A friendly pet" },
  { word:"Ball",     emoji:"⚽", hint:"You kick it" },
  { word:"Flower",   emoji:"🌸", hint:"Smells beautiful" },
  { word:"Tree",     emoji:"🌳", hint:"Has leaves" },
  { word:"House",    emoji:"🏠", hint:"We live here" },
  { word:"Milk",     emoji:"🥛", hint:"White drink" },
  { word:"Fish",     emoji:"🐟", hint:"Swims in water" },
  { word:"Bird",     emoji:"🐦", hint:"It can fly" },
  { word:"Car",      emoji:"🚗", hint:"You drive it" },
  { word:"Rain",     emoji:"🌧️", hint:"Drops from sky" },
  { word:"Book",     emoji:"📚", hint:"We read it" },
  { word:"Cake",     emoji:"🎂", hint:"Yummy and sweet" },
  { word:"Bear",     emoji:"🐻", hint:"Big furry animal" },
  { word:"Duck",     emoji:"🦆", hint:"Goes quack quack" },
  { word:"Frog",     emoji:"🐸", hint:"Jumps on lily pads" },
  { word:"Star",     emoji:"⭐", hint:"Shines at night" },
  { word:"Moon",     emoji:"🌙", hint:"Glows in darkness" },
  { word:"Apple",    emoji:"🍎", hint:"Red and crunchy" },
  { word:"Banana",   emoji:"🍌", hint:"Yellow and sweet" }
];

const COLORS = [
  { name:"Red",    hex:"#FF3333", emoji:"🍎", textDark:false },
  { name:"Blue",   hex:"#3377FF", emoji:"🐦", textDark:false },
  { name:"Yellow", hex:"#FFD700", emoji:"⭐", textDark:true  },
  { name:"Green",  hex:"#33BB55", emoji:"🌿", textDark:false },
  { name:"Orange", hex:"#FF8C00", emoji:"🍊", textDark:false },
  { name:"Purple", hex:"#9933FF", emoji:"🔮", textDark:false },
  { name:"Pink",   hex:"#FF69B4", emoji:"🌸", textDark:false },
  { name:"White",  hex:"#F5F5F5", emoji:"☁️", textDark:true  },
  { name:"Black",  hex:"#222222", emoji:"🎱", textDark:false },
  { name:"Brown",  hex:"#8B4513", emoji:"🍫", textDark:false },
  { name:"Teal",   hex:"#008B8B", emoji:"💎", textDark:false },
  { name:"Lime",   hex:"#7FFF00", emoji:"🫒", textDark:true  }
];

const SHAPES = [
  {
    name:"Circle", sides:"No corners",
    color:"#FF6B9D",
    draw:(c)=>`<circle cx="45" cy="45" r="38" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"Round like the sun"
  },
  {
    name:"Square", sides:"4 equal sides",
    color:"#4D96FF",
    draw:(c)=>`<rect x="6" y="6" width="78" height="78" rx="6" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"4 equal corners"
  },
  {
    name:"Triangle", sides:"3 corners",
    color:"#6BCB77",
    draw:(c)=>`<polygon points="45,5 85,82 5,82" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"Like a mountain top"
  },
  {
    name:"Rectangle", sides:"2 long + 2 short",
    color:"#FFD93D",
    draw:(c)=>`<rect x="5" y="22" width="80" height="46" rx="6" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"Longer than a square"
  },
  {
    name:"Star", sides:"5 points",
    color:"#FF9A3C",
    draw:(c)=>`<polygon points="45,5 54,35 85,35 61,55 70,85 45,65 20,85 29,55 5,35 36,35" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"Shines in the sky"
  },
  {
    name:"Heart", sides:"Symbol of love",
    color:"#FF6B9D",
    draw:(c)=>`<path d="M45,75 C45,75 8,48 8,26 A18,18 0 0,1 45,22 A18,18 0 0,1 82,26 C82,48 45,75 45,75Z" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"We love hearts!"
  },
  {
    name:"Diamond", sides:"4 equal sides",
    color:"#C77DFF",
    draw:(c)=>`<polygon points="45,5 85,45 45,85 5,45" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"Like a kite shape"
  },
  {
    name:"Oval", sides:"Egg-shaped",
    color:"#48CAE4",
    draw:(c)=>`<ellipse cx="45" cy="45" rx="40" ry="26" fill="${c}" opacity=".9"/>`,
    vb:"0 0 90 90", hint:"Like a stretched circle"
  }
];

// ============================================
// 🧠 STATE
// ============================================

const STATE = {
  stars:          parseInt(localStorage.getItem("lb_stars") || "0"),
  currentSection: "home",
  currentAlphaIdx: 0,
  currentNumberIdx: 0,
  speech:         null,
  voiceRate:      0.75,   // Slower & clearer for young children
  voicePitch:     1.3,    // Higher pitch = warmer, friendlier sound for kids
  musicMuted:     localStorage.getItem("lb_muted") === "true",
  autoplayActive: false,
  autoplayTimer:  null,
  autoplayIdx:    0,
  quizData:       null,
  quizScore:      0,
  quizTotal:      0
};

// ============================================
// 🔊 SPEECH (Web Speech API)
// ============================================

/**
 * Speak text using the Web Speech API.
 * Uses a child-friendly slow rate and clear pitch.
 * @param {string} text - text to speak
 * @param {Function} [onEnd] - callback when speaking ends
 */
function speak(text, onEnd) {
  if (!("speechSynthesis" in window)) {
    console.warn("Web Speech API not supported in this browser.");
    if (onEnd) onEnd();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate  = STATE.voiceRate;   // 0.75 = slower, easier for kids to follow
  utter.pitch = STATE.voicePitch;  // 1.3 = higher & friendlier sounding
  utter.volume = 1;
  utter.lang  = "en-US";

  // Try to pick a clear English voice
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Alex"))
  ) || voices.find(v => v.lang.startsWith("en"));
  if (preferred) utter.voice = preferred;

  if (onEnd) utter.onend = onEnd;
  utter.onerror = () => { if (onEnd) onEnd(); };

  // Safari fix: voices sometimes load async
  if (voices.length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      const v2 = window.speechSynthesis.getVoices();
      const pref2 = v2.find(v => v.lang.startsWith("en")) || v2[0];
      if (pref2) utter.voice = pref2;
      window.speechSynthesis.speak(utter);
    };
  } else {
    window.speechSynthesis.speak(utter);
  }
}

/**
 * Speak alphabet phrase e.g. "A for Apple"
 */
function speakAlpha(item) {
  speak(`${item.letter} for ${item.word}`);
}

/**
 * Speak a number and its word e.g. "3 — Three"
 */
function speakNumber(item) {
  speak(`${item.num}. ${item.word}`);
}

// ============================================
// ⭐ STARS / REWARDS
// ============================================

function addStar(count = 1) {
  STATE.stars += count;
  localStorage.setItem("lb_stars", STATE.stars);
  updateStarUI();
}

function updateStarUI() {
  document.getElementById("starCount").textContent = STATE.stars;
  // Progress fills up to 100 stars
  const pct = Math.min((STATE.stars % 100) / 100 * 100, 100);
  document.getElementById("starFill").style.width = pct + "%";
}

function celebrate(msg = "Wonderful!", emoji = "🎉", stars = 1) {
  addStar(stars);
  spawnConfetti();
  document.getElementById("celebrateEmoji").textContent = emoji;
  document.getElementById("celebrateMsg").textContent = msg;
  document.getElementById("celebrateStars").textContent = "⭐".repeat(Math.min(stars, 5));
  document.getElementById("celebrateOverlay").style.display = "flex";
}

function closeCelebrate() {
  document.getElementById("celebrateOverlay").style.display = "none";
}

// ============================================
// 🎊 CONFETTI
// ============================================

function spawnConfetti() {
  const colors = ["#FF6B9D","#FFD93D","#6BCB77","#4D96FF","#C77DFF","#FF9A3C","#48CAE4"];
  for (let i = 0; i < 55; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * -20}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 10}px;
      height: ${6 + Math.random() * 10}px;
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      animation-delay: ${Math.random() * 1.5}s;
      animation-duration: ${2 + Math.random() * 1.5}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

// ============================================
// 🏠 NAVIGATION
// ============================================

function showSection(name) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  // Show target page
  const target = document.getElementById(name + "Page");
  if (target) target.classList.add("active");

  STATE.currentSection = name;

  // Update title
  const titles = {
    home:"LearniSnehas Tech", alphabets:"🔤 Alphabets",
    numbers:"🔢 Numbers", words:"💬 Words",
    colors:"🎨 Colors", shapes:"🔷 Shapes", quiz:"🧩 Quiz",
    pronouns:"🙋 Pronouns", sentences:"✏️ Sentences",
    opposites:"🔄 Opposites", verbs:"🏃 Action Words",
    fillquiz:"❓ Fill the Blank", pronounquiz:"🎯 Pronoun Quiz",
    stories:"📖 Stories", fruits:"🍓 Fruits & Veggies",
    bodyparts:"🧒 My Body"
  };
  document.getElementById("sectionTitle").textContent = titles[name] || "LearniSnehas";

  // Show/hide home button
  document.getElementById("homeTopBtn").style.visibility = name === "home" ? "hidden" : "visible";

  // Scroll to top
  window.scrollTo(0, 0);

  // Init section if needed
  if (name === "quiz")        initQuiz();
  if (name === "pronouns")    initPronouns();
  if (name === "sentences")   initSentences();
  if (name === "opposites")   initOpposites();
  if (name === "verbs")       initVerbs();
  if (name === "fillquiz")    initFillQuiz();
  if (name === "pronounquiz") initPronounQuiz();
  if (name === "stories")     initStories();
  if (name === "fruits")      initFruits();
  if (name === "bodyparts")   initBodyParts();
}

// ============================================
// 🔤 ALPHABETS
// ============================================

function buildAlphaGrid() {
  const grid = document.getElementById("alphaGrid");
  grid.innerHTML = "";
  ALPHABETS.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "alpha-card";
    card.setAttribute("aria-label", `${item.letter} for ${item.word}`);
    card.innerHTML = `
      <span class="alpha-letter">${item.letter}</span>
      <span class="alpha-emoji">${item.emoji}</span>
      <span class="alpha-word">${item.word}</span>`;
    card.addEventListener("click", () => openAlphaDetail(idx));
    grid.appendChild(card);
  });
}

function openAlphaDetail(idx) {
  STATE.currentAlphaIdx = idx;
  renderAlphaDetail(idx);
  document.getElementById("alphaDetail").style.display = "flex";
  speakCurrentAlpha();
}

function renderAlphaDetail(idx) {
  const item = ALPHABETS[idx];
  document.getElementById("detailLetter").textContent = item.letter;
  document.getElementById("detailEmoji").textContent  = item.emoji;
  document.getElementById("detailWord").textContent   = item.word;
}

function speakCurrentAlpha() {
  const btn = document.getElementById("alphaSpeakBtn");
  if (btn) btn.classList.add("speaking-glow");
  speak(`${ALPHABETS[STATE.currentAlphaIdx].letter} for ${ALPHABETS[STATE.currentAlphaIdx].word}`, () => {
    if (btn) btn.classList.remove("speaking-glow");
  });
}

function closeDetail(id) {
  document.getElementById(id).style.display = "none";
  window.speechSynthesis.cancel();
}

function navigateDetail(type, dir) {
  if (type === "alpha") {
    STATE.currentAlphaIdx = (STATE.currentAlphaIdx + (dir === "next" ? 1 : -1) + ALPHABETS.length) % ALPHABETS.length;
    renderAlphaDetail(STATE.currentAlphaIdx);
    speakCurrentAlpha();
  } else if (type === "number") {
    STATE.currentNumberIdx = (STATE.currentNumberIdx + (dir === "next" ? 1 : -1) + NUMBERS.length) % NUMBERS.length;
    renderNumberDetail(STATE.currentNumberIdx);
    speakCurrentNumber();
  }
}

// ============================================
// 🔢 NUMBERS
// ============================================

function buildNumbersGrid() {
  const grid = document.getElementById("numbersGrid");
  grid.innerHTML = "";
  NUMBERS.forEach((item, idx) => {
    // Create dot string for counting (max display 10 visually)
    const displayCount = Math.min(item.num, 10);
    const dots = item.emoji.repeat(displayCount) + (item.num > 10 ? "…" : "");

    const card = document.createElement("div");
    card.className = "number-card";
    card.setAttribute("aria-label", `${item.word} - ${item.num}`);
    card.innerHTML = `
      <div class="number-big">${item.num}</div>
      <div class="number-word">${item.word}</div>
      <div class="number-dots">${dots}</div>`;
    card.addEventListener("click", () => openNumberDetail(idx));
    grid.appendChild(card);
  });
}

function openNumberDetail(idx) {
  STATE.currentNumberIdx = idx;
  renderNumberDetail(idx);
  document.getElementById("numberDetail").style.display = "flex";
  speakCurrentNumber();
}

function renderNumberDetail(idx) {
  const item = NUMBERS[idx];
  document.getElementById("detailNumber").textContent = item.num;
  document.getElementById("detailNumberWord").textContent = item.word;
  // Show emoji dots (max 20)
  const countDiv = document.getElementById("detailCounting");
  countDiv.innerHTML = "";
  for (let i = 0; i < item.num; i++) {
    const span = document.createElement("span");
    span.textContent = item.emoji;
    span.style.fontSize = item.num > 10 ? "1.3rem" : "1.8rem";
    span.style.animationDelay = (i * 0.05) + "s";
    span.style.animation = "bookBounce 1.5s ease-in-out infinite";
    countDiv.appendChild(span);
  }
}

function speakCurrentNumber() {
  const item = NUMBERS[STATE.currentNumberIdx];
  speak(`${item.num}. ${item.word}`);
}

// ============================================
// 💬 WORDS
// ============================================

function buildWordsGrid() {
  const grid = document.getElementById("wordsGrid");
  grid.innerHTML = "";
  const borderColors = ["#FF6B9D","#4D96FF","#6BCB77","#FFD93D","#C77DFF","#FF9A3C","#48CAE4","#FF4747"];
  WORDS.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "word-card";
    card.style.borderColor = borderColors[idx % borderColors.length];
    card.setAttribute("aria-label", item.word);
    card.innerHTML = `
      <div class="word-emoji">${item.emoji}</div>
      <div class="word-text">${item.word}</div>
      <div class="word-speak-btn">🔊 Say it!</div>`;
    card.addEventListener("click", () => {
      document.querySelectorAll(".word-card").forEach(c => c.classList.remove("speaking"));
      card.classList.add("speaking");
      speak(item.word, () => card.classList.remove("speaking"));
      addStar(1);
    });
    grid.appendChild(card);
  });
}

// ============================================
// 🎨 COLORS
// ============================================

function buildColorsGrid() {
  const grid = document.getElementById("colorsGrid");
  grid.innerHTML = "";
  COLORS.forEach(item => {
    const card = document.createElement("div");
    card.className = "color-card";
    card.style.background = item.hex;
    card.style.boxShadow = `0 8px 0 ${darkenHex(item.hex)}, 0 12px 24px rgba(0,0,0,.15)`;
    card.setAttribute("aria-label", item.name + " color");
    card.innerHTML = `
      <div class="color-circle" style="background:${item.hex}; border-color:rgba(255,255,255,0.7);"></div>
      <div class="color-emoji">${item.emoji}</div>
      <div class="color-name" style="color:${item.textDark ? '#333' : '#fff'}">${item.name}</div>`;
    card.addEventListener("click", () => {
      document.querySelectorAll(".color-card").forEach(c => c.classList.remove("speaking"));
      card.classList.add("speaking");
      speak(item.name + " color", () => card.classList.remove("speaking"));
      addStar(1);
    });
    grid.appendChild(card);
  });
}

/** Darken a hex color for box-shadow bottom */
function darkenHex(hex) {
  const n = parseInt(hex.replace("#",""), 16);
  const r = Math.max(0, (n >> 16) - 50);
  const g = Math.max(0, ((n >> 8) & 255) - 50);
  const b = Math.max(0, (n & 255) - 50);
  return `rgb(${r},${g},${b})`;
}

// ============================================
// 🔷 SHAPES
// ============================================

function buildShapesGrid() {
  const grid = document.getElementById("shapesGrid");
  grid.innerHTML = "";
  const borderColors = ["#FF6B9D","#4D96FF","#6BCB77","#FFD93D","#FF9A3C","#C77DFF","#48CAE4","#FF4747"];
  SHAPES.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "shape-card";
    card.style.borderColor = borderColors[idx % borderColors.length];
    card.setAttribute("aria-label", item.name);
    card.innerHTML = `
      <div class="shape-svg">
        <svg viewBox="${item.vb}" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
          ${item.draw(item.color)}
        </svg>
      </div>
      <div class="shape-name">${item.name}</div>
      <div class="shape-sides">${item.sides}</div>
      <button class="speak-shape-btn">🔊 Say it!</button>`;
    card.addEventListener("click", () => {
      document.querySelectorAll(".shape-card").forEach(c => c.classList.remove("speaking"));
      card.classList.add("speaking");
      speak(`${item.name}. ${item.hint}`, () => card.classList.remove("speaking"));
      addStar(1);
    });
    grid.appendChild(card);
  });
}

// ============================================
// 🧩 QUIZ
// ============================================

function initQuiz() {
  STATE.quizScore = 0;
  STATE.quizTotal = 0;
  document.getElementById("quizScore").textContent = "Score: 0";
  nextQuiz();
}

const QUIZ_POOL = [
  // type: "alpha"   → show letter, pick word
  // type: "number"  → show number, pick word
  // type: "word"    → show emoji, pick word
  // type: "color"   → show color name text, pick color box (via text)
  // type: "shape"   → show SVG, pick name
];

function nextQuiz() {
  document.getElementById("quizResult").textContent = "";
  document.getElementById("nextQuizBtn").style.display = "none";
  document.getElementById("quizOptions").innerHTML = "";

  // Randomly choose quiz type
  const types = ["alpha", "number", "word", "color", "shape"];
  const type = types[Math.floor(Math.random() * types.length)];

  buildQuizQuestion(type);
}

function buildQuizQuestion(type) {
  let qTarget = "", qQuestion = "", qHint = "", correctAnswer = "", options = [];

  if (type === "alpha") {
    const item = ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];
    qTarget   = item.letter;
    qQuestion = `What does this letter say?`;
    qHint     = "Listen and choose the right word!";
    correctAnswer = item.word;
    STATE.quizData = { type:"alpha", item };
    // Wrong options
    const wrongs = shuffle(ALPHABETS.filter(a => a.word !== item.word)).slice(0,3).map(a => a.word);
    options = shuffle([item.word, ...wrongs]);

  } else if (type === "number") {
    const item = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
    qTarget   = item.num;
    qQuestion = `What number is this?`;
    qHint     = "Pick the right name!";
    correctAnswer = item.word;
    STATE.quizData = { type:"number", item };
    const wrongs = shuffle(NUMBERS.filter(n => n.word !== item.word)).slice(0,3).map(n => n.word);
    options = shuffle([item.word, ...wrongs]);

  } else if (type === "word") {
    const item = WORDS[Math.floor(Math.random() * WORDS.length)];
    qTarget   = item.emoji;
    qQuestion = `What is this?`;
    qHint     = item.hint;
    correctAnswer = item.word;
    STATE.quizData = { type:"word", item };
    const wrongs = shuffle(WORDS.filter(w => w.word !== item.word)).slice(0,3).map(w => w.word);
    options = shuffle([item.word, ...wrongs]);

  } else if (type === "color") {
    const item = COLORS[Math.floor(Math.random() * COLORS.length)];
    qTarget   = item.emoji;
    qQuestion = `Which color is this?`;
    qHint     = "Pick the right color name!";
    correctAnswer = item.name;
    STATE.quizData = { type:"color", item };
    const wrongs = shuffle(COLORS.filter(c => c.name !== item.name)).slice(0,3).map(c => c.name);
    options = shuffle([item.name, ...wrongs]);

  } else if (type === "shape") {
    const item = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    qTarget   = `<svg viewBox="${item.vb}" width="100" height="100" xmlns="http://www.w3.org/2000/svg">${item.draw(item.color)}</svg>`;
    qQuestion = `What shape is this?`;
    qHint     = "Look carefully and choose!";
    correctAnswer = item.name;
    STATE.quizData = { type:"shape", item };
    const wrongs = shuffle(SHAPES.filter(s => s.name !== item.name)).slice(0,3).map(s => s.name);
    options = shuffle([item.name, ...wrongs]);
  }

  document.getElementById("quizQuestion").textContent  = qQuestion;
  document.getElementById("quizTarget").innerHTML      = qTarget;
  document.getElementById("quizHint").textContent      = qHint;
  STATE.quizData.correct = correctAnswer;

  // Build options
  const optContainer = document.getElementById("quizOptions");
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => answerQuiz(opt, btn));
    optContainer.appendChild(btn);
  });
}

function quizSpeak() {
  if (!STATE.quizData) return;
  const { type, item } = STATE.quizData;
  if (type === "alpha")  speak(`${item.letter} for ${item.word}`);
  else if (type === "number") speak(`${item.num}. ${item.word}`);
  else if (type === "word")   speak(item.word);
  else if (type === "color")  speak(item.name + " color");
  else if (type === "shape")  speak(item.name);
}

function answerQuiz(selected, btn) {
  // Disable all options
  document.querySelectorAll(".quiz-option").forEach(b => b.classList.add("disabled"));

  const correct = STATE.quizData.correct;
  STATE.quizTotal++;

  if (selected === correct) {
    btn.classList.add("correct");
    document.getElementById("quizResult").textContent = "🎉 Correct! Amazing!";
    document.getElementById("quizResult").style.color = "#33BB55";
    STATE.quizScore++;
    document.getElementById("quizScore").textContent = `Score: ${STATE.quizScore}`;
    speak("Correct! Amazing job!", () => {
      celebrate("Correct! 🎉", "🌟", 2);
    });
  } else {
    btn.classList.add("wrong");
    // Highlight correct
    document.querySelectorAll(".quiz-option").forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
    document.getElementById("quizResult").textContent = `The answer was: ${correct}`;
    document.getElementById("quizResult").style.color = "#FF4747";
    speak(`Not quite! The answer is ${correct}.`);
  }

  document.getElementById("nextQuizBtn").style.display = "block";
}

// ============================================
// ▶️ AUTOPLAY
// ============================================

/**
 * Auto-play slideshow through all alphabets.
 * Each slide: displays card, speaks pronunciation, waits 3.5s.
 */
function startAutoplay() {
  STATE.autoplayActive = true;
  STATE.autoplayIdx = 0;
  document.getElementById("autoplayOverlay").style.display = "flex";
  runAutoplaySlide();
}

function runAutoplaySlide() {
  if (!STATE.autoplayActive) return;
  if (STATE.autoplayIdx >= ALPHABETS.length) {
    stopAutoplay();
    celebrate("You learned all 26 letters! 🎓", "🏆", 5);
    return;
  }

  const item = ALPHABETS[STATE.autoplayIdx];
  document.getElementById("autoSubject").textContent = item.letter;
  document.getElementById("autoEmoji").textContent   = item.emoji;
  document.getElementById("autoWord").textContent    = item.word;
  document.getElementById("autoPhrase").textContent  = `${item.letter} for ${item.word}`;

  // Progress bar
  const pct = (STATE.autoplayIdx / ALPHABETS.length) * 100;
  document.getElementById("autoBar").style.width = pct + "%";

  // Speak then advance
  speak(`${item.letter} for ${item.word}`, () => {
    if (!STATE.autoplayActive) return;
    STATE.autoplayTimer = setTimeout(() => {
      STATE.autoplayIdx++;
      runAutoplaySlide();
    }, 1200);
  });
}

function stopAutoplay() {
  STATE.autoplayActive = false;
  clearTimeout(STATE.autoplayTimer);
  window.speechSynthesis.cancel();
  document.getElementById("autoplayOverlay").style.display = "none";
}

// ============================================
// 🎵 BACKGROUND MUSIC (Web Audio API)
// ============================================

let bgAudioCtx = null;
let bgGain = null;

/**
 * Generates a gentle, looping toy-like melody using Web Audio API.
 * No external audio files needed.
 */
function startBgMusic() {
  if (STATE.musicMuted) return;
  try {
    bgAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    bgGain = bgAudioCtx.createGain();
    bgGain.gain.value = 0.08;
    bgGain.connect(bgAudioCtx.destination);
    playMelodyLoop();
  } catch(e) {
    console.log("Audio context not available");
  }
}

const MELODY = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5];
let melodyStep = 0;

function playMelodyLoop() {
  if (!bgAudioCtx || STATE.musicMuted) return;
  const freqs = [MELODY[0], MELODY[2], MELODY[4], MELODY[2],
                 MELODY[3], MELODY[5], MELODY[4], MELODY[2]];
  const durations = [0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.7];

  let t = bgAudioCtx.currentTime;
  freqs.forEach((freq, i) => {
    const osc = bgAudioCtx.createOscillator();
    const gain = bgAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(bgGain);
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.5, t + 0.05);
    gain.gain.linearRampToValueAtTime(0, t + durations[i] - 0.05);
    osc.start(t);
    osc.stop(t + durations[i]);
    t += durations[i];
  });

  const totalDur = durations.reduce((a,b) => a+b, 0) * 1000;
  if (!STATE.musicMuted) setTimeout(playMelodyLoop, totalDur);
}

function toggleMusic() {
  STATE.musicMuted = !STATE.musicMuted;
  localStorage.setItem("lb_muted", STATE.musicMuted);
  document.getElementById("muteBtn").textContent = STATE.musicMuted ? "🔇" : "🎵";
  if (!STATE.musicMuted && !bgAudioCtx) startBgMusic();
  if (bgGain) bgGain.gain.value = STATE.musicMuted ? 0 : 0.08;
}

// ============================================
// ⛶ FULLSCREEN
// ============================================

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    document.getElementById("fullscreenBtn").textContent = "⊠";
  } else {
    document.exitFullscreen();
    document.getElementById("fullscreenBtn").textContent = "⛶";
  }
}

// ============================================
// ✨ FLOATING STARS BACKGROUND
// ============================================

function buildFloatingStars() {
  const container = document.getElementById("starsContainer");
  const emojis = ["⭐","🌟","✨","💫","🌸","🎈","🌈","🦋","❤️","🎵"];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement("div");
    el.className = "star-float";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${8 + Math.random() * 8}s;
      font-size: ${14 + Math.random() * 18}px;
    `;
    container.appendChild(el);
  }
}

// ============================================
// 🛠️ UTILITIES
// ============================================

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================
// 🚀 INITIALIZATION
// ============================================

function init() {
  // Build all grids
  buildAlphaGrid();
  buildNumbersGrid();
  buildWordsGrid();
  buildColorsGrid();
  buildShapesGrid();
  buildSentenceWordBank(); // Sentence builder word chips

  // Floating background
  buildFloatingStars();

  // Restore stars
  updateStarUI();

  // Restore mute state
  if (STATE.musicMuted) {
    document.getElementById("muteBtn").textContent = "🔇";
  }

  // Home button
  document.getElementById("homeTopBtn").style.visibility = "hidden";
  document.getElementById("homeTopBtn").addEventListener("click", () => showSection("home"));

  // Mute button
  document.getElementById("muteBtn").addEventListener("click", toggleMusic);

  // Fullscreen button
  document.getElementById("fullscreenBtn").addEventListener("click", toggleFullscreen);

  // Keyboard: Escape to close detail/autoplay
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (STATE.autoplayActive) stopAutoplay();
      closeDetail("alphaDetail");
      closeDetail("numberDetail");
      closeCelebrate();
    }
  });

  // Start bg music on first user interaction
  document.body.addEventListener("click", () => {
    if (!bgAudioCtx && !STATE.musicMuted) startBgMusic();
  }, { once: true });

  // Greet
  setTimeout(() => {
    speak("Hello! Welcome to LearniSneha! Let's learn together!");
  }, 800);

  // PWA-friendly: show home
  showSection("home");
}

document.addEventListener("DOMContentLoaded", init);

// ============================================
// 🙋 PRONOUNS DATA
// ============================================

const PRONOUNS = {

  // --- DEMONSTRATIVE ---  (this, that, these, those)
  demonstrative: [
    {
      word:"This",
      emoji:"👇",
      meaning:"Something NEAR you",
      example:"This is my cat.",
      color:"linear-gradient(135deg,#FF6B9D,#FF9A3C)"
    },
    {
      word:"That",
      emoji:"👉",
      meaning:"Something FAR from you",
      example:"That is a big tree.",
      color:"linear-gradient(135deg,#C77DFF,#4D96FF)"
    },
    {
      word:"These",
      emoji:"🤲",
      meaning:"Many things NEAR you",
      example:"These are my books.",
      color:"linear-gradient(135deg,#FF9A3C,#FFD93D)"
    },
    {
      word:"Those",
      emoji:"🫸",
      meaning:"Many things FAR from you",
      example:"Those are big dogs.",
      color:"linear-gradient(135deg,#48CAE4,#6BCB77)"
    }
  ],

  // --- POSSESSIVE ---  (my, your, our, their, his, her, its)
  possessive: [
    {
      word:"My",
      emoji:"🙋",
      meaning:"Belongs to ME",
      example:"This is my ball.",
      color:"linear-gradient(135deg,#FF6B9D,#C77DFF)"
    },
    {
      word:"Your",
      emoji:"🫵",
      meaning:"Belongs to YOU",
      example:"That is your book.",
      color:"linear-gradient(135deg,#4D96FF,#48CAE4)"
    },
    {
      word:"Our",
      emoji:"🫂",
      meaning:"Belongs to US",
      example:"This is our school.",
      color:"linear-gradient(135deg,#6BCB77,#48CAE4)"
    },
    {
      word:"Their",
      emoji:"👨‍👩‍👧",
      meaning:"Belongs to THEM",
      example:"That is their house.",
      color:"linear-gradient(135deg,#FFD93D,#FF9A3C)"
    },
    {
      word:"His",
      emoji:"👦",
      meaning:"Belongs to a BOY",
      example:"This is his cat.",
      color:"linear-gradient(135deg,#4D96FF,#C77DFF)"
    },
    {
      word:"Her",
      emoji:"👧",
      meaning:"Belongs to a GIRL",
      example:"That is her flower.",
      color:"linear-gradient(135deg,#FF6B9D,#FFD93D)"
    },
    {
      word:"Its",
      emoji:"🐕",
      meaning:"Belongs to an ANIMAL or THING",
      example:"Its tail is long.",
      color:"linear-gradient(135deg,#FF9A3C,#6BCB77)"
    }
  ],

  // --- PERSONAL SUBJECT ---  (I, you, he, she, it, we, they)
  personal: [
    {
      word:"I",
      emoji:"🙋",
      meaning:"Talking about MYSELF",
      example:"I like apples.",
      color:"linear-gradient(135deg,#FF6B9D,#FF9A3C)"
    },
    {
      word:"You",
      emoji:"🫵",
      meaning:"Talking to ANOTHER person",
      example:"You are my friend.",
      color:"linear-gradient(135deg,#4D96FF,#C77DFF)"
    },
    {
      word:"He",
      emoji:"👦",
      meaning:"Talking about a BOY",
      example:"He has a red ball.",
      color:"linear-gradient(135deg,#48CAE4,#4D96FF)"
    },
    {
      word:"She",
      emoji:"👧",
      meaning:"Talking about a GIRL",
      example:"She likes flowers.",
      color:"linear-gradient(135deg,#FF6B9D,#C77DFF)"
    },
    {
      word:"It",
      emoji:"🐱",
      meaning:"Talking about an ANIMAL or THING",
      example:"It is a small cat.",
      color:"linear-gradient(135deg,#6BCB77,#48CAE4)"
    },
    {
      word:"We",
      emoji:"👫",
      meaning:"Talking about ME and OTHERS",
      example:"We go to school.",
      color:"linear-gradient(135deg,#FFD93D,#FF9A3C)"
    },
    {
      word:"They",
      emoji:"👨‍👩‍👧‍👦",
      meaning:"Talking about OTHERS",
      example:"They play in the park.",
      color:"linear-gradient(135deg,#C77DFF,#FF6B9D)"
    }
  ]
};

// Flat list for navigation
let PRONOUNS_FLAT = [];
let currentPronounIdx = 0;
let currentPronounCat = "demonstrative";

// ============================================
// 🙋 PRONOUNS – Build & Render
// ============================================

function initPronouns() {
  // Set up category tabs
  document.querySelectorAll(".ptab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".ptab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentPronounCat = tab.dataset.cat;
      buildPronounGrid(currentPronounCat);
    });
  });
  buildPronounGrid(currentPronounCat);
}

function buildPronounGrid(cat) {
  const list = PRONOUNS[cat] || [];
  PRONOUNS_FLAT = list;
  const grid = document.getElementById("pronounGrid");
  grid.innerHTML = "";

  list.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "pronoun-card";
    card.style.background = item.color;
    card.style.boxShadow  = "0 7px 0 rgba(0,0,0,.14), 0 10px 20px rgba(0,0,0,.12)";
    card.setAttribute("aria-label", item.word);
    card.innerHTML = `
      <div class="pronoun-card-word">${item.word}</div>
      <div class="pronoun-card-emoji">${item.emoji}</div>
      <div class="pronoun-card-meaning">${item.meaning}</div>
      <div class="pronoun-card-example">"${item.example}"</div>`;
    card.addEventListener("click", () => openPronounDetail(idx));
    grid.appendChild(card);
  });
}

function openPronounDetail(idx) {
  currentPronounIdx = idx;
  renderPronounDetail(idx);
  document.getElementById("pronounDetail").style.display = "flex";
  speakPronounDetail();
}

function renderPronounDetail(idx) {
  const item = PRONOUNS_FLAT[idx];
  if (!item) return;
  document.getElementById("pdWord").textContent    = item.word;
  document.getElementById("pdEmoji").textContent   = item.emoji;
  document.getElementById("pdMeaning").textContent = item.meaning;
  document.getElementById("pdExample").textContent = item.example;
}

function speakPronounDetail() {
  const item = PRONOUNS_FLAT[currentPronounIdx];
  if (!item) return;
  // Speak: word, pause, meaning, pause, example sentence
  speak(`${item.word}. ${item.meaning}. For example: ${item.example}`);
  addStar(1);
}

function navigatePronoun(dir) {
  currentPronounIdx = (currentPronounIdx + (dir === "next" ? 1 : -1) + PRONOUNS_FLAT.length) % PRONOUNS_FLAT.length;
  renderPronounDetail(currentPronounIdx);
  speakPronounDetail();
}

// ============================================
// ✏️ SENTENCE BUILDER DATA
// ============================================

const WORDBANK = {
  pronouns: [
    { text:"I",     type:"pronoun" },
    { text:"You",   type:"pronoun" },
    { text:"He",    type:"pronoun" },
    { text:"She",   type:"pronoun" },
    { text:"We",    type:"pronoun" },
    { text:"They",  type:"pronoun" },
    { text:"It",    type:"pronoun" },
    { text:"This",  type:"pronoun" },
    { text:"That",  type:"pronoun" },
    { text:"These", type:"pronoun" },
    { text:"Those", type:"pronoun" },
    { text:"My",    type:"pronoun" },
    { text:"Your",  type:"pronoun" },
    { text:"Our",   type:"pronoun" },
    { text:"Their", type:"pronoun" }
  ],
  verbs: [
    { text:"is",    type:"verb" },
    { text:"are",   type:"verb" },
    { text:"like",  type:"verb" },
    { text:"likes", type:"verb" },
    { text:"eat",   type:"verb" },
    { text:"eats",  type:"verb" },
    { text:"play",  type:"verb" },
    { text:"plays", type:"verb" },
    { text:"go",    type:"verb" },
    { text:"goes",  type:"verb" },
    { text:"have",  type:"verb" },
    { text:"has",   type:"verb" },
    { text:"see",   type:"verb" },
    { text:"love",  type:"verb" }
  ],
  nouns: [
    { text:"a cat 🐱",    type:"noun" },
    { text:"a dog 🐶",    type:"noun" },
    { text:"a ball ⚽",   type:"noun" },
    { text:"an apple 🍎", type:"noun" },
    { text:"the book 📚", type:"noun" },
    { text:"a flower 🌸", type:"noun" },
    { text:"the sun ☀️",  type:"noun" },
    { text:"a bird 🐦",   type:"noun" },
    { text:"my friend 👫",type:"noun" },
    { text:"to school 🏫",type:"noun" },
    { text:"outside 🌳",  type:"noun" }
  ],
  adjectives: [
    { text:"big",       type:"adj" },
    { text:"small",     type:"adj" },
    { text:"happy 😊",  type:"adj" },
    { text:"beautiful", type:"adj" },
    { text:"red 🔴",    type:"adj" },
    { text:"very much", type:"adj" },
    { text:"together",  type:"adj" },
    { text:"every day", type:"adj" }
  ]
};

// Valid example sentences using pronouns
const EXAMPLE_SENTENCES = [
  { emoji:"🐱", text:"This is my cat.",            speak:"This is my cat." },
  { emoji:"🐶", text:"That is your dog.",           speak:"That is your dog." },
  { emoji:"📚", text:"These are our books.",        speak:"These are our books." },
  { emoji:"🏠", text:"Those are their houses.",     speak:"Those are their houses." },
  { emoji:"⚽", text:"I like to play football.",    speak:"I like to play football." },
  { emoji:"🌸", text:"She has a beautiful flower.", speak:"She has a beautiful flower." },
  { emoji:"🍎", text:"He eats an apple every day.", speak:"He eats an apple every day." },
  { emoji:"🌳", text:"We go outside to play.",      speak:"We go outside to play." },
  { emoji:"🐦", text:"They see a small bird.",      speak:"They see a small bird." },
  { emoji:"☀️", text:"It is a big bright sun.",     speak:"It is a big bright sun." },
  { emoji:"👫", text:"You are my best friend.",     speak:"You are my best friend." },
  { emoji:"🎒", text:"This is my school bag.",      speak:"This is my school bag." },
  { emoji:"🐘", text:"That is a very big animal.",  speak:"That is a very big animal." },
  { emoji:"🍌", text:"I love bananas very much.",   speak:"I love bananas very much." },
  { emoji:"🌈", text:"We see a rainbow together.",  speak:"We see a rainbow together." }
];

// ============================================
// ✏️ SENTENCE BUILDER LOGIC
// ============================================

let builtSentence = []; // Array of word objects in current sentence

function buildSentenceWordBank() {
  buildWBRow("wbPronouns",   WORDBANK.pronouns,   "wb-chip-pronoun");
  buildWBRow("wbVerbs",      WORDBANK.verbs,       "wb-chip-verb");
  buildWBRow("wbNouns",      WORDBANK.nouns,       "wb-chip-noun");
  buildWBRow("wbAdjectives", WORDBANK.adjectives,  "wb-chip-adjective");
}

function buildWBRow(containerId, items, chipClass) {
  const row = document.getElementById(containerId);
  if (!row) return;
  row.innerHTML = "";
  items.forEach(item => {
    const chip = document.createElement("button");
    chip.className = `wb-chip ${chipClass}`;
    chip.textContent = item.text;
    chip.dataset.word = item.text;
    chip.dataset.type = item.type;
    chip.addEventListener("click", () => addWordToSentence(item, chip));
    row.appendChild(chip);
  });
}

function addWordToSentence(item, chipEl) {
  // Add to sentence array
  const entry = { text: item.text, type: item.type, id: Date.now() + Math.random() };
  builtSentence.push(entry);
  chipEl.classList.add("used");

  // Render chips in display
  renderSentenceDisplay();
  removeFeedback();
}

function renderSentenceDisplay() {
  const display = document.getElementById("sentenceDisplay");
  display.innerHTML = "";

  if (builtSentence.length === 0) {
    display.innerHTML = `<span class="sentence-placeholder">Tap words below to build a sentence! 👇</span>`;
    return;
  }

  builtSentence.forEach(entry => {
    const chip = document.createElement("span");
    chip.className = "sentence-chip";
    chip.innerHTML = `${entry.text} <span class="chip-remove">✕</span>`;
    chip.title = "Tap to remove";
    chip.addEventListener("click", () => removeWordFromSentence(entry.id));
    display.appendChild(chip);
  });
}

function removeWordFromSentence(id) {
  const entry = builtSentence.find(e => e.id === id);
  if (!entry) return;
  builtSentence = builtSentence.filter(e => e.id !== id);

  // Un-grey the chip in wordbank
  document.querySelectorAll(".wb-chip").forEach(chip => {
    if (chip.dataset.word === entry.text) chip.classList.remove("used");
  });

  renderSentenceDisplay();
  removeFeedback();
}

function clearSentence() {
  builtSentence = [];
  document.querySelectorAll(".wb-chip").forEach(c => c.classList.remove("used"));
  renderSentenceDisplay();
  removeFeedback();
}

function speakBuiltSentence() {
  if (builtSentence.length === 0) {
    speak("Please build a sentence first!");
    return;
  }
  // Strip emojis for clean speech
  const sentence = builtSentence.map(e => e.text.replace(/[^\w\s']/g, "")).join(" ");
  speak(sentence);
}

function checkSentence() {
  if (builtSentence.length < 2) {
    showSentenceFeedback("Add more words to make a sentence! 💡", "keep-going");
    speak("Add more words!");
    return;
  }

  const words = builtSentence.map(e => e.type);
  const hasProOrNoun = words.includes("pronoun");
  const hasVerb      = words.includes("verb");
  const sentenceText = builtSentence.map(e => e.text.replace(/[^\w\s']/g, "")).join(" ");

  if (hasProOrNoun && hasVerb) {
    showSentenceFeedback("🎉 Great sentence! You did it!", "good");
    speak(`Great job! Your sentence is: ${sentenceText}`);
    celebrate("Amazing Sentence! 🎉", "✏️", 3);
  } else if (!hasVerb) {
    showSentenceFeedback("Add an action word (verb) like — is, like, play! 💡", "keep-going");
    speak("Try adding an action word like is, or like, or play!");
  } else {
    showSentenceFeedback("Try adding a pronoun like — I, You, This, That! 💡", "keep-going");
    speak("Try adding a word like I, You, This, or That!");
  }
}

function showSentenceFeedback(msg, type) {
  removeFeedback();
  const fb = document.createElement("div");
  fb.className = `sentence-feedback ${type}`;
  fb.id = "sentenceFeedback";
  fb.textContent = msg;
  document.querySelector(".sentence-display-wrap").appendChild(fb);
}

function removeFeedback() {
  const fb = document.getElementById("sentenceFeedback");
  if (fb) fb.remove();
}

function initSentences() {
  // Build example sentences list
  const list = document.getElementById("exampleSentencesList");
  if (!list || list.children.length > 0) return; // only build once
  EXAMPLE_SENTENCES.forEach(item => {
    const el = document.createElement("div");
    el.className = "example-sentence-item";
    el.innerHTML = `
      <span class="esi-emoji">${item.emoji}</span>
      <span class="esi-text">${item.text}</span>
      <span class="esi-speak">🔊</span>`;
    el.addEventListener("click", () => {
      document.querySelectorAll(".example-sentence-item").forEach(e => e.classList.remove("playing"));
      el.classList.add("playing");
      speak(item.speak, () => el.classList.remove("playing"));
      addStar(1);
    });
    list.appendChild(el);
  });
}


// ============================================
// 🔄 OPPOSITES DATA + LOGIC
// ============================================

const OPPOSITES = [
  // [wordA, emojiA, wordB, emojiB, category]
  ["Big",    "🐘", "Small",  "🐭", "Size"],
  ["Hot",    "🔥", "Cold",   "🧊", "Temperature"],
  ["Day",    "☀️", "Night",  "🌙", "Time"],
  ["Happy",  "😊", "Sad",    "😢", "Feelings"],
  ["Fast",   "🐆", "Slow",   "🐢", "Speed"],
  ["Up",     "⬆️", "Down",   "⬇️", "Direction"],
  ["Open",   "🔓", "Close",  "🔒", "Action"],
  ["Long",   "📏", "Short",  "✂️", "Length"],
  ["Hard",   "🪨", "Soft",   "🪶", "Texture"],
  ["Clean",  "🛁", "Dirty",  "🐷", "State"],
  ["Full",   "🪣", "Empty",  "🫙", "Amount"],
  ["Tall",   "🦒", "Short",  "🐔", "Height"],
  ["Old",    "👴", "Young",  "👶", "Age"],
  ["Loud",   "📢", "Quiet",  "🤫", "Sound"],
  ["Wet",    "🌊", "Dry",    "🏜️", "Water"],
  ["Light",  "🪶", "Heavy",  "🏋️", "Weight"],
  ["New",    "✨", "Old",    "📜", "Age"],
  ["On",     "💡", "Off",    "🌑", "State"],
  ["Strong", "💪", "Weak",   "😮‍💨", "Strength"],
  ["Dark",   "🌑", "Bright", "🌟", "Light"]
];

function initOpposites() {
  const grid = document.getElementById("oppositesGrid");
  if (!grid || grid.children.length > 0) return;

  OPPOSITES.forEach(([wA, eA, wB, eB, cat]) => {
    const card = document.createElement("div");
    card.className = "opposite-card";
    card.innerHTML = `
      <div class="opposite-category">${cat}</div>
      <div class="opposite-side opp-side-a" title="Tap to hear ${wA}" data-word="${wA}">
        <span class="opp-emoji">${eA}</span>
        <span class="opp-word">${wA}</span>
      </div>
      <div class="opposite-vs">
        <span class="opposite-vs-icon">↔️</span>
        <small>VS</small>
      </div>
      <div class="opposite-side opp-side-b" title="Tap to hear ${wB}" data-word="${wB}">
        <span class="opp-emoji">${eB}</span>
        <span class="opp-word">${wB}</span>
      </div>`;

    // Tap side A
    card.querySelector(".opp-side-a").addEventListener("click", () => {
      const el = card.querySelector(".opp-side-a");
      el.classList.add("speaking");
      speak(`${wA}. The opposite of ${wA} is ${wB}.`, () => el.classList.remove("speaking"));
      addStar(1);
    });
    // Tap side B
    card.querySelector(".opp-side-b").addEventListener("click", () => {
      const el = card.querySelector(".opp-side-b");
      el.classList.add("speaking");
      speak(`${wB}. The opposite of ${wB} is ${wA}.`, () => el.classList.remove("speaking"));
      addStar(1);
    });
    grid.appendChild(card);
  });
}

// ============================================
// 🏃 ACTION WORDS (VERBS) DATA + LOGIC
// ============================================

const VERBS = [
  { word:"Run",    emoji:"🏃", anim:"run",   sentence:"I can run fast!",         color:"" },
  { word:"Jump",   emoji:"🦘", anim:"jump",  sentence:"She can jump high!",       color:"" },
  { word:"Eat",    emoji:"🍽️", anim:"eat",   sentence:"He eats an apple.",        color:"" },
  { word:"Sleep",  emoji:"😴", anim:"sleep", sentence:"The cat likes to sleep.",  color:"" },
  { word:"Swim",   emoji:"🏊", anim:"swim",  sentence:"Fish can swim in water.",  color:"" },
  { word:"Fly",    emoji:"🦋", anim:"fly",   sentence:"Birds can fly in the sky!",color:"" },
  { word:"Sing",   emoji:"🎤", anim:"sing",  sentence:"We love to sing songs!",   color:"" },
  { word:"Dance",  emoji:"💃", anim:"dance", sentence:"They dance with joy!",     color:"" },
  { word:"Read",   emoji:"📖", anim:"read",  sentence:"I read my book every day.",color:"" },
  { word:"Draw",   emoji:"🎨", anim:"draw",  sentence:"She draws beautiful art.",  color:"" },
  { word:"Play",   emoji:"⚽", anim:"play",  sentence:"We play in the park.",     color:"" },
  { word:"Laugh",  emoji:"😂", anim:"laugh", sentence:"He laughs out loud!",      color:"" },
  { word:"Cry",    emoji:"😢", anim:"cry",   sentence:"The baby cries at night.", color:"" },
  { word:"Walk",   emoji:"🚶", anim:"walk",  sentence:"We walk to school.",       color:"" },
  { word:"Clap",   emoji:"👏", anim:"clap",  sentence:"Let us clap our hands!",   color:"" },
  { word:"Hug",    emoji:"🤗", anim:"hug",   sentence:"I hug my mother every day!",color:"" },
  { word:"Climb",  emoji:"🧗", anim:"climb", sentence:"Monkeys climb trees.",     color:"" },
  { word:"Cook",   emoji:"👨‍🍳",anim:"cook",  sentence:"Mama cooks yummy food.",  color:"" }
];

function initVerbs() {
  const grid = document.getElementById("verbsGrid");
  if (!grid || grid.children.length > 0) return;

  VERBS.forEach(item => {
    const card = document.createElement("div");
    card.className = "verb-card";
    card.setAttribute("aria-label", item.word);
    card.innerHTML = `
      <span class="verb-try-badge">Tap me!</span>
      <span class="verb-anim-emoji">${item.emoji}</span>
      <div class="verb-word">${item.word}</div>
      <div class="verb-sentence">"${item.sentence}"</div>`;

    card.addEventListener("click", () => {
      // Trigger animation
      card.classList.remove("do-action");
      void card.offsetWidth; // reflow to restart
      card.classList.add("do-action");
      card.classList.add("speaking");

      // Speak: word + sentence
      speak(`${item.word}! ${item.sentence}`, () => {
        card.classList.remove("speaking");
      });
      addStar(1);
      setTimeout(() => card.classList.remove("do-action"), 800);
    });
    grid.appendChild(card);
  });
}

// ============================================
// ❓ FILL IN THE BLANK QUIZ DATA + LOGIC
// ============================================

const FILL_QUESTIONS = [
  // sentence with ___BLANK___ marker, correct answer, wrong options
  { sentence:"___ is a good boy.",    correct:"He",    opts:["He","She","They","It"],    emoji:"👦" },
  { sentence:"___ is my best friend.", correct:"You",   opts:["You","We","They","Those"], emoji:"👫" },
  { sentence:"___ is a big elephant.", correct:"That",  opts:["That","This","These","Those"],emoji:"🐘" },
  { sentence:"___ are my books.",      correct:"These", opts:["These","Those","This","That"],emoji:"📚" },
  { sentence:"___ like ice cream.",    correct:"We",    opts:["We","He","It","Those"],    emoji:"🍦" },
  { sentence:"___ is a small cat.",    correct:"This",  opts:["This","That","Those","They"],emoji:"🐱" },
  { sentence:"___ are in the garden.", correct:"They",  opts:["They","It","He","Those"],  emoji:"🌸" },
  { sentence:"___ is my red ball.",    correct:"This",  opts:["This","That","It","Those"], emoji:"⚽" },
  { sentence:"___ loves her flower.",  correct:"She",   opts:["She","He","They","We"],    emoji:"👧" },
  { sentence:"___ are big dogs.",      correct:"Those", opts:["Those","These","This","That"],emoji:"🐕" },
  { sentence:"___ go to school.",      correct:"We",    opts:["We","It","He","Those"],    emoji:"🏫" },
  { sentence:"___ has a yellow banana.",correct:"He",   opts:["He","She","We","They"],    emoji:"🍌" },
  { sentence:"___ is our new house.",  correct:"This",  opts:["This","That","These","Those"],emoji:"🏠" },
  { sentence:"___ can fly in the sky!",correct:"It",   opts:["It","They","We","Those"],   emoji:"🐦" },
  { sentence:"___ is my little sister.",correct:"She",  opts:["She","He","It","They"],    emoji:"👧" }
];

let fillIdx = 0, fillScore2 = 0, fillTotal = 0;
let fillQuestions = [];

function initFillQuiz() {
  fillScore2 = 0; fillTotal = 0;
  fillQuestions = shuffle([...FILL_QUESTIONS]);
  fillIdx = 0;
  document.getElementById("fillScore").textContent = "Score: 0";
  nextFillQuiz();
}

function nextFillQuiz() {
  if (fillIdx >= fillQuestions.length) fillIdx = 0;
  const q = fillQuestions[fillIdx];
  fillTotal++;

  // Progress
  const pct = Math.min((fillIdx / fillQuestions.length) * 100, 100);
  document.getElementById("fillProgressFill").style.width = pct + "%";
  document.getElementById("fillQCounter").textContent = `Q ${fillIdx+1} / ${fillQuestions.length}`;

  // Render sentence with blank
  const wrap = document.getElementById("fillSentenceWrap");
  wrap.innerHTML = "";

  // Add big emoji above
  const emojiEl = document.createElement("div");
  emojiEl.style.cssText = "width:100%;text-align:center;font-size:3.5rem;margin-bottom:6px;";
  emojiEl.textContent = q.emoji;
  wrap.appendChild(emojiEl);

  // Sentence words + blank
  const parts = q.sentence.split("___");
  parts.forEach((part, i) => {
    if (part.trim()) {
      part.trim().split(" ").forEach(w => {
        if (!w) return;
        const el = document.createElement("span");
        el.className = "fill-word";
        el.textContent = w;
        wrap.appendChild(el);
      });
    }
    if (i < parts.length - 1) {
      const blank = document.createElement("span");
      blank.className = "fill-blank";
      blank.id = "fillBlankEl";
      blank.textContent = "___";
      wrap.appendChild(blank);
    }
  });

  // Build options
  const optDiv = document.getElementById("fillOptions");
  optDiv.innerHTML = "";
  document.getElementById("fillResult").textContent = "";
  document.getElementById("nextFillBtn").style.display = "none";

  const options = shuffle([...new Set(q.opts)]);
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => checkFillAnswer(opt, btn, q.correct));
    optDiv.appendChild(btn);
  });
}

function speakFillSentence() {
  const q = fillQuestions[fillIdx];
  const spoken = q.sentence.replace("___", q.correct);
  speak(spoken);
}

function checkFillAnswer(selected, btn, correct) {
  document.querySelectorAll("#fillOptions .quiz-option").forEach(b => b.classList.add("disabled"));

  const blank = document.getElementById("fillBlankEl");

  if (selected === correct) {
    btn.classList.add("correct");
    if (blank) { blank.textContent = correct; blank.classList.add("filled"); }
    document.getElementById("fillResult").textContent = "🎉 Correct! Super!";
    document.getElementById("fillResult").style.color = "#33BB55";
    fillScore2++;
    document.getElementById("fillScore").textContent = `Score: ${fillScore2}`;
    speak(`Correct! The answer is ${correct}!`, () => {
      if (fillScore2 % 3 === 0) celebrate("Awesome! Keep going! 🌟", "🏆", 2);
    });
  } else {
    btn.classList.add("wrong");
    if (blank) { blank.textContent = correct; blank.classList.add("filled"); }
    document.querySelectorAll("#fillOptions .quiz-option").forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
    document.getElementById("fillResult").textContent = `The answer is: ${correct}`;
    document.getElementById("fillResult").style.color = "#FF4747";
    speak(`The answer is ${correct}.`);
  }

  fillIdx++;
  document.getElementById("nextFillBtn").style.display = "block";
}

// ============================================
// 🎯 PRONOUN QUIZ DATA + LOGIC
// ============================================

const PQ_QUESTIONS = [
  // scene emojis, question sentence with ___, correct pronoun, wrong options, hint
  { scene:["👦","➡️","🏫"], q:"___ goes to school.",      correct:"He",   opts:["He","She","We","They"],   hint:"One boy" },
  { scene:["👧","➡️","🌸"], q:"___ likes flowers.",        correct:"She",  opts:["She","He","It","They"],   hint:"One girl" },
  { scene:["🐱","🛌"],       q:"___ is sleeping.",          correct:"It",   opts:["It","He","She","They"],   hint:"The cat" },
  { scene:["👦","👧","⚽"],   q:"___ are playing football.", correct:"They", opts:["They","We","It","She"],   hint:"Boy + Girl" },
  { scene:["🙋","🌟"],       q:"___ love to learn!",        correct:"I",    opts:["I","He","They","It"],     hint:"Talking about yourself" },
  { scene:["👨‍👩‍👧","🏠"],   q:"___ live in this house.",  correct:"We",   opts:["We","They","He","It"],    hint:"A whole family" },
  { scene:["👧","🎨"],       q:"___ draws beautiful art.",  correct:"She",  opts:["She","He","It","We"],     hint:"One girl" },
  { scene:["🐶","🌳"],       q:"___ runs in the park.",     correct:"It",   opts:["It","He","She","We"],     hint:"The dog" },
  { scene:["👫","🎵"],       q:"___ sing together.",        correct:"They", opts:["They","It","He","We"],    hint:"Two friends" },
  { scene:["🙋","🍎"],       q:"___ eat an apple every day.",correct:"I",   opts:["I","She","They","It"],    hint:"Talking about yourself" },
  { scene:["👦","🐟"],       q:"___ has a pet fish.",       correct:"He",   opts:["He","She","We","Those"],  hint:"One boy" },
  { scene:["👧","👶"],       q:"___ loves her baby brother.",correct:"She", opts:["She","He","It","They"],   hint:"One girl" },
  { scene:["🐘","🌊"],       q:"___ swims in the river.",   correct:"It",   opts:["It","He","She","They"],   hint:"The elephant" },
  { scene:["👨‍👩‍👧‍👦","🎉"], q:"___ are happy together!", correct:"We",   opts:["We","They","He","It"],    hint:"All of us!" },
  { scene:["🙋","🌙"],       q:"___ go to sleep at night.", correct:"I",    opts:["I","He","They","It"],     hint:"Yourself" }
];

let pqIdx = 0, pqScore2 = 0;
let pqQuestions = [];

function initPronounQuiz() {
  pqScore2 = 0;
  pqQuestions = shuffle([...PQ_QUESTIONS]);
  pqIdx = 0;
  document.getElementById("pqScore").textContent = "Score: 0";
  nextPronounQuiz();
}

function nextPronounQuiz() {
  if (pqIdx >= pqQuestions.length) pqIdx = 0;
  const q = pqQuestions[pqIdx];

  // Progress
  const pct = Math.min((pqIdx / pqQuestions.length) * 100, 100);
  document.getElementById("pqProgressFill").style.width = pct + "%";
  document.getElementById("pqCounter").textContent = `Q ${pqIdx+1} / ${pqQuestions.length}`;

  // Scene
  document.getElementById("pqScene").innerHTML = q.scene.map(e =>
    `<span>${e}</span>`
  ).join(`<span class="pq-scene-arrow">›</span>`);

  // Question
  document.getElementById("pqQuestion").textContent = "Complete the sentence!";

  // Sentence with blank
  const wrap = document.getElementById("pqSentenceWrap");
  wrap.innerHTML = "";
  const parts = q.q.split("___");
  parts.forEach((part, i) => {
    if (part.trim()) {
      part.trim().split(" ").forEach(w => {
        if (!w) return;
        const el = document.createElement("span");
        el.className = "fill-word";
        el.textContent = w;
        wrap.appendChild(el);
      });
    }
    if (i < parts.length - 1) {
      const blank = document.createElement("span");
      blank.className = "fill-blank";
      blank.id = "pqBlankEl";
      blank.textContent = "___";
      wrap.appendChild(blank);
    }
  });

  // Options
  const optDiv = document.getElementById("pqOptions");
  optDiv.innerHTML = "";
  document.getElementById("pqResult").textContent = "";
  document.getElementById("nextPQBtn").style.display = "none";

  const options = shuffle([...new Set(q.opts)]);
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => checkPQAnswer(opt, btn, q.correct));
    optDiv.appendChild(btn);
  });
}

function speakPQSentence() {
  const q = pqQuestions[pqIdx];
  const spoken = q.q.replace("___", q.correct);
  speak(spoken);
}

function checkPQAnswer(selected, btn, correct) {
  document.querySelectorAll("#pqOptions .quiz-option").forEach(b => b.classList.add("disabled"));
  const blank = document.getElementById("pqBlankEl");

  if (selected === correct) {
    btn.classList.add("correct");
    if (blank) { blank.textContent = correct; blank.classList.add("filled"); }
    document.getElementById("pqResult").textContent = "🎉 Correct! Well done!";
    document.getElementById("pqResult").style.color = "#33BB55";
    pqScore2++;
    document.getElementById("pqScore").textContent = `Score: ${pqScore2}`;
    speak(`Great! ${correct} is correct!`, () => {
      if (pqScore2 % 3 === 0) celebrate("Pronoun Master! 🌟", "🎯", 3);
    });
  } else {
    btn.classList.add("wrong");
    if (blank) { blank.textContent = correct; blank.classList.add("filled"); }
    document.querySelectorAll("#pqOptions .quiz-option").forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
    document.getElementById("pqResult").textContent = `The answer is: ${correct}`;
    document.getElementById("pqResult").style.color = "#FF4747";
    speak(`The answer is ${correct}. Try again next time!`);
  }
  pqIdx++;
  document.getElementById("nextPQBtn").style.display = "block";
}

// ============================================
// 📖 STORIES DATA + LOGIC
// ============================================

const STORIES = [
  {
    title: "The Brave Lion",
    emoji: "🦁",
    pages: [
      { art:"🦁", text:"<mark>Leo</mark> is a little lion. He lives in a big jungle. <mark>He</mark> is brave and kind." },
      { art:"🌿", text:"One day, <mark>Leo</mark> saw a small rabbit. <mark>It</mark> was lost and crying. <mark>This</mark> made Leo sad." },
      { art:"🤝", text:"Leo said, <mark>\"I will help you!\"</mark> <mark>He</mark> walked with <mark>it</mark> through the jungle." },
      { art:"🏡", text:"<mark>They</mark> found the rabbit's home! <mark>\"That is my house!\"</mark> said the rabbit. <mark>They</mark> were both very happy! ⭐" }
    ]
  },
  {
    title: "My Pet Cat",
    emoji: "🐱",
    pages: [
      { art:"🐱", text:"<mark>I</mark> have a pet cat. <mark>Her</mark> name is Fluffy. <mark>She</mark> has soft white fur." },
      { art:"🥛", text:"<mark>She</mark> loves to drink milk. <mark>This</mark> is <mark>her</mark> favorite food. <mark>She</mark> drinks it every morning." },
      { art:"😴", text:"<mark>Our</mark> cat sleeps all day. <mark>She</mark> curls into a ball. <mark>It</mark> looks very cozy and warm!" },
      { art:"❤️", text:"<mark>I</mark> love <mark>my</mark> cat Fluffy so much! <mark>She</mark> is <mark>my</mark> best friend. <mark>We</mark> play together every day! ⭐" }
    ]
  },
  {
    title: "A Rainy Day",
    emoji: "🌧️",
    pages: [
      { art:"🌧️", text:"<mark>It</mark> is raining outside today. <mark>Those</mark> are big dark clouds. <mark>We</mark> cannot go out to play." },
      { art:"📚", text:"<mark>My</mark> mother says, <mark>\"Let us read a book!\"</mark> <mark>She</mark> brings <mark>our</mark> favorite story." },
      { art:"🍵", text:"<mark>We</mark> sit together on the sofa. <mark>She</mark> makes warm tea. <mark>This</mark> is a cozy and happy time." },
      { art:"🌈", text:"Then <mark>we</mark> see a rainbow! <mark>\"That</mark> is so beautiful!\" <mark>I</mark> say. <mark>We</mark> both clap <mark>our</mark> hands with joy! ⭐" }
    ]
  },
  {
    title: "The Kind Elephant",
    emoji: "🐘",
    pages: [
      { art:"🐘", text:"<mark>This</mark> is Ellie, a big elephant. <mark>She</mark> lives near a river. <mark>Her</mark> ears are very big and wide." },
      { art:"🌊", text:"One hot day, a fox came. <mark>\"Those</mark> look like big ears!\" said <mark>the fox.</mark> <mark>It</mark> was very rude." },
      { art:"💦", text:"But Ellie was kind. <mark>She</mark> used <mark>her</mark> long trunk to bring water. <mark>\"This</mark> water is for <mark>you</mark>,\" <mark>she</mark> said." },
      { art:"🤗", text:"<mark>They</mark> became good friends. <mark>\"I</mark> am sorry for <mark>my</mark> words,\" said the fox. <mark>Their</mark> friendship grew every day! ⭐" }
    ]
  },
  {
    title: "Our School Day",
    emoji: "🏫",
    pages: [
      { art:"🌅", text:"<mark>We</mark> wake up in the morning. <mark>Our</mark> school bus comes at eight. <mark>I</mark> wear <mark>my</mark> clean uniform with pride." },
      { art:"🏫", text:"<mark>We</mark> reach <mark>our</mark> school. <mark>Our</mark> teacher says, <mark>\"Good morning!\"</mark> <mark>She</mark> is kind and smiling." },
      { art:"📝", text:"<mark>We</mark> learn alphabets and numbers. <mark>I</mark> write in <mark>my</mark> notebook. <mark>My</mark> friend helps me with <mark>his</mark> pencil." },
      { art:"🏃", text:"At break time, <mark>we</mark> go out to play. <mark>Those</mark> swings are <mark>our</mark> favorite! <mark>We</mark> laugh and enjoy <mark>our</mark> day! ⭐" }
    ]
  }
];

let currentStory = null;
let currentPageIdx = 0;
let storyAutoMode = false;
let storyAutoTimer = null;

function initStories() {
  const shelf = document.getElementById("storiesShelf");
  if (!shelf || shelf.children.length > 0) return;

  STORIES.forEach((story, idx) => {
    const card = document.createElement("div");
    card.className = "story-book-card";
    card.innerHTML = `
      <div class="story-cover-emoji">${story.emoji}</div>
      <div class="story-title">${story.title}</div>
      <div class="story-pages-badge">📄 ${story.pages.length} pages</div>`;
    card.addEventListener("click", () => openStory(idx));
    shelf.appendChild(card);
  });
}

function openStory(idx) {
  currentStory = STORIES[idx];
  currentPageIdx = 0;
  storyAutoMode = false;

  // Set title
  document.getElementById("srEmoji").textContent  = currentStory.emoji;
  document.getElementById("srTitle").textContent  = currentStory.title;

  // Build pages
  const pagesWrap = document.getElementById("storyPages");
  pagesWrap.innerHTML = "";
  currentStory.pages.forEach((pg, i) => {
    const div = document.createElement("div");
    div.className = "story-page" + (i === 0 ? " active" : "");
    div.innerHTML = `
      <div class="story-page-art">${pg.art}</div>
      <div class="story-page-text">${pg.text}</div>`;
    pagesWrap.appendChild(div);
  });

  renderStoryNav();
  document.getElementById("storyReader").style.display = "flex";
  readCurrentPage();
  addStar(1);
}

function renderStoryNav() {
  const total = currentStory.pages.length;
  document.getElementById("storyPageIndicator").textContent = `${currentPageIdx + 1} / ${total}`;
  document.getElementById("storyPrevBtn").disabled = currentPageIdx === 0;
  document.getElementById("storyNextBtn").disabled = currentPageIdx === total - 1;
  document.getElementById("storyNextBtn").textContent = currentPageIdx === total - 1 ? "The End ✨" : "Next ▶";
}

function storyNavPage(dir) {
  stopStoryAuto();
  const total = currentStory.pages.length;
  const newIdx = currentPageIdx + dir;
  if (newIdx < 0 || newIdx >= total) return;

  document.querySelectorAll(".story-page").forEach((p, i) => {
    p.classList.toggle("active", i === newIdx);
  });
  currentPageIdx = newIdx;
  renderStoryNav();
  readCurrentPage();
}

function readCurrentPage() {
  window.speechSynthesis.cancel();
  const pg = currentStory.pages[currentPageIdx];
  // Strip HTML tags for speech
  const text = pg.text.replace(/<[^>]+>/g, "");
  speak(text, () => {
    if (storyAutoMode) {
      const total = currentStory.pages.length;
      if (currentPageIdx < total - 1) {
        storyAutoTimer = setTimeout(() => storyNavPage(1), 800);
      } else {
        storyAutoMode = false;
        updateStoryAutoBtn();
        celebrate(`You finished "${currentStory.title}"! 📖`, "🌟", 4);
      }
    }
  });
}

function toggleStoryAuto() {
  storyAutoMode = !storyAutoMode;
  updateStoryAutoBtn();
  if (storyAutoMode) readCurrentPage();
  else stopStoryAuto();
}

function stopStoryAuto() {
  storyAutoMode = false;
  clearTimeout(storyAutoTimer);
  window.speechSynthesis.cancel();
  updateStoryAutoBtn();
}

function updateStoryAutoBtn() {
  const btn = document.getElementById("storyAutoBtn");
  if (!btn) return;
  btn.textContent = storyAutoMode ? "⏹️ Stop Auto" : "▶️ Auto Read";
  btn.classList.toggle("active-auto", storyAutoMode);
}

function closeStoryReader() {
  stopStoryAuto();
  window.speechSynthesis.cancel();
  document.getElementById("storyReader").style.display = "none";
}

// ============================================
// 🍓 FRUITS & VEGETABLES DATA + LOGIC
// ============================================

const FRUITS_DATA = {
  fruits: [
    { name:"Apple",      emoji:"🍎", color:"Red & Crunchy",       fact:"Apples grow on tall trees!" },
    { name:"Banana",     emoji:"🍌", color:"Yellow & Sweet",       fact:"Monkeys love bananas!" },
    { name:"Mango",      emoji:"🥭", color:"Orange & Juicy",       fact:"Mango is the king of fruits!" },
    { name:"Grapes",     emoji:"🍇", color:"Purple & Small",       fact:"Grapes grow in bunches!" },
    { name:"Strawberry", emoji:"🍓", color:"Red with tiny seeds",  fact:"Strawberries are not true berries!" },
    { name:"Watermelon", emoji:"🍉", color:"Green outside, Red inside", fact:"Watermelon is 92% water!" },
    { name:"Orange",     emoji:"🍊", color:"Orange & Sour-Sweet",  fact:"Oranges are full of Vitamin C!" },
    { name:"Pineapple",  emoji:"🍍", color:"Yellow & Spiky",       fact:"Pineapple grows on the ground!" },
    { name:"Coconut",    emoji:"🥥", color:"Brown outside, White inside", fact:"Coconut water is very healthy!" },
    { name:"Peach",      emoji:"🍑", color:"Pink & Soft",          fact:"Peaches are fuzzy on the outside!" },
    { name:"Cherry",     emoji:"🍒", color:"Deep Red & Round",     fact:"Cherries come in pairs!" },
    { name:"Lemon",      emoji:"🍋", color:"Yellow & Very Sour",   fact:"Lemons keep us healthy!" }
  ],
  veggies: [
    { name:"Carrot",     emoji:"🥕", color:"Orange & Crunchy",     fact:"Carrots help us see better!" },
    { name:"Broccoli",   emoji:"🥦", color:"Dark Green & Healthy", fact:"Broccoli looks like a little tree!" },
    { name:"Tomato",     emoji:"🍅", color:"Red & Round",          fact:"Tomato is actually a fruit!" },
    { name:"Corn",       emoji:"🌽", color:"Yellow & Sweet",       fact:"Each corn has about 800 kernels!" },
    { name:"Cucumber",   emoji:"🥒", color:"Green & Cool",         fact:"Cucumbers are 96% water!" },
    { name:"Potato",     emoji:"🥔", color:"Brown outside, White inside", fact:"Potatoes grow under the ground!" },
    { name:"Onion",      emoji:"🧅", color:"Brown with layers",    fact:"Onions make our eyes water!" },
    { name:"Garlic",     emoji:"🧄", color:"White & Smelly",       fact:"Garlic fights germs in our body!" },
    { name:"Pumpkin",    emoji:"🎃", color:"Orange & Big",         fact:"Pumpkins can grow very very big!" },
    { name:"Pepper",     emoji:"🌶️", color:"Red & Spicy",          fact:"Peppers can be sweet or hot!" },
    { name:"Eggplant",   emoji:"🍆", color:"Purple & Shiny",       fact:"Eggplants are actually berries!" },
    { name:"Lettuce",    emoji:"🥬", color:"Bright Green & Leafy", fact:"Lettuce is mostly water!" }
  ]
};

let currentFruitCat = "fruits";
let currentFruitList = [];
let currentFruitIdx  = 0;

function initFruits() {
  // Tabs
  document.querySelectorAll(".ftab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".ftab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFruitCat = tab.dataset.fcat;
      buildFruitsGrid(currentFruitCat);
    });
  });
  buildFruitsGrid(currentFruitCat);
}

function buildFruitsGrid(cat) {
  currentFruitList = FRUITS_DATA[cat] || [];
  const grid = document.getElementById("fruitsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  currentFruitList.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "fruit-card";
    card.innerHTML = `
      <div class="fruit-card-emoji">${item.emoji}</div>
      <div class="fruit-card-name">${item.name}</div>
      <div class="fruit-card-color">${item.color}</div>`;
    card.addEventListener("click", () => openFruitDetail(idx));
    grid.appendChild(card);
  });
}

function openFruitDetail(idx) {
  currentFruitIdx = idx;
  renderFruitDetail(idx);
  document.getElementById("fruitDetail").style.display = "flex";
  speakFruitDetail();
}

function renderFruitDetail(idx) {
  const item = currentFruitList[idx];
  if (!item) return;
  document.getElementById("fdEmoji").textContent = item.emoji;
  document.getElementById("fdName").textContent  = item.name;
  document.getElementById("fdColor").textContent = item.color;
  document.getElementById("fdFact").textContent  = item.fact;
}

function speakFruitDetail() {
  const item = currentFruitList[currentFruitIdx];
  if (!item) return;
  speak(`${item.name}! ${item.color}. ${item.fact}`);
  addStar(1);
}

function navigateFruit(dir) {
  currentFruitIdx = (currentFruitIdx + (dir === "next" ? 1 : -1) + currentFruitList.length) % currentFruitList.length;
  renderFruitDetail(currentFruitIdx);
  speakFruitDetail();
}

// ============================================
// 🧒 BODY PARTS DATA + LOGIC
// ============================================

const BODY_PARTS = [
  // name, emoji, fact, hotspot position (top%, left%), size(px)
  { name:"Head",       emoji:"🗣️",  fact:"Our head holds our brain. The brain controls everything!",  top:2,   left:36, size:52 },
  { name:"Hair",       emoji:"💇",  fact:"Hair grows from our head and keeps us warm!",                top:2,   left:58, size:38 },
  { name:"Eyes",       emoji:"👁️",  fact:"We have two eyes to see the beautiful world around us!",    top:12,  left:38, size:40 },
  { name:"Ears",       emoji:"👂",  fact:"We have two ears to hear sounds and music!",                 top:14,  left:14, size:40 },
  { name:"Nose",       emoji:"👃",  fact:"Our nose helps us smell flowers and yummy food!",            top:17,  left:60, size:38 },
  { name:"Mouth",      emoji:"👄",  fact:"We use our mouth to eat, talk and smile!",                   top:23,  left:36, size:40 },
  { name:"Neck",       emoji:"🦒",  fact:"Our neck holds our head up tall and straight!",              top:28,  left:58, size:36 },
  { name:"Shoulders",  emoji:"🏋️",  fact:"Strong shoulders help us carry things!",                    top:33,  left:14, size:42 },
  { name:"Arms",       emoji:"💪",  fact:"We have two arms. Arms help us hug and reach!",              top:43,  left:14, size:40 },
  { name:"Hands",      emoji:"🖐️",  fact:"We have two hands with five fingers each!",                 top:58,  left:14, size:42 },
  { name:"Fingers",    emoji:"🤚",  fact:"We have ten fingers — five on each hand!",                   top:58,  left:58, size:38 },
  { name:"Chest",      emoji:"🫀",  fact:"Our chest protects our heart and lungs inside!",             top:38,  left:38, size:44 },
  { name:"Tummy",      emoji:"🫃",  fact:"Our tummy digests all the yummy food we eat!",               top:50,  left:60, size:40 },
  { name:"Legs",       emoji:"🦵",  fact:"We have two legs that help us walk, run and jump!",          top:68,  left:36, size:44 },
  { name:"Knees",      emoji:"🦿",  fact:"Knees help our legs bend when we sit or run!",               top:77,  left:14, size:38 },
  { name:"Feet",       emoji:"🦶",  fact:"We have two feet with five toes each — for balance!",        top:90,  left:38, size:42 }
];

let activeBodyPartIdx = -1;

function initBodyParts() {
  buildBodyFigure();
  buildBodyPartsGrid();
}

function buildBodyFigure() {
  const figure = document.getElementById("bodyFigure");
  if (!figure || figure.children.length > 0) return;

  BODY_PARTS.forEach((part, idx) => {
    const btn = document.createElement("button");
    btn.className = "body-hotspot";
    btn.title = part.name;
    btn.setAttribute("aria-label", part.name);
    btn.style.cssText = `
      top:${part.top}%; left:${part.left}%;
      width:${part.size}px; height:${part.size}px;
      font-size:${Math.round(part.size * 0.52)}px;
    `;
    btn.textContent = part.emoji;
    btn.addEventListener("click", () => selectBodyPart(idx));
    figure.appendChild(btn);
  });
}

function buildBodyPartsGrid() {
  const grid = document.getElementById("bodyPartsGrid");
  if (!grid || grid.children.length > 0) return;

  BODY_PARTS.forEach((part, idx) => {
    const card = document.createElement("div");
    card.className = "bp-card";
    card.id = `bpCard_${idx}`;
    card.innerHTML = `
      <div class="bp-emoji">${part.emoji}</div>
      <div class="bp-name">${part.name}</div>`;
    card.addEventListener("click", () => selectBodyPart(idx));
    grid.appendChild(card);
  });
}

function selectBodyPart(idx) {
  activeBodyPartIdx = idx;
  const part = BODY_PARTS[idx];

  // Update info card with animated re-render
  const infoCard = document.getElementById("bodyInfoCard");
  infoCard.style.background = `linear-gradient(135deg, ${getBodyColor(idx)}22, #fff)`;

  const emojiEl = document.getElementById("biEmoji");
  const nameEl  = document.getElementById("biName");
  const factEl  = document.getElementById("biFact");
  const speakBtn = document.getElementById("bodySpeakBtn");

  // Restart animation
  emojiEl.style.animation = "none";
  void emojiEl.offsetWidth;
  emojiEl.style.animation = "bodyInfoPop .5s cubic-bezier(.34,1.56,.64,1)";

  emojiEl.textContent = part.emoji;
  nameEl.textContent  = part.name;
  factEl.textContent  = part.fact;
  speakBtn.style.display = "inline-flex";

  // Highlight hotspot
  document.querySelectorAll(".body-hotspot").forEach((btn, i) => {
    btn.classList.toggle("active-part", i === idx);
  });
  // Highlight grid card
  document.querySelectorAll(".bp-card").forEach((c, i) => {
    c.classList.toggle("active-part", i === idx);
  });

  // Auto speak
  speak(`${part.name}! ${part.fact}`);
  addStar(1);
}

function speakBodyPart() {
  if (activeBodyPartIdx < 0) return;
  const part = BODY_PARTS[activeBodyPartIdx];
  speak(`${part.name}! ${part.fact}`);
}

function getBodyColor(idx) {
  const colors = ["#FF6B9D","#4D96FF","#6BCB77","#FFD93D","#C77DFF","#48CAE4","#FF9A3C"];
  return colors[idx % colors.length];
}
