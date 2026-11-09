(() => {
  "use strict";

  const header = document.getElementById("site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
    document.body.classList.toggle("no-scroll", !open);
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navToggle?.setAttribute("aria-expanded", "false");
      nav?.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      ));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach(section => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
})();
