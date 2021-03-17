import React from "react"
import "./style.css"
import Card from "./Card.js"

function Cards() {
  return (
    <div>
      <div id="need-help">
        <h2 id="help-title">Need help?</h2>
        <img id="help-arrow" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823751/RateableValuations/arrow_f37bkx.svg" alt="arrow" />
      </div>

      <div id="cards-container">
        <Card
          image = "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823751/RateableValuations/computerIcon_dwyfv1.png"
          text = "We pride ourselves on working collaboratively with our clients. That’s why we offer a free online valuation tool which will help you better understand your rateable valuation and rates payable."
        />
        <Card
          image = "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823751/RateableValuations/gearsIcon_uqewd7.png"
          text = "Use our free valuation tool to estimate the rateable value of your commercial property in England and Wales. You can add, remove or alter the property information, make allowances and set the base rate pricing."
        />
        <Card
          image = "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615823751/RateableValuations/phoneIcon_ygq7sl.png"
          text = "Book a qualified surveyor to advise you on the rateable value of your commercial property. You can book an essential desktop based valuation or a detailed on-site valuation."
        />
      </div>
    </div>
  )
}

export default Cards
