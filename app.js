document.documentElement.classList.add("js");

const digitalMotion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
document.querySelectorAll(".gallery-shot").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (!digitalMotion.matches) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }, { passive: true });
});

const projects = {
  vid5: {
    meta: "AI-assisted motion · 2026",
    title: "AI Promotion Video 1",
    description: "AI-assisted promotional video shaped through concept development, storytelling, and creative direction.",
    video: { src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/vid5.mp4", poster: "assets/video/vid5-poster.webp" }
  },
  vid6: {
    meta: "AI-assisted motion · 2026",
    title: "AI Promotion Video 2",
    description: "AI-assisted promotional video shaped through concept development, storytelling, and creative direction.",
    video: { src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/vid6.mp4", poster: "assets/video/vid6-poster.webp" }
  },
  vid7: {
    meta: "AI-assisted motion · 2026",
    title: "AI Promotion Video 3",
    description: "AI-assisted promotional video shaped through concept development, storytelling, and creative direction.",
    video: { src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/vid7.mp4", poster: "assets/video/vid7-poster.webp" }
  },
  recap1: {
    meta: "Video recap · 2026",
    title: "Video Recap 01",
    description: "A vertical recap video for social media, from documentation through editing and delivery.",
    video: {
      src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/recap-01.mp4",
      poster: "assets/video/recap-01-poster.webp"
    }
  },
  recap2: {
    meta: "Video recap · 2026",
    title: "Video Recap 02",
    description: "A vertical recap video for social media, from documentation through editing and delivery.",
    video: {
      src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/recap-02.mp4",
      poster: "assets/video/recap-02-poster.webp"
    }
  },
  recap3: {
    meta: "Video recap · 2026",
    title: "Video Recap 03",
    description: "A vertical recap video for social media, from documentation through editing and delivery.",
    video: {
      src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/recap-03.mp4",
      poster: "assets/video/recap-03-poster.webp"
    }
  },
  teaser: {
    meta: "Teaser · Video · 2026",
    title: "Teaser Presimposium",
    description: "A short cinematic teaser introducing Presimposium, cut for social media announcement.",
    video: {
      src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/teaser-presimposium.mp4",
      poster: "assets/video/teaser-presimposium-poster.webp"
    }
  },
  teaser2: {
    meta: "Teaser · Video · 2026",
    title: "Teaser Presimposium 2",
    description: "A teaser trailer introducing Presimposium, cut for social media announcement.",
    video: {
      src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/teaser-presimposium-trailer-3.mp4",
      poster: "assets/video/teaser-presimposium-poster.webp"
    }
  },
  teaserAbout1: {
    meta: "Teaser · Video · 2026",
    title: "Teaser Presimposium",
    description: "A short cinematic teaser introducing Presimposium, cut for social media announcement.",
    video: {
      src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/teaser-presimposium.mp4",
      poster: "assets/video/teaser-about-01.webp"
    }
  },
  teaserAbout2: {
    meta: "Teaser · Video · 2026",
    title: "Teaser Presimposium 2",
    description: "A teaser trailer introducing Presimposium, cut for social media announcement.",
    video: {
      src: "https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/teaser-presimposium-trailer-3.mp4",
      poster: "assets/video/teaser-about-02.webp"
    }
  }
};

const body = document.body;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const progress = document.querySelector(".progress");

function closeMenu({ returnFocus = false } = {}) {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  body.classList.remove("nav-open");
  menuButton.querySelector(".menu-toggle__label").textContent = "Menu";
  if (returnFocus) menuButton.focus();
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  nav.classList.toggle("is-open", willOpen);
  body.classList.toggle("nav-open", willOpen);
  menuButton.querySelector(".menu-toggle__label").textContent = willOpen ? "Close" : "Menu";
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

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  progress?.style.setProperty("--progress", ratio.toFixed(4));
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateScrollUI();
window.addEventListener("scroll", updateScrollUI, { passive: true });

const revealElements = [...document.querySelectorAll(".reveal")];
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

const observedSections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { threshold: [0.2, 0.45], rootMargin: "-20% 0px -55%" });
  observedSections.forEach((section) => sectionObserver.observe(section));
}

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const projectCards = [...document.querySelectorAll("[data-project-card]")];
const projectCount = document.querySelector("[data-project-count]");
const filterStatus = document.querySelector("[data-filter-status]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const show = selected === "all" || categories.includes(selected);
      card.hidden = !show;
      if (show) {
        visibleCount += 1;
        card.classList.add("is-visible");
      }
    });

    if (projectCount) projectCount.textContent = String(visibleCount);
    if (filterStatus) filterStatus.textContent = `${visibleCount} project${visibleCount === 1 ? "" : "s"} shown for ${button.textContent}.`;
  });
});

