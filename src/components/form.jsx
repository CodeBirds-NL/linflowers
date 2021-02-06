import React, { useState, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import f from "./form.module.scss"
import l from "./../components/layout/layout.module.scss"

const Form = ({ form_fields, label, productValues = "" }) => {
  const [formEntries, saveFormEntries] = useState({})
  const [formSent, setFormSent] = useState(false)
  const [formIsProcessing, setFormIsProcessing] = useState(false)

  const formRef = useRef()

  const { url } = useStaticQuery(
    graphql`
      query {
        wordpressSiteMetadata {
          url
        }
      }
    `
  ).wordpressSiteMetadata

  const api = `${url}/wp-content/uploads/mailer/index.php`

  const handleFormEntry = e => {
    saveFormEntries({
      ...formEntries,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formData = new FormData()

    // Product values if present
    if (productValues) {
      console.log(productValues)
    }

    // Add form entries
    const sanitize = str => {
      // this regex selects all characters except [a-z] and [0-9] and _
      let regex0 = RegExp(/[^a-z|_|0-9]/, "gi")
      return str.replace(" ", "_").replace(regex0, "")
    }

    for (const [key, value] of Object.entries(formEntries)) {
      formData.append(sanitize(key), value)
    }

    setFormIsProcessing(true)
    fetch(api, {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        //Handle your data
        if (data === "success") {
          // reset state container entries and form itself
          formRef.current.reset()
          saveFormEntries({})

          setFormIsProcessing(false)
          setFormSent(true)

          // remove success message after 5 seconds
          let timeout = setTimeout(() => {
            setFormSent(false)
            clearTimeout(timeout)
          }, 5000)
        }
      })
  }

  return (
    <form ref={formRef} onSubmit={e => handleSubmit(e)} className={f.form}>
      {form_fields.map(({ type, label, width, required }, index) => (
        <div
          key={index}
          className={[f[`w${width.replace("%", "")}`], f.form_group].join(" ")}
        >
          {type === "textarea" ? (
            <textarea
              rows="3"
              name={label.toLowerCase()}
              id={label.toLowerCase()}
              onChange={e => handleFormEntry(e)}
              required={required}
              className={formEntries[label.toLowerCase()] && f.active}
              placeholder={label}
            ></textarea>
          ) : (
            <input
              type={type}
              name={label.toLowerCase()}
              id={label.toLowerCase()}
              onChange={e => handleFormEntry(e)}
              required={required}
              className={formEntries[label.toLowerCase()] && f.active}
              placeholder={label}
            />
          )}
        </div>
      ))}
      <div className={[f.message, formSent && f.success].join(" ")}>
        Uw aanvraag werd successvol verstuurd!
      </div>
      <button className={[l.btn, l.red].join(" ")}>
        {formIsProcessing ? "Verwerken..." : label || "Verstuur"}
      </button>
      <div className={f.consent}>
        <p>
          Met het versturen van dit formulier gaat u akkoord met onze{" "}
          <Link to="/privacyverklaring">privacyverklaring</Link>
        </p>
      </div>
    </form>
  )
}

export default Form
