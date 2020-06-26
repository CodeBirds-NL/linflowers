import React from "react"
import Img from "gatsby-image"

import "./layout.css"
import l from "./layout.module.scss"

const Row = ({
  backgroundImage = "",
  backgroundColor = "#F9F4F0",
  height = "auto",
  id = null,
  children,
}) => {
  return (
    <div
      id={id}
      className={l.row}
      style={!backgroundImage ? { backgroundColor, height } : { height }}
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
