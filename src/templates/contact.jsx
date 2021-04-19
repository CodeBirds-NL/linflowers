import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import PageDefaultLayout from "../components/layout/PageDefaultLayout"
import Row from "../components/row"
import Persons from "../components/persons"
import Form from "../components/form"
import Slider from "../components/slider/slider"

import c from "./contact.module.scss"

const ContactTemplate = ({ pageContext, data }) => {
  const {
    title,
    persons,
    featured_action,
    actions,
    form,
    locations,
  } = data.wordpressPage.acf.contact
  const { featured_media } = data.wordpressPage

  return (
    <Layout pageContext={pageContext}>
      <PageDefaultLayout
        breakOut={true}
        data={{ ...pageContext, title, featured_media }}
      >
        <Persons
          customClass="contact"
          role={true}
          showNumber={true}
          label={false}
          persons={persons}
        />
      </PageDefaultLayout>
      <Row backgroundColor="" customClass={c.actions}>
        <div className={c.grid}>
          <div className={c.grid__left}>
            <div className={[c.iconWrapper].join(" ")}>
              <Img
                className={c.image}
                fluid={featured_action.image.localFile.childImageSharp.fluid}
              />
            </div>
            <div className={c.textContent}>
              <strong>{featured_action.title}</strong>
              <div dangerouslySetInnerHTML={{ __html: featured_action.text }} />
            </div>
          </div>
          <div className={c.grid__right}>
            {actions.map(action => (
              <Link key={action.title} to={action.url}>
                <div className={c.iconWrapper}>
                  <Img
                    className={c.image}
                    fluid={action.image.localFile.childImageSharp.fluid}
                  />
                </div>
                {action.title}
              </Link>
            ))}
          </div>
        </div>
      </Row>
      <Row customClass={c.form_row}>
        <div className={c.inner}>
          <h4 className={c.title}>{form.title}</h4>
          <Form src="contact" {...form} />
        </div>
      </Row>
      <Slider>
        {locations.map((loc, i) => (
          <li className={`keen-slider__slide number-slide${i}`} key={loc.title}>
            <div className={c.imageWrapper}>
              <Img
                className={c.bgImage}
                fluid={loc.image.localFile.childImageSharp.fluid}
              />
            </div>
            <div className={c.content}>
              <h2>{loc.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: loc.text }} />
              <a href={loc.url}>{loc.label}</a>
            </div>
          </li>
        ))}
      </Slider>
      <div className={c.spacer} />
    </Layout>
  )
}

export default ContactTemplate

/**
 * Asynchronously gets page data based on wordpress_id (passed from gatsby-node.js)
 * @param {Number} $wordpress_id - Id of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query ContactPageQuery($wordpress_id: Int) {
    wordpressPage(wordpress_id: { eq: $wordpress_id }) {
      featured_media {
        ...Background
      }
      acf {
        contact {
          title
          persons {
            title
            url
            function
            image {
              ...Person
            }
          }
          featured_action {
            title
            text
            image {
              ...Action
            }
          }
          actions {
            title
            url
            image {
              ...Action
            }
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
            submit_url
          }
          locations {
            title
            text
            image {
              ...Background
            }
            url
            label
          }
        }
      }
    }
  }
`
