import React from "react"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"

import Homepage from "./Components/Homepage"
import SpeedtypingGame from "./Components/SpeedtypingGame"
import CurrencyConverter from "./Components/CurrencyConverter"
import FetchSwapi from "./Components/FetchSwapi"
import PictureShop from "./Components/PictureShop"
import {ContextProvider} from "./Components/PictureShop/DataContext"


import "./style.css"

function App() {
  return (
    <div id="by-app-div">
      <div id="by-header">
      <Link to="/" id="by-navleave"><h2>Leave</h2></Link>
        <nav>
          <Link to="/bytes"><h2 className="by-navlink">Home</h2></Link>
          <Link to="/bytes/speed-game"><h2 className="by-navlink">Speedtyping Game</h2></Link>
          <Link to="/bytes/curr-converter"><h2 className="by-navlink">Currency Converter</h2></Link>
          <Link to="/bytes/fetch-swapi"><h2 className="by-navlink">Star Wars API</h2></Link>
          <Link to="/bytes/picture-shop"><h2 className="by-navlink">Picture Shop</h2></Link>
        </nav>
      </div>

      <Switch>

        <Route exact path="/bytes">
          <Homepage />
        </Route>

        <Route path="/bytes/speed-game">
          <SpeedtypingGame />
        </Route>

        <Route path="/bytes/curr-converter">
          <CurrencyConverter />
        </Route>

        <Route path="/bytes/fetch-swapi">
          <FetchSwapi />
        </Route>

        <Route path="/bytes/picture-shop">
          <ContextProvider>
            <PictureShop />
          </ContextProvider>
        </Route>

      </Switch>
    </div>
  )
}

export default App
