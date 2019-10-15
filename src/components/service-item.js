import React from "react"

import "./service-item.scss"

const ServiceItem = ({ image, heading, paragraph }) => {
  const imageNode = typeof (image) == "string" ? <img src={image} /> : image

  return (
    <div className="service-item">
      <div className="icon">
        {imageNode}
      </div>
      <div className="service-content">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default ServiceItem
