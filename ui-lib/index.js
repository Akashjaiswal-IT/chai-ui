import { initUI } from "./core.js";
import { observeUI } from "./observer.js";

document.addEventListener("DOMContentLoaded", () => {
  initUI();
  observeUI();
});