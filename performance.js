document.documentElement.classList.add("js");

/* Pointer glow on gallery shots -------------------------------------------- */
const digitalMotion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
document.querySelectorAll(".gallery-shot").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (!digitalMotion.matches) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }, { passive: true });
});

const body = document.body;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
const progress = document.querySelector(".progress");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function closeMenu({ returnFocus = false } = {}) {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  body.classList.remove("nav-open");
  const label = menuButton.querySelector(".menu-toggle__label");
  if (label) label.textContent = "Menu";
  if (returnFocus) menuButton.focus();
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  nav?.classList.toggle("is-open", willOpen);
  body.classList.toggle("nav-open", willOpen);
  const label = menuButton.querySelector(".menu-toggle__label");
  if (label) label.textContent = willOpen ? "Close" : "Menu";
});

document.querySelectorAll(".primary-nav a").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("is-open")) {
    closeMenu({ returnFocus: true });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 840 && nav?.classList.contains("is-open")) closeMenu();
});

/* Scroll progress + header state ------------------------------------------- */
function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  progress?.style.setProperty("--progress", ratio.toFixed(4));
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateScrollUI();
window.addEventListener("scroll", updateScrollUI, { passive: true });

/* Reveal on scroll ---------------------------------------------------------- */
const revealElements = [...document.querySelectorAll(".reveal")];
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -5%" });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

/* Number counters ----------------------------------------------------------- */
const counters = [...document.querySelectorAll("[data-count]")];
if (counters.length) {
  const formatValue = (el, value) => {
    const suffix = el.dataset.countSuffix || "";
    const pad = Number(el.dataset.countPad || 0);
    const formatted = el.dataset.countFormat === "comma"
      ? Math.round(value).toLocaleString("en-US")
      : (pad ? String(Math.round(value)).padStart(pad, "0") : String(Math.round(value)));
    return formatted + suffix;
  };

  const animateCount = (el) => {
    if (el.dataset.countDone) return;
    el.dataset.countDone = "1";
    const target = Number(el.dataset.count || 0);
    if (reducedMotion.matches) {
      el.textContent = formatValue(el, target);
      return;
    }
    const start = performance.now();
    const duration = 1300;
    const tick = (now) => {
      const ratio = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      el.textContent = formatValue(el, target * eased);
      if (ratio < 1) requestAnimationFrame(tick);
      else el.textContent = formatValue(el, target);
    };
    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });
    counters.forEach((el) => counterObserver.observe(el));
  } else {
    counters.forEach(animateCount);
  }
}

/* Image zoom ---------------------------------------------------------------- */
const zoomDialog = document.querySelector("#zoom-dialog");
const zoomImage = zoomDialog?.querySelector("#zoom-dialog-image");
const zoomCaption = zoomDialog?.querySelector("#zoom-dialog-caption");
const zoomClose = zoomDialog?.querySelector(".zoom-dialog__close");
let zoomOpener = null;

document.querySelectorAll("[data-zoom]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!zoomDialog || !zoomImage) return;
    zoomOpener = button;
    const alt = button.dataset.zoomAlt || button.querySelector("img")?.alt || "";
    zoomImage.src = button.dataset.zoom;
    zoomImage.alt = alt;
    if (zoomCaption) zoomCaption.textContent = alt;
    body.style.overflow = "hidden";
    if (typeof zoomDialog.showModal === "function") zoomDialog.showModal();
    else zoomDialog.setAttribute("open", "");
  });
});

zoomClose?.addEventListener("click", () => {
  if (zoomDialog?.open) zoomDialog.close();
});

zoomDialog?.addEventListener("click", (event) => {
  if (event.target === zoomDialog) zoomDialog.close();
});

zoomDialog?.addEventListener("close", () => {
  body.style.removeProperty("overflow");
  if (zoomImage) zoomImage.removeAttribute("src");
  zoomOpener?.focus();
  zoomOpener = null;
});
