import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const BASE_TITLE = "Trident Designer";
const BASE_DESCRIPTION = "TRIDENT - Premium custom jewelry design and creation serving 50+ happy clients worldwide. Expert CAD designing, rendering & manufacturing.";
const BASE_URL = "https://tridentjewellery.com";
const DEFAULT_OG_IMAGE = "/assets/Trident.png";

const Seo = ({
  title,
  description = BASE_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonical,
}: SeoProps) => {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE ? BASE_TITLE : `${title} | ${BASE_TITLE}`;

    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`, true);
    setMeta("og:url", window.location.href, true);
    setMeta("og:type", ogType, true);

    const canonicalUrl = canonical || window.location.href;
    let canonEl = document.querySelector("link[rel='canonical']");
    if (!canonEl) {
      canonEl = document.createElement("link");
      canonEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonEl);
    }
    canonEl.setAttribute("href", canonicalUrl);

    setMeta("twitter:card", "summary_large_image", true);
    setMeta("twitter:title", fullTitle, true);
    setMeta("twitter:description", description, true);
    setMeta("twitter:image", ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`, true);
  }, [title, description, ogImage, ogType, canonical]);

  return null;
};

export default Seo;
