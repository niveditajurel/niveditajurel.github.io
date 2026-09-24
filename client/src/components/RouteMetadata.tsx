import { useEffect } from "react";
import { useLocation } from "wouter";
import { DEFAULT_SOCIAL_IMAGE, getCanonicalUrl, getSeoRoute } from "@/lib/seo";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function RouteMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const route = getSeoRoute(location);
    const canonicalUrl = getCanonicalUrl(route);
    document.title = route.title;

    setMeta('meta[name="description"]', "name", "description", route.description);
    setMeta('meta[property="og:title"]', "property", "og:title", route.title);
    setMeta('meta[property="og:description"]', "property", "og:description", route.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_SOCIAL_IMAGE);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", route.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", route.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_SOCIAL_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location]);

  return null;
}