const dialog = document.querySelector("#project-dialog");
const dialogClose = dialog?.querySelector(".dialog-close");
const dialogMeta = dialog?.querySelector("#dialog-meta");
const dialogTitle = dialog?.querySelector("#dialog-title");
const dialogDescription = dialog?.querySelector("#dialog-description");
const dialogList = dialog?.querySelector("#dialog-list");
const dialogGallery = dialog?.querySelector("#dialog-gallery");
let dialogOpener = null;

function openProject(key, opener) {
  const project = projects[key];
  if (!project || !dialog) return;

  dialogOpener = opener;
  dialogMeta.textContent = project.meta;
  dialogTitle.textContent = project.title;
  dialogDescription.textContent = project.description;
  dialogList.replaceChildren();
  dialogList.hidden = true;
  dialogGallery.replaceChildren();

  if (project.video) {
    const figure = document.createElement("figure");
    figure.className = "dialog-video";
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.disablePictureInPicture = true;
    video.setAttribute("controlslist", "nodownload noplaybackrate noremoteplayback");
    video.addEventListener("contextmenu", (event) => event.preventDefault());
    video.poster = project.video.poster;
    video.src = project.video.src;
    video.setAttribute("aria-label", project.title);
    figure.append(video);
    dialogGallery.append(figure);
  }

  body.style.overflow = "hidden";
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");

  if (project.video) {
    const attempt = dialogGallery.querySelector("video")?.play();
    if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
  }
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project, button));
});

function closeProject() {
  if (!dialog?.open) return;
  dialog.close();
}

dialogClose?.addEventListener("click", closeProject);

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});

dialog?.addEventListener("close", () => {
  body.style.removeProperty("overflow");
  dialogGallery?.querySelectorAll("video").forEach((video) => video.pause());
  dialogGallery?.replaceChildren();
  dialogOpener?.focus();
  dialogOpener = null;
});


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

/* --------------------------------------------------------------------------
   Interactive catalog
   -------------------------------------------------------------------------- */

const catalog = document.querySelector("[data-catalog]");
const catalogStage = document.querySelector("[data-catalog-stage]");
const catalogBookEl = document.querySelector("[data-catalog-book]");
const catalogCover = document.querySelector("[data-catalog-cover]");
const catalogPrev = document.querySelector("[data-catalog-prev]");
const catalogNext = document.querySelector("[data-catalog-next]");
const catalogClose = document.querySelector("[data-catalog-close]");
const catalogCounter = document.querySelector("[data-catalog-counter]");
const catalogZoomOpen = document.querySelector("[data-catalog-zoom-open]");
const catalogZoom = document.querySelector("[data-catalog-zoom]");
const catalogZoomImg = document.querySelector("[data-catalog-zoom-img]");
const catalogZoomLabel = document.querySelector("[data-catalog-zoom-label]");
const catalogZoomViewport = document.querySelector("[data-catalog-zoom-viewport]");
const catalogZoomPrev = document.querySelector("[data-catalog-zoom-prev]");
const catalogZoomNext = document.querySelector("[data-catalog-zoom-next]");
const catalogZoomScale = document.querySelector("[data-catalog-zoom-scale]");
const catalogZoomCloseBtn = document.querySelector("[data-catalog-zoom-close]");

