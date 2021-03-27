import React, {useEffect} from "react"
import {useLocation} from "react-router-dom"

import App from "./App"

import "./style.css"

export default function RateableValuations() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <App />
  )
}
