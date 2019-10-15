import React from "react"

import "./jimat-marketplace.scss"

const JimatMarketplace = () => {
  return (
    <section className="jimat-marketplace section-padding">
      <div className="container">
        <div className="section-header text-center">
          <img style={{ width: "200px", margin: "5px 0" }} src="jimat-logo.png" alt="jimat-logo" />
          <br />
          <h2 className="section-title">Marketplace</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="content-left">
              <div className="box-item">
                <span className="icon">
                  <i className="lni-users"></i>
                </span>
                <div className="text">
                  <h4>Consumer</h4>
                  <p>Attractive & Convenient Offering of Goods & Services to all Cooperative Members & Public</p>
                </div>
              </div>
              <div className="box-item">
                <span className="icon">
                  <i className="lni-world"></i>
                </span>
                <div className="text">
                  <h4>Merchant</h4>
                  <p>Access to more than 3,000 Outlets Nationwide</p>
                </div>
              </div>
              <div className="box-item">
                <span className="icon">
                  <i className="lni-cart"></i>
                </span>
                <div className="text">
                  <h4>Suppliers</h4>
                  <p>Listing & Offering of Goods & Services for Business & Consumers across various categories</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="show-box">
              <img src="intro-mobile.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="content-right">
              <div className="box-item">
                <span className="icon">
                  <i className="lni-wallet"></i>
                </span>
                <div className="text">
                  <h4>E-Payment</h4>
                  <p>Payment Gateway to ease Online & E-Commerce Transactions</p>
                </div>
              </div>
              <div className="box-item">
                <span className="icon">
                  <i className="lni-cog"></i>
                </span>
                <div className="text">
                  <h4>O2O Innovation</h4>
                  <p>Online to Offline (O2O) Innovation using Online Technology to Drive Offline Business</p>
                </div>
              </div>
              <div className="box-item">
                <span className="icon">
                  <i className="lni-thumbs-up"></i>
                </span>
                <div className="text">
                  <h4>Value Added Services</h4>
                  <p>Access to Credit Support & Financing, Order Fulfillment, Legal Services & many more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JimatMarketplace