const CATALOG_PAGES = 12;
const CATALOG_FILE = "assets/documents/katalog-digital-implant-2026.pdf";
const catalogMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let catalogFlip = null;
let catalogBusy = false;
let catalogObserver = null;
let catalogZoomIndex = 1;
let catalogZoomOpener = null;

function catalogPageSrc(index) {
  return `assets/catalog/page-${String(index + 1).padStart(2, "0")}.webp`;
}

function buildCatalogPages() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < CATALOG_PAGES; i += 1) {
    const page = document.createElement("div");
    page.className = "catalog-page";
    page.setAttribute("data-density", i === 0 || i === CATALOG_PAGES - 1 ? "hard" : "soft");

    const image = document.createElement("img");
    image.src = catalogPageSrc(i);
    image.alt = "";
    image.width = 1130;
    image.height = 1598;
    image.loading = "eager";
    image.decoding = "async";

    page.append(image);
    fragment.append(page);
  }

  catalogBookEl.append(fragment);
  return [...catalogBookEl.querySelectorAll(".catalog-page")];
}

function catalogLabel(index) {
  if (index <= 0) return "Cover";
  if (catalogStage.dataset.orientation === "portrait") return `Page ${index + 1}`;
  if (index >= CATALOG_PAGES - 1) return `Page ${CATALOG_PAGES}`;
  return `Pages ${index + 1}–${index + 2}`;
}

function catalogIsOpen() {
  const state = catalogStage.dataset.state;
  return state === "open" || state === "opening";
}

function syncCatalogUI() {
  if (!catalogFlip || !catalogStage) return;
  const index = catalogFlip.getCurrentPageIndex();
  const open = catalogIsOpen();
  const last = index >= CATALOG_PAGES - 1;

  catalogCounter.textContent = catalogLabel(index);
  catalogCover.setAttribute("aria-expanded", String(open));
  catalogPrev.disabled = !open || catalogBusy;
  catalogNext.disabled = !open || last || catalogBusy;
  catalogClose.disabled = !open || catalogBusy;
  catalogZoomOpen.disabled = !open || catalogBusy;
}

function initCatalog() {
  if (catalogFlip || !catalogStage || !window.St || !window.St.PageFlip) return catalogFlip;

  const pages = buildCatalogPages();

  catalogFlip = new window.St.PageFlip(catalogBookEl, {
    width: 520,
    height: 736,
    size: "stretch",
    minWidth: 140,
    maxWidth: 520,
    minHeight: 180,
    maxHeight: 736,
    drawShadow: true,
    flippingTime: catalogMotion.matches ? 1 : 700,
    usePortrait: false,
    startZIndex: 0,
    autoSize: true,
    maxShadowOpacity: 0.26,
    showCover: true,
    mobileScrollSupport: true,
    swipeDistance: 24,
    showPageCorners: true
  });

  catalogFlip.loadFromHTML(pages);
  catalogStage.dataset.orientation = catalogFlip.getOrientation();

  catalogFlip.on("flip", (event) => {
    if (catalogStage.dataset.state === "open" && event.data <= 0) {
      closeCatalog();
      return;
    }
    syncCatalogUI();
  });

  syncCatalogUI();
  return catalogFlip;
}

function openCatalog() {
  if (!catalogStage) return;

  if (!initCatalog()) {
    window.location.href = CATALOG_FILE;
    return;
  }

  if (catalogBusy || catalogStage.dataset.state !== "closed") return;

  catalogBusy = true;
  catalogStage.dataset.state = "opening";
  catalogStage.classList.remove("is-revealing");
  catalogFlip.turnToPage(0);
  syncCatalogUI();

  const reveal = () => {
    catalogStage.classList.add("is-revealing");
    catalogFlip.flipNext();

    window.setTimeout(() => {
      catalogStage.dataset.state = "open";
      catalogBusy = false;
      syncCatalogUI();
      catalogNext.focus({ preventScroll: true });
    }, catalogMotion.matches ? 0 : 760);
  };

  if (catalogMotion.matches) reveal();
  else window.setTimeout(reveal, 220);
}

