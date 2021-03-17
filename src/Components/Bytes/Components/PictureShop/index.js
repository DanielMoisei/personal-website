import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import Cart from "./Cart"
import Photos from "./Photos"

import "./style.css"

function PictureShop() {
    return (
        <div id="pic-shop-root">
            <Header />
            <Switch>
                <Route exact path="/bytes/picture-shop">
                    <Photos />
                </Route>

                <Route path="/bytes/picture-shop/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default PictureShop
