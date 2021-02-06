import React, { useState } from "react"
import { graphql } from "gatsby"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"
import Form from "../components/form"

import l from "./landings.module.scss"

/**
 * Template for simple landingspages that contain a form
 * @param pageContext contains language slug and wordpress_id
 * @param data contains results in-template Graphql query based on wordpress_id above
 */
const LandingsPage = ({ pageContext, data }) => {
  const { image, special_field, form } = data.wordpressPage.acf.landings_page
  const products = data.allWordpressWpProducts.nodes

  const [allValues, setAllValues] = useState({})

  const handleInput = (evt, title, type) => {
    title = title.toLowerCase().replaceAll(" ", "_")

    // Reject input update when quantity is below 0
    /**
     * @todo Instead of modifying input value directly on object, let value inherit from state
     */
    if (type === "number" && parseInt(evt.target.value) < 0) {
      return (evt.target.value = 0)
    }
    setAllValues({
      ...allValues,
      [title]: type === "checkbox" ? evt.target.checked : evt.target.value,
    })
  }

  return (
    <PageDefaultLayout data={{ ...pageContext, title: form.title, image }}>
      <div className={l.products}>
        {products.map(({ acf }) => (
          <div className={l.form_group} key={acf.product.title}>
            <input
              name={acf.product.title}
              id={acf.product.title}
              type={special_field === "checkbox" ? "checkbox" : "number"}
              onInput={e => handleInput(e, acf.product.title, special_field)}
              placeholder={special_field && "0 stelen"}
            />
            <label htmlFor={acf.product.title}>{acf.product.title}</label>
          </div>
        ))}
      </div>
      <Form {...form} productValues={allValues} />
    </PageDefaultLayout>
  )
}

export default LandingsPage

/**
 * Asynchronously gets page data based on wordpress_id (passed from gatsby-node.js)
 * @param {Number} $wordpress_id - Id of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query LandinsPageQuery($wordpress_id: Int, $lang_code: String) {
    wordpressPage(wordpress_id: { eq: $wordpress_id }) {
      acf {
        landings_page {
          special_field
          image {
            ...Background
          }
          form {
            title
            label
            form_fields {
              width
              type
              required
              label
            }
          }
        }
      }
    }
    allWordpressWpProducts(filter: { lang_code: { eq: $lang_code } }) {
      nodes {
        acf {
          product {
            title
          }
        }
      }
    }
  }
`
