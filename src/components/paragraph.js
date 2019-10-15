import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./paragraph.scss"

const Paragraph = ({ children, title, heading, paragraph, readMoreLink, className }) => {
  return (
    <section className={"paragraph section-padding " + className}>
      <div className="container">
        {title ?
          <div className="section-header text-center">
            <h2 className="section-title">{title}</h2>
            <div className="shape"></div>
          </div> : null
        }
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="about-wrapper">
              <div>
                <div className="site-heading">
                  <h2 className="section-title">{heading}</h2>
                </div>
                <div className="content">
                  <p style={{ margin: "10px 0 20px" }}>{paragraph}</p>
                  {readMoreLink ? <Link to={readMoreLink} className="btn btn-common mt-3 mb-3">Read More</Link> : null}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 text-right">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  readMoreLink: PropTypes.string,
  className: PropTypes.string,
}

Paragraph.defaultProps = {
  readMoreLink: ``,
  className: ``,
  title: ``,
}

export default Paragraph
