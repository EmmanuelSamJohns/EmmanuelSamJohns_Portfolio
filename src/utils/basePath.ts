// GitHub Pages serves this site from /<repo-name>/ unless the repo is a
// <user>.github.io page. next.config.mjs computes basePath for Next's own
// routing (next/link, page URLs) and inlines it here via NEXT_PUBLIC_BASE_PATH
// so non-routing code can prefix asset paths by hand — see withBasePath below.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Root-absolute asset paths (e.g. "/images/...") don't get basePath applied
// automatically when images.unoptimized is set (next/image emits `src` as-is
// in that mode), so paths coming straight out of MDX frontmatter must be
// prefixed explicitly. Left untouched: empty strings, relative paths, and
// absolute URLs (they don't start with "/").
export function withBasePath(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
