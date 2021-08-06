import React from "react"

import Row from "../row"
import Layout from "./layout"

import a from "./page_default_layout.module.scss"
import SEO from "../seo"

const PageDefaultLayout = ({ data, children, breakOut = false }) => {
  return !breakOut ? (
    <Layout pageContext={data}>
      <SEO meta={ data.yoast_head_json} lang={data.lang_code }
      />
      <Row
        customClass={a.hero}
        backgroundImage={data.featured_media || data.image}
      ></Row>
      <Row>
        <div className={a.contentWrapper}>
          <h1>{data.title}</h1>
          {children}
        </div>
      </Row>
    </Layout>
  ) : (
    <>
      <Row
        customClass={a.hero}
        backgroundImage={data.featured_media || data.image}
      ></Row>
      <Row>
        <div className={[a.contentWrapper, a.break_out].join(" ")}>
          <h1>{data.title}</h1>
          {children}
        </div>
      </Row>
    </>
  )
}

export default PageDefaultLayout
