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
  const products = data.allWordpressWpProducts.nodes.map(el => [
    el.acf.product.title.toLowerCase().replaceAll(" ", "_"),
    el.acf.product.title,
  ])

  const [allValues, setAllValues] = useState({})

  const handleInput = (evt, title, type) => {
    // Reject input update when quantity is below 0
    if (type === "number" && parseInt(evt.target.value) < 0) return
    setAllValues({
      ...allValues,
      [title]: type === "checkbox" ? evt.target.checked : evt.target.value,
    })
  }

  return (
    <PageDefaultLayout data={{ ...pageContext, title: form.title, image }}>
      <div className={l.products}>
        {products.map(([title, label]) => (
          <div className={l.form_group} key={title}>
            <input
              name={title}
              id={title}
              type={special_field === "checkbox" ? "checkbox" : "number"}
              onChange={e => handleInput(e, title, special_field)}
              value={allValues[title] || ""}
              placeholder={special_field && "0 stelen"}
            />
            <label htmlFor={title}>{label}</label>
          </div>
        ))}
      </div>
      <Form
        {...form}
        productValues={allValues}
        resetHandler={() => (setAllValues = {})}
      />
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
