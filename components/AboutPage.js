import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const AboutPage = () => {
  return (
    <div>
      
      {/* <!-- home slider start--> */}
      <section id="home-slider" className="home-main-block owl-carousel">
        <div className="item home-slider-block-two" style={{
          backgroundImage: "url('/images/earth.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
          <div className="overlay-bg"></div>
          <div id="page-banner" className="page-banner-main-block">
            <div className="container">
              <h1 className="page-banner-heading text-center text-white">About us</h1>
              {/* <div className="page-banner-block">
                <ol className="breadcrumb">
                  <li><Link href="/" title="Home">Home</Link></li>
                  <li className="active">About us</li>
                </ol>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- home slider end--> */}

      {/* <!-- start about --> */}
      <section id="about-two" className="about-main-block-two about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-block-img-two">
                <img src="/images/earth-2.jpg" className="img-fluid" alt="about-img" width={595} height={389} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-block-dtl-two">
                <div className="section">
                  <h2 className="section-heading">Over a decade of experience providing expert global opportunities.</h2>
                  <p>
                    We are driven by a powerful vision to create opportunities and empower individuals in less 
                    developed countries across Africa, South America, and Asia. We firmly believe that talent 
                    knows no boundaries, and by forging strategic partnerships with countries, corporate entities, 
                    and academic institutions, we are making a tangible difference in the lives of countless people.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="about-block-two">
                <div className="about-icon-two">
                  <img src="/images/about-strategy.png" className="img-fluid" alt="about-img" width={58} height={58} />
                </div>
                <div className="about-dtl-two">
                  <h4 className="about-heading">Our Strategy</h4>
                  <p>
                    We take a unique approach to global talent sourcing and scholarship provision.
                    Our team of dedicated experts works tirelessly to identify and establish partnerships 
                    with countries, corporate entities, and academic institutions who share our commitment 
                    to making a difference.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-block-two">
                <div className="about-icon-two">
                  <img src="/images/about-mission.png" className="img-fluid" alt="about-img" width={58} height={58} />
                </div>
                <div className="about-dtl-two">
                  <h4 className="about-heading">Our Mission</h4>
                  <p>
                    Our mission is to bridge the gap between talent and opportunity, by facilitating access to 
                    life-changing job opportunities and scholarships. By leveraging our extensive network of 
                    partners, we bring together a diverse pool of individuals and connect them with 
                    organizations seeking talent.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-block-two">
                <div className="about-icon-two">
                  <img src="/images/about-achievements.png" className="img-fluid" alt="about-img" width={58} height={58} />
                </div>
                <div className="about-dtl-two">
                  <h4 className="about-heading-two">Our Achievements</h4>
                  <p>
                    We are proud to have facilitated countless success stories, with individuals 
                    securing life-changing jobs that align with their skills and aspirations. 
                    Furthermore, our scholarship programs have unlocked prestigious doors to education for ambitious students.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end about --> */}

    

    </div>
  )
}

export default AboutPage