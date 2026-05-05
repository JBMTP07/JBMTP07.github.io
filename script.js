/* =============================================================
   Josef Basner — portfolio script
   i18n · audio engine · reishi particles · scroll · animations
   ============================================================= */

(function () {
  'use strict';

  /* =========== TRANSLATIONS =========== */
  const T = {
    de: {
      nav_about: 'Über mich', nav_skills: 'Skills', nav_projects: 'Projekte',
      nav_talks: 'Talks', nav_contact: 'Kontakt',
      hero_meta: 'SECURITY · RESEARCHER',
      hero_tagline: 'Ich breche Systeme. Bevor es andere tun.',
      hero_roles: ['Penetration Tester', 'Bug Bounty Researcher', 'Red Teamer', 'OT/ICS Security'],
      hero_scroll: 'SCROLL',
      cta_contact: 'Kontakt',
      cta_cv: 'Lebenslauf',
      about_title: 'Über mich',
      about_whoami: 'Penetration Tester mit praktischem Ansatz und breitem technischem Fundament. Seit 2020 aktiv in privaten Bug-Bounty-Programmen, regelmäßig auf HackTheBox und im eigenen Security Lab unterwegs.',
      about_focus: 'Bug Bounty · 20+ Findings · RCE / XSS / SQLi · HackTheBox · Red Team · OT/ICS',
      skills_title: 'Skills',
      sk_offensive: 'Offensive Security', sk_tools: 'Tools', sk_scripting: 'Scripting',
      sk_networks: 'Netzwerke', sk_os: 'Betriebssysteme', sk_ot: 'OT / ICS',
      stat_findings: 'Bestätigte Findings', stat_classes: 'Vuln-Klassen',
      stat_since: 'Aktiv seit', stat_programs: 'Private Programme',
      projects_title: 'Projekte',
      proj_htb_title: 'HTB Writeups',
      proj_htb_desc: 'Deutsche Writeups für retired HackTheBox Machines. Dokumentierte Methodik von Recon bis Post-Exploitation.',
      proj_notes_title: 'Study Notes',
      proj_notes_desc: 'Strukturierte Methodik-Sammlung: Linux Privesc, AD-Angriffe, Nmap-Enumeration, Burp-Workflow und mehr.',
      proj_lab_title: 'Security Homelab',
      proj_lab_desc: 'Raspberry Pi-basiertes Testlabor mit Metasploitable und weiteren Vulnerable-Machine-Umgebungen für praktische Übungen.',
      proj_bb_title: 'Bug Bounty',
      proj_bb_desc: 'Über 20 bestätigte Findings in privaten / invite-only Programmen via HackerOne und Bugcrowd seit 2020. Vuln-Klassen: RCE, XSS, SQLi. Details unter NDA.',
      talks_title: 'Talks & Bildung',
      talks_heading: 'Gastredner – KI & Cybersecurity',
      talks_desc: 'Ehrenamtliche Vorträge an Schulen für Schüler und Lehrkräfte. Themen: Large Language Models (LLMs), KI-Sicherheitsrisiken und Grundlagen der Cybersecurity. Eigeninitiative, wachsendes Netzwerk an Schulkooperationen.',
      talks_tag1: 'Schulvorträge', talks_tag2: 'KI-Sicherheit', talks_tag3: 'Ehrenamtlich',
      talks_more: 'Mehr erfahren',
      certs_title: 'Zertifizierungen',
      certs_sub: 'Kurse abgeschlossen über New Horizons (zertifizierter Bildungsträger). Prüfungen ab Mai 2026.',
      cert_status: 'In Vorbereitung',
      contact_title: 'Kontakt',
      contact_sub: 'Offen für Junior-Positionen, Trainee-Programme und Security-Projekte.',
      contact_loc_label: 'STANDORT',
      contact_location: 'Deutschland · Remote weltweit',
      lang_label: 'SPRACHEN',
      lang_list: 'DE · EN · RU (Grundkenntnisse) · JP (Grundkenntnisse)',
      footer_text: 'Mit Geduld erschaffen',
      footer_quote: '「強さとは、刃に出会わぬ刃のこと」',
    },
    en: {
      nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects',
      nav_talks: 'Talks', nav_contact: 'Contact',
      hero_meta: 'SECURITY · RESEARCHER',
      hero_tagline: 'I break systems. Before others do.',
      hero_roles: ['Penetration Tester', 'Bug Bounty Researcher', 'Red Teamer', 'OT/ICS Security'],
      hero_scroll: 'SCROLL',
      cta_contact: 'Contact',
      cta_cv: 'Resume',
      about_title: 'About',
      about_whoami: 'Penetration tester with a hands-on approach and a broad technical foundation. Active in private bug bounty programs since 2020, regular practice on HackTheBox, running my own security lab.',
      about_focus: 'Bug Bounty · 20+ findings · RCE / XSS / SQLi · HackTheBox · Red Team · OT/ICS',
      skills_title: 'Skills',
      sk_offensive: 'Offensive Security', sk_tools: 'Tools', sk_scripting: 'Scripting',
      sk_networks: 'Networks', sk_os: 'Operating Systems', sk_ot: 'OT / ICS',
      stat_findings: 'Valid Findings', stat_classes: 'Vulnerability Classes',
      stat_since: 'Active Since', stat_programs: 'Private Programs',
      projects_title: 'Projects',
      proj_htb_title: 'HTB Writeups',
      proj_htb_desc: 'German-language writeups for retired HackTheBox machines. Documented methodology from recon to post-exploitation.',
      proj_notes_title: 'Study Notes',
      proj_notes_desc: 'Structured methodology collection: Linux PrivEsc, AD attacks, Nmap enumeration, Burp workflow, and more.',
      proj_lab_title: 'Security Homelab',
      proj_lab_desc: 'Raspberry Pi-based test lab running Metasploitable and other vulnerable machine environments for hands-on practice.',
      proj_bb_title: 'Bug Bounty',
      proj_bb_desc: '20+ valid findings in private / invite-only programs via HackerOne and Bugcrowd since 2020. Vuln classes: RCE, XSS, SQLi. Details under NDA.',
      talks_title: 'Talks & Education',
      talks_heading: 'Guest Speaker – AI & Cybersecurity',
      talks_desc: 'Voluntary talks at schools for students and teachers. Topics: Large Language Models (LLMs), AI security risks, and cybersecurity fundamentals. Self-initiated, growing network of school partnerships.',
      talks_tag1: 'School Talks', talks_tag2: 'AI Security', talks_tag3: 'Volunteer',
      talks_more: 'Learn more',
      certs_title: 'Certifications',
      certs_sub: 'Courses completed via New Horizons (certified training provider). Exams scheduled from May 2026.',
      cert_status: 'In Progress',
      contact_title: 'Contact',
      contact_sub: 'Open to junior positions, trainee programs and security projects.',
      contact_loc_label: 'LOCATION',
      contact_location: 'Germany · Remote worldwide',
      lang_label: 'LANGUAGES',
      lang_list: 'DE · EN · RU (basic) · JP (basic)',
      footer_text: 'Made with patience',
      footer_quote: '「Strength is the blade that meets no resistance」',
    }
  };

  /* =========== STATE =========== */
  let lang = (localStorage.getItem('lang') || (navigator.language || 'de').slice(0, 2));
  if (!T[lang]) lang = 'de';
  let roleIdx = 0, charIdx = 0, deleting = false, typingTimer = null;

  /* =========== I18N =========== */
  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    localStorage.setItem('lang', l);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (T[l][key] !== undefined) el.textContent = T[l][key];
    });

    document.getElementById('lang-btn').textContent = l === 'de' ? 'EN' : 'DE';

    const cvBtn = document.getElementById('cv-btn');
    if (cvBtn) cvBtn.href = 'cv.html?lang=' + l;

    clearTimeout(typingTimer);
    charIdx = 0; deleting = false;
    const tEl = document.querySelector('.typing-text');
    if (tEl) tEl.textContent = '';
    typeTick();
  }

  /* =========== TYPING =========== */
  function typeTick() {
    const roles = T[lang].hero_roles;
    const word = roles[roleIdx % roles.length];
    const el = document.querySelector('.typing-text');
    if (!el) return;

    if (deleting) el.textContent = word.slice(0, --charIdx);
    else          el.textContent = word.slice(0, ++charIdx);

    // soft keypress sound on type
    if (!deleting && charIdx > 0 && charIdx % 2 === 0) playSound('tick', 0.18);

    if (!deleting && charIdx === word.length) {
      typingTimer = setTimeout(() => { deleting = true; typeTick(); }, 2400);
      return;
    }
    if (deleting && charIdx === 0) { deleting = false; roleIdx++; }
    typingTimer = setTimeout(typeTick, deleting ? 38 : 88);
  }

  /* =========== AUDIO ENGINE =========== */
  let audioCtx = null, muted = true, userInteracted = false;
  try { muted = localStorage.getItem('audio-on') !== '1'; } catch {}

  const ensureAudio = () => {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  };

  const sounds = {
    tick: (vol = 0.4) => {
      const ac = ensureAudio(); if (!ac) return;
      const now = ac.currentTime;
      const dur = 0.04;
      const buf = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const env = Math.exp(-i / (data.length * 0.3));
        data[i] = (Math.random() * 2 - 1) * env;
      }
      const src = ac.createBufferSource();
      const f = ac.createBiquadFilter();
      const g = ac.createGain();
      f.type = 'highpass'; f.frequency.value = 2400;
      g.gain.setValueAtTime(vol * 0.4, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + dur);
      src.buffer = buf;
      src.connect(f).connect(g).connect(ac.destination);
      src.start(now);
    },
    bell: (vol = 0.5) => {
      const ac = ensureAudio(); if (!ac) return;
      const now = ac.currentTime;
      [880, 1320, 1760].forEach((f, i) => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(f, now);
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime((vol * 0.18) / (i + 1), now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
        o.connect(g).connect(ac.destination);
        o.start(now); o.stop(now + 1.25);
      });
    },
    swish: (vol = 0.5) => {
      const ac = ensureAudio(); if (!ac) return;
      const now = ac.currentTime;
      const dur = 0.35;
      const buf = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
      const src = ac.createBufferSource();
      const f = ac.createBiquadFilter();
      const g = ac.createGain();
      f.type = 'bandpass'; f.Q.value = 1.5;
      f.frequency.setValueAtTime(400, now);
      f.frequency.exponentialRampToValueAtTime(3000, now + dur);
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(vol * 0.45, now + 0.06);
      g.gain.exponentialRampToValueAtTime(0.001, now + dur);
      src.buffer = buf;
      src.connect(f).connect(g).connect(ac.destination);
      src.start(now);
    }
  };

  const playSound = (name, vol) => {
    if (muted || !userInteracted) return;
    const fn = sounds[name];
    if (fn) fn(vol);
  };

  /* audio toggle */
  const audioBtn = document.getElementById('audio-btn');
  const updateAudioBtn = () => {
    audioBtn.classList.toggle('muted', muted);
    audioBtn.title = muted ? 'Sound off — click to enable' : 'Sound on';
  };
  if (muted) audioBtn.classList.add('has-hint');
  updateAudioBtn();

  audioBtn.addEventListener('click', () => {
    userInteracted = true;
    muted = !muted;
    try { localStorage.setItem('audio-on', muted ? '0' : '1'); } catch {}
    audioBtn.classList.remove('has-hint');
    updateAudioBtn();
    if (!muted) sounds.bell(0.4);
  });

  // First-interaction unlock (so click events can play sound immediately if already enabled)
  const unlock = () => { userInteracted = true; ensureAudio(); window.removeEventListener('pointerdown', unlock); };
  window.addEventListener('pointerdown', unlock, { once: true });

  // Wire data-sound
  document.querySelectorAll('[data-sound]').forEach((el) => {
    el.addEventListener('click', () => {
      userInteracted = true;
      playSound(el.dataset.sound);
    });
    el.addEventListener('mouseenter', () => playSound('tick', 0.15));
  });

  /* =========== NAV scroll =========== */
  const navbar = document.getElementById('navbar');
  const scrollFill = document.querySelector('.scroll-fill');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    scrollFill.style.width = pct + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* =========== Hamburger =========== */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    })
  );

  /* =========== Lang switch =========== */
  document.getElementById('lang-btn').addEventListener('click', () => {
    playSound('tick');
    applyLang(lang === 'de' ? 'en' : 'de');
  });

  /* =========== Reveal on scroll =========== */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Slash-in titles
        const title = e.target.querySelector('.slash-in');
        if (title && !title.classList.contains('in')) {
          title.classList.add('in');
          playSound('swish', 0.32);
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach((el) => io.observe(el));

  /* =========== Year =========== */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========== Hero name glitch on hover =========== */
  const heroName = document.getElementById('hero-name');
  if (heroName) {
    heroName.addEventListener('pointerenter', () => {
      heroName.classList.remove('glitch');
      void heroName.offsetWidth;
      heroName.classList.add('glitch');
      playSound('tick', 0.4);
    });
    heroName.addEventListener('animationend', () => heroName.classList.remove('glitch'));
  }

  /* =========== Card 3D tilt =========== */
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach((card) => {
    let rect = null;
    const enter = () => { rect = card.getBoundingClientRect(); };
    const move = (e) => {
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${-y * 4}deg) rotateY(${x * 6}deg) translateY(-3px)`;
    };
    const leave = () => { card.style.transform = ''; rect = null; };
    card.addEventListener('pointerenter', enter);
    card.addEventListener('pointermove', move);
    card.addEventListener('pointerleave', leave);
  });

  /* =========== Custom cursor (desktop only) =========== */
  if (window.matchMedia('(hover: hover) and (min-width: 821px)').matches) {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.body.classList.add('cursor-ready');
    document.addEventListener('pointermove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(tick);
    };
    tick();

    const interactiveSel = 'a, button, [data-tilt], .talks-card, .skill-card, .project-card, .cert-card, .contact-card';
    document.querySelectorAll(interactiveSel).forEach((el) => {
      el.addEventListener('pointerenter', () => ring.classList.add('hover'));
      el.addEventListener('pointerleave', () => ring.classList.remove('hover'));
    });
  }

  /* =========== Reishi particles =========== */
  const canvas = document.getElementById('reishi');
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const resize = () => {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  const COUNT = window.innerWidth < 720 ? 18 : 36;
  const parts = [];

  class Reishi {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x = Math.random() * W;
      this.y = initial ? Math.random() * H : H + 6;
      this.size = 0.5 + Math.random() * 1.4;
      this.speedY = -(0.18 + Math.random() * 0.55);
      this.speedX = -0.25 + Math.random() * 0.5;
      this.swing = 0.25 + Math.random() * 0.7;
      this.swingSpeed = 0.004 + Math.random() * 0.012;
      this.swingPhase = Math.random() * Math.PI * 2;
      this.life = 1.0;
      this.fade = 0.0007 + Math.random() * 0.0018;
      this.crimson = Math.random() < 0.08;  // rare crimson ember
      this.opacity = 0.18 + Math.random() * 0.4;
    }
    update(t) {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(t * this.swingSpeed + this.swingPhase) * this.swing;
      this.life -= this.fade;
      if (this.life <= 0 || this.y < -10) this.reset(false);
    }
    draw() {
      const a = this.opacity * this.life;
      if (this.crimson) {
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 5);
        grad.addColorStop(0, `rgba(255, 80, 80, ${a})`);
        grad.addColorStop(0.5, `rgba(168, 0, 26, ${a * 0.6})`);
        grad.addColorStop(1, `rgba(168, 0, 26, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(255, 220, 200, ${a})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillStyle = `rgba(232, 227, 214, ${a * 0.45})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
      }
    }
  }
  for (let i = 0; i < COUNT; i++) parts.push(new Reishi());

  let raf = true, tFrame = 0;
  const animate = () => {
    if (!raf) return;
    ctx.clearRect(0, 0, W, H);
    tFrame++;
    parts.forEach((p) => { p.update(tFrame); p.draw(); });
    requestAnimationFrame(animate);
  };
  animate();
  document.addEventListener('visibilitychange', () => {
    raf = !document.hidden;
    if (raf) animate();
  });

  /* =========== Stat count-up on visible =========== */
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    if (!Number.isFinite(target)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const start = performance.now();
        const dur = 1300;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    obs.observe(el);
  });

  /* =========== INIT =========== */
  applyLang(lang);

})();
