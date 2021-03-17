import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../DataContext"

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/bytes/picture-shop" id="pic-shop-home-link"><h2>Pic Shop</h2></Link>
            <Link to="/bytes/picture-shop/cart" id="pic-shop-cart-link">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
