/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"
import l from "./layout.module.scss"
import Footer from "./footer/footer"

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
                    ...GatsbyImageSharpFluid_withWebp
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
                      ...GatsbyImageSharpFixed_withWebp
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
                      ...GatsbyImageSharpFixed_withWebp
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

  return (
    <>
      <Header
        langCode={langCode}
        menuItems={data.allWordpressMenusMenusItems.edges}
        metaData={data.wordpressPage.acf.header_footer}
      />
      <main className={l.main}>{children}</main>
      <Footer
        langCode={langCode}
        menuItems={data.allWordpressMenusMenusItems.edges}
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
