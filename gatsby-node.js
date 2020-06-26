const path = require(`path`)
const fs = require("fs")
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const indexResult = await graphql(`
    {
      allWordpressPage(filter: { template: { eq: "index.php" } }) {
        edges {
          node {
            lang_code
            template
            slug
            title
            acf {
              hero {
                cta
                cta_icon {
                  alt_text
                  localFile {
                    childImageSharp {
                      fixed(width: 36) {
                        width
                        height
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                      }
                    }
                  }
                }
                persons {
                  name
                  image {
                    alt_text
                    localFile {
                      childImageSharp {
                        fixed(width: 86) {
                          base64
                          width
                          height
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                        }
                      }
                    }
                  }
                }
                title
                background_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1920) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                        srcWebp
                        srcSetWebp
                      }
                    }
                  }
                }
              }
              usps {
                icon {
                  alt_text
                  localFile {
                    childImageSharp {
                      fixed(width: 73) {
                        width
                        height
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                      }
                    }
                  }
                }
                title
                description
              }
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
            lang_code
            template
            slug
            title
          }
        }
      }
    }
  `)

  const allQueryResults = [indexResult, aboutResult]

  // Check for any errors
  allQueryResults.forEach(i => {
    if (i.errors) throw new Error(i.errors)
  })

  // Get templates
  const templateFolder = "./src/templates"
  const templates = fs.readdirSync(templateFolder, (err, files) => files)

  // filter out pages that don't need to be rendered in a template like header+footer page
  // const pagesToRender = allWordpressPage.edges.filter(
  //   i => i.node.template.split(".")[0] !== "no-page"
  // )

  for (const result of allQueryResults) {
    // Access query results via object destructuring
    const { allWordpressPage } = result.data

    allWordpressPage.edges.forEach(({ node: i }) => {
      let templateName = i.template.split(".")[0]
      let langSlug = i.lang_code === "nl" ? "" : i.lang_code

      createPage({
        // use decoreURIComponent to parse russian characters
        path: decodeURIComponent(
          `${langSlug}/${templateName === "index" ? "" : i.slug}`
        ), // render / slug for homepages
        component: slash(
          `${path.resolve(templateFolder)}/${templates.find(
            t => t === `${templateName}.tsx`
          )}`
        ),
        context: i,
      })
    })
  }
}
