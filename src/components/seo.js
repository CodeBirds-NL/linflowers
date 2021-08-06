import React from "react"
import { string, shape, object, arrayOf } from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getPageFromLangCode } from "./utils/functions"

function SEO({ meta, lang }) {
  const query = useStaticQuery(
    graphql`
      query {
        headerData: allWordpressPage(filter: { template: { eq: "header_footer.php" } }) {
          edges {
            node {
              ...HeaderQueries
            }
          }
        }
      }
    `
  )

  const headerData = getPageFromLangCode(query.headerData, lang)
  const { og_title: title, og_description: description, og_type: type, og_url: url, og_image: image } = meta

  const metaDescription = description || headerData.acf.header_footer.site_description
  const metaImage = image[0].localFile ? image[0].localFile.childImageSharp.fixed : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: url
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        }].concat(metaImage ? [
          {
            property: `og:image`,
            content: metaImage.src
          },
          {
            property: `og:image:alt`,
            content: image[0].alt_text,
          },
          {
            property: 'og:image:width',
            content: metaImage.width
          },
          {
            property: 'og:image:height',
            content: metaImage.height
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          }] : [
          {
            name: `twitter:card`,
            content: `summary`,
          },
        ])}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: {
    og_title: "Linflowers",
    og_image: [{
      alt_text: 'Linflowers',
      localFile: null
    }]
  }
}

SEO.propTypes = {
  lang: string,
  meta: shape({
    og_title: string.isRequired,
    og_description: string,
    og_type: string,
    og_url: string,
    og_image: arrayOf(shape({
      alt_text: string.isRequired,
      localFile: object
    }))
  })
}

export default SEO
