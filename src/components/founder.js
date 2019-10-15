import PropTypes from "prop-types"
import React from "react"

import "./founder.scss"

const Founder = ({ name, title, summary, image }) => {
  return (
    <div className="founder">
      <div className="row">
        <div className="col-lg-4">
          <div className="team-img">
            <img className="img-fluid" src={image} alt="" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="contetn">
            <div className="info-text">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Founder.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Founder
