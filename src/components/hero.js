import React from "react"
import PropTypes from "prop-types"
import "./hero.scss"

const Hero = ({ children, heading, paragraph, showWaveBackground }) => {
  return (
    <div className="Hero" style={ showWaveBackground ? { backgroundImage: "url(hero-area.svg)" } : null }>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">{heading}</h2>
              <p className="mb-3">{paragraph}</p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <div className="intro-img">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

export default Hero