function closeCatalog() {
  if (!catalogStage || !catalogFlip) return;
  if (catalogBusy || catalogStage.dataset.state === "closed") return;

  catalogBusy = true;
  catalogStage.dataset.state = "closing";
  syncCatalogUI();

  const finish = () => {
    catalogFlip.turnToPage(0);
    catalogStage.dataset.state = "closed";
    catalogStage.classList.remove("is-revealing");
    catalogBusy = false;
    syncCatalogUI();
    catalogCover.focus({ preventScroll: true });
  };

  if (catalogMotion.matches) finish();
  else window.setTimeout(finish, 560);
}

function catalogNextPage() {
  if (!catalogFlip || catalogBusy || catalogStage.dataset.state !== "open") return;
  if (catalogFlip.getCurrentPageIndex() >= CATALOG_PAGES - 1) return;
  catalogFlip.flipNext();
}

function catalogPrevPage() {
  if (!catalogFlip || catalogBusy || catalogStage.dataset.state !== "open") return;
  if (catalogFlip.getCurrentPageIndex() <= 1) {
    closeCatalog();
    return;
  }
  catalogFlip.flipPrev();
}

/* Full-size page viewer for small screens */

function catalogZoomIsZoomed() {
  return catalogZoomViewport?.classList.contains("is-zoomed") || false;
}

function catalogZoomCenter() {
  if (!catalogZoomViewport || !catalogZoomImg) return;
  if (catalogZoomIsZoomed()) {
    catalogZoomViewport.scrollLeft = Math.max(
      0,
      (catalogZoomImg.clientWidth - catalogZoomViewport.clientWidth) / 2
    );
  } else {
    catalogZoomViewport.scrollLeft = 0;
  }
  catalogZoomViewport.scrollTop = 0;
}

function catalogZoomRender() {
  if (!catalogZoomImg) return;

  catalogZoomImg.src = catalogPageSrc(catalogZoomIndex);
  catalogZoomImg.alt = `Catalog page ${catalogZoomIndex + 1}`;
  catalogZoomLabel.textContent = `Page ${catalogZoomIndex + 1} of ${CATALOG_PAGES}`;
  catalogZoomPrev.disabled = catalogZoomIndex <= 1;
  catalogZoomNext.disabled = catalogZoomIndex >= CATALOG_PAGES - 1;
}

function catalogZoomStep(delta) {
  const next = catalogZoomIndex + delta;
  if (next < 1 || next > CATALOG_PAGES - 1) return;
  catalogZoomIndex = next;
  catalogZoomRender();
  catalogZoomCenter();
}

function setCatalogZoomScale(zoomed) {
  if (!catalogZoomViewport) return;
  catalogZoomViewport.classList.toggle("is-zoomed", zoomed);
  catalogZoomScale.setAttribute("aria-pressed", String(zoomed));
  catalogZoomScale.textContent = zoomed ? "Fit page" : "Zoom in";
  catalogZoomCenter();
}

function openCatalogZoom() {
  if (!catalogZoom || !catalogFlip || catalogStage.dataset.state !== "open") return;

  catalogZoomIndex = Math.min(
    Math.max(catalogFlip.getCurrentPageIndex(), 1),
    CATALOG_PAGES - 1
  );
  catalogZoomOpener = document.activeElement;
  catalogZoomRender();
  setCatalogZoomScale(false);

  body.style.overflow = "hidden";
  if (typeof catalogZoom.showModal === "function") catalogZoom.showModal();
  else catalogZoom.setAttribute("open", "");

  catalogZoomCloseBtn.focus({ preventScroll: true });
}

function closeCatalogZoom() {
  if (catalogZoom?.open) catalogZoom.close();
}

