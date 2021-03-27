import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

import Homepage from "./Components/Homepage"
import UKFWeb from "./Components/UKFWeb"
import RateableValuations from "./Components/RateableValuations"
import Bytes from "./Components/Bytes"
import Error404 from "./Components/Error404"

import "./style.scss"

export default function App() {

  const [theme, setTheme] = useState("light")
  const [isToggled, setIsToggled] = useState(false)

  useEffect(() => {
    let time = new Date()
    let mode, togVal
    7 < time.getHours() && time.getHours() < 18 ? mode = "light" : mode = "dark"
    7 < time.getHours() && time.getHours() < 18 ? togVal = false : togVal = true
    setTheme(mode)
    setIsToggled(togVal)
  }, [])

  return (
    <div id={`${theme}-app`}>

      <Switch>

        <Route exact path="/">
          <Homepage
            theme={theme} setTheme={setTheme}
            isToggled={isToggled} setIsToggled={setIsToggled}
          />
        </Route>

        <Route path="/ukfw">
          <UKFWeb />
        </Route>

        <Route path="/rv">
          <RateableValuations />
        </Route>

        <Route path="/bytes">
          <Bytes />
        </Route>

        <Route>
          <Error404 theme={theme} />
        </Route>

      </Switch>

    </div>
  )
}
