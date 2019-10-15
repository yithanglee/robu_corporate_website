import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Founder from "../components/founder"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <section id="team" className="founders section-padding" style={{ paddingTop: "180px" }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">The Founders</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <Founder
              image="founder-danir.png"
              name="Raja Danir Ikram"
              title="CEO"
              summary="“We are committed to collaborate and provide solutions leveraging on technology
                to businesses and SMEs with consumers in mind as a catalyst to have sustainable growth
                in the ever challenging markets locally and aboard.”"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <Founder
              image="founder-aida.png"
              name="Raja Aida Jasmin"
              title="COO & CFO"
              summary="“We look forward to share our learnings, experience and knowledge to help unite
                and grow SMEs to win in the ever competitive landscape today and tomorrow locally and
                aboard via digital solutions.”"
            />
          </div>
          <div className="col-md-12">
            <h6 style={{ marginTop: "40px" }} className="text-center">“If the rate of change on the outside exceeds the rate of change on the inside, the end is near.”</h6>
          </div>
        </div>
      </div>
    </section>

    <section className="paragraph section-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-4 col-xs-12 text-center">
            <div className="about-wrapper">
              <div>
                <div class="site-heading">
                  <h2 className="section-title">Our Vision</h2>
                </div>
                <div class="content">
                  <p style={{ margin: "10px 0 20px", fontSize: "16px" }}>To inspire & nurture human spirit to converge & help each other</p>
                </div>
              </div>
            </div>
          </div>
          <div className="offset-md-2 col-md-4 col-xs-12 text-center">
            <div className="about-wrapper">
              <div>
                <div class="site-heading">
                  <h2 className="section-title">Our Mission</h2>
                </div>
                <div class="content">
                  <p style={{ margin: "10px 0 20px", fontSize: "16px" }}>To utilize technology in an effort to connect & unite small & medium businesses together to serve their community better</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
