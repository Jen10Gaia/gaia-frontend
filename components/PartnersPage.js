import React from 'react'
import Image from 'next/image'

const PartnersPage = () => {
  return (
    <div>

      {/* <!-- home slider start--> */}
      <section id="home-slider1" className="home-main-block">
        <div className="item home-slider-block-two" style={{
          backgroundImage: "url('/images/earth-2.jpg')",
        }}>
          <div className="overlay-bg"></div>
          <div id="page-banner" class="page-banner-main-block">
            <div className="container">
              <h1 className="page-banner-heading text-center text-white">Our Strategic Partners</h1>
              <div className="page-banner-block text-center">
                <ol className="breadcrumb">
                  <li><a href="index.html" title="Home">Home</a></li>
                  <li className="active">Partners</li>
                </ol>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- home slider end--> */}

      {/* <!-- Partners start --> */}
      <section className="section section-default mt-none mb-none">
        <div className="container mt-5">
          <h2 className="mb-sm">Our <strong>Work Visa & Jobs Partners</strong></h2>
          <strong>
            <div className="row">

              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="Bill and Melinda Gates Foundation" src="https://www.gatesfoundation.org/-/media/logos/logolg.svg" />

                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="microsoft" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/oracle.png" /> */}
                  <Image src="/images/work-brands/oracle.png" alt="No Hidden Fees" width={150} height={30}/>

                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/intel.png" height={100} /> */}
                  <Image src="/images/work-brands/intel.png" alt="intel"  width={150} height={100} />
                  
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/amazon.png" /> */}
                  <Image  src="/images/work-brands/amazon.png" alt="amazon"  width={150} height={90}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/nvidia.png" /> */}
                  <Image alt="nvidia" src="/images/work-brands/nvidia.png"  width={150} height={100}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/shopify.png" /> */}
                  <Image alt="shopify" src="/images/work-brands/shopify.png" width={150} height={50} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/cnbc.png" /> */}
                  <Image alt="cnbc" src="/images/work-brands/cnbc.png" width={150} height={80} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/mozilla.png" /> */}
                  <Image alt="mozila" src="/images/work-brands/mozilla.png" width={150} height={50}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/openshift.png" height={100} /> */}
                  <Image alt="openshift" src="/images/work-brands/openshift.png" width={100} height={90} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/pbs.png" /> */}
                  <Image alt="pbs" src="/images/work-brands/pbs.png" width={150} height={70} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/qualcomm.png" /> */}
                  <Image alt="qualcomm" src="/images/work-brands/qualcomm.png" width={150} height={30} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/panda-express.png" /> */}
                  <Image alt="panda-express" src="/images/work-brands/panda-express.png" width={170} height={70} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/postmates.png" /> */}
                  <Image alt="postmates" src="/images/work-brands/postmates.png"  width={150} height={100}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/remax.png" /> */}
                  <Image alt="remax" src="/images/work-brands/remax.png" width={150} height={100}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/work-brands/sigsauer.png" /> */}
                  <Image alt="sig-sauer" src="/images/work-brands/sigsauer.png" width={150} height={100}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="" src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg" />
                </div>
              </div>
            </div>
          </strong>
        </div>
        <div className="container mt-5">
          <h2 className="mb-sm">Our <strong> Scholarship Partners</strong></h2>
          <strong>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="" src="https://www.gatesfoundation.org/-/media/logos/logolg.svg" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/gven.png" height={100} /> */}
                  <Image alt="given" src="/images/scholarship-brands/gven.png" width={100} height={100} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/oxford.png" height={100} /> */}
                  <Image alt="oxford" src="/images/scholarship-brands/oxford.png" width={100} height={100} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/caltech.png" /> */}
                  <Image alt="caltech" src="/images/scholarship-brands/caltech.png" width={150} height={100} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/ucl.png" /> */}
                  <Image alt="ucl" src="/images/scholarship-brands/ucl.png" width={150} height={100} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/leeds.png" /> */}
                  <Image alt="leeds" src="/images/scholarship-brands/leeds.png" width={150} height={90} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/pittsburg.png" /> */}
                  <Image alt="pittsburg" src="/images/scholarship-brands/pittsburg.png" width={170} height={90} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png"  height={100}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/sydney.png" /> */}
                  <Image alt="sydney" src="/images/scholarship-brands/sydney.png" width={150} height={100} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="" src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/warwick.png"  height={70}/> */}
                  <Image alt="warwick" src="/images/scholarship-brands/warwick.png" width={100} height={70}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/washington.png"  height={70}/> */}
                  <Image alt="washington" src="/images/scholarship-brands/washington.png" width={100} height={70}/>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  {/* <img alt="" src="/images/scholarship-brands/westminster.png" height={50} /> */}
                  <Image alt="westminster" src="/images/scholarship-brands/westminster.png" width={170} height={50} />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img alt="" src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg" />
                </div>
              </div>
            </div>
          </strong>
        </div>
      </section>
      {/* <!-- Partners end--> */}
    </div>
  )
}

export default PartnersPage