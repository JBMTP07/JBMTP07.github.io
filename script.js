// ================================================================
// TRANSLATIONS
// ================================================================
const t = {
  de: {
    nav_about:    'Über mich',
    nav_skills:   'Skills',
    nav_projects: 'Projekte',
    nav_talks:    'Talks',
    nav_contact:  'Kontakt',
    hero_tagline: 'Ich breche Systeme. Bevor es andere tun.',
    hero_roles:   ['Penetration Tester', 'Bug Bounty Researcher', 'Red Teamer'],
    cta_contact:  'Kontakt',
    cta_cv:       'Lebenslauf',
    about_title:  'Über mich',
    about_whoami: 'Angehender Penetration Tester mit praktischem Ansatz und breitem technischem Fundament. Seit 2020 aktiv in privaten Bug-Bounty-Programmen, regelmäßig auf HackTheBox und im eigenen Security Lab unterwegs.',
    about_focus:  'Bug Bounty · 20+ Findings · RCE / XSS / SQLi · HackTheBox · Red Team · Homelab',
    skills_title: 'Skills',
    sk_offensive: 'Offensive Security',
    sk_tools:     'Tools',
    sk_scripting: 'Scripting',
    sk_networks:  'Netzwerke',
    sk_os:        'Betriebssysteme',
    sk_cloud:     'Cloud & DevOps',
    projects_title:  'Projekte',
    proj_htb_title:  'HTB Writeups',
    proj_htb_desc:   'Deutsche Writeups für retired HackTheBox Machines. Dokumentierte Methodik von Recon bis Post-Exploitation.',
    proj_notes_title:'Study Notes',
    proj_notes_desc: 'Strukturierte Methodik-Sammlung: Linux Privesc, AD-Angriffe, Nmap-Enumeration, Burp-Workflow und mehr.',
    proj_lab_title:  'Security Homelab',
    proj_lab_desc:   'Raspberry Pi-basiertes Testlabor mit Metasploitable und weiteren Vulnerable-Machine-Umgebungen für praktische Übungen.',
    proj_bb_title:   'Bug Bounty',
    stat_findings: 'Bestätigte Findings',
    stat_classes:  'Vuln-Klassen',
    stat_since:    'Aktiv seit',
    stat_programs: 'Private Programme',
    proj_bb_desc:    'Über 20 bestätigte Findings in privaten / invite-only Programmen via HackerOne und Bugcrowd seit 2020. Vuln-Klassen: RCE, XSS, SQLi. Details unter NDA.',
    talks_title:   'Talks & Bildung',
    talks_heading: 'Gastredner – KI & Cybersecurity',
    talks_desc:    'Ehrenamtliche Vorträge an bisher 5–10 Schulen für Schüler und Lehrkräfte. Themen: Large Language Models (LLMs), KI-Sicherheitsrisiken und Grundlagen der Cybersecurity. Eigeninitiative, wachsendes Netzwerk an Schulkooperationen.',
    talks_tag1:  '5–10 Schulen',
    talks_tag2:  'KI-Sicherheit',
    talks_tag3:  'Ehrenamtlich',
    certs_title: 'Zertifizierungen',
    certs_sub:   'Kurse abgeschlossen über New Horizons (zertifizierter Bildungsträger). Prüfungen ab Mai 2026.',
    cert_status: 'In Vorbereitung',
    contact_title:    'Kontakt',
    contact_sub:      'Offen für Positionen im Bereich Penetration Testing, Red Team und Security Research.',
    contact_location: 'Deutschland · Remote weltweit',
    footer_text: 'Gebaut mit HTML, CSS & JS',
  },
  en: {
    nav_about:    'About',
    nav_skills:   'Skills',
    nav_projects: 'Projects',
    nav_talks:    'Talks',
    nav_contact:  'Contact',
    hero_tagline: 'I break systems. Before others do.',
    hero_roles:   ['Penetration Tester', 'Bug Bounty Researcher', 'Red Teamer'],
    cta_contact:  'Contact',
    cta_cv:       'Resume',
    about_title:  'About Me',
    about_whoami: 'Aspiring penetration tester with a hands-on approach and broad technical foundation. Actively participating in private bug bounty programs since 2020, regularly working on HackTheBox and running my own security lab.',
    about_focus:  'Bug Bounty · 20+ Findings · RCE / XSS / SQLi · HackTheBox · Red Team · Homelab',
    skills_title: 'Skills',
    sk_offensive: 'Offensive Security',
    sk_tools:     'Tools',
    sk_scripting: 'Scripting',
    sk_networks:  'Networks',
    sk_os:        'Operating Systems',
    sk_cloud:     'Cloud & DevOps',
    projects_title:  'Projects',
    proj_htb_title:  'HTB Writeups',
    proj_htb_desc:   'German-language writeups for retired HackTheBox machines. Documented methodology from recon to post-exploitation.',
    proj_notes_title:'Study Notes',
    proj_notes_desc: 'Structured methodology collection: Linux PrivEsc, AD attacks, Nmap enumeration, Burp workflow, and more.',
    proj_lab_title:  'Security Homelab',
    proj_lab_desc:   'Raspberry Pi-based test lab running Metasploitable and other vulnerable machine environments for hands-on practice.',
    proj_bb_title:   'Bug Bounty',
    stat_findings: 'Valid Findings',
    stat_classes:  'Vulnerability Classes',
    stat_since:    'Active Since',
    stat_programs: 'Private Programs',
    proj_bb_desc:    '20+ valid findings in private / invite-only programs via HackerOne and Bugcrowd since 2020. Vuln classes: RCE, XSS, SQLi. Details under NDA.',
    talks_title:   'Talks & Education',
    talks_heading: 'Guest Speaker – AI & Cybersecurity',
    talks_desc:    'Voluntary talks at 5–10 schools for students and teachers. Topics: Large Language Models (LLMs), AI security risks, and cybersecurity fundamentals. Self-initiated, growing network of school partnerships.',
    talks_tag1:  '5–10 Schools',
    talks_tag2:  'AI Security',
    talks_tag3:  'Volunteer',
    certs_title: 'Certifications',
    certs_sub:   'Courses completed via New Horizons (certified training provider). Exams scheduled from May 2026.',
    cert_status: 'In Progress',
    contact_title:    'Contact',
    contact_sub:      'Open to positions in penetration testing, red team, and security research.',
    contact_location: 'Germany · Remote worldwide',
    footer_text: 'Built with HTML, CSS & JS',
  }
};

