import { graphql } from "gatsby"

// Also serves for icons :-)
export const Person = graphql`
  fragment Person on wordpress__wp_media {
    alt_text
    id
    localFile {
      childImageSharp {
        fixed(width: 86) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export const Background = graphql`
  fragment Background on wordpress__wp_media {
    alt_text
    localFile {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const Pijler = graphql`
  fragment Pijler on wordpress__wp_media {
    alt_text
    localFile {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export const Action = graphql`
  fragment Action on wordpress__wp_media {
    alt_text
    localFile {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const ProductImage = graphql`
  fragment ProductImage on wordpress__wp_media {
    alt_text
    localFile {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
