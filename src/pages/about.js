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
                in the ever challenging markets locally and abroad.”"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <Founder
              image="founder-aida.png"
              name="Raja Aida Jasmin"
              title="COO & CFO"
              summary="“We look forward to share our learnings, experience and knowledge to help unite
                and grow SMEs to win in the ever competitive landscape today and tomorrow locally and
                abroad via digital solutions.”"
            />
          </div>
          <div className="col-md-12">
            <h6 style={{ marginTop: "40px" }} className="text-center">“If the rate of change on the outside exceeds the rate of change on the inside, the end is near.”</h6>
          </div>
        </div>
      </div>
    </section>

    <section className="paragraph section-padding">
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-4 col-xs-12 text-center">
            <div className="about-wrapper">
              <div>
                <div className="site-heading">
                  <h2 className="section-title">Our Vision</h2>
                </div>
                <div className="content">
                  <p style={{ margin: "10px 0 20px", fontSize: "16px" }}>To inspire & nurture human spirit to converge & help each other</p>
                </div>
              </div>
            </div>
          </div>
          <div className="offset-md-2 col-md-4 col-xs-12 text-center">
            <div className="about-wrapper">
              <div>
                <div className="site-heading">
                  <h2 className="section-title">Our Mission</h2>
                </div>
                <div className="content">
                  <p style={{ margin: "10px 0 20px", fontSize: "16px" }}>To utilize technology in an effort to connect & unite small & medium businesses together to serve their community better</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="paragraph section-padding bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get in Touch</h2>
          <div className="shape"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="about-wrapper">
              <div>
                <div className="site-heading">
                  <h2 className="section-title">We’d love to connect!</h2>
                </div>
                <div className="get-in-touch">
                  <p>We’d love to connect with you if you’re a: -</p>
                  <ol>
                    <li>Manufacturer/Distributor/Seller</li>
                    <li>Financial Institution/Bank</li>
                    <li>Cooperative/SME</li>
                    <li>Consumer</li>
                  </ol>
                  <p>
                    Whether you’re ready to dive in or just want to discuss what partnership possibilities
                    may exist, we’d love to start the conversation.
                  </p>
                  <p><a href="mailto:support@robugroup.com">Send us a mail</a> and we will reply or call you as soon as possible!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 text-right">
            <div className="map">
              <object style={{ height: "280px", width: "100%" }} data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.932347548312!2d101.64534682919346!3d3.1658243389141645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDknNTcuMCJOIDEwMcKwMzgnNDUuMiJF!5e0!3m2!1sen!2smy!4v1571144366627!5m2!1sen!2smy"></object>
            </div>
          </div>
        </div>
      </div>
    </section>


  </Layout>
)

export default AboutPage
