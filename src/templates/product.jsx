import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { useKeenSlider } from "keen-slider/react"
import Img from "gatsby-image"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"
import Row from "../components/row"
import Layout from "../components/layout/layout"
import Actions from "../components/actions"
import useKeyPress from "../components/utils/hooks/useKeyPress"

import p from "./product.module.scss"
import "keen-slider/keen-slider.min.css"
import Spacer from "../components/spacer"
import SEO from "../components/seo"

const ProductTemplate = ({ pageContext, data }) => {
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
    name,
    image,
    content,
    gallery,
  } = data.wordpressWpProducts.acf.product

  const { actions } = data.wordpressPage.acf.products_archive

  // Get parent slugs in all languages for direct language switch functionality in header
  const parentSlugs = data.wordpressPage.polylang_translations
  pageContext["parentSlugTranslations"] = parentSlugs

  return (
    <Layout pageContext={pageContext}>
      <SEO title={title} />
      <PageDefaultLayout
        breakOut={true}
        data={{ ...pageContext, title, image }}
      >
        <div className={p.grid}>
          <div className={p.gallery}>
            <div className={p.slider} ref={sliderRef}>
              {gallery.map((slide, index) => (
                <div
                  key={index}
                  className={`keen-slider__slide number-slide${index}`}
                >
                  <Img
                    className={p.image}
                    fluid={slide.localFile.childImageSharp.fluid}
                  />
                </div>
              ))}
            </div>
            <div className={p.track}>
              {gallery.map((slide, index) => (
                <div
                  key={`track` + index}
                  onClick={() => {
                    slider.moveToSlideRelative(index)
                  }}
                  className={[
                    p.container,
                    currentSlide === index && p.active,
                  ].join(" ")}
                >
                  <Img
                    className={p.image}
                    fluid={slide.localFile.childImageSharp.fluid}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={p.content}>
            <div className={p.name}>{name}</div>
            <div
              className={p.html}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </PageDefaultLayout>
      <Row backgroundColor="antra">
        <div className={p.actions_section}>
          <Actions color="white" actions={actions} />
        </div>
      </Row>
      <Spacer />
    </Layout>
  )
}

export default ProductTemplate

/**
 * Asynchronously gets page data based on wordpress_id (passed from gatsby-node.js)
 * @param {Number} $wordpress_id - Id of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query ProductSingleQuery($wordpress_id: Int, $lang_code: String) {
    wordpressWpProducts(wordpress_id: { eq: $wordpress_id }) {
      acf {
        product {
          title
          name
          content
          image {
            ...Background
          }
          gallery {
            ...ProductImage
          }
        }
      }
    }
    wordpressPage(
      template: { eq: "assortiment.php" }
      lang_code: { eq: $lang_code }
    ) {
      polylang_translations {
        lang_code
        slug
      }
      acf {
        products_archive {
          actions {
            title
            url
            image {
              ...Action
            }
          }
        }
      }
    }
  }
`
