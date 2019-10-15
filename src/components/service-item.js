import React from "react"

import "./service-item.scss"

const ServiceItem = ({ image, heading, paragraph }) => {
  return (
    <div className="service-item">
      <div className="icon">
        <img src={image} />
      </div>
      <div className="service-content">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default ServiceItem
