import {
  spacingScale,
  displayMap,
  colorMap,
  config,
  fontSizeMap,
  fontWeightMap,
  textAlignMap,
  radiusScale,
  flexDirectionMap, 
  flexWrapMap,
  gridTemplateMap,
  justifyContentMap,
  alignItemsMap,
  alignContentMap,
  alignSelfMap,
  overflowMap,
  cursorMap,
  shadowMap,
  objectFitMap,
} 
  from "./config.js";

export function resolveSpacing(val) {

  if (spacingScale[val]) {
    return spacingScale[val];
  }

  if (/^\[.+\]$/.test(val)) {
    return val.slice(1, -1); 
  }

  if (!config.strict && /^\d+$/.test(val)) {
    return `${val}px`;
  }

  return null;
}

export function resolveDisplay(val) {
  if (displayMap[val]) return displayMap[val];
  return null;
}

export function resolveColor(val) {
  const normalized = val.replace("-", "");
  return colorMap[normalized] || null;
}

export function resolveFontSize(val) {
  if (fontSizeMap[val]) return fontSizeMap[val];
  return null;
}

export function resolveFontWeight(val) {
  if (fontWeightMap[val]) return fontWeightMap[val];
  return null;
}

export function resolveTextAlign(val) {
  if (textAlignMap[val]) return textAlignMap[val];
  return null;
}

export function resolveRadius(val) {
  if (radiusScale[val]) return radiusScale[val];
  return null;
}

export function resolveFlexDirection(val) {
  return flexDirectionMap[val] || null;
}

export function resolveFlexWrap(val) {
  return flexWrapMap[val] || null;
}

export function resolveGridTemplate(val) {
  const normalized = val.replace('-', "");
  return gridTemplateMap[normalized] || null;
}

export function resolveJustifyContent(val) {
  return justifyContentMap[val] || null;
}

export function resolveAlignItems(val) {
  return alignItemsMap[val] || null;
}

export function resolveAlignContent(val) {
  return alignContentMap[val] || null;
}

export function resolveAlignSelf(val) {
  return alignSelfMap[val] || null;
}

export function resolveOverflow(val) {
  return overflowMap[val] || null;
}

export function resolveCursor(val) {
  return cursorMap[val] || null;
}

export function resolveShadow(val) {
  return shadowMap[val] || null;
}

export function resolveObjectFit(val) {
  return objectFitMap[val] || null;
}