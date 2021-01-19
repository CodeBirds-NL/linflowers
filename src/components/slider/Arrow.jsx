import React from "react"

import s from "./slider.module.scss"

const Arrow = ({
  color = "#F9F4F0",
  direction = "left",
  clickHandler,
  src = "",
}) =>
  direction === "left" ? (
    <div className={[s.arrow, src && s.contact].join(" ")}>
      <svg
        width="21"
        height="36"
        viewBox="0 0 21 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={clickHandler}
      >
        <rect width="21" height="36" fill="transparent" />
        <line
          y1="-2"
          x2="25"
          y2="-2"
          transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.6777 35.3553)"
          stroke={color}
          strokeWidth="4px"
        />
        <line
          y1="-2"
          x2="25"
          y2="-2"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 17.6777)"
          stroke={color}
          strokeWidth="4px"
        />
      </svg>
    </div>
  ) : (
    <div className={[s.arrow, s.right, src && s.contact].join(" ")}>
      <svg
        className={s.arrow}
        width="21"
        height="36"
        viewBox="0 0 21 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={clickHandler}
      >
        <rect width="21" height="36" fill="transparent" />
        <line
          x1="1.58579"
          y1="33.9411"
          x2="19.2635"
          y2="16.2635"
          stroke={color}
          strokeWidth="4"
        />
        <line
          x1="19.2635"
          y1="19.0919"
          x2="1.58579"
          y2="1.41422"
          stroke={color}
          strokeWidth="4"
        />
      </svg>
    </div>
  )

export default Arrow
