import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// GitHub Pages serves project repos from /<repo-name>/ instead of /.
// GITHUB_REPOSITORY (owner/repo) is set automatically inside GitHub Actions,
// so basePath is derived at build time and needs no manual config. User/org
// pages (repo named <user>.github.io) and local dev both resolve to "".
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrgPage = repoName?.endsWith(".github.io") ?? false;
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS && repoName && !isUserOrgPage ? `/${repoName}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
