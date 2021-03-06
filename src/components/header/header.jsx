import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Row from "../row"
import TopBar from "./topbar"

import h from "./header.module.scss"

const Header = ({ langCode, metaData, menuItems }) => {
  // select right (language-specific) menu from query by comparing lang code present in menu name (FORM: Main Menu XX, where XX is the lanugage code) to lang code passed in props
  let selectedMenu = menuItems.filter(i => {
    const splittedMenuName = i.node.name.toLowerCase().split(" ")
    return langCode === splittedMenuName[2] && "main" === splittedMenuName[0]
  })[0].node

  const [mobileMenu, toggleMobileMenu] = useState(false)

  return (
    <header className={h.header}>
      <TopBar data={metaData.topbar} />
      <Row>
        <div className={h.upper}>
          <div className={h.siteLogo}>
            <Link to="/">
              <Img fluid={metaData.site_logo.localFile.childImageSharp.fluid} />
            </Link>
          </div>
          <button
            onClick={() => toggleMobileMenu(!mobileMenu)}
            className={[h.toggle, mobileMenu && h.toggled].join(" ")}
          >
            <span></span>
          </button>
        </div>
      </Row>
      <Row>
        <nav className={[h.menu, mobileMenu && h.toggled].join(" ")}>
          <ul className={h.menu_items}>
            {selectedMenu.items.map(({ url, title }) => (
              <li className={h.menu_item} key={title}>
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
        </nav>
      </Row>
    </header>
  )
}

export default Header
