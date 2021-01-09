// eslint-disable-next-line import/prefer-default-export
export const mapGraphResultToList = (graphqlMarkers) =>
  graphqlMarkers.edges.map((el) => el.node);
