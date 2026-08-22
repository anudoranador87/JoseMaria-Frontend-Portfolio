/* ================================================================
   Jose Aparicio — Web CV
   script.js — actualizado 23/03/2026
   ================================================================ */

/* ═══════════════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════════════ */
const LANGS = {
  en: {
    'nav.about':      'About',
    'nav.whytech':    'Why Tech',
    'nav.certs':      'Certificates',
    'nav.skills':     'Skills',
    'nav.projects':   'Projects',
    'nav.exp':        'Experience',
    'nav.contact':    'Contact',
    'mast.role':      'IT Support &amp; Front-End Developer',
    'mast.open':      'IT Support &amp; Technical Support · Málaga / Hybrid / Remote · Open to opportunities',
    'mast.avail':     'Available · Remote / Hybrid',
    'mast.tagline':   'Troubleshooting systems, building practical solutions, and documenting what works.',
    'mast.quote':     '"I build with logic, test with discipline, and ship with purpose."',
    'cert.done':      '✓ Completed',
    'cert.progress':  'In progress',
    'cert.certified': '✓ Certified',
    'edu.section':    'Education &amp; Certifications',
    'edu1.title':     'BEd in Physical Education',
    'edu1.org':       'University of Málaga',
    'edu1.desc':      'Pedagogical and communication skills essential for technical documentation and team collaboration. Focus on planning, objective tracking, and performance analysis.',
    'edu2.title':     'Meta Front-End Developer Certificate',
    'edu2.desc':      'React, JavaScript, HTML/CSS. 3 courses completed — 91% average in 30 days.',
    'edu3.title':     'Responsive Web Design &amp; JavaScript',
    'edu3.desc':      'Working through the Responsive Web Design and JavaScript certifications.',
    'edu4.title':     'English — C1+ Functional Level',
    'edu4.desc':      'Team leadership of 15+ staff in English at Rivermead Leisure Centre. Functional level significantly exceeds the certification.',
    'exp.section':    'Core Experience',
    'exp2.period':    '2026 — Now',
    'exp2.title':     'IT Support & Front-End Developer',
    'exp2.company':   'Self-directed · Meta · freeCodeCamp',
    'exp2.desc':      '3 Meta certificates completed with 91% average in 30 days. Real projects documented daily: Campus &amp; Crema, MiniShop JS, We Playing Cards, EquiShift, Technical Documentation Page. Stack: HTML5, CSS3, JavaScript, React, Git, GitHub.<br><br>Stack expanded to React + Vite in 2026: Campus &amp; Crema migrated to React, EquiShift React dashboard.<br><br>46 documented study sessions published as an engineering journal — every bug, every decision, every mistake on record.',
    'exp2.ongoing':   'Ongoing',
    'skills.section': 'Professional Skills &amp; Tech Stack',
    'skills.intro':   'Combining 8+ years of operational experience with hands-on IT Support practice and a Front-End development background.',
    'skills.core':    'Core Strengths',
    'skills.tech':    'Technical Stack',
    'soft.lead':      'Team Leadership:',
    'soft.lead.desc': '8 years managing multidisciplinary teams under real pressure.',
    'soft.problem':   'Problem Solving:',
    'soft.problem.desc': 'Incidents without instruction manuals, in real time.',
    'soft.intl':      'International Experience:',
    'soft.intl.desc': 'UK and Spain. Multicultural teams.',
    'soft.pressure':  'Work Under Pressure:',
    'soft.pressure.desc': 'Airport terminals and high-volume hotels.',
    'soft.self':      'Self-directed learning',
    'soft.self.desc': '27+ days documented, real bugs included.',
    'soft.comm':      'Communication',
    'soft.comm.desc': 'Spanish native · Full professional English.',
    'tech.html':      'Semantic structure, accessibility, document architecture.',
    'tech.css':       'Flexbox, Grid, responsive design, CSS variables.',
    'tech.js':        'DOM, OOP, async/await, fetch, array methods, localStorage',
    'tech.react':     'components, useState, useReducer, React Router, Vite',
    'proj.section':   'Featured Portfolio',
    'proj.intro':     'Selected projects showing how I investigate problems, build practical solutions and document technical decisions.',
    'proj.personal':  'Personal Projects',
    'proj.meta':      'Meta Front-End Specialization',
    'proj.fcc':       'freeCodeCamp: Responsive Web Design',
    'proj.equishift': 'Shift rotation algorithm for mixed-contract hospitality teams. Built to solve an unfair manual process, validated over 104 weekends, and tested against holidays/night constraints.',
    'proj.campus':    'Café website migrated from vanilla JS to React + Vite, deployed on Vercel. Components: Navbar, Carousel, Menu, ReservationForm, Footer. IntersectionObserver animations. Responsive design.',
    'proj.minishop':  'Shopping cart module built with OOP using <code>Product</code> and <code>Cart</code> classes. Implemented totals/removal logic with <code>reduce()</code> and <code>filter()</code>, then documented and fixed 6 bugs.',
    'proj.mangata':   'Jewelry landing page with semantic HTML and advanced CSS. Typography hierarchy, micro-interactions and UI polish.',
    'proj.cards':     'Interactive card layout using Flexbox, CSS 3D Transforms and advanced Filter effects. Level-up system with circular state logic.',
    'proj.docs.title':'Technical Documentation Page',
    'proj.docs.desc': 'Fixed lateral navbar, smooth scroll and CSS variable system consistent with the Dev Log. Instead of the standard freeCodeCamp example, I documented my own learning process.',
    'proj.landing.title': 'Product Landing Page',
    'proj.landing.desc':  'Responsive landing page with Flexbox, sticky nav and modern UX. freeCodeCamp Responsive Web Design certification.',
    'proj.repo':      'View Repo',
    'proj.readlog':   'Read diary →',
    'checkin.section':  'Career Narrative',
    'checkin.section2': 'Why Tech · Why Now',
    'checkin.kicker':   'Career Transition · Version 2.0',
    'checkin.headline': 'From Check-in to Code-in',
    'checkin.body':     'From front-desk operations to front-end development — I bring a unique perspective on user needs, combined with hands-on experience in HTML, CSS, JavaScript and React. This transition at 39 is not a <em>"reboot"</em>. It\'s a calculated system <strong>upgrade</strong>. I\'m not discarding my years in hospitality — I\'m <strong>deploying Version 2.0</strong> of myself and refactoring my background into a high-performance tech profile.',
    'checkin.body2':    'Transitioning into technology at 39 is not a <em>"reboot"</em> — it is a calculated system <strong>upgrade</strong>. I am not discarding my years in hospitality. <strong>I am deploying Version 2.0</strong> of myself and refactoring my background into a high-performance tech profile.',
    'checkin.cta.es':   'Ver Progreso Diario (Español)',
    'checkin.cta.daily':'View Daily Progress',
    'a11y.skip':        'Skip to main content',
    'cta.pdf':          'Download CV PDF',
    'cta.hire':         'Hire Me',
    'eq.kpi1':          '104 weekends validated',
    'eq.kpi2':          '14 Malaga holidays configured',
    'eq.kpi3':          'Fairness rules tested across mixed contracts',
    'impact.section':      'What I can deliver in 30 days',
    'impact.ui.title':     'Responsive UI delivery',
    'impact.ui.desc':      'Build accessible and responsive pages from Figma or references using semantic HTML and scalable CSS architecture.',
    'impact.api.title':    'API integration basics',
    'impact.api.desc':     'Connect front-end views to REST APIs, handle loading and errors, and keep components understandable and maintainable.',
    'impact.refactor.title':'Legacy refactor support',
    'impact.refactor.desc': 'Improve existing CSS/JS modules, reduce repetition, and document decisions so the team can keep shipping safely.',
    'impact.learn.title':   'Currently deepening',
    'impact.learn.desc':    'React patterns, custom hooks, and algorithm problem-solving — active 9-month CodeWars plan running to January 2027.',
    'analytics.title':      'CTA Click Analytics (Local)',
    'analytics.refresh':    'Refresh',
    'analytics.reset':      'Reset counters',
    'analytics.empty':      'No CTA clicks registered yet.',
    'checkin.cta.log':  'Read the Dev Log →',
    'why1.title':       'The mindset was already there',
    'why1.body':        '8 years resolving incidents without a manual, in real time, under pressure. That\'s <strong>debugging</strong>. I was already doing it — now I\'m doing it in code.',
    'why2.title':       'Problem-first building',
    'why2.body':        'EquiShift started from a real scheduling pain point at work. I translated that operational issue into requirements, built the logic in JavaScript, and validated fairness with real scenarios.',
    'why3.title':       '365 days of public accountability',
    'why3.body':        'I document bugs, decisions and fixes to show execution quality over time. This creates traceability, faster iteration, and clearer technical communication.',
    'why4.title':       'Why now? Because the tools exist',
    'why4.body':        'Meta, freeCodeCamp, GitHub — the barrier to entry has never been lower. The barrier to <strong>commitment</strong> hasn\'t changed. That\'s where I have the advantage.',
    'devlog.kicker':  'My biggest differentiator',
    'devlog.headline':'365 days of learning.<br>Built, tested, documented.',
    'devlog.sub':     "Each entry logs bugs, architecture decisions, and shipped iterations. It demonstrates how I debug, prioritize, and improve code in a repeatable way.",
    'devlog.days':    '46 Entries written',
    'devlog.bugs':    'Bugs documented',
    'devlog.proj':    'Projects live',
    'devlog.avg':     'Cert average',
    'devlog.cta':     'Read the full Dev Log',
    'devlog.all':     'View all entries →',
    'entry17':        'Arrow Functions, five failed attempts and a "click" that changes how I think about code.',
    'entry9':         'EquiShift Málaga: the day I started coding labour justice.',
    'footer.copy':    '© 2026 Jose Aparicio · Málaga, España · Built by hand, line by line.',
    'pdf.btn':        'Download CV — PDF',
  },

  es: {
    'nav.about':      'Sobre mí',
    'nav.whytech':    'Por qué Tech',
    'nav.certs':      'Certificados',
    'nav.skills':     'Skills',
    'nav.projects':   'Proyectos',
    'nav.exp':        'Experiencia',
    'nav.contact':    'Contacto',
    'mast.role':      'IT Support &amp; Front-End Developer',
    'mast.open':      'IT Support &amp; Technical Support · Málaga / Híbrido / Remoto · Abierto a oportunidades',
    'mast.avail':     'Disponible · Remoto / Híbrido',
    'mast.tagline':   'Resolviendo problemas técnicos, construyendo soluciones prácticas y documentando lo que funciona.',
    'mast.quote':     '"Construyo con lógica, pruebo con disciplina y entrego con propósito."',
    'cert.done':      '✓ Completado',
    'cert.progress':  'En progreso',
    'cert.certified': '✓ Certificado',
    'edu.section':    'Formación &amp; Certificaciones',
    'edu1.title':     'Grado en Educación Física',
    'edu1.org':       'Universidad de Málaga',
    'edu1.desc':      'Habilidades pedagógicas y de comunicación esenciales para documentación técnica y trabajo en equipo. Enfoque en planificación, seguimiento de objetivos y análisis del rendimiento.',
    'edu2.title':     'Certificado Meta Front-End Developer',
    'edu2.desc':      'React, JavaScript, HTML/CSS. 3 cursos completados — media del 91% en 30 días.',
    'edu3.title':     'Diseño Web Responsive &amp; JavaScript',
    'edu3.desc':      'Avanzando en las certificaciones de Diseño Web Responsive y JavaScript.',
    'edu4.title':     'Inglés — Nivel Funcional C1+',
    'edu4.desc':      'Liderazgo de equipos de más de 15 personas en inglés en Rivermead Leisure Centre (Reino Unido). El nivel funcional supera significativamente la certificación.',
    'exp.section':    'Experiencia Principal',
    'exp2.period':    '2026 — Actualidad',
    'exp2.title':     'IT Support & Front-End Developer',
    'exp2.company':   'Autodidacta · Meta · freeCodeCamp',
    'exp2.desc':      '3 certificados Meta completados con media del 91% en 30 días. Proyectos reales documentados diariamente: Campus &amp; Crema, MiniShop JS, We Playing Cards, EquiShift, Página de Documentación Técnica. Stack: HTML5, CSS3, JavaScript, React, Git, GitHub.<br><br>Stack ampliado a React + Vite en 2026: Campus &amp; Crema migrado a React, EquiShift React dashboard.<br><br>46 sesiones de estudio documentadas publicadas como diario de ingeniería — cada bug, cada decisión, cada error, en el registro.',
    'exp2.ongoing':   'En curso',
    'skills.section': 'Habilidades Profesionales &amp; Stack Técnico',
    'skills.intro':   'Combinando más de 8 años de experiencia operativa con práctica real en IT Support y desarrollo Front-End.',
    'skills.core':    'Fortalezas Principales',
    'skills.tech':    'Stack Técnico',
    'soft.lead':      'Liderazgo de equipos:',
    'soft.lead.desc': '8 años gestionando equipos multidisciplinares bajo presión real.',
    'soft.problem':   'Resolución de problemas:',
    'soft.problem.desc': 'Incidencias sin manual de instrucciones, en tiempo real.',
    'soft.intl':      'Experiencia Internacional:',
    'soft.intl.desc': 'UK y España. Equipos multiculturales.',
    'soft.pressure':  'Trabajo Bajo Presión:',
    'soft.pressure.desc': 'Terminales de aeropuerto y hoteles de alto volumen.',
    'soft.self':      'Aprendizaje autodidacta',
    'soft.self.desc': '27+ días documentados, errores reales incluidos.',
    'soft.comm':      'Comunicación',
    'soft.comm.desc': 'Español nativo · Inglés profesional completo.',
    'tech.html':      'Estructura semántica, accesibilidad, arquitectura de documentos.',
    'tech.css':       'Flexbox, Grid, diseño responsive, variables CSS.',
    'tech.js':        'DOM, POO, async/await, fetch, métodos de array, localStorage',
    'tech.react':     'componentes, useState, useReducer, React Router, Vite',
    'proj.section':   'Portfolio Destacado',
    'proj.intro':     'Proyectos seleccionados que muestran cómo investigo problemas, construyo soluciones prácticas y documento decisiones técnicas.',
    'proj.personal':  'Proyectos Personales',
    'proj.meta':      'Especialización Meta Front-End',
    'proj.fcc':       'freeCodeCamp: Diseño Web Responsive',
    'proj.equishift': 'Algoritmo de rotación de turnos para plantillas multicontrato. Lo construí para resolver un proceso manual injusto, lo validé en 104 fines de semana y lo probé con restricciones de festivos/noches.',
    'proj.campus':    'Web de cafetería migrada de JS vanilla a React + Vite, desplegada en Vercel. Componentes: Navbar, Carousel, Menu, ReservationForm, Footer. Animaciones con IntersectionObserver. Responsive.',
    'proj.minishop':  'Módulo de carrito construido con POO usando clases <code>Product</code> y <code>Cart</code>. Implementé la lógica de totales/eliminación con <code>reduce()</code> y <code>filter()</code>, y documenté/corregí 6 bugs.',
    'proj.mangata':   'Landing page de joyería con HTML semántico, CSS avanzado y micro-interacciones. Proyecto del curso Meta Front-End.',
    'proj.cards':     'Maquetación interactiva con Flexbox, CSS 3D Transforms y efectos Filter. Sistema de niveles con lógica de estado circular.',
    'proj.docs.title':'Página de Documentación Técnica',
    'proj.docs.desc': 'Navbar fija lateral, scroll suave y variables CSS coherentes con el Dev Log. En lugar del ejemplo de freeCodeCamp, documenté mi propio proceso de aprendizaje.',
    'proj.landing.title': 'Product Landing Page',
    'proj.landing.desc':  'Landing page responsive con Flexbox, nav sticky y UX moderna. Certificación Responsive Web Design de freeCodeCamp.',
    'proj.repo':      'Ver Repo',
    'proj.readlog':   'Ver diario →',
    'checkin.section':  'Narrativa Profesional',
    'checkin.section2': 'Por qué Tech · Por qué Ahora',
    'checkin.kicker':   'Transición Profesional · Versión 2.0',
    'checkin.headline': 'Del Check-in al Code-in',
    'checkin.body':     'De las operaciones de recepción al desarrollo front-end — aporto una perspectiva única sobre las necesidades del usuario, combinada con experiencia práctica en HTML, CSS, JavaScript y React. Esta transición a los 39 no es un <em>"reinicio"</em>. Es un <strong>upgrade</strong> calculado del sistema. No estoy descartando mis años en hostelería — estoy <strong>desplegando la Versión 2.0</strong> de mí mismo y refactorizando mi background en un perfil tech de alto rendimiento.',
    'checkin.body2':    'Hacer la transición a la tecnología a los 39 no es un <em>"reinicio"</em> — es un <strong>upgrade</strong> calculado del sistema. No estoy descartando mis años en hostelería. <strong>Estoy desplegando la Versión 2.0</strong> de mí mismo y refactorizando mi background en un perfil tech de alto rendimiento.',
    'checkin.cta.es':   'Ver Progreso Diario (Español)',
    'checkin.cta.daily':'Ver progreso diario',
    'a11y.skip':        'Saltar al contenido principal',
    'cta.pdf':          'Descargar CV PDF',
    'cta.hire':         'Contrátame',
    'eq.kpi1':          '104 fines de semana validados',
    'eq.kpi2':          '14 festivos de Malaga configurados',
    'eq.kpi3':          'Reglas de equidad testadas en contratos mixtos',
    'impact.section':      'Lo que puedo entregar en 30 dias',
    'impact.ui.title':     'Entrega de UI responsive',
    'impact.ui.desc':      'Construyo interfaces accesibles y responsive desde Figma o referencias usando HTML semantico y CSS escalable.',
    'impact.api.title':    'Integracion basica de APIs',
    'impact.api.desc':     'Conecto vistas front-end con APIs REST, gestiono estados de carga/errores y mantengo el codigo facil de mantener.',
    'impact.refactor.title':'Soporte de refactor legacy',
    'impact.refactor.desc': 'Mejoro modulos CSS/JS existentes, reduzco repeticion y documento decisiones para que el equipo siga entregando con seguridad.',
    'impact.learn.title':   'Profundizando actualmente',
    'impact.learn.desc':    'Patrones de React, custom hooks y resolución de problemas de algoritmos — plan activo de 9 meses en CodeWars hasta enero de 2027.',
    'analytics.title':      'Analitica local de clics CTA',
    'analytics.refresh':    'Actualizar',
    'analytics.reset':      'Resetear contadores',
    'analytics.empty':      'Todavia no hay clics registrados en CTAs.',
    'checkin.cta.log':  'Leer el Dev Log →',
    'why1.title':       'La mentalidad ya estaba ahí',
    'why1.body':        '8 años resolviendo incidencias sin manual, en tiempo real, bajo presión. Eso es <strong>debugging</strong>. Ya lo hacía — ahora lo hago en código.',
    'why2.title':       'Construcción guiada por problemas',
    'why2.body':        'EquiShift nació de un problema real de planificación. Convertí esa necesidad operativa en requisitos, construí la lógica en JavaScript y validé la equidad con escenarios reales.',
    'why3.title':       '365 días de responsabilidad pública',
    'why3.body':        'Documento bugs, decisiones y correcciones para mostrar calidad de ejecución en el tiempo. Esto aporta trazabilidad, iteración más rápida y mejor comunicación técnica.',
    'why4.title':       '¿Por qué ahora? Porque las herramientas existen',
    'why4.body':        'Meta, freeCodeCamp, GitHub — la barrera de entrada nunca ha sido más baja. La barrera del <strong>compromiso</strong> no ha cambiado. Ahí es donde tengo la ventaja.',
    'devlog.kicker':  'Mi mayor diferenciador',
    'devlog.headline':'365 días de aprendizaje.<br>Construido, probado, documentado.',
    'devlog.sub':     'Cada entrada registra bugs, decisiones de arquitectura e iteraciones entregadas. Muestra cómo depuro, priorizo y mejoro código de forma repetible.',
    'devlog.days':    '46 Entradas escritas',
    'devlog.bugs':    'Bugs documentados',
    'devlog.proj':    'Proyectos publicados',
    'devlog.avg':     'Media certificados',
    'devlog.cta':     'Leer el Dev Log completo',
    'devlog.all':     'Ver todas las entradas →',
    'entry17':        'Arrow Functions, cinco intentos fallidos y un "clic" que cambia cómo pienso el código.',
    'entry9':         'EquiShift Málaga: el día que empecé a codificar justicia laboral.',
    'footer.copy':    '© 2026 Jose Aparicio · Málaga, España · Construido a mano, línea a línea.',
    'pdf.btn':        'Descargar CV — PDF',
  }
};

