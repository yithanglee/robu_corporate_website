import { Link } from "gatsby"
import React from "react"

import "./header.scss"

const handleNavbarClick = () => {
  document.querySelector("#navbarCollapse").classList.toggle("show")
}

const Header = () => {
  return (
    <header className="Header">
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar top-nav-collapse">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="robugroup-logo.png" alt="robugroup-logo" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleNavbarClick}>
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item">
                <Link to="/" className="nav-link" activeClassName="active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/ba100" className="nav-link" activeClassName="active">The BA100 Initiative</Link>
              </li>
              <li className="nav-item">
                <Link to="/solutions" className="nav-link" activeClassName="active">Our Comprehensive Solutions</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
