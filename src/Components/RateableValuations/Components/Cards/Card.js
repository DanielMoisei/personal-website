import React from "react"

function Card(props) {
  return(
    <div className="card">
      <img className="card-image" src={props.image} alt="cardimg" />
      <p className="card-text">{props.text}</p>
    </div>
  )
}

export default Card
