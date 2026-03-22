import { processElement } from "./core.js";

export function observeUI() {
  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (node.nodeType !== 1) continue;

        if (node.hasAttribute?.("chai-ui")) {
          processElement(node);
        }

        node.querySelectorAll?.("[chai-ui]").forEach(processElement);
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

