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

  // Get list of templates
  const templateFolder = "./src/templates"
  const templates = fs.readdirSync(templateFolder, (err, files) => files)

  // Create multilingual pages for every 'page' such as home, about, etc.
  for (const result of allQueryResults) {
    const { allWordpressPage } = result.data

    allWordpressPage.edges.forEach(({ node: i }) => {
      /**
       * Template format is template_name.php
       * @type {String}
       */
      let templateName = i.template.split(".")[0]

      /**
       * Dutch pages should render in root of the site so no slug for those pages
       * @type {String}
       */
      let langSlug = i.lang_code === "nl" ? "" : i.lang_code

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
