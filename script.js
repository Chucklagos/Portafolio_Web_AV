/**
 * Portafolio Allan Velásquez — Ingeniero Químico Industrial
 * Pequeños scripts de animación y comportamiento:
 *  - Menú de navegación móvil (toggle)
 *  - Scroll suave entre anclas
 *  - Estado activo del enlace de navegación según scroll
 *  - Efecto de sombra en el header al hacer scroll
 *  - Fade-in de secciones al entrar en viewport (respetando preferencia de movimiento)
 */
"use strict";

(function () {
  if (typeof document === "undefined") return;

  const nav = document.querySelector(".site-nav");
  const navLinks = Array.from(document.querySelectorAll(".site-nav-links a"));
  const toggle = document.querySelector(".site-nav-toggle");
  const hero = document.querySelector(".hero");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------------------------------------------------------------- mobile
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // ------------------------------------------------------------ smooth scroll
  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href") || "";
        if (!href.startsWith("#")) return;

        const target = document.getElementById(href.slice(1));
        if (!target) return;

        event.preventDefault();

        // Marcar enlace activo
        navLinks.forEach((a) => a.setAttribute("aria-current", a === link ? "page" : "false"));

        // Cerrar menú móvil
        if (nav) {
          nav.classList.remove("is-open");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }

        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    });
  }

  // ------------------------------------------------- active state on scroll
  if (navLinks.length) {
    window.addEventListener(
      "scroll",
      () => {
        navLinks.forEach((link) => {
          const href = link.getAttribute("href") || "";
          const target = href.startsWith("#") ? document.getElementById(href.slice(1)) : null;
          if (!target) {
            link.setAttribute("aria-current", link.getAttribute("aria-current") || "false");
            return;
          }
          const rect = target.getBoundingClientRect();
          const isActive = rect.top <= window.innerHeight * 0.25 && rect.bottom > 0;
          link.setAttribute("aria-current", isActive ? "page" : "false");
        });
        if (toggle) {
          toggle.setAttribute("aria-expanded", nav && nav.classList.contains("is-open") ? "true" : "false");
        }
      },
      { passive: true }
    );
  }

  // ----------------------------------------------------- header shadow scroll
  if (hero) {
    window.addEventListener(
      "scroll",
      () => hero.classList.toggle("is-scrolled", window.scrollY > 56),
      { passive: true }
    );
  }

  // ------------------------------------------------- scroll reveal animation
  if (!prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("in-view", entry.isIntersecting));
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }
})();
