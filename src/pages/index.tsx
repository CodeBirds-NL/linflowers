import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import IndexTemplate from "../templates/index"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props: PageProps) => (
  <IndexTemplate pageContext={props.data.wordpressPage} />
)

export default IndexPage

export const query = graphql`
  query HomePageQueryNL {
    wordpressPage(slug: { eq: "home" }) {
      title
      slug
      lang_code
      acf {
        hero {
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
          persons {
            name
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
          title
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
        }
        usps {
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
          title
          description
        }
      }
    }
  }
`
