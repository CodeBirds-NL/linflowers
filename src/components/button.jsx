import React from "react"
import { Link } from "gatsby"

import l from "./layout/layout.module.scss"

const Button = ({ data, color = "red", extraClasses = [] }) => {
  if (data.link.charAt(0) === "/") {
    return (
      <Link
        to={data.link}
        className={[l.btn, l[color], ...extraClasses].join(" ")}
      >
        {data.label}
      </Link>
    )
  }
}

export default Button
