import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"

import p from "./posts.module.scss"

const PostSingle = ({ pageContext, data }) => {
  const { featured_media, content, acf, excerpt } = data.wordpressPost

  return (
    <PageDefaultLayout
      data={{ ...pageContext, title: acf.post.title, featured_media }}
    >
      <Img
        className={p.post_image}
        fluid={featured_media.localFile.childImageSharp.fluid}
      />
      <div
        className={p.post_content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PageDefaultLayout>
  )
}

export default PostSingle

/**
 * Asynchronously gets page data based on lang_code (passed from gatsby-node.js)
 * @param {Number} $lang_code - Language code of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query Post($wordpress_id: Int) {
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
        }
      }
    }
  }
`
