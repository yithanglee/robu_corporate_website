import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Paragraph from "../components/paragraph"

const Ba100Page = () => (
  <Layout>
    <SEO
      title="BA100"
      description="ROBU Group is a strategic partner & solutions provider for ANGKASA Berhad to drive
        BA100, a national project endorsed by our Prime Minister and Malaysian Government aimed to
        help small & medium businesses in an effort to address the rising cost of living in Malaysia."
    />

    <Hero
      heading="Supporting the BA100 Initiative"
      paragraph="ROBU Group is a strategic partner & solutions provider for ANGKASA Berhad to drive
        BA100, a national project endorsed by our Prime Minister and Malaysian Government aimed to
        help small & medium businesses in an effort to address the rising cost of living in Malaysia."
    >
      <video className="img-fluid" controls autoPlay muted loop>
        <source src="ba100-pm-endorsement.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Hero>

    <div className="about-area section-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12 info">
            <div className="about-wrapper">
              <div>
                <div className="site-heading">
                  <div className="angkasa-logo">
                    <img src="angkasa-logo.png" alt="" />
                  </div>
                  <h2 className="section-title">ANGKASA Launches BA100</h2>
                </div>
                <div className="content">
                  <p>
                    BA100 Soft Launch at Koperasi Masjid Saujana Utama by ANGKASA President, Dato’ Haji Abdul Fattah Haji Abdullah
              </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <video className="img-fluid" controls autoPlay muted loop>
              <source src="ba100-angkasa-launch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>

    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">JiMAT Marketplace for BA100</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 text-center">
            <img className="img-fluid" src="jimat-circle-diagram.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <Paragraph
      className="bg-gray"
      heading="The Philosophy - Functionalism Economics"
      paragraph="According to functionalism, society is a system of interconnected parts that
        work together in harmony to maintain a state of balance and social equilibrium for the whole."
    >
      <img className="img-fluid" src="svg/economics.svg" alt="economics" />
    </Paragraph>
  </Layout>
)

export default Ba100Page
