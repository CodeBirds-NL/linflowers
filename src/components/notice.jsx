import React from "react"

import l from "./layout/layout.module.scss"

const Notice = ({ children }) => {
  return children && <div className={l.notice}>{children}</div>
}

export default Notice
