import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import p from "./persons.module.scss"

const Persons = ({
  persons,
  customClass = "",
  label = true,
  showNumber = false,
  role = false,
}) => {
  return (
    <div className={[p.persons, customClass].join(" ")}>
      {persons.map(({ title, url, image, function: func }) => (
        <a href={`tel:${url}`} key={image.id} className={p.box}>
          <div className={p.imageWrapper}>
            {image && <Img fixed={image.localFile.childImageSharp.fixed} />}
          </div>
          {label && <button className={p.contact_button}>{title}</button>}
          {showNumber && (
            <div>
              <div>{title}</div>
              {role && <em>{func}</em>}
              <div>{url}</div>
            </div>
          )}
        </a>
      ))}
    </div>
  )
}

export default Persons
