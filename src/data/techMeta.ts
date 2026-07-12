import {
  siAndroid,
  siAndroidstudio,
  siApollographql,
  siArduino,
  siCss,
  siDart,
  siDotnet,
  siEspressif,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGraphql,
  siHtml5,
  siJavascript,
  siLaravel,
  siMui,
  siMysql,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPostman,
  siReact,
  siSqlite,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export type TechMeta = {
  color: string;
  icon?: { body: string; viewBox: string };
};

function fromSimpleIcon(icon: SimpleIcon, colorOverride?: string): TechMeta {
  return {
    color: colorOverride ?? `#${icon.hex}`,
    icon: { body: `<path fill="currentColor" d="${icon.path}"/>`, viewBox: "0 0 24 24" },
  };
}

// Real logos sourced from Devicon / MDI / Simple Icons's sibling projects for
// brands that Simple Icons itself excludes (mostly Microsoft/Oracle product
// marks, which it drops for trademark reasons) or that aren't a brand at all
// (SQL is a language spec, so it gets a generic database glyph instead).
const csharp: TechMeta = {
  color: "#9B4F96",
  icon: {
    viewBox: "0 0 128 128",
    body: '<path fill="#9b4f96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7"/><path fill="#68217a" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8z"/>',
  },
};

// Devicon's Oracle mark is a wide wordmark on a mostly-empty square canvas —
// it shrinks to an illegible sliver at chip size, so reuse the database
// glyph (Oracle is a database product) tinted in Oracle's brand red instead.
const oracle: TechMeta = {
  color: "#C74634",
  icon: {
    viewBox: "0 0 24 24",
    body: '<path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"/>',
  },
};

const windowsForms: TechMeta = {
  color: "#0078D4",
  icon: {
    viewBox: "0 0 256 256",
    body: '<path fill="#0078d4" d="M0 0h121.329v121.329H0zm134.671 0H256v121.329H134.671zM0 134.671h121.329V256H0zm134.671 0H256V256H134.671z"/>',
  },
};

const msAccess: TechMeta = {
  color: "#A4373A",
  icon: {
    viewBox: "0 0 24 24",
    body: '<path fill="currentColor" d="M14.5 2.63q1.34 0 2.68.14l.67.09q.45.07.99.18q.53.11 1.09.27q.57.16 1.03.38t.75.5t.29.62v14.38q0 .34-.29.62q-.3.28-.75.5q-.46.22-1.03.38q-.56.16-1.1.27q-.53.11-.97.18q-.45.07-.69.09q-1.33.15-2.67.15q-1.35 0-2.68-.15q-.23-.02-.67-.09q-.45-.07-.99-.18q-.53-.11-1.09-.27q-.57-.16-1.02-.38q-.46-.22-.76-.5q-.29-.28-.29-.62V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.81q0-.34.29-.62q.3-.28.76-.5q.45-.22 1.02-.38q.56-.16 1.1-.27q.53-.11.97-.18q.45-.06.69-.09q1.32-.14 2.67-.14m0 1.25q-.63 0-1.42.04q-.78.04-1.58.15q-.81.11-1.57.29t-1.35.45q.61.29 1.37.47q.75.18 1.55.28q.79.1 1.57.15q.78.04 1.43.04q.66 0 1.43-.04q.78-.05 1.57-.15q.8-.1 1.56-.28q.75-.18 1.36-.47q-.59-.27-1.35-.45t-1.57-.29q-.8-.11-1.58-.15t-1.42-.04m-8.56 9.91h2.12l.49 1.49h1.67L7.83 8.72H6.2l-2.42 6.56h1.66M20.75 19v-3q-.64.31-1.44.5q-.81.18-1.64.29q-.84.11-1.67.16q-.81.05-1.5.05q-.71 0-1.42-.04q-.71-.05-1.41-.13q-.23.17-.5.17H8.25v2q.28.21.75.38q.5.18 1.07.3q.58.13 1.22.22q.63.1 1.21.13q.62.06 1.14.08t.86.02q.34-.01.86-.03q.52-.01 1.14-.07q.58-.03 1.21-.13q.64-.09 1.22-.22q.57-.12 1.07-.3q.47-.17.75-.38m0-4.37V11q-.64.31-1.44.5q-.81.18-1.64.29q-.84.11-1.67.16q-.81.05-1.5.05q-.62 0-1.25-.03q-.62-.04-1.25-.1v3.75q.63.07 1.25.1q.63.03 1.25.03q.36 0 .88-.02t1.12-.07q.58-.06 1.2-.16q.63-.06 1.2-.19q.6-.13 1.06-.31q.49-.15.79-.37m0-5V6q-.64.31-1.44.5q-.81.18-1.64.29q-.84.11-1.67.16q-.81.05-1.5.05T13 6.95q-.83-.05-1.67-.16q-.83-.11-1.64-.29q-.8-.19-1.44-.5v1h2.92q.33 0 .59.24q.24.26.24.59v2.79q.63.07 1.25.1q.63.03 1.25.03q.36 0 .88-.02t1.12-.07q.58-.06 1.2-.16q.63-.06 1.2-.19q.6-.13 1.06-.31q.48-.15.79-.37M6.32 12.5l.68-2l.65 2Z"/>',
  },
};

const database: TechMeta = {
  color: "#00758F",
  icon: {
    viewBox: "0 0 24 24",
    body: '<path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"/>',
  },
};

// Power BI's real logo is a multi-stop gradient with <defs>/ids, which would
// collide if the chip is ever rendered twice on one page — a plain bars
// glyph in the brand yellow avoids that while staying recognizable.
const powerbi: TechMeta = {
  color: "#F2C811",
  icon: {
    viewBox: "0 0 24 24",
    body: '<path fill="currentColor" d="M4 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm6-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>',
  },
};

const techMeta: Record<string, TechMeta> = {
  react: fromSimpleIcon(siReact),
  reactnative: fromSimpleIcon(siReact),
  typescript: fromSimpleIcon(siTypescript),
  javascript: fromSimpleIcon(siJavascript),
  flutter: fromSimpleIcon(siFlutter),
  dart: fromSimpleIcon(siDart),
  graphql: fromSimpleIcon(siGraphql),
  php: fromSimpleIcon(siPhp),
  mysql: fromSimpleIcon(siMysql),
  git: fromSimpleIcon(siGit),
  html: fromSimpleIcon(siHtml5),
  css: fromSimpleIcon(siCss),
  materialui: fromSimpleIcon(siMui),
  laravel: fromSimpleIcon(siLaravel),
  postgresql: fromSimpleIcon(siPostgresql),
  firebase: fromSimpleIcon(siFirebase),
  firebasefirestore: fromSimpleIcon(siFirebase),
  firebaseauthentication: fromSimpleIcon(siFirebase),
  cloudfirestore: fromSimpleIcon(siFirebase),
  sqlite: fromSimpleIcon(siSqlite),
  figma: fromSimpleIcon(siFigma),
  postman: fromSimpleIcon(siPostman),
  androidstudio: fromSimpleIcon(siAndroidstudio),
  arduino: fromSimpleIcon(siArduino),
  arduinoide: fromSimpleIcon(siArduino),
  arduinoideesp32: fromSimpleIcon(siArduino),
  dotnet: fromSimpleIcon(siDotnet),
  apolloclient: fromSimpleIcon(siApollographql),
  androidsdk: fromSimpleIcon(siAndroid),
  materialcomponents: fromSimpleIcon(siAndroid),
  esp32: fromSimpleIcon(siEspressif),
  // OpenJDK's own brand color is black, unreadable on a dark chip — use the
  // classic Java orange instead while keeping the OpenJDK glyph.
  java: fromSimpleIcon(siOpenjdk, "#ED8B00"),
  // Swing and Java's serialization API aren't brands of their own — reuse
  // the OpenJDK glyph since both are core parts of the Java platform.
  javaswing: fromSimpleIcon(siOpenjdk, "#ED8B00"),
  objectserialization: fromSimpleIcon(siOpenjdk, "#ED8B00"),
  csharp,
  sql: database,
  oracle,
  windowsforms: windowsForms,
  powerbi,
  msaccess: msAccess,
  // AJAX isn't a brand either — it's a JS technique, so reuse the JS logo.
  ajax: fromSimpleIcon(siJavascript),
  oop: { color: "#9CA3AF" },
  sharedpreferences: fromSimpleIcon(siAndroid),
  oledb: fromSimpleIcon(siDotnet),
  pn532nfcmodule: fromSimpleIcon(siArduino),
};

function normalize(label: string): string {
  // Spell out symbols before stripping them, so "C#" -> "csharp" and
  // ".NET" -> "dotnet" instead of collapsing to "c" and "net".
  return label
    .toLowerCase()
    .replace(/#/g, "sharp")
    .replace(/\./g, "dot")
    .replace(/[^a-z0-9]/g, "");
}

export function getTechMeta(label: string): TechMeta | undefined {
  return techMeta[normalize(label)];
}

export function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
