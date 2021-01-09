import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { mapGraphResultToList } from "../../utils/graphquery.utils";
import View from "./agences.component";

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
                street
                street2
                zipcode
                city
                phone
                thumbnail
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
