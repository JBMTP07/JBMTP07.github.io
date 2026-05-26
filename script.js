// ================================================================
// TRANSLATIONS
// ================================================================
const t = {
  de: {
    nav_about:      'Über mich',
    nav_skills:     'Skills',
    nav_experience: 'Erfahrung',
    nav_projects:   'Projekte',
    nav_contact:    'Kontakt',

    hero_available: 'Offen für Positionen',
    hero_tagline:   'Ich breche Systeme. Bevor es andere tun.',
    hero_roles:     ['Penetration Tester', 'Red Team Operator', 'Bug Bounty Researcher', 'Security Researcher'],

    cta_contact:    'Kontakt aufnehmen',
    cta_cv:         'Lebenslauf (PDF)',

    stat_years:     'Jahre Erfahrung',
    stat_vulns:     'Schwachstellen',
    stat_schools:   'Schulen',

    about_title:    'Über mich',
    about_whoami:   'Offensive-Security-Spezialist mit über 5 Jahren praktischer Erfahrung in Bug Bounty, Web- und API-Pentesting sowie Active-Directory-Angriffen. Seit 2020 aktiv in privaten Programmen auf HackerOne und Bugcrowd mit über 20 bestätigten Schwachstellen. Ausgebildeter Mechatroniker mit OT/ICS-Hintergrund (Siemens S7, SCADA) — direkter Zugang zu industrieller Security.',
    about_strengths: [
      '20+ bestätigte Findings unter NDA · saubere, reproduzierbare Reports',
      'Strukturierte Methodik: Recon → Enumerate → Exploit → Escalate → Report',
      'Doppelqualifikation Offensive Security + OT/ICS · zweisprachig DE/EN',
      'Eigeninitiative — Schul-Talks, eigenes Lab, dokumentierte Writeups',
    ],
    about_focus:    'Bug Bounty · HackTheBox · Web & API Testing · Red Team · OT/ICS Security',

    skills_title:   'Skills',
    sk_offensive:   'Offensive Security',
    sk_tools:       'Tools',
    sk_scripting:   'Scripting',
    sk_networks:    'Netzwerke',
    sk_os:          'Betriebssysteme',
    sk_ot:          'OT / ICS',

    exp_title:        'Erfahrung',
    exp_jbsec_title:  '[JB] Security — Inhaber & Freelance Pentester',
    exp_jbsec_org:    'Eigene Offensive-Security-Praxis · jbmtp07.github.io/jb-security',
    exp_jbsec_points: [
      'Eigenes Pentest-Angebot: Web Application, Active Directory, OT/ICS',
      'Manuelle Tiefenprüfung nach OWASP WSTG, PTES, NIST SP 800-115, MITRE ATT&CK',
      'Verschlüsselte Reports · NDA / AVV / TOM-konform · 2 Mio. € IT-Berufshaftpflicht',
    ],
    exp_bb_title:     'Bug Bounty Researcher',
    exp_bb_org:       'HackerOne · Bugcrowd · invite-only',
    exp_bb_points:    [
      '20+ bestätigte Schwachstellen: RCE, SQLi, XSS, IDOR, Auth-Bypass, Business-Logic-Flaws',
      'Schwerpunkt Web- & API-Schwachstellen, Recon-Automatisierung, Token-Analyse',
      'Saubere PoC-Reports · vollständige NDA- und Responsible-Disclosure-Compliance',
    ],
    exp_talks_title:  'Gastredner – KI & Cybersecurity',
    exp_talks_org:    'Schulen · ehrenamtlich',
    exp_talks_points: [
      'Vorträge an 5–10 Schulen für Schüler:innen und Lehrkräfte',
      'LLMs, KI-Sicherheitsrisiken, Phishing, Cybersecurity-Grundlagen',
      'Eigeninitiative · zielgruppengerechte Kommunikation',
    ],
    exp_mecha_title:  'Mechatroniker',
    exp_mecha_org:    'Rotan GmbH',
    exp_mecha_points: [
      'Wartung, Instandhaltung und Fehlerdiagnose industrieller Anlagen',
      'Praktische Berührungspunkte mit OT-Systemen',
    ],
    exp_appr_title:   'Ausbildung Mechatroniker',
    exp_appr_org:     'Consun Beet Company',
    exp_appr_points:  [
      'Schwerpunkte: SPS-Programmierung (Siemens S7), SCADA, Industrieautomation',
      'Direkter Bezug zu OT/ICS-Security · vollständig abgeschlossene Ausbildung',
    ],

    projects_title:    'Projekte',
    proj_jbsec_title:  '[JB] Security — Freelance Pentest Service',
    proj_jbsec_desc:   'Eigenes Offensive-Security-Angebot für Web-, Active-Directory- und OT/ICS-Pentests. Strukturierte Reports nach OWASP WSTG, PTES, NIST SP 800-115 und MITRE ATT&CK. 2 Mio. € IT-Berufshaftpflicht. Q3 2026 verfügbar.',
    proj_bbreports_title: 'Bug Bounty Reports',
    proj_bbreports_desc:  'Sanitisierte Public-Reports realer Findings — inklusive einer Chained-Exploit-Kette (SQLi → Stored XSS → SSTI → RCE, CVSS 9.9) und unauthenticated Command Injection (CVSS 9.8). Nach Coordinated Disclosure veröffentlicht.',
    proj_htb_title:    'HTB Writeups',
    proj_htb_desc:     'Deutschsprachige Writeups für retired HackTheBox Machines. Dokumentierte Methodik von Recon bis Post-Exploitation.',
    proj_notes_title:  'Study Notes',
    proj_notes_desc:   'Strukturierte Methodik-Sammlung: Linux Privesc, AD-Angriffe, Nmap-Enumeration, Burp-Workflow und mehr.',
    proj_lab_title:    'Security Homelab',
    proj_lab_desc:     'Raspberry Pi-basiertes Testlabor mit Metasploitable, isoliertem Active Directory und weiteren Vulnerable-Machine-Umgebungen.',
    proj_bb_title:     'Bug Bounty',
    proj_bb_desc:      'Aktive Teilnahme an privaten / invite-only Programmen via HackerOne und Bugcrowd seit 2020. 20+ bestätigte Findings. Details unter NDA.',

    talks_title:   'Talks & Bildung',
    talks_heading: 'Gastredner – KI & Cybersecurity',
    talks_desc:    'Ehrenamtliche Vorträge an bisher 5–10 Schulen für Schüler:innen und Lehrkräfte. Themen: Large Language Models (LLMs), KI-Sicherheitsrisiken, Phishing und Grundlagen der Cybersecurity. Eigeninitiative, wachsendes Netzwerk an Schulkooperationen.',
    talks_tag1:    '5–10 Schulen',
    talks_tag2:    'KI-Sicherheit',
    talks_tag3:    'Ehrenamtlich',

    certs_title:   'Zertifizierungen',
    certs_sub:     'Kurse abgeschlossen über New Horizons (zertifizierter Bildungsträger). Prüfungen ab Mai 2026.',
    cert_status:   'In Vorbereitung',

    contact_title:    'Kontakt',
    contact_sub:      'Offen für Positionen im Bereich Penetration Testing, Red Team und Security Research. Antworte zuverlässig binnen 24 Stunden.',
    contact_cv:       'Lebenslauf als PDF herunterladen',
    contact_location: 'Deutschland · Remote weltweit',

    footer_text: 'Gebaut mit HTML, CSS & JS',
  },
  en: {
    nav_about:      'About',
    nav_skills:     'Skills',
    nav_experience: 'Experience',
    nav_projects:   'Projects',
    nav_contact:    'Contact',

    hero_available: 'Open to Opportunities',
    hero_tagline:   'I break systems. Before others do.',
    hero_roles:     ['Penetration Tester', 'Red Team Operator', 'Bug Bounty Researcher', 'Security Researcher'],

    cta_contact:    'Get in Touch',
    cta_cv:         'Resume (PDF)',

    stat_years:     'Years Experience',
    stat_vulns:     'Vulnerabilities',
    stat_schools:   'Schools',

    about_title:    'About Me',
    about_whoami:   'Offensive security specialist with 5+ years of hands-on experience in bug bounty, web and API pentesting, and Active Directory attacks. Active in private HackerOne and Bugcrowd programs since 2020 with 20+ confirmed vulnerabilities. Trained mechatronics engineer with OT/ICS background (Siemens S7, SCADA) — direct path into industrial security.',
    about_strengths: [
      '20+ confirmed findings under NDA · clean, reproducible reports',
      'Structured methodology: Recon → Enumerate → Exploit → Escalate → Report',
      'Dual qualification Offensive Security + OT/ICS · bilingual DE/EN',
      'Self-driven — school talks, custom lab, public writeups',
    ],
    about_focus:    'Bug Bounty · HackTheBox · Web & API Testing · Red Team · OT/ICS Security',

    skills_title:   'Skills',
    sk_offensive:   'Offensive Security',
    sk_tools:       'Tools',
    sk_scripting:   'Scripting',
    sk_networks:    'Networks',
    sk_os:          'Operating Systems',
    sk_ot:          'OT / ICS',

    exp_title:        'Experience',
    exp_jbsec_title:  '[JB] Security — Owner & Freelance Pentester',
    exp_jbsec_org:    'Independent offensive-security practice · jbmtp07.github.io/jb-security',
    exp_jbsec_points: [
      'Independent pentest service: web applications, Active Directory, OT/ICS',
      'Manual deep testing per OWASP WSTG, PTES, NIST SP 800-115, MITRE ATT&CK',
      'Encrypted reports · NDA / DPA / TOM compliant · €2M IT professional liability',
    ],
    exp_bb_title:     'Bug Bounty Researcher',
    exp_bb_org:       'HackerOne · Bugcrowd · invite-only',
    exp_bb_points:    [
      '20+ confirmed vulnerabilities: RCE, SQLi, XSS, IDOR, auth bypass, business-logic flaws',
      'Focus on web & API issues, recon automation, token analysis',
      'Clean PoC reports · full NDA and responsible-disclosure compliance',
    ],
    exp_talks_title:  'Guest Speaker – AI & Cybersecurity',
    exp_talks_org:    'Schools · volunteer',
    exp_talks_points: [
      'Talks at 5–10 schools for students and teachers',
      'LLMs, AI security risks, phishing, cybersecurity fundamentals',
      'Self-initiated · audience-tailored communication',
    ],
    exp_mecha_title:  'Mechatronics Engineer',
    exp_mecha_org:    'Rotan GmbH',
    exp_mecha_points: [
      'Maintenance, servicing and troubleshooting of industrial systems',
      'Hands-on contact with OT systems',
    ],
    exp_appr_title:   'Apprenticeship · Mechatronics',
    exp_appr_org:     'Consun Beet Company',
    exp_appr_points:  [
      'Focus: PLC programming (Siemens S7), SCADA, industrial automation',
      'Direct bridge into OT/ICS security · fully completed apprenticeship',
    ],

    projects_title:    'Projects',
    proj_jbsec_title:  '[JB] Security — Freelance Pentest Service',
    proj_jbsec_desc:   'Independent offensive-security practice for web, Active Directory and OT/ICS pentests. Structured reports per OWASP WSTG, PTES, NIST SP 800-115 and MITRE ATT&CK. €2M IT professional liability. Available Q3 2026.',
    proj_bbreports_title: 'Bug Bounty Reports',
    proj_bbreports_desc:  'Sanitized public reports from real findings — including a chained exploit (SQLi → Stored XSS → SSTI → RCE, CVSS 9.9) and an unauthenticated Command Injection (CVSS 9.8). Released after Coordinated Disclosure.',
    proj_htb_title:    'HTB Writeups',
    proj_htb_desc:     'German-language writeups for retired HackTheBox machines. Documented methodology from recon to post-exploitation.',
    proj_notes_title:  'Study Notes',
    proj_notes_desc:   'Structured methodology collection: Linux PrivEsc, AD attacks, Nmap enumeration, Burp workflow, and more.',
    proj_lab_title:    'Security Homelab',
    proj_lab_desc:     'Raspberry Pi-based test lab running Metasploitable, isolated Active Directory and other vulnerable machines.',
    proj_bb_title:     'Bug Bounty',
    proj_bb_desc:      'Active participation in private / invite-only programs via HackerOne and Bugcrowd since 2020. 20+ confirmed findings. Details under NDA.',

    talks_title:   'Talks & Education',
    talks_heading: 'Guest Speaker – AI & Cybersecurity',
    talks_desc:    'Voluntary talks at 5–10 schools for students and teachers. Topics: Large Language Models (LLMs), AI security risks, phishing, and cybersecurity fundamentals. Self-initiated, growing network of school partnerships.',
    talks_tag1:    '5–10 Schools',
    talks_tag2:    'AI Security',
    talks_tag3:    'Volunteer',

    certs_title:   'Certifications',
    certs_sub:     'Courses completed via New Horizons (certified training provider). Exams scheduled from May 2026.',
    cert_status:   'In Progress',

    contact_title:    'Contact',
    contact_sub:      'Open to positions in penetration testing, red team and security research. Reliable response within 24 hours.',
    contact_cv:       'Download Resume as PDF',
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

  document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const key = el.getAttribute('data-i18n-list');
    const items = t[l][key];
    if (Array.isArray(items)) {
      el.innerHTML = items.map(s => `<li>${s}</li>`).join('');
    }
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
// NAV SCROLL SHADOW
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