/* ═══════════════════════════════════════════════════════════
   I18N ENGINE
═══════════════════════════════════════════════════════════ */
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const translations = LANGS[lang];
  const elements = document.querySelectorAll('[data-i18n]');
  document.documentElement.lang = lang;

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const key = el.getAttribute('data-i18n');
    if (translations[key] !== undefined) {
      el.innerHTML = translations[key];
    }
  }
}

const langBtn = document.getElementById('btn-lang');
langBtn.addEventListener('click', function() {
  const newLang = currentLang === 'en' ? 'es' : 'en';
  applyLang(newLang);
  langBtn.textContent = newLang === 'en' ? 'ES' : 'EN';
});
applyLang(currentLang);

/* ═══════════════════════════════════════════════════════════
   CTA TRACKING
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-track]').forEach((el) => {
  el.addEventListener('click', () => {
    const key = el.getAttribute('data-track');
    const storeKey = 'cv_clicks_' + key;
    const count = Number(localStorage.getItem(storeKey) || '0') + 1;
    localStorage.setItem(storeKey, String(count));
    console.info('[CV click]', key, count);
    renderAnalytics();
  });
});

/* ═══════════════════════════════════════════════════════════
   ANALYTICS DEBUG PANEL
═══════════════════════════════════════════════════════════ */
function renderAnalytics() {
  const list = document.getElementById('analytics-list');
  if (!list) return;

  const tracked = Array.from(document.querySelectorAll('[data-track]'))
    .map((el) => el.getAttribute('data-track'))
    .filter(Boolean);
  const uniqueTracked = [...new Set(tracked)];
  const rows = uniqueTracked.map((key) => {
    const value = Number(localStorage.getItem('cv_clicks_' + key) || '0');
    return { key, value };
  }).sort((a, b) => b.value - a.value);

  list.innerHTML = '';
  const hasData = rows.some((r) => r.value > 0);
  if (!hasData) {
    const li = document.createElement('li');
    li.textContent = (LANGS[currentLang] && LANGS[currentLang]['analytics.empty']) || 'No CTA clicks registered yet.';
    list.appendChild(li);
    return;
  }
  rows.forEach((row) => {
    const li = document.createElement('li');
    li.textContent = row.key + ': ' + row.value;
    list.appendChild(li);
  });
}

