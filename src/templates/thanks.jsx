import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Row from "../components/row"

import t from "./thanks.module.scss"

const ThanksPage = ({ pageContext, data }) => {
  const { title, featured_media, content } = data.wordpressPage
  return (
    <Layout pageContext={pageContext}>
      <SEO title={title} />
      <Row customClass={t.hero} backgroundImage={featured_media}>
        <div className={t.contentWrapper}>
          <div className={t.inner}>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </Row>
      <div className={t.spacer}></div>
    </Layout>
  )
}

export default ThanksPage

export const data = graphql`
  query BedanktPageQuery($wordpress_id: Int) {
    wordpressPage(wordpress_id: { eq: $wordpress_id }) {
      featured_media {
        ...Background
      }
      title
      content
    }
  }
`
