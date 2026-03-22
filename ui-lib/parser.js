// import { registry } from "./registry.js";

// export function parseAndApply(el, attr) {
//   const rules = attr.split(" ").filter(Boolean);

//   for (let rule of rules) {
//     const parts = rule.split("-");

//     const key = parts[0];                  // first token
//     const val = parts.slice(1).join("-");  // rest joined

//     const handler = registry[key];
//     if (!handler) continue;

//     if (val) {
//       handler(el, val);
//     } else {
//       handler(el);
//     }
//   }
// }

import { registry } from "./registry.js";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function parseAndApply(el, attr) {
  const rules = attr.split(" ").filter(Boolean);

  const baseRules = [];
  const variantRules = [];

  for (let rule of rules) {
    const parts = rule.split(":");

    if (parts.length === 1) {
      baseRules.push(rule);
    } else {
      variantRules.push({
        variants: parts.slice(0, -1),
        base: parts[parts.length - 1],
      });
    }
  }

  baseRules.forEach((rule) => applyRule(el, rule));

  el.__baseStyles = el.style.cssText;

  if (variantRules.length > 0) {
    setupVariants(el, baseRules, variantRules);
  }
}

function applyRule(el, rule) {
  const parts = rule.split("-");
  const key = parts[0];
  const val = parts.slice(1).join("-");

  const handler = registry[key];
  if (!handler) return;

  val ? handler(el, val) : handler(el);
}

function setupVariants(el, baseRules, variantRules) {
  const state = {
    hover: false,
    focus: false,
    dark: document.documentElement.classList.contains("dark"),
    width: window.innerWidth,
  };

  // -------- RECOMPUTE FUNCTION --------
  const recompute = () => {
    
    el.style.cssText = el.__baseStyles;

    // apply active variants
    for (let vr of variantRules) {
      if (isActive(vr.variants, state)) {
        applyRule(el, vr.base);
      }
    }
  };

  // -------- EVENT LISTENERS --------
  el.addEventListener("mouseenter", () => {
    state.hover = true;
    recompute();
  });

  el.addEventListener("mouseleave", () => {
    state.hover = false;
    recompute();
  });

  el.addEventListener("focus", () => {
    state.focus = true;
    recompute();
  });

  el.addEventListener("blur", () => {
    state.focus = false;
    recompute();
  });

  window.addEventListener("resize", () => {
    state.width = window.innerWidth;
    recompute();
  });

  const observer = new MutationObserver(() => {
    state.dark = document.documentElement.classList.contains("dark");
    recompute();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  recompute(); // initial run
}

function isActive(variants, state) {
  return variants.every((v) => {
    if (v === "hover") return state.hover;
    if (v === "focus") return state.focus;
    if (v === "dark") return state.dark;
    if (v in breakpoints) return state.width >= breakpoints[v];
    return false;
  });
}