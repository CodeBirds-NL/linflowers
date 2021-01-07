import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Row from "../row"

import f from "./footer.module.scss"

const Footer = ({ data, menuItems, langCode, logo }) => {
  // select right (language-specific) menu from query by comparing lang code present in menu name (FORM: Location Menu XX, where XX is the lanugage code) to lang code passed in props
  let selectedMenu = menuItems.filter(({ node }) => {
    const splittedMenuName = node.name.toLowerCase().split(" ")
    return langCode === splittedMenuName[2] && "footer" === splittedMenuName[0]
  })[0].node

  const { col_2, col_3 } = data

  return (
    <Row customClass={f.footer}>
      <div className={f.footer_inner}>
        <div className={f.col_1}>
          <Img
            className={f.imageWrapper}
            fluid={logo.localFile.childImageSharp.fluid}
          />
          <ul className={f.menu}>
            {selectedMenu.items.map(({ url, title }) => (
              <li key={title}>
                <Link
                  to={`${langCode === "nl" ? "" : `/${langCode}`}${
                    url === "/nl/" || url === null ? "/" : url
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={f.col_2}>
          <div className={f.col_title}>{col_2.title}</div>
          <ul className={f.fields}>
            {col_2.wordpress_fields.map(({ left, right }) => (
              <li key={left}>
                <span>{left}</span>
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={f.col_3}>
          <div className={f.col_title}>{col_3.title}</div>
          <div
            className={f.contact}
            dangerouslySetInnerHTML={{ __html: col_3.contact_details }}
          />
        </div>
      </div>
    </Row>
  )
}

export default Footer