const analyticsRefreshBtn = document.getElementById('analytics-refresh');
if (analyticsRefreshBtn) {
  analyticsRefreshBtn.addEventListener('click', renderAnalytics);
}

const analyticsResetBtn = document.getElementById('analytics-reset');
if (analyticsResetBtn) {
  analyticsResetBtn.addEventListener('click', () => {
    Object.keys(localStorage).forEach((k) => {
      if (k.startsWith('cv_clicks_')) localStorage.removeItem(k);
    });
    renderAnalytics();
  });
}
renderAnalytics();

/* ═══════════════════════════════════════════════════════════
   DARK MODE
═══════════════════════════════════════════════════════════ */
const btnDark = document.getElementById('theme-toggle');
btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.className = document.body.classList.contains('dark-mode')
      ? 'fas fa-sun'
      : 'fas fa-moon';
  }
});

/* ═══════════════════════════════════════════════════════════
   ANIMATE BARS ON SCROLL
═══════════════════════════════════════════════════════════ */
const animateOnScroll = () => {
  document.querySelectorAll('.skill-bar-fill, .cert-progress-fill').forEach(bar => {
    const rect = (bar.closest('[role="progressbar"]') ?? bar.parentElement).getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && bar.style.width === '') {
      bar.style.width = bar.dataset.width + '%';
    }
  });
};
window.addEventListener('scroll', animateOnScroll, { passive: true });
animateOnScroll();

