import React from "react"
import Img from "gatsby-image"

import Row from "../row"

import h from "./header.module.scss"

const TopBar = ({ data }) => {
  const { tel_icon, tel, email_icon, email } = data
  return (
    <Row customClass={h.topbar_row}>
      <div className={[h.topbar].join(" ")}>
        <div className={h.contactInfo}>
          <a href={`tel:${tel}`} className={h.tel}>
            <Img fixed={tel_icon.localFile.childImageSharp.fixed} />
            <span>{tel}</span>
          </a>
          <a href={`mailto:${email}`} className={h.email}>
            <Img fixed={email_icon.localFile.childImageSharp.fixed} />
            <span>{email}</span>
          </a>
        </div>
      </div>
    </Row>
  )
}

export default TopBar
