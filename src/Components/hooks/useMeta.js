import { useEffect } from "react";
import seoConfig from "../Seo/seoConfig";

export function useMeta(pageKey) {
  useEffect(() => {
    const config = seoConfig[pageKey];
    if (!config) return;

    // Update title
    if (config.title) {
      document.title = config.title;
    }

    // Update or create description meta tag
    if (config.description) {
      let metaTag = document.querySelector("meta[name='description']");
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.name = "description";
        document.head.appendChild(metaTag);
      }
      metaTag.content = config.description;
    }

    // Optional: add primary and secondary keywords for SEO
    if (config.primaryKeyword || config.secondaryKeyword) {
      let keywordsTag = document.querySelector("meta[name='keywords']");
      if (!keywordsTag) {
        keywordsTag = document.createElement("meta");
        keywordsTag.name = "keywords";
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.content = [
        config.primaryKeyword,
        config.secondaryKeyword
      ]
        .filter(Boolean)
        .join(", ");
    }
  }, [pageKey]);
}
