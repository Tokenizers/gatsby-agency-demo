module.exports = {
	siteMetadata: {
	  title: "Organisation Agency",
	  author: "Agency",
	  description: "agences en tout genre",
	  keywords: ``,
	  siteUrl: `http://localhost`,
	  mapboxToken: process.env.GATSBY_MAPBOX_API_TOKEN,
	},
	plugins: [
	  "gatsby-plugin-react-helmet",
	  {
		resolve: `gatsby-source-filesystem`,
		options: {
		  name: `images`,
		  path: `${__dirname}/src/images`,
		},
	  },
	  "gatsby-transformer-sharp",
	  "gatsby-plugin-sharp",
	  `gatsby-plugin-sass`,
	  `gatsby-plugin-sitemap`,
	  `gatsby-transformer-json`,
	  {
		resolve: `gatsby-source-filesystem`,
		options: {
		  name: `data`,
		  path: `${__dirname}/src/data/`,
		  ignore: [`**/\.*`], // ignore files starting with a dot
		},
	  }
	],
  };
  