import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import useKeyPress from "../utils/hooks/useKeyPress"
import Img from "gatsby-image"

import Arrow from "./Arrow"
import Row from "../row"

import s from "./slider.module.scss"
import "keen-slider/keen-slider.min.css"

const Slider = ({ children, slides }) => {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
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
    <div className={s.sliderContainer}>
      <ul ref={sliderRef} className={s.slides}>
        {slides
          ? slides.map((slide, i) => (
              <li
                className={`keen-slider__slide number-slide${i}`}
                key={i + slide.alt_text}
              >
                <Img
                  className={s.image}
                  fluid={slide.localFile.childImageSharp.fluid}
                />
              </li>
            ))
          : children}
      </ul>
      <Row customClass={s.arrow_wrapper}>
        <div className={s.inner}>
          <Arrow src="contact" clickHandler={() => slider.prev()} />
          <Arrow
            src="contact"
            direction="right"
            clickHandler={() => slider.next()}
          />
        </div>
      </Row>
    </div>
  )
}

export default Slider
