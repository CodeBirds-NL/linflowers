import React, { useState } from "react"
import { graphql } from "gatsby"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"
import Form from "../components/form"
import Notice from "../components/notice"

import l from "./landings.module.scss"

/**
 * Template for simple landingspages that contain a form
 * @param pageContext contains language slug and wordpress_id
 * @param data contains results in-template Graphql query based on wordpress_id above
 */
const LandingsPage = ({ pageContext, data }) => {
  const {
    offerte_placeholder = "",
    proefbos_notice = "",
    intro_text = "",
    landings_page,
  } = data.wordpressPage.acf
  const { image, special_field, form } = landings_page
  const products = data.allWordpressWpProducts.nodes.map(el => [
    el.acf.product.title.toLowerCase().replace(/" "/g, "_"),
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
      {intro_text && <div className={l.intro_text}>{intro_text}</div>}
      <div className={l.products}>
        {products.map(([title, label]) => (
          <div className={l.form_group} key={title}>
            <input
              name={title}
              id={title}
              type={special_field === "checkbox" ? "checkbox" : "number"}
              onChange={e => handleInput(e, title, special_field)}
              value={allValues[title] || ""}
              placeholder={special_field && offerte_placeholder}
            />
            <label htmlFor={title}>{label}</label>
          </div>
        ))}
      </div>
      <Notice>{proefbos_notice}</Notice>
      <Form
        {...form}
        src={special_field === "checkbox" ? "proefbos" : "offerte"}
        productValues={allValues}
        resetHandler={() => setAllValues({})}
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
        offerte_placeholder
        proefbos_notice
        intro_text
        landings_page {
          special_field
          image {
            ...Background
          }
          form {
            title
            label
            label_active
            form_fields {
              width
              type
              required
              label
            }
            privacy_notice
            confirmation
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
