import { parseAndApply } from "./parser.js";

export function processElement(el) {
  const attr = el.getAttribute("chai-ui");
  if (!attr) return;

  parseAndApply(el, attr);
}

export function initUI(root = document) {
  const elements = root.querySelectorAll("[chai-ui]");
  elements.forEach(processElement);
}