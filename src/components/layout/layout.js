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

const Layout = ({ children, langCode }) => {
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
      wordpressPage(slug: { eq: "header-footer" }) {
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
  `)

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

  return (
    <>
      <Header
        langCode={langCode}
        menuItems={menus}
        metaData={data.wordpressPage.acf.header_footer}
      />
      <main className={l.main}>{children}</main>
      <Footer
        langCode={langCode}
        menuItems={menus}
        data={{ ...data.wordpressPage.acf.header_footer.footer }}
        logo={data.wordpressPage.acf.header_footer.site_logo}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  langCode: PropTypes.string.isRequired,
}

export default Layout
