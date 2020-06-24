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
          title
          persons {
            name
            image {
              alt_text
            }
          }
        }
      }
    }
  }
`
