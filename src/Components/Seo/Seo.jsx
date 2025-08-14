import React from "react";
import seoConfig from "./seoConfig.js"
import { Title, Meta } from "react-head";

const Seo = ({ pageKey }) => {
  const seo = seoConfig[pageKey];

  if (!seo) {
    console.warn(`SEO config for pageKey "${pageKey}" not found.`);
    return null;
  }

  return (
    <>
      <Title>{seo.title}</Title>
      <Meta name="description" content={seo.description} />
      {seo.primaryKeyword && seo.secondaryKeyword && (
        <Meta
          name="keywords"
          content={`${seo.primaryKeyword}, ${seo.secondaryKeyword}`}
        />
        
      )}
    </>
  );
};

export default Seo;
