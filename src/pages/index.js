import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Paragraph from "../components/paragraph"
import JimatMarketplace from "../components/jimat-marketplace"
import Founder from "../components/founder"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero
      heading="Technology Solutions Made Easy"
      paragraph="Our aim at ROBU Group is to offer comprehensive solutions to businesses,
        particularly for small and medium businesses with a focus on leveraging on technology
        solutions which will provide competitive edge moving forward for sustainable growth."
      showWaveBackground={true}
    >
      <img className="img-fluid" src="svg/technology-solutions.svg" alt="technology-solutions" />
    </Hero>

    <Paragraph
      heading="Get to Market Faster"
      paragraph="Our unique approach to unified marketplace infrastructure enables speed, agility and
        innovation required to take over new markets. We provide best-in-class B2B2C front-office for
        buyers, middle-office for sellers and back-office for operators."
    >
      <br/>
      <Link to="/solutions" className="btn btn-common">Read More</Link>
    </Paragraph>

    <Paragraph
      className="bg-gray"
      heading="Supporting the BA100 Initiative"
      paragraph="ROBU Group is a strategic partner & solutions provider for ANGKASA Berhad to drive BA100,
        a national project endorsed by our Prime Minister and Malaysian Government aimed to help small &
        medium businesses in an effort to address the rising cost of living in Malaysia."
      readMoreLink="/ba100"
    >
      <video className="img-fluid" controls autoPlay muted loop>
        <source src="ba100-pm-endorsement.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Paragraph>

    <JimatMarketplace />

    <section id="team" className="founders section-padding bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Meet the Founders</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <Founder
              image="founder-danir.png"
              name="Raja Danir Ikram"
              title="CEO"
              summary="Career in developing successful businesses spanning more than 15 years in retail,
                automotive, and oil & gas sectors covering markets across Asia Pacific in multi nationals
                and locals such as Shell, Chevron, PETRONAS, Lotus Engineering and PROTON."
            />
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <Founder
              image="founder-aida.png"
              name="Raja Aida Jasmin"
              title="COO & CFO"
              summary="More than 15 years of corporate experience, a strategic leader with a focus on details,
                she has an extraordinary ability to dig deep into a wide range of issues, worked in multinationals
                and locals such as HSBC and ECO Group and was appointed as Group COO of Metronic Global Berhad,
                making her the youngest female Group COO in Mainboard public listed company registered in Bursa Malaysia."
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
