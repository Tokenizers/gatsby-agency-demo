import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { mapGraphResultToList } from "../../utils/graphquery.utils";
import View from "./articles.component";

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          articles: allArticlesJson {
            edges {
              node {
                id
                ressource
                title
                body
                svg
                link
                meta
              }
            }
          }
        }
      `}
      render={({ articles }) => (
        <View articles={mapGraphResultToList(articles)} {...props} />
      )}
    />
  );
};
