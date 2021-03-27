import React from "react"
import {Link} from "react-router-dom"

import "./style.scss"

export default function Error404(props) {

  const {theme} = props

  return (
    <div className={`${theme}-lost lost-page`}>
      <img
        src={theme === "light" ?
        "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1616088052/Personal%20Website/404_b9eaya.png" :
        "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1616088508/Personal%20Website/404Dark3_xrofkj.png"
        }
        alt="404"
      />
      <h1>Looks like the page you were trying to find doesn't exist, let's get you back home.</h1>
      <Link to="/" className="primary-button">Homepage</Link>
    </div>
  )
}
