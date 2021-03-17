import React, {useState} from "react"
import "./style.css"

function LoginModal(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [stayLogged, setStayLogged] = useState(false)
  const {setShowLogin, setShowRegister, setIsRegisterOrigin} = props

  return (
    <div className="overlay">

      <div id="login-modal">
        <h2>Welcome back!</h2>

        <form id="login-form" onSubmit={(event) => {event.preventDefault(); console.log(email, password, stayLogged)}}>
          <label className="login-tag">Email
            <input
              className="login-field"
              type="text"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </label>

          <label className="login-tag">Password
            <input
              className="login-field"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </label>

          <div id="keep-div">
              <input
                id="keep-box"
                type="checkbox"
                name="stayLogged"
                checked={stayLogged}
                onChange={(e) => {setStayLogged(e.target.checked)}}
              />
            <label id="keep-text" htmlFor="stayLogged">Keep me signed in</label>
          </div>

          <button id="login-button">Login</button>
        </form>

        <div id="secondary-login-buttons">
          <button id="create-button" onClick={() => {setShowLogin(false); setShowRegister(true); setIsRegisterOrigin(true)}}>Create account</button>
          <button id="cancel-button" onClick={() => {setShowLogin(false); setIsRegisterOrigin(false)}}>Cancel</button>
        </div>

      </div>
    </div>
  )
}

export default LoginModal
