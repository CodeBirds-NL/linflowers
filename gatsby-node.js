const path = require(`path`)
const fs = require("fs")
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const indexResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "index.php" } }) {
        edges {
          node {
            wordpress_id
            title
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
          }
        }
      }
    }
  `)

  const aboutResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "about.php" } }) {
        edges {
          node {
            wordpress_id
            title
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
          }
        }
      }
    }
  `)

  const assortimentResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "assortiment.php" } }) {
        edges {
          node {
            wordpress_id
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
            featured_media {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            acf {
              products_archive {
                title
              }
            }
          }
        }
      }
    }
  `)

  const postsArchiveResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "posts.php" } }) {
        edges {
          node {
            wordpress_id
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
            featured_media {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            acf {
              blog_archive {
                title
                btn_label
              }
            }
          }
        }
      }
    }
  `)

  const contactResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "contact.php" } }) {
        edges {
          node {
            wordpress_id
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
          }
        }
      }
    }
  `)

  const productResult = await graphql(`
    {
      allWordpressWpProducts {
        edges {
          node {
            wordpress_id
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
          }
        }
      }
    }
  `)

  const landingsResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "landings.php" } }) {
        edges {
          node {
            wordpress_id
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
          }
        }
      }
    }
  `)

  const postsResult = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            wordpress_id
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
          }
        }
      }
    }
  `)

  const bedanktResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "thanks.php" } }) {
        edges {
          node {
            wordpress_id
            slug
            lang_code
            template
            polylang_translations {
              slug
              lang_code
            }
          }
        }
      }
    }
  `)

  const allQueryResults = [
    indexResult,
    aboutResult,
    assortimentResult,
    postsArchiveResult,
    contactResult,
    productResult,
    landingsResult,
    postsResult,
    bedanktResult,
  ]

  // Check for any errors
  allQueryResults.forEach(i => {
    if (i.errors) throw new Error(i.errors)
  })

  // Get list of templates
  const templateFolder = "./src/templates"
  const templates = fs.readdirSync(templateFolder, (err, files) => files)

  // Create multilingual pages for every 'page' such as home, about, etc. in every post type
  for (const result of allQueryResults) {
    const postType =
      result.data.allWordpressPage ||
      result.data.allWordpressWpProducts ||
      result.data.allWordpressPost

    postType.edges.forEach(({ node: i }) => {
      /**
       * Template format is template-name.php
       * @type {String}
       */
      let templateName = i.template.split(".")[0]

      /**
       * Dutch pages should render in root of the site so no slug for those pages
       * @type {String}
       */
      let langSlug = i.lang_code === "nl" ? "" : i.lang_code

      /* Mimic parent slug behaviour by appending parent slug to lang slug for singles*/
      if (templateName === "product") {
        const parent = assortimentResult.data.allWordpressPage.edges.find(
          ({ node: p }) => p.lang_code === i.lang_code
        )
        langSlug += `/${parent.node.slug}`
      } else if (templateName === "post") {
        // Get parent slug
        const parent = postsArchiveResult.data.allWordpressPage.edges.find(
          ({ node: p }) => p.lang_code === i.lang_code
        )
        langSlug += `/${parent.node.slug}`
      }

      createPage({
        // use decoreURIComponent to parse russian characters
        path: decodeURIComponent(
          `${langSlug}/${templateName === "index" ? "" : i.slug}`
        ), // render / slug for homepages
        component: slash(
          `${path.resolve(templateFolder)}/${templates.find(
            t => t === `${templateName}.jsx`
          )}`
        ),
        context: { ...i },
      })
    })
  }
}
