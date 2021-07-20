import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"

import a from "./assortiment.module.scss"

const FlowersArchiveTemplate = ({ pageContext, data }) => {
  const { acf } = pageContext
  const { edges: products } = data.allWordpressWpProducts
  const filteredProducts = products.sort((a,b) => new Date(b.node.date) - new Date(a.node.date))

  return (
    <PageDefaultLayout
      data={{ ...pageContext, title: acf.products_archive.title }}
    >
      <div className={a.products}>
        {filteredProducts.map(
          ({ node }) =>
            node.acf.product.thumbnail && (
              <Link key={node.slug} to={node.slug} className={a.product}>
                <Img
                  fluid={
                    node.acf.product.thumbnail.localFile.childImageSharp.fluid
                  }
                />
                <div className={a.caption}>{node.acf.product.title}</div>
              </Link>
            )
        )}
      </div>
    </PageDefaultLayout>
  )
}

export default FlowersArchiveTemplate

/**
 * Asynchronously gets products (to display) that have same lang code as passed in pageContext (passed from gatsby-node.js)
 * @param {Number} $lang_code - Id of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query ProductsQuery($lang_code: String) {
    allWordpressWpProducts(filter: { lang_code: { eq: $lang_code } }) {
      edges {
        node {
          slug
          date
          acf {
            product {
              title
              thumbnail {
                ...Action
              }
            }
          }
        }
      }
    }
  }
`