if (catalog && catalogStage && catalogBookEl) {
  catalogCover?.addEventListener("click", openCatalog);
  catalogClose?.addEventListener("click", closeCatalog);
  catalogNext?.addEventListener("click", catalogNextPage);
  catalogPrev?.addEventListener("click", catalogPrevPage);

  catalogZoomOpen?.addEventListener("click", openCatalogZoom);
  catalogZoomCloseBtn?.addEventListener("click", closeCatalogZoom);
  catalogZoomPrev?.addEventListener("click", () => catalogZoomStep(-1));
  catalogZoomNext?.addEventListener("click", () => catalogZoomStep(1));
  catalogZoomScale?.addEventListener("click", () => setCatalogZoomScale(!catalogZoomIsZoomed()));

  catalogZoom?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      catalogZoomStep(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      catalogZoomStep(-1);
    }
  });

  catalogZoom?.addEventListener("close", () => {
    body.style.removeProperty("overflow");
    catalogZoomOpener?.focus({ preventScroll: true });
    catalogZoomOpener = null;
  });

  catalog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      catalogNextPage();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      catalogPrevPage();
    } else if (event.key === "Escape" && catalogStage.dataset.state === "open") {
      event.preventDefault();
      closeCatalog();
    }
  });

  let catalogResizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(catalogResizeTimer);
    catalogResizeTimer = window.setTimeout(() => {
      if (!catalogFlip) return;
      const orientation = catalogFlip.getOrientation();
      if (orientation !== catalogStage.dataset.orientation) {
        catalogStage.dataset.orientation = orientation;
        syncCatalogUI();
      }
    }, 160);
  });

  if ("IntersectionObserver" in window) {
    catalogObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          catalogObserver.disconnect();
          catalogObserver = null;
          initCatalog();
        }
      },
      { rootMargin: "300px 0px" }
    );
    catalogObserver.observe(catalogStage);
  } else {
    initCatalog();
  }
}

﻿/* --------------------------------------------------------------------------
   Digital creative motion - custom cursor, counters, parallax
   -------------------------------------------------------------------------- */

(() => {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Custom cursor
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (dot && ring && finePointer.matches && !reducedMotion.matches) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    window.addEventListener("pointermove", (event) => {
      mx = event.clientX;
      my = event.clientY;
      dot.style.transform = "translate(" + mx + "px, " + my + "px) translate(-50%, -50%)";
      if (!body.classList.contains("has-cursor")) body.classList.add("has-cursor");
    }, { passive: true });

    window.addEventListener("pointerleave", () => body.classList.remove("has-cursor"));

    (function animateCursor() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = "translate(" + rx + "px, " + ry + "px) translate(-50%, -50%)";
      requestAnimationFrame(animateCursor);
    })();

    const interactive = "a, button, [role='button'], input, textarea, select, summary, label, [data-project], [data-zoom]";
    document.addEventListener("pointerover", (event) => {
      if (event.target.closest(interactive)) body.classList.add("cursor-hover");
    });
    document.addEventListener("pointerout", (event) => {
      if (event.target.closest(interactive)) body.classList.remove("cursor-hover");
    });
  }

  // Number counters
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
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatValue(el, target * eased);
        if (progress < 1) requestAnimationFrame(tick);
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

  // Lightweight hero parallax
  const hero = document.querySelector(".hero");
  const heroPortrait = document.querySelector(".hero-portrait");
  if (hero && heroPortrait && finePointer.matches && !reducedMotion.matches) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroPortrait.style.transform = "translate(" + (x * -10) + "px, " + (y * -10) + "px)";
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      heroPortrait.style.transform = "";
    });
  }
})();

/* 3D tilt for floating media ------------------------------------------------ */
(() => {
  const floaters = [...document.querySelectorAll("[data-float]")];
  if (!floaters.length) return;

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  floaters.forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      if (!finePointer.matches || reducedMotion.matches) return;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--wf-tilt-x", (-y * 8).toFixed(2) + "deg");
      el.style.setProperty("--wf-tilt-y", (x * 10).toFixed(2) + "deg");
    }, { passive: true });

    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--wf-tilt-x", "0deg");
      el.style.setProperty("--wf-tilt-y", "0deg");
    });
  });
})();

