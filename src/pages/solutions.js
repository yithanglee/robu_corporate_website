import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraph"
import ServiceItem from "../components/service-item"

const SolutionsPage = () => (
  <Layout>
    <SEO
      title="Solutions"
      description="Our unique approach to unified marketplace infrastructure enables speed, agility
        and innovation required to take over new markets. We provide best-in-class B2B2C front-office
        for buyers, middle-office for sellers and back-office for operators."
    />

    <section className="section-padding" style={{ position: "relative", paddingTop: "180px" }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Comprehensive Solutions for Businesses</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/platform.svg"
              heading="Digital Platform"
              paragraph="A comprehensive B2B2C JiMAT marketplace with our Customers Needs as the Core Focus" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/supply.svg"
              heading="Supply of Goods & Services"
              paragraph="Listing & Offering of Goods & Services for Business & Consumers across various categories" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/marketing.svg"
              heading="Marketing"
              paragraph="Attractive, Targeted & Focused Strategies to Optimize Awareness & Reach" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/consultancy.svg"
              heading="Consultancy & Training"
              paragraph="Comprehensive & Robust Modules to Help Businesses via Technology for Sustainable Growth" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/footprint.svg"
              heading="Footprint"
              paragraph="Access to Shelf Space at Outlets with Nationwide Footprint" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/credit.svg"
              heading="Credit Assistance"
              paragraph="Early Access to Various Credit Advice & Assistance Aimed for Business Growth" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/loyalty.svg"
              heading="Loyalty & Promotions"
              paragraph="Attractive & Meaningful Loyalty Program to Compliment Promotions for Goods & Services" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/consumer.svg"
              heading="Consumer Access"
              paragraph="Unique Access to Cooperative Members, Associations & Other Associate Members" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image="svg/icons/demand.svg"
              heading="Demand Driven"
              paragraph="Insights to Demand of Business & Consumers to Drive the Right Focus" />
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

    <section className="section-padding bg-gray" style={{ position: "relative", paddingTop: 0 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-briefcase"></i>}
              heading="Thought for B2B Transactions"
              paragraph="Powerful workflows for RFP, RFQ, procurement management, payments on invoice and much more" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-target-audience"></i>}
              heading="All-in-one SaaS Solution"
              paragraph="Buyer’s front-office, vendor’s middle-office & operator’s back-office" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-calculator"></i>}
              heading="Customize and Connect"
              paragraph="Powerful API to integrate our solution in your technical environment" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Tailored Solutions for Every Industry</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-dinner"></i>}
              heading="Food & Beverage" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-tshirt"></i>}
              heading="Fashion & Accessories" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-home"></i>}
              heading="Home, Office or Decor" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-briefcase"></i>}
              heading="Health & Beauty" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-paint-roller"></i>}
              heading="Industrial Supplies" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-protection"></i>}
              heading="Professional Services" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-gray" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Enterprise Ready</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-network"></i>}
              heading="Role Based Access" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-lock"></i>}
              heading="Product Security" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-stats-up"></i>}
              heading="Reporting & Analytics" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-ruler-pencil"></i>}
              heading="Custom Features" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-emoji-happy"></i>}
              heading="End User Integration" />
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12">
            <ServiceItem
              image={<i className="lni-bolt-alt"></i>}
              heading="Premium SLA & Support" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SolutionsPage
