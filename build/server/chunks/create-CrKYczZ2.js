import { m as makeElement, j as addMeltEventListener } from './index3-B3GebGGx.js';

function createLabel() {
  const root = makeElement("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}

export { createLabel as c };
//# sourceMappingURL=create-CrKYczZ2.js.map