/* Coverflow video reel ----------------------------------------------------- */
(() => {
  document.querySelectorAll("[data-reel]").forEach((reel) => {
    const stage = reel.querySelector("[data-reel-stage]");
    const cards = [...reel.querySelectorAll("[data-reel-card]")];
    const dots = [...reel.querySelectorAll("[data-reel-dot]")];
    const prev = reel.querySelector("[data-reel-prev]");
    const next = reel.querySelector("[data-reel-next]");
    const current = reel.querySelector("[data-reel-current]");
    const progress = reel.querySelector("[data-reel-progress]");
    if (!stage || cards.length < 2) return;

    const count = cards.length;
    let active = 0;
    const pad = (value) => String(value).padStart(2, "0");

    const render = () => {
      cards.forEach((card, index) => {
        let offset = index - active;
        if (offset > count / 2) offset -= count;
        if (offset < -count / 2) offset += count;

        const distance = Math.abs(offset);
        const spread = distance === 1 ? 42 : distance === 2 ? 72 : 95;
        const x = Math.sign(offset) * spread;

        card.style.setProperty("--wf-x", x + "%");
        card.style.setProperty("--wf-z", (distance === 0 ? 120 : distance * -120) + "px");
        card.style.setProperty("--wf-ry", (offset * -27) + "deg");
        card.style.setProperty("--wf-scale", (1 - distance * 0.1).toFixed(2));
        card.style.setProperty("--wf-opacity", (1 - distance * 0.27).toFixed(2));
        card.style.setProperty("--wf-zindex", String(20 - distance));
        card.style.setProperty("--wf-phase", (-index * 0.9).toFixed(1) + "s");

        if (distance > 2) card.setAttribute("data-deep", "");
        else card.removeAttribute("data-deep");
      });

      dots.forEach((dot, index) => {
        dot.setAttribute("aria-selected", index === active ? "true" : "false");
      });
      current.textContent = pad(active + 1);
      progress.style.width = (((active + 1) / count) * 100).toFixed(4) + "%";
    };

    const go = (index) => {
      active = (index + count) % count;
      render();
    };

    prev?.addEventListener("click", () => go(active - 1));
    next?.addEventListener("click", () => go(active + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => go(index)));

    stage.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(active + 1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(active - 1);
      }
    });

    let start = null;
    let suppressClick = false;

    stage.addEventListener("dragstart", (event) => event.preventDefault());

    stage.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      start = { x: event.clientX, y: event.clientY };
      stage.classList.add("is-dragging");
    });

    const endDrag = (event) => {
      if (!start) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      start = null;
      stage.classList.remove("is-dragging");

      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        suppressClick = true;
        go(active + (dx < 0 ? 1 : -1));
        window.setTimeout(() => { suppressClick = false; }, 250);
      }
    };

    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", () => {
      start = null;
      stage.classList.remove("is-dragging");
    });

    stage.addEventListener("click", (event) => {
      if (suppressClick) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      const card = event.target.closest("[data-reel-card]");
      if (!card) return;

      const index = cards.indexOf(card);
      if (index !== active) {
        event.preventDefault();
        event.stopImmediatePropagation();
        go(index);
      }
    }, true);

    render();
  });
})();

/* About teaser card stack -------------------------------------------------- */
(() => {
  document.querySelectorAll("[data-teaser-stack]").forEach((stack) => {
    const cards = [...stack.querySelectorAll("[data-teaser-card]")];
    const prev = stack.querySelector("[data-teaser-prev]");
    const next = stack.querySelector("[data-teaser-next]");
    const current = stack.querySelector("[data-teaser-current]");
    if (cards.length < 2) return;

    let active = Math.max(0, cards.findIndex((card) => card.hasAttribute("data-active")));
    const pad = (value) => String(value).padStart(2, "0");

    const render = () => {
      cards.forEach((card, index) => {
        if (index === active) card.setAttribute("data-active", "");
        else card.removeAttribute("data-active");
      });
      current.textContent = pad(active + 1);
    };

    prev?.addEventListener("click", () => {
      active = (active - 1 + cards.length) % cards.length;
      render();
    });

    next?.addEventListener("click", () => {
      active = (active + 1) % cards.length;
      render();
    });

    render();
  });
})();
