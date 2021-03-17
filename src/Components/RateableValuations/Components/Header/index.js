import React from "react"
import {Link} from "react-router-dom"
import "./style.css"

export default function Header(props) {

  const {setShowLogin, setShowRegister, setIsRegisterOrigin} = props

  return(
    <div id="rv-header">
      <div id="rv-header-logos">
        <Link to="/" id="rv-app-leave">
          <img src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leftArrow_eb5rcz.svg" alt="leave"/>
        </Link>
        <img id="RVLogo" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823779/RateableValuations/rvLogo_mxsbo2.png" alt="rv" />
        <a href="https://www.rics.org/eu/" target="_blank" rel="noreferrer" id="RICSLogo">
          <img src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823779/RateableValuations/ricsLogo_ainjtk.png" alt="rics" />
        </a>
      </div>

      <div id="rv-header-buttons">
        <div className="account-buttons" onClick={() => setShowLogin(true)}>
          <img id="key" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823779/RateableValuations/keyIcon_rh2bd3.png" alt="key" />
          <p>Login</p>
        </div>

        <div className="account-buttons" onClick={() => {setShowRegister(true); setIsRegisterOrigin(true)}}>
          <img id="user" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823779/RateableValuations/userIcon_vd9hye.png" alt="user" />
          <p>Register</p>
        </div>

        <button id="rv-contact-button">CONTACT US</button>
      </div>
    </div>
  )
}
