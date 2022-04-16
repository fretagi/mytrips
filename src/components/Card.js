import React from 'react'

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.img} className="card-img-container" />
      <div className="card-data-container">
        <div className="card-map-container">
          <img src="./images/Fill219.png" />
          <h3 className="card-country">{props.country}</h3>
          <h3 className="card-map">
            <a href={props.cardMap} target="_blank" className="card-map-link">
              View on google maps
            </a>
          </h3>
        </div>
        <div className="card-text-container">
          <h1 className="card-title">{props.location}</h1>
          <p className="card-dates">{props.dates}</p>
          <p className="card-desc">{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
