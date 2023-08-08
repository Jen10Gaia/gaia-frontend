import React from 'react'
import Image from "next/image";
import ServicesAside from './Marketing/ServicesAside'


const StudentVisaServices = () => {
  return (
    <div>


      {/* <!-- home slider start--> */}
      <section id="home-slider1" className="home-main-block">
        <div className="item home-slider-block-two" style={{
          backgroundImage: "url('/images/student-hero-bg.jpg')",
        }}>
          <div className="overlay-bg"></div>
          <div id="page-banner" className="page-banner-main-block">
            <div className="container">
              <h1 className="page-banner-heading text-center text-white">Scholarship Services</h1>
              {/* <div className="page-banner-block text-center">
                <ol className="breadcrumb">
                  <li><a href="index.html" title="Home">Home</a></li>
                  <li className="active">Scholarship Services Visa</li>
                </ol>
              </div> */}
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
                  {/* <img src="/images/student-bg.jpg" className="img-fluid" alt="map" /> */}
                  <Image src="/images/student-bg.jpg" className='img-fluid' alt='work-office' width={900} height={650} />

                </div>
                <h2 className="service-details-heading">Student Visa</h2>
                <p>
                  Education is the key to unlocking a brighter future for deserving students in less developed countries.
                  Our scholarship services aim to make quality education accessible to ambitious individuals, enabling
                  them to pursue their academic dreams and make a positive impact in their communities.
                </p>
                <p>
                  We understand that securing a scholarship is just the first step, which is why we go
                  above and beyond by providing comprehensive visa assistance to ensure that successful candidates
                  can fully seize their opportunities abroad.
                </p>

                <div className="service-details-contant">
                  {/* <div className="row">
                    <div className="col-lg-1">
                      <i className="fa fa-arrow-circle-right"></i>
                    </div>
                    <div className="col-lg-11">
                      <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet it uses a dictionary of over latin words, combined with a handful of model sentence structures.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1">
                      <i className="fa fa-arrow-circle-right"></i>
                    </div>
                    <div className="col-lg-11">
                      <p>But the majority have suffered alteration in some form, by injected humour, or randomised odds which don't look even more slightly believable. If you are going to use a passage of Lorem sum, you need to of the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                    </div>
                  </div> */}
                </div>

              </div>
              {/* FAQS Section */}
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
                              What types of scholarships do you offer?
                            </button>
                          </div>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body">
                            We offer a diverse array of scholarships, including undergraduate scholarships, postgraduate scholarships, research grants, and more. Our goal is to provide opportunities for ambitious students from less developed countries to pursue their academic dreams.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Are the scholarships offered by your platform fully funded?
                            </button>
                          </div>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div className="card-body">
                            While some scholarships may be fully funded, the funding level varies depending on the scholarship program and the sponsoring institution. We curate a range of scholarships with different funding levels to cater to various academic pursuits.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              How do I know if I am eligible for a particular scholarship?
                            </button>
                          </div>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                          <div className="card-body">
                            Each scholarship has specific eligibility criteria. When you explore our scholarship opportunities on the website, you will find detailed information about the eligibility requirements. If you have any doubts, our team is always available to provide guidance and clarify any questions you may have.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading-general-1">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collaps-general-1" aria-expanded="false" aria-controls="collaps-general-1">
                              How do I apply for scholarships through your platform?
                            </button>
                          </div>
                        </div>
                        <div id="collaps-general-1" className="collapse" aria-labelledby="heading-general-1" data-parent="#accordion">
                          <div className="card-body">
                            Applying for scholarships is simple. Create an account on our website, review the available scholarship listings, and apply for the ones that align with your academic goals. Our team will assist you throughout the application process, ensuring that you present your qualifications effectively.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="heading-general-2">
                          <div className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collaps-general-1" aria-expanded="false" aria-controls="collaps-general-1">
                              Do you provide assistance with visa applications for scholarship recipients studying abroad?
                            </button>
                          </div>
                        </div>
                        <div id="collaps-general-1" className="collapse" aria-labelledby="heading-general-2" data-parent="#accordion">
                          <div className="card-body">
                            Yes, we offer comprehensive visa assistance to scholarship recipients who plan to study abroad. We understand that the visa process can be complex, and our team is dedicated to supporting you throughout the immigration process, making your journey smoother.                          </div>
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
                    Our team is the heartbeat of our mission. Combining expertise from various domains, including talent
                    sourcing, career coaching, and visa assistance, they ensure that every candidate receives personalized
                    attention and tailored solutions. Our passionate professionals are devoted to helping you achieve your
                    dreams and aspirations.
                  </div>
                  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    We understand that embarking on a journey towards global opportunities can be overwhelming.
                    That&#39;s why we offer unparalleled support throughout the entire process. Whether you need guidance on
                    optimizing your resume, honing your interview skills, or preparing for a visa application, our support
                    team is here for you at every step.
                  </div>
                  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    Trust and credibility are at the core of what we do. We are proud to be government certified in each of
                    our partner countries, demonstrating our commitment to operating with the highest standards of
                    integrity and transparency. Our certification reflects our adherence to legal and ethical practices,
                    ensuring that your aspirations are in safe and capable hands.

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

export default StudentVisaServices