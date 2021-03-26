/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.css"
import l from "./layout.module.scss"
import Footer from "../footer/footer"

const Layout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query siteData {
      allWordpressMenusMenusItems {
        edges {
          node {
            items {
              slug
              title
              url
            }
            name
          }
        }
      }
      wordpressSiteMetadata {
        url
      }
      allWordpressPage(filter: { template: { eq: "footer.php" } }) {
        edges {
          node {
            lang_code
            acf {
              footer {
                col_2 {
                  title
                  wordpress_fields {
                    left
                    right
                  }
                }
                col_3 {
                  title
                  contact_details
                }
              }
            }
          }
        }
      }
      wordpressPage(slug: { eq: "header" }) {
        acf {
          header_footer {
            site_description
            site_title
            site_logo {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            topbar {
              tel
              tel_icon {
                alt_text
                localFile {
                  childImageSharp {
                    fixed(width: 24) {
                      ...GatsbyImageSharpFixed_noBase64
                    }
                  }
                }
              }
              email
              email_icon {
                alt_text
                localFile {
                  childImageSharp {
                    fixed(width: 24) {
                      ...GatsbyImageSharpFixed_noBase64
                    }
                  }
                }
              }
            }
            languages {
              label
              icon {
                ...Pijler
              }
              lang_code
            }
          }
        }
      }
    }
  `)

  const {
    lang_code: langCode,
    polylang_translations: translations,
  } = pageContext

  const formatMenuItemUrl = item => {
    let obj = { ...item }
    obj.url = obj.url.replace(wpSiteUrl, "")
    if (obj.child_items) {
      obj.child_items = formatMenuItemUrl(obj.child_items)
    }
    return obj
  }

  const wpSiteUrl = data.wordpressSiteMetadata.url
  const menus = data.allWordpressMenusMenusItems.edges.map(i => {
    // Return object with slugs updated
    let menu = { ...i }
    menu.node.items = menu.node.items.map(item => {
      return formatMenuItemUrl(item)
    })
    return menu
  })

  /**
   * Get language based footer content
   */
  const footerData = data.allWordpressPage.edges.find(
    ({ node }) => node.lang_code === langCode
  ).node

  /**
   * Pass object with lang_codes mapped to their slugs to header
   * Makes seamless language switching on any page possible without losing current navigation
   */
  const langsToSlugs = {}
  translations.forEach(t => {
    let parentSlug = ""
    // This will check whether we have translated parentSlug (in case of product and post single pages)
    if (pageContext.hasOwnProperty("parentSlugTranslations")) {
      parentSlug = pageContext.parentSlugTranslations.find(
        pt => pt.lang_code === t.lang_code
      ).slug
    }
    langsToSlugs[t.lang_code] = parentSlug ? `${parentSlug}/${t.slug}` : t.slug
  })

  return (
    <>
      <Header
        langCode={langCode}
        menuItems={menus}
        metaData={data.wordpressPage.acf.header_footer}
        langSlugMappings={langsToSlugs}
        indexPage={pageContext.indexPage || false}
      />
      <main className={l.main}>{children}</main>
      <Footer
        langCode={langCode}
        menuItems={menus}
        data={{ ...footerData.acf.footer }}
        logo={data.wordpressPage.acf.header_footer.site_logo}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default Layout
