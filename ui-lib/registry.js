import {
  resolveSpacing,
  resolveDisplay,
  resolveColor,
  resolveFontSize,
  resolveFontWeight,
  resolveTextAlign,
  resolveRadius,
  resolveFlexDirection,
  resolveFlexWrap,
  resolveGridTemplate,
  resolveJustifyContent,
  resolveAlignItems,
  resolveAlignContent,  
  resolveAlignSelf,
  resolveOverflow,
  resolveCursor,
  resolveShadow,
  resolveObjectFit,
} from "./resolver.js";
export const registry = {};

function addSpacingUtility(name, cssProps) {
  const props = Array.isArray(cssProps) ? cssProps : [cssProps];

  registry[name] = (el, val) => {
    const v = resolveSpacing(val);
    if (!v) return;

    props.forEach((prop) => {
      el.style[prop] = v;
    });
  };
}

function addDisplayUtility(name) {
  registry[name] = (el) => {
    const { prop, value } = resolveDisplay(name);
    if (!value || !prop) return;
    el.style[prop] = value;
  };
}

function addColorUtility(name, cssProp) {
  registry[name] = (el, val) => {
    const resolved = resolveColor(val);
    if (!resolved) return;
    el.style[cssProp] = resolved;
  };
}

function addFontSizeUtility(name) {
  registry[name] = (el, val) => {
    const resolved = resolveFontSize(val);
    if (!resolved) return;
    el.style.fontSize = resolved;
  };
}

function addFontWeightUtility(name) {
  registry[name] = (el, val) => {
    const resolved = resolveFontWeight(val);
    if (!resolved) return;
    el.style.fontWeight = resolved;
  };
}

function addTextAlignUtility(name) {
  registry[name] = (el, val) => {
    const resolved = resolveTextAlign(val);
    if (!resolved) return;
    el.style.textAlign = resolved;
  };
}

registry["border"] = (el, val) => {
  // CASE 1: only "border"
  if (!val) {
    el.style.borderWidth = "1px";
    el.style.borderStyle = "solid";
    return;
  }

  // CASE 2: border-2 (width)
  const spacing = resolveSpacing(val);
  if (spacing) {
    el.style.borderWidth = spacing;
    el.style.borderStyle = "solid";
    return;
  }

  // CASE 3: border-red-500 (color)
  const color = resolveColor(val);
  if (color) {
    el.style.borderColor = color;

    // ensure visible
    if (!el.style.borderWidth) el.style.borderWidth = "1px";
    if (!el.style.borderStyle) el.style.borderStyle = "solid";
    return;
  }

  // CASE 4: border-dashed / solid / dotted (style)
  if (["solid", "dashed", "dotted", "double"].includes(val)) {
    el.style.borderStyle = val;

    // ensure visible
    if (!el.style.borderWidth) el.style.borderWidth = "1px";
    return;
  }
};

registry["rounded"] = (el, val) => {
  // default
  if (!val) {
    el.style.borderRadius = radiusScale.sm;
    return;
  }

  const parts = val.split("-");

  // CASE 1: rounded-md
  if (parts.length === 1) {
    const radius = resolveRadius(parts[0]);
    if (radius) el.style.borderRadius = radius;
    return;
  }

  // CASE 2: rounded-t-md
  if (parts.length === 2) {
    const [dir, size] = parts;
    const radius = resolveRadius(size);
    if (!radius) return;

    switch (dir) {
      case "t":
        el.style.borderTopLeftRadius = radius;
        el.style.borderTopRightRadius = radius;
        break;
      case "b":
        el.style.borderBottomLeftRadius = radius;
        el.style.borderBottomRightRadius = radius;
        break;
      case "l":
        el.style.borderTopLeftRadius = radius;
        el.style.borderBottomLeftRadius = radius;
        break;
      case "r":
        el.style.borderTopRightRadius = radius;
        el.style.borderBottomRightRadius = radius;
        break;
    }
  }
};


registry["flex"] = (el, val) => {
  el.style.display = "flex";

  if (!val) return;

  // direction
  const dir = resolveFlexDirection(val);
  if (dir) {
    el.style.flexDirection = dir;
    return;
  }

  // wrap
  const wrap = resolveFlexWrap(val);
  if (wrap) {
    el.style.flexWrap = wrap;
    return;
  }
};

function addGridUtility(name) {
  registry[name] = (el, val) => {
    el.style.display = "grid";

    if (!val) return;

    const template = resolveGridTemplate(val);
    if (template) {
      if (val.startsWith("cols")) {
        el.style.gridTemplateColumns = template;
      } else if (val.startsWith("rows")) {
        el.style.gridTemplateRows = template;
      }
    }
  };
}

function addJustifyContentUtility(name) {
  registry[name] = (el, val) => {
    const justifyContent = resolveJustifyContent(val);
    if (justifyContent) {
      el.style.justifyContent = justifyContent;
    }
  };
}

