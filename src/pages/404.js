import React from "react"

import Layout from "../components/layout/layout"
import Row from "../components/row"
import SEO from "../components/seo"
import l from "./../components/layout/layout.module.scss"

const NotFoundPage = () => {
  const pageContext = { lang_code: "en", polylang_translations: [] }
  return (
    <Layout pageContext={pageContext}>
      <SEO title="404: Not found" />
      <Row customClass={l.not_found_section}>
        <div>
          <h1>404 Not Found</h1>
          {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
      </Row>
    </Layout>
  )
}

export default NotFoundPage
