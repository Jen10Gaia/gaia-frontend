import React from 'react'
import Image from "next/image";
import ServicesAside from './Marketing/ServicesAside'


const WorkVisaServices = () => {
  return (
    <div>

      {/* <!-- home slider start--> */}
      <section id="home-slider1" className="home-main-block">
        <div className="item home-slider-block-two" style={{
          backgroundImage: "url('/images/work-office-bg.jpg')",
        }}>
          <div className="overlay-bg"></div>
          <div id="page-banner" class="page-banner-main-block">
            <div className="container">
              <h1 className="page-banner-heading text-center text-white">Job Services </h1>
              <div className="page-banner-block text-center">
                <ol className="breadcrumb">
                  <li><a href="index.html" title="Home">Home</a></li>
                  <li className="active">Job Services</li>
                </ol>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- home slider end--> */}

      {/* <!-- Service Details start --> */}
      <section id="service-details" className="service-details-main-block">
        <div className="container">
          <div className="row">

            <ServicesAside />
            {/* Main Block */}
            <div className="col-lg-8">
              {/* Service Details */}
              <div className="service-details">
                <div className="service-img">
                  {/* <img src="/images/work-office-bg-2.jpg" className="img-fluid" alt="map" /> */}
                  <Image src="/images/work-office-bg-2.jpg" className='img-fluid' alt='work-office' width={900} height={650} />

                </div>
                <h2 className="service-details-heading">Job Services</h2>
                <p>
                  We take immense pride in offering exceptional job services that bridge the gap between talent
                  and opportunity. Our mission is to empower individuals from less developed countries in Africa,
                  South America, and Asia, by connecting them with life-changing job opportunities worldwide.
                </p>
                <p>
                  We understand that securing a job is just the first step, which is why we go
                  above and beyond by providing comprehensive visa assistance to ensure that successful candidates
                  can fully seize their opportunities abroad.
                </p>

                <h3>Our Benefits</h3>

                <div className="service-details-contant">
                  <div className="row">
                    <div className="col-lg-1">
                      <i className="fa fa-arrow-circle-right"></i>
                    </div>
                    <div className="col-lg-11">
                      <p>
                        <strong>Talent Sourcing:</strong> Our dedicated team collaborates with countries, corporate partners, and academic institutions to identify job openings across various industries and sectors. We ensure that these opportunities are accessible to individuals with diverse skill sets and backgrounds
                      </p>

                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-1">
                      <i className="fa fa-arrow-circle-right"></i>
                    </div>
                    <div className="col-lg-11">
                      <p>
                        <strong>Resume Enhancement:</strong> We assist candidates in optimizing their resumes to showcase their strengths and achievements effectively. A well-crafted resume increases the likelihood of attracting potential employers and standing out in the competitive job market.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-1">
                      <i className="fa fa-arrow-circle-right"></i>
                    </div>
                    <div className="col-lg-11">
                      <p>
                        <strong>Visa Assistance:</strong> For successful candidates planning to work abroad, we provide comprehensive visa assistance to facilitate a smooth transition to their new work environment.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Benefits Section */}
              <div className="service-benefits">
                <h3 className="service-details-heading">FAQ</h3>
                {/* <p>A randomised words which don't look even more slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p> */}
                <div className="row">

                  <div className="col-lg-12">
                    <div id="accordion" className="second-accordion">

                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <div className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What types of job opportunities do you offer?
                            </button>
                          </div>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body">
                            We offer a wide range of job opportunities across various industries and sectors, including technology, healthcare, finance, education, engineering, and more. Our aim is to provide diverse options that cater to different skill sets and career aspirations.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Are your job services limited to specific countries?
                            </button>
                          </div>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div className="card-body">
                            Yes, our job services are limited to the countries we are currently partnered with which at the moment are the United Kingdom, United States of America, Canada and Australia with more soon to join.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              How do I apply for job opportunities through your platform?
                            </button>
                          </div>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                          <div className="card-body">
                            Applying for job opportunities is easy. Simply create an account on our website, browse through the available job listings, and apply for positions that align with your skills and interests. Our team will then review your application and provide assistance throughout the process.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading-general-1">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collaps-general-1" aria-expanded="false" aria-controls="collaps-general-1">
                              Are your job services only for experienced professionals, or can fresh graduates apply as well?Majority have suffered alteration in some form
                            </button>
                          </div>
                        </div>
                        <div id="collaps-general-1" className="collapse" aria-labelledby="heading-general-1" data-parent="#accordion">
                          <div className="card-body">
                            Our job services are open to individuals at various stages of their careers. We cater to experienced professionals seeking new opportunities as well as fresh graduates looking to kick-start their careers. We believe that talent comes in all forms, and we are committed to helping individuals at every level.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="heading-general-1">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collaps-general-1" aria-expanded="false" aria-controls="collaps-general-1">
                              What happens when I arrive in the country after getting the job?
                            </button>
                          </div>
                        </div>
                        <div id="collaps-general-1" className="collapse" aria-labelledby="heading-general-1" data-parent="#accordion">
                          <div className="card-body">
                            We will assign you a guide that will be in contact with you before you travel up until you start working. This is to make sure you are safe and settled.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Strategy Section */}
              <div className="service-strategy">
                <h3 className="service-strategy-heading">Market Strategy</h3>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Dedicated Team</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Great Support</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Government Certified</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    Our team is the heartbeat of our mission. Combining expertise from various domains, including talent sourcing, career coaching, and visa assistance, they ensure that every candidate receives personalized attention and tailored solutions. Our passionate professionals are devoted to helping you achieve your dreams and aspirations.
                  </div>
                  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    We understand that embarking on a journey towards global opportunities can be overwhelming. That's why we offer unparalleled support throughout the entire process. Whether you need guidance on optimizing your resume, honing your interview skills, or preparing for a visa application, our support team is here for you at every step.
                  </div>
                  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  Trust and credibility are at the core of what we do. We are proud to be government certified in each of our partner countries, demonstrating our commitment to operating with the highest standards of integrity and transparency. Our certification reflects our adherence to legal and ethical practices, ensuring that your aspirations are in safe and capable hands.

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service Details end--> */}
    </div>
  )
}



export default WorkVisaServices