import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import PageDefaultLayout from "../components/layout/PageDefaultLayout"
import Button from "../components/button"
import Row from "../components/row"

import a from "./about.module.scss"
import Persons from "../components/persons"

const AboutTemplate = ({ pageContext, data }) => {
  const {
    title,
    image,
    text,
    btn,
    persons_title,
    persons,
    usps,
  } = data.wordpressPage.acf.about

  return (
    <PageDefaultLayout data={{ ...pageContext, title, image }}>
      <div className={a.text} dangerouslySetInnerHTML={{ __html: text }} />
      <Button data={btn} />
      <h4 className={a.persons__title}>{persons_title}</h4>
      <Persons
        persons={persons}
        customClass={a.persons}
        label={false}
        showNumber={true}
      />
      <div className={a.usps}>
        {usps.map(i => (
          <div key={i.titel} className={a.usp}>
            <Img
              className={a.image}
              fluid={i.icon.localFile.childImageSharp.fluid}
            />
            <div className={a.content}>
              <h4>{i.titel}</h4>
              <p className={a.quote}>{i.quote}</p>
              <div
                dangerouslySetInnerHTML={{ __html: i.text }}
                className={a.text}
              />
            </div>
          </div>
        ))}
      </div>
    </PageDefaultLayout>
  )
}

export default AboutTemplate

/**
 * Asynchronously gets page data based on wordpress_id (passed from gatsby-node.js)
 * @param {Number} $wordpress_id - Id of the page
 * @returns {Object} data in format we queried it
 */

export const data = graphql`
  query AboutPageQuery($wordpress_id: Int) {
    wordpressPage(wordpress_id: { eq: $wordpress_id }) {
      acf {
        about {
          title
          text
          image {
            ...Background
          }
          btn {
            label
            link
          }
          persons_title
          persons {
            url
            image {
              ...Person
            }
            title
          }
          usps {
            text
            titel
            quote
            icon {
              ...Pijler
            }
          }
        }
      }
    }
  }
`
