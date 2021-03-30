import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"

import p from "./posts.module.scss"
import Slider from "../components/slider/slider"

const PostSingle = ({ pageContext, data }) => {
  // Get parent slugs in all languages for direct language switch functionality in header
  const parentSlugs = data.wordpressPage.polylang_translations
  pageContext["parentSlugTranslations"] = parentSlugs

  const { featured_media, content, acf } = data.wordpressPost

  const { gallery } = acf.post

  return (
    <PageDefaultLayout
      data={{ ...pageContext, title: acf.post.title, featured_media }}
    >
      <div
        className={p.post_content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Slider slides={gallery} />
    </PageDefaultLayout>
  )
}

export default PostSingle

/**
 * Asynchronously gets page data based on wordpress_id (passed from gatsby-node.js)
 * @param {Number} $wordpress_id - Language code of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query Post($wordpress_id: Int, $lang_code: String) {
    wordpressPost(wordpress_id: { eq: $wordpress_id }) {
      slug
      content
      featured_media {
        ...Background
      }
      excerpt
      acf {
        post {
          title
          gallery {
            ...Background
          }
        }
      }
    }
    wordpressPage(
      lang_code: { eq: $lang_code }
      template: { eq: "posts.php" }
    ) {
      polylang_translations {
        lang_code
        slug
      }
    }
  }
`
