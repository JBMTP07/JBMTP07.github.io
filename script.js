/* [JB] portfolio — vanilla JS, no deps, no tracking */
(() => {
  "use strict";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- boot sequence (once per session) ---------- */
  const boot = document.getElementById("boot");
  const bootLog = document.getElementById("bootLog");
  const killBoot = () => boot && boot.classList.add("boot--off");
  if (boot && !reduced && !sessionStorage.getItem("booted")) {
    const lines = [
      ["jb@sec:~$ ./init_portfolio.sh", 0],
      ["[ OK ] loading modules: web · ad · ot-ics", 220],
      ["[ OK ] certs: security+ verified (05/2026)", 420],
      ["[ OK ] findings: 20+ (private · nda)", 600],
      ["[ OK ] access granted_", 800],
    ];
    lines.forEach(([t, d]) =>
      setTimeout(() => {
        bootLog.innerHTML += (t.startsWith("[ OK ]")
          ? '<span class="ok">[ OK ]</span>' + t.slice(6) : t) + "\n";
      }, d)
    );
    setTimeout(() => { killBoot(); sessionStorage.setItem("booted", "1"); }, 1250);
    boot.addEventListener("click", killBoot);
  } else killBoot();

  /* ---------- katakana rain (subtle, cheap) ---------- */
  const canvas = document.getElementById("rain");
  if (canvas && !reduced) {
    const ctx = canvas.getContext("2d");
    const glyphs = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01<>/{}";
    let cols, drops, fs = 15, w, h;
    const size = () => {
      w = canvas.width = innerWidth;
      h = canvas.height = innerHeight;
      cols = Math.floor(w / (fs * 2.2));
      drops = Array.from({ length: cols }, () => Math.random() * -h / fs);
    };
    size(); addEventListener("resize", size);
    let last = 0;
    const tick = (ts) => {
      requestAnimationFrame(tick);
      if (ts - last < 70) return; // ~14fps is plenty for ambience
      last = ts;
      ctx.fillStyle = "rgba(6,6,9,0.18)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = fs + "px 'IBM Plex Mono', monospace";
      drops.forEach((y, i) => {
        const x = i * fs * 2.2;
        ctx.fillStyle = Math.random() < 0.06 ? "#fcee0a" : "#00f0ff";
        ctx.fillText(glyphs[(Math.random() * glyphs.length) | 0], x, y * fs);
        drops[i] = y * fs > h && Math.random() > 0.985 ? 0 : y + 0.5;
      });
    };
    requestAnimationFrame(tick);
  }

  /* ---------- mobile nav ---------- */
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  burger?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks?.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      burger?.classList.remove("is-open");
    })
  );

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    es => es.forEach(e => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* ---------- counters (real values live in HTML — JS only animates) ---------- */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    if (reduced) return;
    const el = e.target, target = +el.dataset.count, t0 = performance.now(), dur = 900;
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.6 });
  document.querySelectorAll(".count").forEach(el => cio.observe(el));

  /* ---------- typed terminal ---------- */
  const term = document.getElementById("term");
  const termScript = () => [
    ['<span class="p">jb@sec</span>:~$ whoami', "josef_basner"],
    ['<span class="p">jb@sec</span>:~$ cat focus.txt',
     '<span class="y">web · api · active-directory · ot-ics</span>'],
    ['<span class="p">jb@sec</span>:~$ ls certs/',
     'security+.<span class="y">passed</span>  network+  linux+  pentest+  ceh_v13  <span class="r">oscp.q4</span>'],
    ['<span class="p">jb@sec</span>:~$ ./status --hiring',
     '<span class="y">open_to_work: junior_pentest · trainee</span>'],
  ];
  if (term) {
    let html = "", queue = [];
    termScript().forEach(([cmd, out]) => queue.push({ cmd, out }));
    const typeCmd = (cmd, out, done) => {
      // strip tags for typing, then swap in styled version
      const plain = cmd.replace(/<[^>]+>/g, "");
      let i = 0;
      const prefix = html;
      if (reduced) { html = prefix + cmd + "\n" + out + "\n"; term.innerHTML = html + '<span class="c"> </span>'; done(); return; }
      const t = setInterval(() => {
        i++;
        term.innerHTML = prefix + plain.slice(0, i) + '<span class="c"> </span>';
        if (i >= plain.length) {
          clearInterval(t);
          html = prefix + cmd + "\n";
          setTimeout(() => {
            html += out + "\n";
            term.innerHTML = html + '<span class="c"> </span>';
            setTimeout(done, 320);
          }, 200);
        }
      }, 34);
    };
    const tio = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      tio.unobserve(term);
      const next = () => { const it = queue.shift(); if (it) typeCmd(it.cmd, it.out, next); };
      next();
    }), { threshold: 0.4 });
    tio.observe(term);
  }

  /* ---------- nav active state ---------- */
  const sections = [...document.querySelectorAll("section[id]")];
  const navA = [...document.querySelectorAll('.nav__links a[href^="#"]')];
  const sio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    navA.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => sio.observe(s));

  /* ---------- i18n DE / EN ---------- */
  const T = {
    en: {
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.certs": "Certifications", "nav.talks": "Talks", "nav.contact": "Contact", "nav.cv": "CV",
      "hero.status": "OPEN TO WORK — Junior Pentest · Trainee",
      "hero.eyebrow": "// SECURITY RESEARCHER · GERMANY · REMOTE",
      "hero.tag1": "I break systems.", "hero.tag2": "Before someone else does.",
      "hero.sub": "Penetration testing · Web & API · Active Directory · OT/ICS. Bug bounty since 2020 — 20+ confirmed findings in private programs.",
      "hero.cta1": "Get in touch", "hero.cta2": "View résumé", "hero.scroll": "scroll",
      "hud.findings": "Confirmed findings<br>private · NDA",
      "hud.since": "Bug bounty<br>active since",
      "hud.talks": "School talks<br>AI & security",
      "hud.ot": "Mechatronics background<br>Siemens S7 · SCADA",
      "about.h": "About me",
      "about.p1": "Career changer with momentum: trained mechatronics technician (Siemens S7, SCADA), active in offensive security since 2020 — bug bounty on HackerOne and Bugcrowd, exclusively private / invite-only programs. 20+ confirmed vulnerabilities: RCE, SQLi, XSS, IDOR, auth bypass. Details under NDA.",
      "about.p2": "The OT/ICS background isn't résumé decoration: I know how a PLC behaves, why you don't just scan production systems, and where IT meets OT. Exactly the interface where industry gets burned.",
      "about.p3": "Currently: certification track via New Horizons — Security+ passed, four more exams within the next two months, OSCP planned for Q4 2026. I'm looking for a junior position or trainee program in penetration testing.",
      "sk.off": "Offensive Security", "sk.tools": "Tools", "sk.script": "Scripting",
      "sk.net": "Networking", "sk.os": "Systems",
      "sk.ot1": "Industrial control systems", "sk.ot2": "IT/OT interfaces", "sk.ot3": "Fieldbuses",
      "pr.h": "Projects",
      "pr.htb": "German-language writeups for retired HackTheBox machines. Documented methodology from recon to post-exploitation.",
      "pr.notes": "Structured methodology collection: Linux privesc, AD attacks, Nmap enumeration, Burp workflows and more.",
      "pr.lab": "Raspberry-Pi-based test lab with Metasploitable, vulnerable VMs and an isolated Active Directory for hands-on practice.",
      "pr.bb": "20+ confirmed findings in private / invite-only programs via HackerOne and Bugcrowd since 2020. Vulnerability classes: RCE, SQLi, XSS, IDOR, auth bypass. Details under NDA.",
      "ce.h": "Certifications",
      "ce.intro": "Courses completed via New Horizons (certified training provider). Security+ passed — the remaining exams follow within the next two months.",
      "ce.done": "PASSED", "ce.sched": "EXAM", "ce.sched2": "EXAM", "ce.sched3": "EXAM", "ce.sched4": "EXAM",
      "ce.plan": "PLANNED",
      "ta.h": "Talks & Education",
      "ta.t": "Guest speaker — AI & Cybersecurity",
      "ta.p": "Volunteer talks at 8 schools so far, for students and teachers. Topics: large language models, AI security risks, phishing and cybersecurity fundamentals. Self-initiated since 2024 — growing network of school partnerships.",
      "ta.tag1": "8 schools", "ta.tag2": "AI security", "ta.tag3": "Volunteer",
      "co.h": "Contact",
      "co.lead": "Open to junior positions, trainee programs and security projects. Usually replying within 48 hours.",
      "co.loc": "Germany · Remote worldwide", "co.cta": "Send an email",
      "ft.built": "Built with HTML, CSS & vanilla JS — no tracking, no cookies",
      "ft.freelance": "Freelance pentests:",
    }
  };
  const de = {}; // captured from DOM as default
  document.querySelectorAll("[data-i18n]").forEach(el => de[el.dataset.i18n] = el.innerHTML);
  T.de = de;
  const langBtn = document.getElementById("langBtn");
  const langLabel = document.querySelector("[data-lang-label]");
  const apply = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = T[lang][el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    langLabel.textContent = lang === "de" ? "EN" : "DE";
    localStorage.setItem("lang", lang);
  };
  let lang = localStorage.getItem("lang") || "de";
  if (lang !== "de") apply(lang);
  langBtn?.addEventListener("click", () => { lang = lang === "de" ? "en" : "de"; apply(lang); });
})();
