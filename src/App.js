import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

import Homepage from "./Components/Homepage"
import UKFWeb from "./Components/UKFWeb"
import RateableValuations from "./Components/RateableValuations"
import Bytes from "./Components/Bytes"

import "./style.scss"

export default function App() {

  const [theme, setTheme] = useState("")

  useEffect(() => {
    let time = new Date()
    let mode
    7 < time.getHours() && time.getHours() < 18 ? mode = "light" : mode = "dark"
    setTheme(mode)
  }, [])

  return (
    <div id={`${theme}-app`}>

      <Switch>

        <Route exact path="/">
          <Homepage theme={theme} setTheme={setTheme} />
        </Route>

        <Route path="/cv">
        </Route>

        <Route path="/ukfw">
          <UKFWeb />
        </Route>

        <Route path="/rv">
          <RateableValuations />
        </Route>

        <Route path="/byte">
          <Bytes />
        </Route>

      </Switch>

    </div>
  )
}
