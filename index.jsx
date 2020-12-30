import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "./src/components/layout"
import IndexTemplate from "./src/templates/index"
import Image from "./src/components/image"
import SEO from "./src/components/seo"

const IndexPage = ({ data }) => (
  <IndexTemplate pageContext={data.wordpressPage} />
)

export default IndexPage

export const query = graphql`
  query HomePageQueryNL {
    wordpressPage(slug: { eq: "home" }) {
      wordpress_id
      title
      slug
      lang_code
      acf {
        home {
          hero {
            background_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            actions {
              title
              url
              image {
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            cta
            cta_icon {
              alt_text
              localFile {
                childImageSharp {
                  fixed(width: 36) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
          about {
            persons {
              title
              url
              image {
                alt_text
                localFile {
                  childImageSharp {
                    fixed(width: 86) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
            text
            btn {
              label
              link
            }
          }
          usps {
            title
            text
            icon_title
            btn {
              label
              link
            }
            icon {
              alt_text
              localFile {
                childImageSharp {
                  fixed(width: 73) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
            image {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
