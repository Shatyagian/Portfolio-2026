document.documentElement.classList.add("js");

const projects = {
  isid: {
    meta: "Event direction · Documentation · 2026",
    title: "Event ISID 2026",
    description: "Creative development and on-site execution for the Indonesian Symposium of Implant Dentistry, combining event storytelling, promotional strategy, and documentation.",
    points: [
      "Developed creative concepts and supported event execution.",
      "Planned visual content, photography, videography, and interview sessions.",
      "Worked as team leader with Field Marketing on creative execution and project delivery.",
      "Created awareness materials for the upcoming Presymposium 2027."
    ],
    images: [
      ["assets/images/img-005.webp", "Field Marketing team at ISID 2026"],
      ["assets/images/img-006.webp", "3D booth planning workspace for ISID 2026"],
      ["assets/images/img-037.webp", "Clinical documentation from Presymposium preparation"]
    ]
  },
  marketplace: {
    meta: "E-commerce · Graphic design · 2025",
    title: "Marketplace Visual",
    description: "A set of bold sales visuals designed to make offers legible, energetic, and consistent across major marketplace and live-shopping platforms.",
    points: [
      "Created assets for Shopee, Lazada, TikTok Shop, and Tokopedia.",
      "Designed graphics for TikTok Live and Shopee Live promotions.",
      "Supported a consistent and attention-grabbing HammerHead visual presence."
    ],
    images: [
      ["assets/images/img-012.webp", "Three HammerHead promotional marketplace designs"],
      ["assets/images/img-009.webp", "Soft Bait marketplace campaign artwork"]
    ]
  },
  print: {
    meta: "Collateral · Print design · 2026",
    title: "Visual Cetak",
    description: "A family of printed touchpoints that translates detailed implant information into clear event and promotional materials.",
    points: [
      "Designed brochures, cards, catalog materials, and roll-up banners.",
      "Balanced professional dental information with a consistent visual system.",
      "Prepared visual assets for use across event environments."
    ],
    images: [
      ["assets/images/img-016.webp", "Dental implant printed materials and event banner"],
      ["assets/images/img-020.webp", "Dental implant roll-up banner set"],
      ["assets/images/img-026.webp", "Printed event cards"]
    ]
  },
  booth: {
    meta: "Spatial · Event experience · 2026",
    title: "Booth Concept",
    description: "An end-to-end booth experience designed to turn brand objectives into a cohesive physical journey for dental professionals.",
    points: [
      "Conceptualized the visual layout, wall banners, and booth installation.",
      "Planned interactive activities, interview setups, event flow, and souvenir distribution.",
      "Aligned every visitor touchpoint with the wider brand presentation."
    ],
    images: [
      ["assets/images/img-032.webp", "Completed booth installation"],
      ["assets/images/img-033.webp", "Booth concept in a 3D design workspace"]
    ]
  },
  ai: {
    meta: "AI-assisted motion · Creative direction · 2026",
    title: "AI Promotion Video",
    description: "An AI-generated promotional video for Dentis Implant, developed to communicate product features and brand value as an engaging visual story.",
    points: [
      "Led concept development and creative direction.",
      "Built the story through AI-assisted visual production.",
      "Shaped the final asset around clear brand and promotional messaging."
    ],
    images: [
      ["assets/images/img-043.webp", "Hari Kesaktian Pancasila promotional visual"],
      ["assets/images/img-045.webp", "Scene from a Dentis Implant promotional video"]
    ]
  },
  automation: {
    meta: "Instagram · Customer journey · 2026",
    title: "Automation Chat",
    description: "An Instagram response system designed to make customer engagement and lead management faster and more consistent.",
    points: [
      "Automated responses to direct messages and comments.",
      "Redirected inquiries to the official WhatsApp channel.",
      "Sent personalized welcome messages to new followers, especially dental professionals."
    ],
    images: [
      ["assets/images/img-046.webp", "Automated Instagram direct-message response"],
      ["assets/images/img-048.webp", "Instagram welcome-message automation"],
      ["assets/images/img-050.webp", "Instagram response flow on mobile"]
    ]
  },
  film: {
    meta: "Camera · Film production · 2022",
    title: "Film Assistant",
    description: "Camera and production support shaped around the intended mood of each scene, with attention to how framing and movement guide an audience.",
    points: [
      "Supported camera setup and shot preparation.",
      "Considered framing, camera angles, movement, and character placement.",
      "Worked with the director and crew to capture the intended visual tone."
    ],
    images: [
      ["assets/images/img-052.webp", "Poster for the short film Terjerat"],
      ["assets/images/img-054.webp", "Behind-the-scenes stills from film production"]
    ]
  },
  performance: {
    meta: "Content analysis · Social media · 2026",
    title: "Content Performance",
    description: "A visual analysis of 40 Instagram posts comparing an earlier sample with recent organic and promoted content.",
    points: [
      "Recent sample average: 23,010 views per post.",
      "Earlier sample average: 482 views per post.",
      "Peak post: 149,700 views; recent total: 460,190 views.",
      "Average-view increase: approximately 47.7×."
    ],
    images: [
      ["assets/images/img-057.webp", "Instagram content performance comparison infographic"],
      ["assets/images/img-059.webp", "Recent Instagram content analytics feed"]
    ]
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

navLinks.forEach((link) => link.addEventListener("click", () => closeMenu()));

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
  dialogGallery.replaceChildren();

  project.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    dialogList.append(item);
  });

  project.images.forEach(([src, alt]) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = "eager";
    figure.append(image);
    dialogGallery.append(figure);
  });

  body.style.overflow = "hidden";
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
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
  dialogOpener?.focus();
  dialogOpener = null;
});
