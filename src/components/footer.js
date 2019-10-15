import { Link } from "gatsby"
import React from "react"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="Footer section-padding">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="footer-logo"><img src="robugroup-logo.png" alt="robugroup-logo"/></h3>
                <div className="textwidget">
                  <p>Technology Solutions Made Easy</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-title">Partners</h3>
              <ul className="footer-link">
                <li>
                  <a target="_blank" href="http://angkasa.coop/">
                    <img src="angkasa-logo.png" style={{ width: "20px", marginRight: "10px" }}></img>Angkasa
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-title">Products</h3>
              <ul className="footer-link">
                <li>
                  <a target="_blank" href="https://jimat.robugroup.com">JiMAT Marketplace</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-title">Contact</h3>
              <ul className="address">
                <li>
                  ROBU Consultancy Sdn Bhd &amp;<br/> ROBU Technologies Sdn Bhd,<br/>
                  B3A-6 &amp; 7, Gateway Corporate Suites,<br/>
                  Jalan Kiara 5, Mont Kiara,<br/>
                  60000 Kuala Lumpur.
                </li>
                <li>
                  <Link to="mailto:support@robugroup.com">support@robugroup.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-content">
                <p>&copy; ROBU Consultancy Sdn Bhd &middot; &copy; ROBU Technologies Sdn Bhd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
