/**
 * GSAP-based page transition overlays for Astro.
 * - Adds two fixed overlays: .slide-in (covers on navigation) and .slide-out (reveals on load)
 * - Intercepts clicks on internal links to play the cover animation before navigating
 * - Plays a reveal animation on page load
 * - Optional SPA-like navigation: fetch next page HTML and swap #page content without full reload
 *
 * Requirements:
 * - Install gsap: npm i gsap
 * - Include this script from your Layout.astro via ESM import.
 * - Add minimal CSS (see notes at end) or keep styles inline here if you prefer.
 */

import { gsap } from "gsap";

const DURATION = 0.75; // seconds
const EASE = "cubic-bezier(0.83, 0, 0.17, 1)"; // similar to the framer-motion example
const COLOR =
  getComputedStyle(document.documentElement)
    .getPropertyValue("--transition-color")
    ?.trim() || "#d8ff00";
const PAGE_CONTAINER_SELECTOR = "#page"; // container defined in Layout.astro

function createOverlay(className, origin) {
  const el = document.createElement("div");
  el.className = className;
  el.style.position = "fixed";
  el.style.inset = "0";
  el.style.height = "100vh";
  el.style.width = "100%";
  el.style.background = COLOR;
  el.style.zIndex = "10000";
  el.style.pointerEvents = "none";
  el.style.transformOrigin = origin;
  el.style.transform = "scaleY(0)";
  document.body.appendChild(el);
  return el;
}

function ensureOverlays() {
  let inEl = document.querySelector(".slide-in");
  let outEl = document.querySelector(".slide-out");

  if (!inEl) inEl = createOverlay("slide-in", "bottom");
  if (!outEl) outEl = createOverlay("slide-out", "top");

  return { inEl, outEl };
}

function isModifiedClick(e) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}

function isInternalLink(a) {
  if (!a) return false;
  if (
    a.target === "_blank" ||
    a.hasAttribute("download") ||
    a.hasAttribute("data-no-transition")
  )
    return false;
  const url = new URL(a.href, location.href);
  return url.origin === location.origin;
}

// Promise helpers around GSAP
const tweenTo = (target, vars) =>
  new Promise((resolve) => gsap.to(target, { ...vars, onComplete: resolve }));

const set = (target, vars) => gsap.set(target, vars);

// Reveal current page
async function playReveal() {
  const { outEl } = ensureOverlays();
  set(outEl, { scaleY: 1 });
  await tweenTo(outEl, { scaleY: 0, duration: DURATION, ease: EASE });
}

// Fetch next page and swap #page content (SPA-like)
async function navigateSpa(href, { push = true } = {}) {
  const container = document.querySelector(PAGE_CONTAINER_SELECTOR);
  if (!container) {
    // Fallback: full navigation
    location.href = href;
    return;
  }
  try {
    const res = await fetch(href, { headers: { "X-Requested-With": "fetch" } });
    if (!res.ok) throw new Error(`Failed to fetch ${href}: ${res.status}`);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const next = doc.querySelector(PAGE_CONTAINER_SELECTOR);
    if (!next) throw new Error("Next page container not found");

    // Swap content
    container.innerHTML = next.innerHTML;

    // Update <title>
    const newTitle = doc.querySelector("title")?.textContent || document.title;
    if (newTitle) document.title = newTitle;

    // Update history
    if (push) history.pushState({}, "", href);

    // After swapping, play reveal
    await playReveal();

    // Reattach interceptors for new content if needed (delegated listener already covers it)
  } catch (err) {
    console.error(err);
    location.href = href; // graceful fallback
  }
}

// Cover then navigate
async function playCoverAndGo(href) {
  const { inEl } = ensureOverlays();
  set(inEl, { scaleY: 0 });
  await tweenTo(inEl, { scaleY: 1, duration: DURATION, ease: EASE });
  await navigateSpa(href);
}

function installLinkInterceptor() {
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented) return;
    if (isModifiedClick(e)) return;

    const a = e.target.closest?.("a[href]");
    if (!a || !isInternalLink(a)) return;

    e.preventDefault();
    playCoverAndGo(a.href);
  });
  // Handle browser back/forward to keep SPA feel
  window.addEventListener("popstate", () => {
    navigateSpa(location.href, { push: false });
  });
}

function onDomReady(cb) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cb, { once: true });
  } else cb();
}

onDomReady(() => {
  ensureOverlays();
  installLinkInterceptor();
  playReveal();
});

/**
 * Suggested CSS (global) if you prefer stylesheet instead of inline:
 *
 * :root { --transition-color: #d8ff00; }
 * .slide-in, .slide-out {
 *   position: fixed; inset: 0; height: 100vh; width: 100%;
 *   background: var(--transition-color);
 *   z-index: 10000; pointer-events: none; transform: scaleY(0);
 * }
 * .slide-in { transform-origin: bottom; }
 * .slide-out { transform-origin: top; }
 */
