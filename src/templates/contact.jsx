import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { useKeenSlider } from "keen-slider/react"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import PageDefaultLayout from "../components/layout/PageDefaultLayout"
import Row from "../components/row"
import Persons from "../components/persons"
import Form from "../components/form"
import Arrow from "../components/slider/Arrow"
import useKeyPress from "../components/utils/hooks/useKeyPress"

import c from "./contact.module.scss"
import "keen-slider/keen-slider.min.css"

const ContactTemplate = ({ pageContext, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const right = useKeyPress(39)
  const left = useKeyPress(37)

  useEffect(() => {
    if (slider && left) slider.prev()
  }, [left])

  useEffect(() => {
    if (slider && right) slider.next()
  }, [right])

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
    <Layout langCode={pageContext.lang_code}>
      <PageDefaultLayout
        breakOut={true}
        data={{ ...pageContext, title, featured_media }}
      >
        <Persons showNumber={true} label={false} persons={persons} />
      </PageDefaultLayout>
      <Row backgroundColor="" customClass={c.actions}>
        <div className={c.grid}>
          <div className={c.grid__left}>
            <div className={[c.iconWrapper].join(" ")}>
              <div className={c.circle}>
                <Img
                  className={c.image}
                  fluid={featured_action.image.localFile.childImageSharp.fluid}
                />
              </div>
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
                  <Img fluid={action.image.localFile.childImageSharp.fluid} />
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
          <Form {...form} />
        </div>
      </Row>
      <div className={c.sliderContainer}>
        <ul ref={sliderRef} className={c.slides}>
          {locations.map((loc, i) => (
            <li
              className={`keen-slider__slide number-slide${i}`}
              key={loc.title}
            >
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
        </ul>
        <Row customClass={c.arrow_wrapper}>
          <div className={c.inner}>
            <Arrow src="contact" clickHandler={() => slider.prev()} />
            <Arrow
              src="contact"
              direction="right"
              clickHandler={() => slider.next()}
            />
          </div>
        </Row>
      </div>
      <div className={c.spacer}></div>
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
            form_fields {
              width
              type
              required
              label
            }
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
