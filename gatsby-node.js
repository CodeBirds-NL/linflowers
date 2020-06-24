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
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            lang_code
            template
            slug
            title
            acf {
              hero {
                cta
                persons {
                  name
                  image {
                    alt_text
                  }
                }
                title
              }
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage } = result.data

  const templateFolder = "./src/templates"
  const templates = fs.readdirSync(templateFolder, (err, files) => files)

  allWordpressPage.edges.forEach(({ node: i }) => {
    let templateName = i.template.split(".")[0]
    let langSlug = i.lang_code === "nl" ? "" : i.lang_code

    createPage({
      path: `${langSlug}/${templateName === "index" ? "" : i.slug}`, // render / slug for homepages
      component: slash(
        `${path.resolve(templateFolder)}/${templates.find(
          t => t === `${templateName}.tsx`
        )}`
      ),
      context: i,
    })
  })
}