/* ═══════════════════════════════════════════════════════════
   FIRST LOAD FOCUS
═══════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
  const title = document.querySelector('.masthead-name');
  if (!title) return;
  title.setAttribute('tabindex', '-1');
  title.focus({ preventScroll: true });
});

/* ═══════════════════════════════════════════════════════════
   ACTIVE NAV ON SCROLL
═══════════════════════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('here', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });



/* ═══════════════════════════════════════════════════════════
   GITHUB API — Carga dinámica de proyectos
═══════════════════════════════════════════════════════════ */
async function getGithubProjects() {
  try {
    const datos = await fetch("https://api.github.com/users/anudoranador87/repos");
    const jsondatos = await datos.json();
    const myRepos = [
      "campus-crema-react",
      "mangata-gallo-jewelry",     
      "we-playing-cards",
      "lostdesk-react",
      "Trivial-shift",
      "DeskPedia"
 
    ];
    const filtrados = jsondatos.filter(repo => myRepos.includes(repo.name));
    const contenedor = document.querySelector('#github-repos');
    filtrados.forEach(repo => {
      contenedor.innerHTML += `
        <div class="project-card">
          <div class="project-browser-bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="project-content">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available.'}</p>
            <p class="project-date">🕒 ${new Date(repo.pushed_at).toLocaleDateString('es-ES')}</p>
            <div class="project-tags">
              <span class="ptag">${repo.language || 'HTML/CSS'}</span>
              <span class="ptag">⚡ Live from GitHub</span>
            </div>
            <div class="project-actions">
              <a href="${repo.html_url}" class="btn-code" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i> Code
              </a>
              ${repo.homepage ? `<a href="${repo.homepage}" class="btn-live" target="_blank" rel="noopener noreferrer">
  <i class="fa fa-eye"></i> Demo
</a>` : ''}
            </div>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error('Error cargando repos de GitHub:', error);
  }
}
 
document.addEventListener('DOMContentLoaded', getGithubProjects);
 
