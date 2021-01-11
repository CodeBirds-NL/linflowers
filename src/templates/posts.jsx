import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"

import p from "./posts.module.scss"

const PostsArchive = ({ pageContext, data }) => {
  const { title, btn_label } = pageContext.acf.blog_archive

  return (
    <PageDefaultLayout data={{ ...pageContext, title }}>
      <div className={p.posts}>
        {data.allWordpressPost.edges.map(({ node: post }) => (
          <div className={p.post} key={post.slug}>
            {post.featured_media && (
              <Img
                fluid={post.featured_media.localFile.childImageSharp.fluid}
              />
            )}
            <div className={p.post__content}>
              <h4>{post.acf.post.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
              <Link to={post.slug}>{btn_label}</Link>
            </div>
          </div>
        ))}
      </div>
    </PageDefaultLayout>
  )
}

export default PostsArchive

/**
 * Asynchronously gets page data based on lang_code (passed from gatsby-node.js)
 * @param {Number} $lang_code - Language code of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query Posts($lang_code: String) {
    allWordpressPost(filter: { lang_code: { eq: $lang_code } }) {
      edges {
        node {
          slug
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
    }
  }
`
