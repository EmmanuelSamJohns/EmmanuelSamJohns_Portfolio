import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home, person, social } from "./content";

// Public origin of the deployed site. Used for SEO meta tags, OpenGraph/Twitter cards,
// schema.org data, sitemap.xml and robots.txt — so it must match where the site is actually
// served or link previews break. GitHub Pages currently serves this from a project-repo
// sub-path (/EmmanuelSamJohns_Portfolio), so that sub-path (NEXT_PUBLIC_BASE_PATH, set in
// next.config.mjs) has to be part of the base. If the repo is ever renamed to
// EmmanuelSamJohns.github.io or moved to a custom domain, NEXT_PUBLIC_BASE_PATH becomes ""
// automatically and this needs no further edit.
const baseURL: string = `https://emmanuelsamjohns.github.io${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`;

// Absolute OG/Twitter preview image. Kept as a full URL (rather than a root-relative
// "/images/og-image.png") because Meta.generate passes absolute URLs straight through,
// while a relative one gets resolved against metadataBase — which, under a sub-path
// deployment, does not reliably keep that sub-path. See baseURL comment above.
const ogImage: string = `${baseURL}/images/og-image.png`;

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": false,
};

const display: DisplayConfig = {
  location: false,
  time: false,
  themeSwitcher: false,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {};

// Fonts are self-hosted (see src/fonts) so the build doesn't depend on reaching
// Google Fonts at build time.
import localFont from "next/font/local";

const heading = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "../fonts/newsreader-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/newsreader-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/newsreader-600.woff2", weight: "600", style: "normal" },
  ],
});

const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "../fonts/source-sans-3-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/source-sans-3-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/source-sans-3-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/source-sans-3-700.woff2", weight: "700", style: "normal" },
  ],
});

const label = localFont({
  variable: "--font-label",
  display: "swap",
  src: [
    { path: "../fonts/source-sans-3-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/source-sans-3-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/source-sans-3-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/source-sans-3-700.woff2", weight: "700", style: "normal" },
  ],
});

const code = localFont({
  variable: "--font-code",
  display: "swap",
  src: [{ path: "../fonts/geist-mono-400.woff2", weight: "400", style: "normal" }],
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style: StyleConfig = {
  theme: "light", // dark | light | system
  neutral: "slate", // sand | gray | slate | mint | rose | dusk | custom
  brand: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative | sharp
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle: DataStyleConfig = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data — pulls from content.tsx so there's one source of truth
const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: person.name,
  description: home.description,
  email: person.email,
};

// social links — derived from the social array in content.tsx to avoid duplication
const sameAs: SameAsConfig = {
  threads: social.find((s) => s.name === "Threads")?.link ?? "",
  linkedin: social.find((s) => s.name === "LinkedIn")?.link ?? "",
  discord: social.find((s) => s.name === "Discord")?.link ?? "",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  ogImage,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
