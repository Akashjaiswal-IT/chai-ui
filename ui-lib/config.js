
export const config = {
  strict: false, // true = only allow scale values
};

export const spacingScale = {
  0: "0px",
  5: "5px",
  10: "10px",
  20: "20px",
};

export const displayMap = {
  block: { prop: "display", value: "block" },
  inline: { prop: "display", value: "inline" },
  inlineblock: { prop: "display", value: "inline-block" },
  flex: { prop: "display", value: "flex" },
  grid: { prop: "display", value: "grid" },
  hidden: { prop: "display", value: "none" },
  borderbox: { prop: "box-sizing", value: "border-box" },
  contentbox: { prop: "box-sizing", value: "content-box" },
};

export const colorMap = {
  // neutral
  black: "#000000",
  white: "#ffffff",
  transparent: "transparent",

  // gray scale
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",

  // red
  red50: "#fef2f2",
  red100: "#fee2e2",
  red200: "#fecaca",
  red300: "#fca5a5",
  red400: "#f87171",
  red500: "#ef4444",
  red600: "#dc2626",
  red700: "#b91c1c",
  red800: "#991b1b",
  red900: "#7f1d1d",

  // blue
  blue50: "#eff6ff",
  blue100: "#dbeafe",
  blue200: "#bfdbfe",
  blue300: "#93c5fd",
  blue400: "#60a5fa",
  blue500: "#3b82f6",
  blue600: "#2563eb",
  blue700: "#1d4ed8",
  blue800: "#1e40af",
  blue900: "#1e3a8a",

  // green
  green50: "#f0fdf4",
  green100: "#dcfce7",
  green200: "#bbf7d0",
  green300: "#86efac",
  green400: "#4ade80",
  green500: "#22c55e",
  green600: "#16a34a",
  green700: "#15803d",
  green800: "#166534",
  green900: "#14532d",

  // yellow
  yellow50: "#fefce8",
  yellow100: "#fef9c3",
  yellow200: "#fef08a",
  yellow300: "#fde047",
  yellow400: "#facc15",
  yellow500: "#eab308",
  yellow600: "#ca8a04",
  yellow700: "#a16207",
  yellow800: "#854d0e",
  yellow900: "#713f12",

  // purple
  purple50: "#faf5ff",
  purple100: "#f3e8ff",
  purple200: "#e9d5ff",
  purple300: "#d8b4fe",
  purple400: "#c084fc",
  purple500: "#a855f7",
  purple600: "#9333ea",
  purple700: "#7e22ce",
  purple800: "#6b21a8",
  purple900: "#581c87",

  // pink
  pink50: "#fdf2f8",
  pink100: "#fce7f3",
  pink200: "#fbcfe8",
  pink300: "#f9a8d4",
  pink400: "#f472b6",
  pink500: "#ec4899",
  pink600: "#db2777",
  pink700: "#be185d",
  pink800: "#9d174d",
  pink900: "#831843",

  // cyan
  cyan50: "#ecfeff",
  cyan100: "#cffafe",
  cyan200: "#a5f3fc",
  cyan300: "#67e8f9",
  cyan400: "#22d3ee",
  cyan500: "#06b6d4",
  cyan600: "#0891b2",
  cyan700: "#0e7490",
  cyan800: "#155e75",
  cyan900: "#164e63",
};

export const fontSizeMap = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
};

export const fontWeightMap = {
  thin: "100",
  light: "300",
  normal: "400",
  medium: "500",
  bold: "700",
  extrabold: "800",
};

export const textAlignMap = {
  left: "left",
  center: "center",
  right: "right",
};


export const radiusScale = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
};

export const flexDirectionMap = {
  row: "row",
  col: "column",
  "row-reverse": "row-reverse",
  "col-reverse": "column-reverse",
};

export const flexWrapMap = {
  wrap: "wrap",
  nowrap: "nowrap",
  "wrap-reverse": "wrap-reverse",
};

export const gridTemplateMap = {
  cols2: "repeat(2, minmax(0, 1fr))",
  cols3: "repeat(3, minmax(0, 1fr))",
  cols4: "repeat(4, minmax(0, 1fr))",
  cols5: "repeat(5, minmax(0, 1fr))",
  cols6: "repeat(6, minmax(0, 1fr))",
  cols12: "repeat(12, minmax(0, 1fr))",
  rows2: "repeat(2, minmax(0, 1fr))",
  rows3: "repeat(3, minmax(0, 1fr))",
  rows4: "repeat(4, minmax(0, 1fr))",
  rows5: "repeat(5, minmax(0, 1fr))",
  rows6: "repeat(6, minmax(0, 1fr))",
  rows12: "repeat(12, minmax(0, 1fr))",
};

export const justifyContentMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

export const alignItemsMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

export const alignContentMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

export const alignSelfMap = {
  auto: "auto",
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

export const overflowMap = {
  hidden: "hidden",
  scroll: "scroll",
  auto: "auto",
};

export const cursorMap = {
  pointer: "pointer",
  default: "default",
  notallowed: "not-allowed",
};

export const shadowMap = {
  sm: "0 1px 2px rgba(0,0,0,0.2)",
  md: "0 4px 6px rgba(0,0,0,0.4)",
  lg: "0 10px 15px rgba(0,0,0,0.6)",
};

export const objectFitMap = {
  cover: "cover",
  contain: "contain",
};