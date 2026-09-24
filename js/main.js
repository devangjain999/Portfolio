/**
 * ============================================================
 *  PORTFOLIO — main.js
 *  Reads from PORTFOLIO_CONFIG (js/config.js) and renders the
 *  dynamic parts of the page, plus all interactive behavior.
 * ============================================================
 */
(function () {
  "use strict";

  const cfg = window.PORTFOLIO_CONFIG || {};
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     Helpers
  --------------------------------------------------------- */
  function isPlaceholder(value) {
    return !value || /_HERE$/.test(value) || value === "#";
  }

  function svgIcon(name) {
    const icons = {
      github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l3-4 3 3 5-7"/></svg>',
      brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
      code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
      badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>',
      trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M17 5h3a4 4 0 0 1-4 5M7 5H4a4 4 0 0 0 4 5"/></svg>',
      link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5h5v5M9 15L19 5M15 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5"/></svg>',
      layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/></svg>'
    };
    return icons[name] || icons.layers;
  }

  function el(html) {
    const div = document.createElement("div");
    div.innerHTML = html.trim();
    return div.firstElementChild;
  }

  /* ---------------------------------------------------------
     Apply centralized links (nav, hero, footer, contact)
  --------------------------------------------------------- */
  function applyLinks() {
    document.querySelectorAll("[data-link]").forEach((node) => {
      const key = node.getAttribute("data-link");
      if (key === "email") {
        node.textContent = cfg.email || node.textContent;
        return;
      }
      if (key === "email-href") {
        const prefix = node.getAttribute("data-link-prefix") || "";
        node.href = prefix + (cfg.email || "");
        return;
      }
      const value = (cfg.links && cfg.links[key]) || "";
      if (!value) return;
      node.href = value;
      if (isPlaceholder(value)) {
        node.classList.add("is-disabled");
        node.setAttribute("aria-disabled", "true");
        node.title = "Link not added yet";
      }
    });
  }

  /* ---------------------------------------------------------
     Education & Experience timelines
  --------------------------------------------------------- */
  function renderEducation() {
    const wrap = document.getElementById("education-timeline");
    if (!wrap || !cfg.education) return;
    cfg.education.forEach((e) => {
      wrap.appendChild(el(`
        <div class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-period">${e.duration}</div>
            <h3>${e.degree}</h3>
            <p class="org">${e.institution} — ${e.location}</p>
            ${e.note ? `<p class="desc">${e.note}</p>` : ""}
          </div>
        </div>
      `));
    });
  }

  function renderExperience() {
    const wrap = document.getElementById("experience-timeline");
    if (!wrap || !cfg.experience) return;
    cfg.experience.forEach((job) => {
      const respList = (job.responsibilities || []).map(r => `<li>${r}</li>`).join("");
      const techList = (job.tech || []).map(t => `<span>${t}</span>`).join("");
      const certHref = isPlaceholder(job.certificate) ? "#" : job.certificate;
      const certDisabled = isPlaceholder(job.certificate) ? "is-disabled" : "";
      const period = job.start === job.end ? job.start : `${job.start} — ${job.end}`;
      wrap.appendChild(el(`
        <div class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-period">${period}</div>
            <h3>${job.role}</h3>
            <p class="org">${job.company}</p>
            <p class="desc">${job.description}</p>
            ${respList ? `<ul class="resp-list">${respList}</ul>` : ""}
            ${techList ? `<div class="timeline-tech-block"><span class="timeline-tech-label">Skills / Tech Stack</span><div class="timeline-tech">${techList}</div></div>` : ""}
          </div>
        </div>
      `));
    });
  }

  /* ---------------------------------------------------------
     Skills
  --------------------------------------------------------- */
  function renderSkills() {
    const wrap = document.getElementById("skills-grid");
    if (!wrap || !cfg.skills) return;
    Object.entries(cfg.skills).forEach(([category, items]) => {
      const chips = items.map(s => `<span class="chip">${s}</span>`).join("");
      wrap.appendChild(el(`
        <div class="skill-card">
          <h3>${category}</h3>
          <div class="skill-chips">${chips}</div>
        </div>
      `));
    });
  }

  /* ---------------------------------------------------------
     Projects
  --------------------------------------------------------- */
  function categoryIcon(category) {
    if (/AI/i.test(category)) return svgIcon("brain");
    if (/Data/i.test(category)) return svgIcon("chart");
    if (/Web/i.test(category)) return svgIcon("code");
    return svgIcon("layers");
  }

  function projectCard(p, featured) {
    const thumb = p.image
      ? `<div class="project-thumb"><img src="${p.image}" alt="${p.name} screenshot" loading="lazy"></div>`
      : `<div class="project-thumb placeholder">${categoryIcon(p.category)}<span class="placeholder-label">Preview coming soon</span></div>`;

    const githubDisabled = isPlaceholder(p.github) ? "is-disabled" : "";
    const demoDisabled = isPlaceholder(p.demo) ? "is-disabled" : "";
    const githubHref = isPlaceholder(p.github) ? "#" : p.github;
    const demoHref = isPlaceholder(p.demo) ? "#" : p.demo;

    const techs = (p.tech || []).map(t => `<span>${t}</span>`).join("");

    return el(`
      <article class="project-card">
        ${thumb}
        <div class="project-body">
          <div class="project-category">${p.category}</div>
          <h3>${p.name}</h3>
          <p class="desc">${p.description}</p>
          <div class="project-tech">${techs}</div>
          <div class="project-links">
            <a class="primary ${demoDisabled}" href="${demoHref}" target="_blank" rel="noopener">${p.demoLabel || "Live Demo"}</a>
            <a class="secondary ${githubDisabled}" href="${githubHref}" target="_blank" rel="noopener">${svgIcon("github")} GitHub</a>
          </div>
        </div>
      </article>
    `);
  }

  function renderProjects() {
    const featuredWrap = document.getElementById("featured-projects");
    const otherWrap = document.getElementById("other-projects");
    if (featuredWrap && cfg.featuredProjects) {
      cfg.featuredProjects.forEach(p => featuredWrap.appendChild(projectCard(p, true)));
    }
    if (otherWrap && cfg.otherProjects) {
      cfg.otherProjects.forEach(p => otherWrap.appendChild(projectCard(p, false)));
    }
  }

  /* ---------------------------------------------------------
     Navbar: scroll state, active link, mobile menu, smooth scroll
  --------------------------------------------------------- */
  function initNav() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll("[data-nav]");
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    function onScroll() {
      navbar.classList.toggle("scrolled", window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    function closeMobileMenu() {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => closeMobileMenu());
    });

    // Scroll-spy for active nav link
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const match = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", match);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach((section) => spyObserver.observe(section));

    // include hero (id="home" is on <main>) as a manual case
    const homeLinkTargets = document.querySelectorAll('[data-nav][href="#home"]');
    window.addEventListener("scroll", () => {
      if (window.scrollY < 80) {
        navLinks.forEach(l => l.classList.remove("active"));
        homeLinkTargets.forEach(l => l.classList.add("active"));
      }
    }, { passive: true });
  }

  /* ---------------------------------------------------------
     Scroll reveal
  --------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (prefersReducedMotion) {
      items.forEach(i => i.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    items.forEach(i => observer.observe(i));
  }

  /* ---------------------------------------------------------
     Contact form (EmailJS)
  --------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitBtn = document.getElementById("form-submit");
    if (!form) return;

    if (window.emailjs && cfg.emailjs && cfg.emailjs.publicKey) {
      emailjs.init(cfg.emailjs.publicKey);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status";

      if (!window.emailjs || !cfg.emailjs || !cfg.emailjs.serviceId) {
        status.textContent = "Contact form isn't configured yet — please email me directly instead.";
        status.classList.add("error");
        return;
      }

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";

      emailjs.sendForm(cfg.emailjs.serviceId, cfg.emailjs.templateId, form)
        .then(() => {
          status.textContent = "Message sent — thank you! I'll get back to you soon.";
          status.classList.add("success");
          form.reset();
        })
        .catch((error) => {
          status.textContent = "Something went wrong sending your message. Please try emailing me directly.";
          status.classList.add("error");
          console.error("EmailJS error:", error);
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });
  }

  /* ---------------------------------------------------------
     Init
  --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLinks();
    renderEducation();
    renderExperience();
    renderSkills();
    renderProjects();
    initNav();
    initReveal();
    initContactForm();
  });
})();
