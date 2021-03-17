import React from "react"
import "./style.css"

function Search() {
  return (
    <div>
      <div id="hero-text">
        <h1>DO YOU THINK YOUR BUSINESS RATES ARE TOO HIGH?</h1>
        <p>Use our free valuation tool or book a valuation with one of our qualified surveyors.<br />No shock commissions and fair fixed fees starting from £295!</p>
      </div>

      <div id="rv-search-bar">
        <input id="bar" type="text" placeholder="Commercial property postcode..." size="60" />
        <button id="rv-search-CTA">Get free valuation!</button>
      </div>
    </div>
  )
}

export default Search
