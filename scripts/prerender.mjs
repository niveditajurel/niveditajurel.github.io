import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(projectRoot, "dist", "public");
const serverEntry = path.join(projectRoot, "dist", "server", "entry-server.js");
const templatePath = path.join(publicDir, "index.html");
const { render, seoRoutes } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(templatePath, "utf8");

const siteUrl = "https://niveditajurel.github.io";
const socialImage = `${siteUrl}/og-cover-pixel-portrait.png`;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function canonicalUrl(route) {
  const canonicalPath = route.canonicalPath ?? route.path;
  return canonicalPath === "/" ? `${siteUrl}/` : `${siteUrl}${canonicalPath}/`;
}

function replaceMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const expression = new RegExp(
    `<meta\\s+[^>]*${attribute}=["']${escapedKey}["'][^>]*>`,
    "i",
  );
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}">`;
  return expression.test(html) ? html.replace(expression, tag) : html.replace("</head>", `  ${tag}\n  </head>`);
}

function pageHtml(route) {
  const renderedApp = render(route.path);
  const url = canonicalUrl(route);
  let html = template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = replaceMeta(html, "name", "description", route.description);
  html = replaceMeta(html, "property", "og:title", route.title);
  html = replaceMeta(html, "property", "og:description", route.description);
  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "property", "og:image", socialImage);
  html = replaceMeta(html, "name", "twitter:title", route.title);
  html = replaceMeta(html, "name", "twitter:description", route.description);
  html = replaceMeta(html, "name", "twitter:image", socialImage);
  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${url}">`,
  );

  if (!/<link\s+rel=["']canonical["']/i.test(html)) {
    html = html.replace("</head>", `  <link rel="canonical" href="${url}">\n  </head>`);
  }

  if (route.path !== "/") {
    html = html.replace(
      /\s*<link\s+rel=["']preload["'][\s\S]*?hero-portrait[\s\S]*?>/i,
      "",
    );
  }

  return `<!DOCTYPE html>${html.split("<!DOCTYPE html>").pop()}`;
}

for (const route of seoRoutes) {
  const outputDir = route.path === "/"
    ? publicDir
    : path.join(publicDir, route.path.replace(/^\//, ""));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), pageHtml(route));
}

const sitemapRoutes = seoRoutes.filter((route) => route.includeInSitemap !== false);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map((route) => `  <url>\n    <loc>${canonicalUrl(route)}</loc>\n  </url>`)
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await writeFile(path.join(publicDir, "sitemap.xml"), sitemap);
await writeFile(path.join(publicDir, "robots.txt"), robots);

console.log(`Prerendered ${seoRoutes.length} routes and generated sitemap.xml + robots.txt.`);
