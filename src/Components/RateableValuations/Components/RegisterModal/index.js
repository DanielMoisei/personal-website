import React, {useState} from "react"
import "./style.css"

function LoginModal(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [termsAreAgreed, setTermsAreAgreed] = useState(false)
  const {setShowLogin, setShowRegister, setShowTerms, setIsRegisterOrigin} = props

  return (
    <div className="overlay">
      <div id="register-modal">
        <h2>Create your account</h2>
        <form id="register-form">
          <label htmlFor="email" className="login-tag">Email</label>
          <input type="text" className="login-field" name="email" id="email-field" onChange={(e) => {e.preventDefault(); setEmail(e.target.value)}} required />

          <label htmlFor="password" className="login-tag">Password</label>
          <input type="password" className="login-field" id="password-field" name="password" onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}} required />

          <label htmlFor="password" className="login-tag">Confirm password</label>
          <label htmlFor="password" id="pass-error">Passwords must match</label>
          <input type="password" className="login-field" id="password-confirm" name="password" required />

          <div id="terms-div">
            <input type="checkbox" id="terms-box" name="terms" required value={termsAreAgreed} onChange={(e) => {e.preventDefault(); setTermsAreAgreed(e.target.value)}} />
            <label htmlFor="terms" id="terms-text">I agree to the <span id="terms-orange" onClick={() => {setShowRegister(false); setShowTerms(true)}}>Terms and Conditions</span>.</label>
          </div>
        </form>

        <p id="register-button">Create account</p>

        <div id="secondary-register-buttons">
          <p id="login2-button" onClick={() => {setShowRegister(false); setShowLogin(true); setIsRegisterOrigin(false)}}>Login</p>
          <p id="cancel-button" onClick={() => {setShowRegister(false); setIsRegisterOrigin(false)}}>Cancel</p>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
