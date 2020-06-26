import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "../components/row"
import Spacer from "../components/spacer"

import i from "./index.module.scss"
import l from "../components/layout.module.scss"

const IndexTemplate = ({ pageContext }) => {
  const { title, lang_code, acf } = pageContext

  return (
    <Layout langCode={lang_code}>
      <SEO title={title} />
      <Row backgroundImage={acf.hero.background_image}>
        <Spacer />
        <div className={i.hero_inner}>
          <div className={[i.contact_box_wrapper, l.grid_3].join(" ")}>
            <button id={i.watch_video}>
              <Img
                style={{ marginRight: "0.6rem" }}
                fixed={acf.hero.cta_icon.localFile.childImageSharp.fixed}
              />
              {acf.hero.cta}
            </button>
            {acf.hero.persons.map(({ name, image }) => (
              <div key={name} className={i.box}>
                <div>
                  <Img fixed={image.localFile.childImageSharp.fixed} />
                </div>
                <button className={i.contact_button}>{name}</button>
              </div>
            ))}
          </div>
          <h1 className={i.hero_slogan}>{acf.hero.title}</h1>
        </div>
        <Spacer />
      </Row>
      <Row backgroundColor="#9daab0">
        <div className={l.grid_2}>
          {acf.usps.map(usp => (
            <div key={usp.title} className={i.usp}>
              <div className={i.icon}>
                <Img fixed={usp.icon.localFile.childImageSharp.fixed} />
              </div>
              <div className={i.content_wrapper}>
                <h3 className={i.title}>{usp.title}</h3>
                <p className={i.description}>{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </Layout>
  )
}

export default IndexTemplate
