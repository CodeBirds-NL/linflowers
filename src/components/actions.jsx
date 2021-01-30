import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import a from "./actions.module.scss"

const Actions = ({ actions, color = "red" }) => {
  return (
    <div className={a.actions}>
      {actions.map(({ title, url, image }) => (
        <Link to={url} key={title} className={[a.action, a[color]].join(" ")}>
          <div className={[a.imageWrapper, a.ma].join(" ")}>
            <div className={a.circle}>
              <Img
                className={a.image}
                fluid={image.localFile.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className={a.text}>{title}</div>
        </Link>
      ))}
    </div>
  )
}

export default Actions
