import React, {useState} from "react"

import Header from "./Components/Header"
import Search from "./Components/Search"
import Cards from "./Components/Cards"
import Shield from "./Components/Shield"
import FeesInfo from "./Components/FeesInfo"
import CTABand from "./Components/CTABand"
import Footer from "./Components/Footer"
import LoginModal from "./Components/LoginModal"
import RegisterModal from "./Components/RegisterModal"
import TermsModal from "./Components/TermsModal"

export default function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [isRegisterOrigin, setIsRegisterOrigin] = useState(false)

  return (
    <div id="rv-app-back">
      <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} setIsRegisterOrigin={setIsRegisterOrigin} />
      <div id="rv-hero-section">
        <Search />
        <Cards />
        <Shield />
      </div>
      <FeesInfo />
      <CTABand />
      <Footer setShowTerms={setShowTerms}/>
      {showLogin ? <LoginModal setShowLogin={setShowLogin} setShowRegister={setShowRegister} setIsRegisterOrigin={setIsRegisterOrigin} /> : null}
      {showRegister ? <RegisterModal setShowLogin={setShowLogin} setShowRegister={setShowRegister} setShowTerms={setShowTerms} setIsRegisterOrigin={setIsRegisterOrigin} /> : null}
      {showTerms ? <TermsModal setShowRegister={setShowRegister} setShowTerms={setShowTerms} isRegisterOrigin={isRegisterOrigin} setIsRegisterOrigin={setIsRegisterOrigin} /> : null}
    </div>
  )
}
