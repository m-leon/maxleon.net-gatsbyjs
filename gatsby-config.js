module.exports = {
  siteMetadata: {
    title: `Max Leon`,
    description: `Modern Web Developer`,
    author: `@m-leon`
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Max Leon`,
        short_name: `Max Leon`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#ffc107`,
        display: `minimal-ui`
      }
    }
  ]
};
