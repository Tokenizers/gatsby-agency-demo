const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  };

  // when building HTML, window is not defined, so Leaflet causes the build to blow up
  if (stage === "build-html") {
    config.module = {
      rules: [
        {
          test: /mapbox-gl/,
          use: loaders.null(),
        },
      ],
    };
  }

  actions.setWebpackConfig(config);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
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
            url
            phone
            thumbnail
            organisation {
              label
              users {
                email
                firstname
                mobile
                name
                phone
                position
                url
              }
            }
          }
        }
      }
    }
  `);
  const detailTemplate = path.resolve(`src/templates/detail.template.js`);
  queryResults.data.agences.edges
    .map((el) => el.node)
    .forEach((node) => {
      createPage({
        path: `/${node.id}`,
        component: detailTemplate,
        context: {
          // This time the agency product is passed down as context
          agence: node,
        },
      });
    });
};
