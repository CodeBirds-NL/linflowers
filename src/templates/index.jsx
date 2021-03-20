import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { useKeenSlider } from "keen-slider/react"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Row from "../components/row"
import Arrow from "../components/slider/Arrow"
import Persons from "../components/persons"
import Actions from "../components/actions"

import useKeyPress from "../components/utils/hooks/useKeyPress"

import i from "./index.module.scss"
import l from "../components/layout/layout.module.scss"
import "keen-slider/keen-slider.min.css"

const IndexTemplate = ({ data }) => {
  const { title, lang_code, acf } = data.wordpressPage

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

  return (
    <Layout langCode={lang_code}>
      <SEO title={title} />
      <Row
        customClass={i.hero}
        backgroundImage={acf.home.hero.background_image}
      >
        <div className={i.hero_inner}>
          <button id={i.watch_video}>
            <Img
              style={{ marginRight: "0.6rem" }}
              fixed={acf.home.hero.cta_icon.localFile.childImageSharp.fixed}
            />
            {acf.home.hero.cta}
          </button>
          <Actions actions={acf.home.hero.actions} />
        </div>
      </Row>
      <Row>
        <Persons persons={acf.home.about.persons} customClass="home" />
        <div className={i.about}>
          <div
            className={i.text}
            dangerouslySetInnerHTML={{ __html: acf.home.about.text }}
          />
          <Link to={acf.home.about.btn.link}>{acf.home.about.btn.label}</Link>
        </div>
      </Row>
      <Row customClass={l.overlay} backgroundImage={acf.home.usps_bg}>
        <div className={i.usps_wrapper}>
          <div className={i.sliderContainer}>
            <ul ref={sliderRef} className={i.slides}>
              {acf.home.usps.map((slide, i) => (
                <li
                  className={`keen-slider__slide number-slide${i}`}
                  key={slide.title}
                >
                  <h2>{slide.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: slide.text }} />
                  <Link to={slide.btn.link}>{slide.btn.label}</Link>
                </li>
              ))}
            </ul>
            <Arrow clickHandler={() => slider.prev()} />
            <Arrow direction="right" clickHandler={() => slider.next()} />
          </div>
        </div>
      </Row>
      <Row>
        <div className={i.icons_wrapper}>
          <div></div>
          <div className={i.icons}>
            {acf.home.usps.map((slide, index) => (
              <div
                role="button"
                onKeyPress={() => slider.moveToSlideRelative(index)}
                onClick={() => slider.moveToSlideRelative(index)}
                key={slide.icon_title}
                className={[
                  i.icon,
                  currentSlide === index ? i.active : "",
                ].join(" ")}
              >
                <Img
                  className={i.imageWrapper}
                  fluid={slide.icon.localFile.childImageSharp.fluid}
                />
                <div className={i.text}>{slide.icon_title}</div>
              </div>
            ))}
          </div>
        </div>
      </Row>
    </Layout>
  )
}

export default IndexTemplate

/**
 * Asynchronously gets page data based on wordpress_id (passed from gatsby-node.js)
 * @param {Number} $wordpress_id - Id of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query IndexPageQuery($wordpress_id: Int) {
    wordpressPage(wordpress_id: { eq: $wordpress_id }) {
      title
      slug
      lang_code
      acf {
        home {
          hero {
            background_image {
              ...Background
            }
            actions {
              title
              url
              image {
                ...Action
              }
            }
            cta
            cta_icon {
              alt_text
              localFile {
                childImageSharp {
                  fixed(width: 36) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
          about {
            persons {
              title
              url
              image {
                ...Person
              }
            }
            text
            btn {
              label
              link
            }
          }
          usps {
            title
            text
            btn {
              label
              link
            }
            icon_title
            icon {
              ...Pijler
            }
          }
          usps_bg {
            ...Background
          }
        }
      }
    }
  }
`
