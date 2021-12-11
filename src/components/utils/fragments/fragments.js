import { graphql } from "gatsby"

// Also serves for icons :-)
export const Person = graphql`
  fragment Person on wordpress__wp_media {
    alt_text
    id
    localFile {
      childImageSharp {
        fixed(width: 86, quality: 100) {
          ...GatsbyImageSharpFixed
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
        fluid(maxWidth: 1800, quality: 100) {
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
        fluid(maxWidth: 600, quality: 100) {
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
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export const SEOData = graphql`
  fragment SEOData on wordpress__PAGE {
    yoast_head_json {
      og_title
      og_description
      og_type
      og_locale
      og_url
      og_image {
        alt_text
        localFile {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              originalName
              src
              width
              height
            }
          }
        }
      }
    }
  }
`

export const HeaderQueries = graphql`
  fragment HeaderQueries on wordpress__PAGE {
    lang_code
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          email
          email_icon {
            alt_text
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
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
`
