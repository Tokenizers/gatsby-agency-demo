import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

export default () => (
  <StaticQuery
    query={graphql`
      query helmetQuery {
        site {
          siteMetadata {
            title
            author
            description
            keywords
          }
        }
      }
    `}
    render={(data) => (
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <title>{data.site.siteMetadata.title}</title>
        <html lang="en" />
        {/* Google / Search Engine Meta Tags */}
        <meta itemProp="name" content={data.site.siteMetadata.author} />
        <meta
          itemProp="description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
    )}
  />
);
