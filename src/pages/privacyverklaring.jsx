import React from "react"
import { graphql } from "gatsby"
import PageDefaultLayout from "../components/layout/PageDefaultLayout"

const Privacyverklaring = ({ data }) => {
  const { content } = data.wordpressPage

  return (
    <PageDefaultLayout data={data.wordpressPage}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageDefaultLayout>
  )
}

export default Privacyverklaring

/**
 * Asynchronously gets page data based on slug
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query PrivacyPage {
    wordpressPage(slug: { eq: "privacyverklaring" }) {
      title
      lang_code
      content
      featured_media {
        ...Background
      }
      polylang_translations {
        lang_code
        slug
      }
    }
  }
`
