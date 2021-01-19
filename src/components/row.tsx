import React from "react"
import Img from "gatsby-image"

import "./layout/layout.css"
import l from "./layout/layout.module.scss"

const Row = ({
  backgroundImage = "",
  backgroundColor = "white",
  id = null,
  children,
  customClass = '',
}) => {
  return (
    <div
      id={id}
      className={[l.row, customClass, !backgroundImage && l[backgroundColor] ].join(' ')}
      // style={!backgroundImage ? { backgroundColor } : {}}
    >
      {backgroundImage ? (
        <Img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          fluid={backgroundImage.localFile.childImageSharp.fluid}
        />
      ) : null}
      <div className={l.wrapper}>
        <div className={l.container}>{children}</div>
      </div>
    </div>
  )
}

export default Row
