import React from 'react';
import Image from 'next/image';

import Link from 'next/link';


const Landing = () => {
  return (
    <div>
      {/* <!-- home slider start--> */}
      <section id="home-slider" className="home-main-block owl-carousel">

        <div className="item home-slider-bg" style={{
          backgroundImage: "url('/images/earth.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        >
        
          <div className="overlay-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="slider-dtl">
                  <div className="slider-sub-heading text-white">Welcome to the Global Access Agency</div>
                  <h1 className="slider-heading text-white">We are experts in the global industry</h1>
                  {/* <div className="slider-btn">
                    <Link href="/about">
                      <button type="button" className="btn ">Our Solutions <i className="flaticon-next"></i></button>
                    </Link>
                    <Link href="/contact-us">
                      <button type="button" className="btn btn-dark">Contact Us <i className="flaticon-next"></i></button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* <!-- home slider end--> */}

      {/* <!-- start about --> */}
      <section id="about" className="about-main-block" style={{
        // backgroundImage: "url('http://placehold.it/1920x910')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      >
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-4">
              <div className="about-block">
                <div className="about-points-block">
                  {/* <div className="about-points-icon">
                    <img src="http://placehold.it/54x54" className="img-fluid" alt="home-icon" />
                  </div> */}
                  <div className="about-point-dtl">
                    <div className="about-point-heading">step 01</div>
                    <div className="about-point-text">Apply Online</div>
                  </div>
                </div>
                <div className="number">01</div>
                <div className="about-type">
                  <p>
                    Complete our easy online application to access any of our work or scholarship services and 
                    pay with either credit card or PayPal.
                  </p>
                  <a href="#" className="btn btn-link">Read More<i className="flaticon-next"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-block">
                <div className="about-points-block">
                  {/* <div className="about-points-icon">
                    <img src="http://placehold.it/54x54" className="img-fluid" alt="home-icon" />
                  </div> */}
                  <div className="about-point-dtl">
                    <div className="about-point-heading">step 02</div>
                    <div className="about-point-text">Receive Documents</div>
                  </div>
                </div>
                <div className="number">02</div>
                <div className="about-type">
                  <p>
                    Receive documents for work or study abroad. No need to deal with the embassy. 
                    We do it for you so you don&#39;t lose valuable time.
                  </p>
                  <a href="#" className="btn btn-link">Read More<i className="flaticon-next"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-block">
                <div className="about-points-block">
                  {/* <div className="about-points-icon">
                    <img src="http://placehold.it/54x54" className="img-fluid" alt="home-icon" />
                  </div> */}
                  <div className="about-point-dtl">
                    <div className="about-point-heading">step 03</div>
                    <div className="about-point-text">Attend Interview</div>
                  </div>
                </div>
                <div className="number">03</div>
                <div className="about-type">
                  <p>We will send you an email along with the documents you received that will contain the date and location for your interview at the approritate embassy.  </p>
                  <a href="#" className="btn btn-link">Read More<i className="flaticon-next"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="section text-left">
                <h1 className="section-heading">Experience in Global Opportunities.</h1>
                <p>
                  When you choose <strong>GAIA</strong>, you are not just partnering with a service provider; you are joining a success story that spans continents and transcends boundaries.                   
                </p>
              </div>
              <div className="about-dtl">
                <div className="row">
                  <div className="col-lg-2">
                    {/* <div className="about-icon">
                      <img src="http://placehold.it/68x68" className="img-fluid" alt="about-img" />
                    </div> */}
                  </div>
                  <div className="col-lg-10">
                    <div className="about-sub-heading">
                      <h4 className="about-heading">Our Strategy</h4>
                      <p>
                        Leverage our experience and partnerships with multiple educational and commercial institutions to provide easy access
                        to jobs and education across the globe.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2">
                    {/* <div className="about-icon">
                      <img src="http://placehold.it/68x68" className="img-fluid" alt="about-img" />
                    </div> */}
                  </div>
                  <div className="col-lg-10 mt-3  mb-2">
                    <div className="about-sub-heading">
                      <h4 className="about-heading">Our Mission</h4>
                      <p>
                        We are committed to making a positive impact in the lives of talented individuals, empowering them to succeed on the global stage. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-right">
              <div className="about-img">
                <img src="/images/bg-hero-girl-en.png" className="img-fluid" alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about end--> */}

      {/* <!-- choose country start--> */}
      <section id="choose-country" className="choose-country-main-block" style={{
        backgroundImage: "url('https://globalaccess.com/en/imgs/home/worldmap.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        <div className="overlay-bg"></div>
        <div className="container">
          <div className="section text-center">
            <h1 className="section-heading text-white">Choose Between any of our Partner Countries!</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="choose-country-block">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="choose-country-icon">
                      <a href="country-details.html" title="">
                        {/* <img src="/images/usa-flag.jpg" className="img-fluid" alt="United States"  width={105} height={105}/> */}
                        <Image src="/images/usa-flag.jpg" className="img-fluid" alt="United Kingdom" width={105} height={105}/>

                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="choose-country-dtl">
                      <h4 className="choose-country-heading"><a href="country-details.html" title="United States">United States</a></h4>
                      <p>Get hired in the some of biggest corporations in not only the USA but the world.</p>
                      <Link href="/about" className="btn btn-link">Read More<i className="flaticon-next"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="choose-country-block">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="choose-country-icon">
                      <a href="country-details.html" title="">
                        {/* <img src="/images/australia-flag.jpg" className="img-fluid" alt="Australia"  width={105} height={105}/> */}
                        <Image src="/images/australia-flag.jpg" className="img-fluid" alt="United Kingdom" width={105} height={105}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="choose-country-dtl">
                      <h4 className="choose-country-heading"><a href="country-details.html" title="Australia">Australia</a></h4>
                      <p>Guaranteed job and educational opportunities for a wide variety of professions.</p>
                      <Link href="/about" className="btn btn-link">Read More<i className="flaticon-next"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="choose-country-block">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="choose-country-icon">
                      <a href="country-details.html" title="">
                        {/* <img src="/images/uk-flag.jpg" className="img-fluid" alt="United Kingdom" width={105} height={105} /> */}
                        <Image src="/images/uk-flag.jpg" className="img-fluid" alt="United Kingdom" width={105} height={105}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="choose-country-dtl">
                      <h4 className="choose-country-heading"><a href="country-details.html" title="United Kingdom">United Kingdom</a></h4>
                      <p>Get scholarships to some of the most prestigous schools.</p>
                      <Link href="/about" className="btn btn-link">Read More<i className="flaticon-next"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="choose-country-block">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="choose-country-icon">
                      <a href="country-details.html" title="">
                        {/* <img src="/images/canada-flag.png" className="img-fluid" alt="Canada" width={105} height={105} /> */}
                        <Image src="/images/canada-flag.png" className="img-fluid" alt="United Kingdom" width={105} height={105}/>

                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="choose-country-dtl">
                      <h4 className="choose-country-heading"><a href="country-details.html" title="Canada">Canada</a></h4>
                      <p>There is a place for you with the increased diversity in Canadian work force.</p>
                      <Link href="/about" className="btn btn-link">Read More<i className="flaticon-next"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- choose country end--> */}

      {/* <!-- visa-features start --> */}
      <section id="visa-features" className="visa-features-main-block" style={{
        backgroundImage: "url('')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        <div className="container">
          <div className="section text-center">
            <h1 className="section-heading">We Give Our Best</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="features-block">
                <div className="features-img">
                  <a href="#" title="Real Time Status">
                    {/* <img src="/images/real-time-status.jpg" className="img-fluid-img" alt="Real Time Status"  width={360} height={250}/> */}
                    <Image src="/images/real-time-status.jpg" className="img-fluid-img" alt="Real Time Status" width={900} height={250}/>

                  </a>
                </div>
                <div className="features-dtl">
                  <div className="features-meta">
                    <a href="#" title="Innovation">Innovation</a>
                  </div>
                  <h4 className="features-heading"><a href="#" title="Real Time Status">Real Time Status</a></h4>
                  <p>We provide you with updates for each step of our process from the moment you apply.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="features-block">
                <div className="features-img">
                  <a href="#" title="Expert Help">
                    {/* <img src="/images/workers-office.jpg" className="img-fluid-img" alt="Expert Help" /> */}
                    <Image src="/images/workers-office.jpg" className="img-fluid-img" alt="Expert Help" width={900} height={250}/>

                  </a>
                </div>
                <div className="features-dtl">
                  <div className="features-meta">
                    <a href="#" title="Service">Service</a>
                  </div>
                  <h4 className="features-heading"><a href="#" title="Expert Help">Expert Help &amp; Support</a></h4>
                  <p>Our support team is ready 24/7 to help you with any inquiries or problems you may have.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="features-block">
                <div className="features-img">
                  <a href="#" title="No Hidden Fees">
                    {/* <img src="/images/two-travellers.png" className="img-fluid-img" alt="No Hidden Fees"  width={900} height={250}/> */}
                    <Image src="/images/two-travellers.png" className="img-fluid-img" alt="No Hidden Fees" width={900} height={250}/>

                  </a>
                </div>
                <div className="features-dtl">
                  <div className="features-meta">
                    <a href="#" title="Simplicity">Simplicity</a>
                  </div>
                  <h4 className="features-heading"><a href="#" title="No Hidden Fees">No Hidden Fees</a></h4>
                  <p>We thrive on openness and trasparency, You pay once for your service of choice and that is it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      

    </div>
  )
}

export default Landing