function addAlignItemsUtility(name) {
  registry[name] = (el, val) => {
    const alignItems = resolveAlignItems(val);
    if (alignItems) {
      el.style.alignItems = alignItems;
    }
  };
}

function addAlignContentUtility(name) {
  registry[name] = (el, val) => {
    const alignContent = resolveAlignContent(val);
    if (alignContent) {
      el.style.alignContent = alignContent;
    }
  };
}

function addAlignSelfUtility(name) {
  registry[name] = (el, val) => {
    const alignSelf = resolveAlignSelf(val);
    if (alignSelf) {
      el.style.alignSelf = alignSelf;
    }
  };
}

registry["gap"] = (el, val) => {
  const v = resolveSpacing(val);
  if (!v) return;
  el.style.gap = v;
};

function addPositionUtility(name) {
  registry[name] = (el) => {
    el.style.position = name;
  };
}

function addPositionValueUtility(name) {
    registry[name] = (el, val) => {
    const v = resolveSpacing(val);
    if (v) el.style[name] = v;
  };
}

function addOverflowUtility(name) {
  registry[name] = (el, val) => {
    const overflow = resolveOverflow(val);
    if (overflow) el.style.overflow = overflow;
  };
}

registry["z"] = (el, val) => {
  if (!/^\d+$/.test(val)) return;
  el.style.zIndex = val;
};

registry["negz"] = (el, val) => {
  if (!/^\d+$/.test(val)) return;
  el.style.zIndex = -val;
};

registry["opacity"] = (el, val) => {
  const num = Number(val);
  if (!isNaN(num)) {
    el.style.opacity = num / 100;
  }
};

function addCursorUtility(name) {
  registry[name] = (el, val) => {
    const cursor = resolveCursor(val);
    if (cursor) el.style.cursor = cursor;
  };
}

function addShadowUtility(name) {
  registry[name] = (el, val) => {
    const shadow = resolveShadow(val);
    if (shadow) el.style.boxShadow = shadow;
  };
}

registry["transition"] = (el) => {
  el.style.transition = "all 0.3s ease";
};

registry["scale"] = (el, val) => {
  const num = Number(val);
  if (!isNaN(num)) {
    el.style.transform = `scale(${num})`;
  }
};

registry["rotate"] = (el, val) => {
  const num = Number(val);
  if (!isNaN(num)) {
    el.style.transform = `rotate(${num}deg)`;
  }
};

function addObjectFitUtility(name) {
  registry[name] = (el, val) => {
    const objectFit = resolveObjectFit(val);
    if (objectFit) el.style.objectFit = objectFit;
  };
}

registry["visible"] = (el) => el.style.visibility = "visible";
registry["invisible"] = (el) => el.style.visibility = "hidden";

// object fit utilities
addObjectFitUtility("objectfit");

// shadow utilities
addShadowUtility("shadow");

//cursor utilities
addCursorUtility("cursor");

// overflow utilities
addOverflowUtility("overflow");

// position values
addPositionValueUtility("top");
addPositionValueUtility("bottom");
addPositionValueUtility("left");
addPositionValueUtility("right");

// position utilities
addPositionUtility("absolute");
addPositionUtility("relative");
addPositionUtility("fixed");
addPositionUtility("sticky");
addPositionUtility("static");

// grid utilities
addGridUtility("grid");

// flex utilities
addJustifyContentUtility("justify");
addAlignItemsUtility("items");
addAlignContentUtility("content");
addAlignSelfUtility("self");


// box sizing
addDisplayUtility("borderbox");
addDisplayUtility("contentbox");

// font utilities
addFontSizeUtility("fontsize");
addFontWeightUtility("font");
addTextAlignUtility("textalign");

// display
addDisplayUtility("block");
addDisplayUtility("inline");
addDisplayUtility("inline-block");
addDisplayUtility("hidden");

// padding
addSpacingUtility("p", "padding");
addSpacingUtility("pt", "paddingTop");
addSpacingUtility("pb", "paddingBottom");
addSpacingUtility("pl", "paddingLeft");
addSpacingUtility("pr", "paddingRight");

addSpacingUtility("px", ["paddingRight", "paddingLeft"]);
addSpacingUtility("py", ["paddingTop", "paddingBottom"]);

// margin
addSpacingUtility("m", "margin");
addSpacingUtility("mt", "marginTop");
addSpacingUtility("mb", "marginBottom");
addSpacingUtility("ml", "marginLeft");
addSpacingUtility("mr", "marginRight");

addSpacingUtility("mx", ["marginRight", "marginLeft"]);
addSpacingUtility("my", ["marginTop", "marginBottom"]);

// height and width
addSpacingUtility("h", "height");
addSpacingUtility("w", "width");

// colors
addColorUtility("bg", "backgroundColor");
addColorUtility("text", "color");
