import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraph"

const SolutionsPage = () => (
  <Layout>
    <SEO
      title="Solutions"
      description="Our unique approach to unified marketplace infrastructure enables speed, agility
        and innovation required to take over new markets. We provide best-in-class B2B2C front-office
        for buyers, middle-office for sellers and back-office for operators."
    />

    <section id="services" className="section-padding" style={{ paddingTop: "180px" }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Comprehensive Solutions for Businesses</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/marketing.svg" />
              </div>
              <div className="services-content">
                <h3>Digital Platform</h3>
                <p>A comprehensive B2B2C JiMAT marketplace with our Customers Needs as the Core Focus</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/supply.svg" />
              </div>
              <div className="services-content">
                <h3>Supply of Goods &amp; Services</h3>
                <p>Listing &amp; Offering of Goods &amp; Services for Business &amp; Consumers across various categories</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/marketing.svg" />
              </div>
              <div className="services-content">
                <h3>Marketing</h3>
                <p>Attractive, Targeted &amp; Focused Strategies to Optimize Awareness &amp; Reach</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/consultancy.svg" />
              </div>
              <div className="services-content">
                <h3>Consultancy &amp; Training</h3>
                <p>Comprehensive &amp; Robust Modules to Help Businesses via Technology for Sustainable Growth</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/footprint.svg" />
              </div>
              <div className="services-content">
                <h3>Footprint</h3>
                <p>Access to Shelf Space at Outlets with Nationwide Footprint</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/credit.svg" />
              </div>
              <div className="services-content">
                <h3>Credit Assistance</h3>
                <p>Early Access to Various Credit Advice &amp; Assistance Aimed for Business Growth</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/loyalty.svg" />
              </div>
              <div className="services-content">
                <h3>Loyalty &amp; Promotions</h3>
                <p>Attractive &amp; Meaningful Loyalty Program to Compliment Promotions for Goods &amp; Services</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/consumer.svg" />
              </div>
              <div className="services-content">
                <h3>Consumer Access</h3>
                <p>Unique Access to Cooperative Members, Associations &amp; Other Associate Members</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item">
              <div className="icon">
                <img src="svg/icons/demand.svg" />
              </div>
              <div className="services-content">
                <h3>Demand Driven</h3>
                <p>Insights to Demand of Business &amp; Consumers to Drive the Right Focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Paragraph
      className="bg-gray"
      title="Our Saas Solutions"
      heading="Get to Market Faster"
      paragraph="Our unique approach to unified marketplace infrastructure enables speed, agility
        and innovation required to take over new markets. We provide best-in-class B2B2C front-office
        for buyers, middle-office for sellers and back-office for operators."
    >
      <img className="img-fluid" src="front-office-back-office.png" alt="solutions" />
    </Paragraph>
  </Layout>
)

export default SolutionsPage
