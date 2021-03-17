import React from "react"
import "./style.css"

function Footer(props) {

  const {setShowTerms} = props

  return (
    <div id="footer">

      <div id="nav">
          <p>Pricing Plans</p>
          <p>Discover</p>
          <p>About</p>
          <p>Contact</p>
          <p>FAQs</p>
          <p id="legal-p" onClick={() => setShowTerms(true)}>Legal & Terms</p>
      </div>

      <div id="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><div id="Linkedin"></div></a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><div id="Facebook"></div></a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><div id="Twitter"></div></a>
      </div>


      <div id="company-info">
        <p>Company Registration Number 12089240</p>
        <p>Company Registered Address Blue Tower, MediaCityUK, Manchester M50 2ST</p>
        <p>© 2019 All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer
