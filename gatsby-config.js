const generateFavicons = sizes => {
  return sizes.map(size => {
    return {
      src: `favicons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    }
  })
}

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
    {
      resolve: "gatsby-plugin-sass",
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Linflowers`,
        short_name: `linflowers`,
        start_url: `/`,
        background_color: `#f9f4f0`,
        theme_color: `#ac423d`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icons: generateFavicons([48, 72, 96, 144, 192, 256, 384, 512]),
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `linflowers.codebirds.nl/wp`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/pages",
          "**/media",
          "**/menus",
          "**/posts",
          "**/products",
        ],
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
