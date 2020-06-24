const dropUnusedMediaNormalizer = {
  name: "dropUnusedMediaNormalizer",
  normalizer: function ({ entities }) {
    return entities.filter(
      e => !(e.__type === "wordpress__wp_media" && !e.post)
    )
  },
}

module.exports = {
  siteMetadata: {
    title: `Linflowers Chrysanten`,
    description: `Partnership & Vakmanschap`,
    author: `@codebirds`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `linflowers.codebirds.nl/wp`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: ["**/pages", "**/media", "**/menus", "**/posts"],
        normalizers: normalizers => [dropUnusedMediaNormalizer, ...normalizers],
        concurrentRequests: 20,
        perPage: 50,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
