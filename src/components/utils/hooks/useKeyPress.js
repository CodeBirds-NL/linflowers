import React, { useState, useEffect } from "react"

/**
 * Detects whether key is pressed and returns Boolean
 * @param {Number} targetKeyCode
 * @returns {Boolean} keyPressed state variable
 */

export default function useKeyPress(targetKeyCode) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  function downHandler({ keyCode }) {
    if (keyCode === targetKeyCode) {
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ keyCode }) => {
    if (keyCode === targetKeyCode) {
      setKeyPressed(false)
    }
  }

  // Add event listeners
  useEffect(() => {
    document.addEventListener("keydown", downHandler)
    document.addEventListener("keyup", upHandler)
    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener("keydown", downHandler)
      document.removeEventListener("keyup", upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}
