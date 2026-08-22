/* ================================================================
   Jose Aparicio — CV Terminal
   terminal.js
   Añade <script src="terminal.js"></script> antes de </body>
   ================================================================ */

(function () {
  const output = document.getElementById('term-output');
  const input  = document.getElementById('term-input');
  const cursor = document.getElementById('term-cursor');

  if (!output || !input) return;

  /* ── ESTADO ─────────────────────────────────────────────── */
  const history = [];
  let historyIndex = -1;

  const start = new Date('2026-01-18'); // Fecha real de inicio del reto
  const now   = new Date();
  const DAY   = Math.min(365, Math.floor((now - start) / 86400000) + 1);
  const PCT   = Math.round((DAY / 365) * 100);
  const BAR   = '█'.repeat(Math.round(PCT / 5)) + '░'.repeat(20 - Math.round(PCT / 5));

  /* ── CHALLENGES ─────────────────────────────────────────── */
  const CHALLENGES = [
    {
      prompt:  'Array: [3, 1, 4, 1, 5, 9, 2, 6]\nWhat expression returns the highest number?',
      hint:    'Tip: Math object + spread operator',
      answer:  ['math.max'],
      solution:'Math.max(...arr)  →  9',
      explain: 'Spread (...) unpacks the array into separate arguments for Math.max.',
    },
    {
      prompt:  '"apple.pie@example.com"\nHow do you get the index of "@"?',
      hint:    'Tip: string method that finds position',
      answer:  ['indexof'],
      solution:'email.indexOf("@")  →  9',
      explain: 'indexOf returns the position of the first match. -1 if not found.',
    },
    {
      prompt:  'username = "myEmail"  (7 chars)\nHow many asterisks go in the middle when masking?',
      hint:    'Tip: first and last letter are kept',
      answer:  ['5', 'username.length-2', 'length-2', 'length - 2'],
      solution:'username.length - 2  →  5',
      explain: 'Keep first and last. Everything in between becomes an asterisk.',
    },
    {
      prompt:  'const arr = ["a", "b", "c"]\nWhat does arr.pop() return?',
      hint:    'Tip: pop removes AND returns something',
      answer:  ['"c"', "'c'", 'c'],
      solution:'"c" — the removed element',
      explain: 'pop() removes the last element and returns it. The array mutates.',
    },
  ];

  let challengeIndex = 0;

  /* ── COMANDOS ───────────────────────────────────────────── */
  const COMMANDS = {
    help: () => [
      { t: 'accent', v: 'Available commands:' },
      { t: 'dim',    v: '──────────────────────────────────────' },
      { t: 'main',   v: '  whoami      →  who is Jose?' },
      { t: 'main',   v: '  hobbies     →  what does he do outside code?' },
      { t: 'main',   v: '  challenge   →  JS challenge (new one each time)' },
      { t: 'main',   v: '  contact     →  how to reach Jose' },
      { t: 'main',   v: '  secret      →  you know you want to' },
      { t: 'main',   v: '  status      →  current mission progress' },
      { t: 'main',   v: '  clear       →  clear terminal' },
      { t: 'dim',    v: '──────────────────────────────────────' },
      { t: 'dim',    v: 'Arrow keys navigate command history.' },
    ],

    whoami: () => [
      { t: 'accent', v: 'Jose Aparicio — IT Support & Front-End Developer' },
      { t: 'dim',    v: '────────────────────────────────────────────────' },
      { t: 'main',   v: '  Location   : Málaga, España' },
      { t: 'main',   v: '  Background : 8 years in hospitality management' },
      { t: 'main',   v: '  Stack      : HTML · CSS · JavaScript' },
      { t: 'main',   v: '  Building   : EquiShift — fair shift algorithm' },
      { t: 'main',   v: `  Day        : ${DAY} of 365. Still coding.` },
      { t: 'green',  v: '  Status     : Available for IT Support roles' },
      { t: 'dim',    v: '' },
      { t: 'dim',    v: 'Not a career change. A system upgrade.' },
    ],

    hobbies: () => [
      { t: 'accent', v: 'jose.hobbies — outside the terminal' },
      { t: 'dim',    v: '────────────────────────────────────' },
      { t: 'yellow', v: '  [boxing]' },
      { t: 'main',   v: '      Currently training. Debugging and sparring' },
      { t: 'main',   v: '      require the same thing: calm under pressure.' },
      { t: 'yellow', v: '  [gym]' },
      { t: 'main',   v: '      Gymrat. Iron discipline. Always fit.' },
      { t: 'main',   v: '      Same consistency as my commit history.' },
      { t: 'yellow', v: '  [basketball]' },
      { t: 'main',   v: '      Very good at it. Not modest about it either.' },
      { t: 'yellow', v: '  [cooking]' },
      { t: 'main',   v: '      Very good cook. UX and cooking: same thing.' },
      { t: 'yellow', v: '  [gaming]' },
      { t: 'main',   v: '      Passion. Can spend hours. Zero regrets.' },
      { t: 'dim',    v: '' },
      { t: 'dim',    v: 'Discipline is not a trait. It is a lifestyle.' },
    ],

    status: () => [
      { t: 'accent', v: 'Mission: become an IT Support professional' },
      { t: 'dim',    v: '──────────────────────────────────────' },
      { t: 'main',   v: `  Day         : ${DAY} / 365` },
      { t: 'main',   v: `  Progress    : [${BAR}] ${PCT}%` },
      { t: 'green',  v: '  Streak      : active' },
      { t: 'main',   v: '  Certs       : Google IT Support · Meta Front-End' },
      { t: 'main',   v: '  Focus       : Windows · Linux · Networking · Troubleshooting' },
      { t: 'main',   v: '  Next target : CompTIA A+ · October 2026' },
      { t: 'green',  v: '  Available   : IT Support / Technical Support roles' },
      { t: 'dim',    v: '' },
      { t: 'dim',    v: 'Consistency that cannot be faked.' },
    ],

    contact: () => [
      { t: 'accent', v: "jose.contact — let's talk" },
      { t: 'dim',    v: '────────────────────────────────────' },
      { t: 'cyan',   v: '  Email     : josemaparicio87@gmail.com' },
      { t: 'cyan',   v: '  LinkedIn  : linkedin.com/in/joseaparicio87' },
      { t: 'cyan',   v: '  GitHub    : github.com/anudoranador87' },
      { t: 'cyan',   v: '  WhatsApp  : wa.link/gp0oxb' },
      { t: 'dim',    v: '' },
      { t: 'dim',   v: 'Available for IT Support roles. Málaga, hybrid or remote.' },
    ],

    secret: () => [
      { t: 'dim',   v: 'accessing classified data...' },
      { t: 'dim',   v: '...' },
      { t: 'accent',v: 'CLASSIFIED: jose_aparicio.secrets' },
      { t: 'dim',   v: '──────────────────────────────────' },
      { t: 'pink',  v: '  > Learned to code at 39. Panic level: 0.' },
      { t: 'pink',  v: '  > Has debugged at 2am fueled by coffee and stubbornness.' },
      { t: 'pink',  v: '  > Once resolved a guest complaint in 3 languages.' },
      { t: 'pink',  v: '  > Thinks hospitality and UX are basically the same thing.' },
      { t: 'pink',  v: '  > Built EquiShift because the old system was unfair. Full stop.' },
      { t: 'pink',  v: '  > Learning boxing. The left hook and async/await' },
      { t: 'pink',  v: '    are both works in progress. One hits harder.' },
      { t: 'dim',   v: '' },
      { t: 'dim',   v: 'You found the easter egg. Respect.' },
    ],

    challenge: () => [{ t: '_challenge' }],

    clear: () => {
      output.innerHTML = '';
      addLine('dim', 'Terminal cleared.');
      addLine('dim', '');
      return [];
    },
  };

  const CMD_KEYS = Object.keys(COMMANDS);

  /* ── LEVENSHTEIN (sugerencia de typos) ──────────────────── */
  function closest(str) {
    let best = null, bestScore = Infinity;
    CMD_KEYS.forEach(k => {
      const a = str, b = k;
      const m = Array.from({ length: b.length + 1 }, (_, i) =>
        Array.from({ length: a.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
      );
      for (let i = 1; i <= b.length; i++)
        for (let j = 1; j <= a.length; j++)
          m[i][j] = b[i-1] === a[j-1] ? m[i-1][j-1] : 1 + Math.min(m[i-1][j], m[i][j-1], m[i-1][j-1]);
      const score = m[b.length][a.length];
      if (score < bestScore) { bestScore = score; best = k; }
    });
    return bestScore <= 3 ? best : null;
  }

  /* ── HELPERS ────────────────────────────────────────────── */
  function addLine(type, text) {
    const d = document.createElement('div');
    d.className = 't-line';
    const map = {
      accent: 't-accent', dim: 't-dim', main: 't-main',
      green: 't-green', yellow: 't-yellow', red: 't-red',
      pink: 't-pink', cyan: 't-cyan',
    };
    d.classList.add(map[type] || 't-main');
    d.textContent = text;
    output.appendChild(d);
  }

  function addPromptLine(cmd) {
    const d = document.createElement('div');
    d.className = 't-line';
    d.innerHTML = `<span class="t-prompt">jose@cv:~$</span> <span class="t-cmd">${cmd}</span>`;
    output.appendChild(d);
  }

  function scrollBottom() {
    output.scrollTop = output.scrollHeight;
  }

  /* ── CHALLENGE ──────────────────────────────────────────── */
  function showChallenge() {
    const c   = CHALLENGES[challengeIndex % CHALLENGES.length];
    const num = (challengeIndex % CHALLENGES.length) + 1;
    challengeIndex++;

    const box = document.createElement('div');
    box.className = 'term-challenge-box';
    box.innerHTML = `
      <div class="t-line t-accent" style="margin-bottom:6px">JS Challenge ${num}/${CHALLENGES.length}</div>
      <div class="t-line t-dim">──────────────────────────</div>
      <div class="t-line t-main" style="white-space:pre">${c.prompt}</div>
      <div class="t-line t-dim" style="margin-top:6px">${c.hint}</div>
      <input class="term-challenge-input" type="text" placeholder="your answer..." autocomplete="off" spellcheck="false">
    `;
    output.appendChild(box);

    const ans = box.querySelector('.term-challenge-input');
    setTimeout(() => ans && ans.focus(), 50);

    ans.addEventListener('keydown', function handler(e) {
      if (e.key !== 'Enter') return;
      ans.removeEventListener('keydown', handler);
      const norm    = ans.value.trim().toLowerCase().replace(/\s/g, '');
      const correct = c.answer.some(a => norm.includes(a.toLowerCase().replace(/\s/g, '')));
      ans.disabled  = true;
      addLine('dim', '');
      if (correct) {
        addLine('green', '  Correct. ' + c.solution);
        addLine('dim',   '  ' + c.explain);
      } else {
        addLine('red',   '  Not quite. ' + c.solution);
        addLine('dim',   '  ' + c.explain);
      }
      const left = CHALLENGES.length - (challengeIndex % CHALLENGES.length);
      addLine('dim', left > 0 && left < CHALLENGES.length
        ? `  ${left} challenge(s) left. Type 'challenge' for the next one.`
        : `  All ${CHALLENGES.length} done. Cycling back from the start.`
      );
      addLine('dim', '');
      input.focus();
      scrollBottom();
    });
    scrollBottom();
  }

  /* ── RUN ────────────────────────────────────────────────── */
  function run(cmd) {
    const trimmed = cmd.trim().toLowerCase();
    addPromptLine(cmd.trim());
    if (trimmed) { history.unshift(cmd.trim()); historyIndex = -1; }
    if (!trimmed) { scrollBottom(); return; }

    const fn = COMMANDS[trimmed];
    if (!fn) {
      addLine('red', `command not found: ${cmd.trim()}`);
      const suggestion = closest(trimmed);
      if (suggestion) addLine('dim', `Did you mean: ${suggestion}?`);
      else            addLine('dim', "Type 'help' to see available commands.");
    } else {
      fn().forEach(l => {
        if (l.t === '_challenge') { showChallenge(); return; }
        addLine(l.t, l.v);
      });
    }
    addLine('dim', '');
    scrollBottom();
  }

  /* ── BOOT ───────────────────────────────────────────────── */
  function boot() {
    addLine('accent', `Day ${DAY} of 365 — still coding.`);
    addLine('dim',    'Welcome to jose-aparicio.dev — interactive terminal v1.0');
    addLine('dim',    "Type 'help' to see available commands.");
    addLine('dim',    '');
  }

  /* ── EVENTOS ────────────────────────────────────────────── */
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      run(input.value);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) { historyIndex++; input.value = history[historyIndex]; }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      historyIndex > 0 ? (historyIndex--, input.value = history[historyIndex]) : (historyIndex = -1, input.value = '');
    }
  });

  // El foco solo se activa cuando el usuario hace clic en la terminal
  // — no al cargar la página, para evitar el scroll automático al fondo
  const terminalWrapper = output.closest('.terminal') || output.parentElement;
  if (terminalWrapper) {
    terminalWrapper.addEventListener('click', () => input.focus());
  }

  if (cursor) {
    input.addEventListener('focus', () => cursor.style.display = 'inline-block');
    input.addEventListener('blur',  () => cursor.style.display = 'none');
  }

  boot();
  document.addEventListener('click', (e) => {
    const term = e.target.closest('#terminal-section');
    if (term) input.focus();
  });
})();
