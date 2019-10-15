module.exports = {
  siteMetadata: {
    title: `ROBU Group`,
    description: `Our aim at ROBU Group is to offer comprehensive solutions to businesses, particularly for small and medium businesses with a focus on leveraging on technology solutions which will provide competitive edge moving forward for sustainable growth.`,
    author: `@jooeycheng`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0084F4`,
        theme_color: `#0084F4`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
