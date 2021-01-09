import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { mapGraphResultToList } from "../../utils/graphquery.utils";
import View from "./navbar.component";

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          agences: allAgencesJson {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `}
      render={({ agences }) => (
        <View agences={mapGraphResultToList(agences)} {...props} />
      )}
    />
  );
};