// ================================================================
// STATE
// ================================================================
let lang = localStorage.getItem('lang') || 'de';
let roleIdx = 0, charIdx = 0, deleting = false;
let typingTimer = null;

// ================================================================
// I18N
// ================================================================
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  localStorage.setItem('lang', l);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[l][key] !== undefined) el.textContent = t[l][key];
  });

  document.getElementById('lang-btn').textContent = l === 'de' ? 'EN' : 'DE';

  clearTimeout(typingTimer);
  charIdx = 0;
  deleting = false;
  document.querySelector('.typing-text').textContent = '';
  tick();
}

// ================================================================
// TYPING ANIMATION
// ================================================================
function tick() {
  const roles = t[lang].hero_roles;
  const word  = roles[roleIdx % roles.length];
  const el    = document.querySelector('.typing-text');

  if (deleting) {
    el.textContent = word.slice(0, --charIdx);
  } else {
    el.textContent = word.slice(0, ++charIdx);
  }

  if (!deleting && charIdx === word.length) {
    typingTimer = setTimeout(() => { deleting = true; tick(); }, 2400);
    return;
  }
  if (deleting && charIdx === 0) {
    deleting = false;
    roleIdx++;
  }

  typingTimer = setTimeout(tick, deleting ? 42 : 90);
}

// ================================================================
// NAV — SCROLL SHADOW
// ================================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ================================================================
// HAMBURGER
// ================================================================
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  })
);

// ================================================================
// LANGUAGE SWITCH
// ================================================================
document.getElementById('lang-btn').addEventListener('click', () => {
  applyLang(lang === 'de' ? 'en' : 'de');
});

// ================================================================
// FADE IN ON SCROLL
// ================================================================
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// ================================================================
// INIT
// ================================================================
applyLang(lang);
