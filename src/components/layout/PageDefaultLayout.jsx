import React from "react"

import Row from "../row"
import Layout from "./layout"

import a from "./page_default_layout.module.scss"

const PageDefaultLayout = ({ data, children }) => {
  return (
    <Layout langCode={data.lang_code}>
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
  )
}

export default PageDefaultLayout
