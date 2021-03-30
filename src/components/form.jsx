import React, { useState, useRef } from "react"
import { Link } from "gatsby"

import f from "./form.module.scss"
import l from "./../components/layout/layout.module.scss"

const Form = ({
  form_fields,
  label,
  label_active,
  confirmation,
  privacy_notice,
  productValues = "",
  resetHandler = "",
  src = "",
}) => {
  const [formEntries, saveFormEntries] = useState({})
  const [formSent, setFormSent] = useState(false)
  const [formIsProcessing, setFormIsProcessing] = useState(false)

  const formRef = useRef()

  const api = process.env.FORM_API

  const handleFormEntry = e => {
    saveFormEntries({
      ...formEntries,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formData = {}

    // Product values if present
    if (productValues) {
      formData["products"] = productValues
    }

    // Add form entries
    const sanitize = str => {
      // this regex selects all characters except [a-z] and [0-9] and _
      let regex0 = RegExp(/[^a-z|_|0-9]/, "gi")
      return str.split(" ").join("_").replace(regex0, "")
    }

    for (const [key, value] of Object.entries(formEntries)) {
      formData[sanitize(key)] = value
    }

    // Add source page
    formData["source"] = src

    setFormIsProcessing(true)
    fetch(api, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        //Handle your data
        if (data === "success") {
          // reset state container entries and form itself
          formRef.current.reset()
          saveFormEntries({})
          // Resets offerte/proefbos inputs
          resetHandler && resetHandler()

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
    <form
      autoComplete="offf"
      ref={formRef}
      onSubmit={e => handleSubmit(e)}
      className={f.form}
    >
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
        {confirmation}
      </div>
      <button className={[l.btn, l.red].join(" ")}>
        {formIsProcessing ? label_active : label || "Verstuur"}
      </button>
      <div
        dangerouslySetInnerHTML={{ __html: privacy_notice }}
        className={f.consent}
      ></div>
    </form>
  )
}

export default Form
