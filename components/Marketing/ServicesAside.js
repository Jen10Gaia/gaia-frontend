import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const ServicesAside = () => {

  const router = useRouter();

  return (
    <div className="col-lg-4">
      <div className="service-details-list">
        <ul>
          { }
          <li className={router.pathname == "/services/work-visa-services" ? "active" : ""}>
            <Link
              href="/services/work-visa-services"
              title="Work visa"
            >
              Job Services
            </Link>
          </li>
          <li className={router.pathname == "/services/student-visa-services" ? "active" : ""}>
            <Link
              href="/services/student-visa-services"
              title="Student visa"
            >
              Scholarship Services
            </Link>
          </li>
          
        </ul>
      </div>
      {/* <div className="service-resources">
        <h4 className="heading-resources">Resources</h4>
        <div className="resources-type">
          <ul>
            <li><a href="#"><i className="fa fa-file-pdf"></i>Download form.pdf</a></li>
            <li><a href="#"><i className="fa fa-file-word"></i>Download form.doc</a></li>
          </ul>
        </div>
      </div> */}
      <div className="service-contact">
        <h4 className="headinng-resources">Contact</h4>
        <div className="service-contact-img" style={{
          backgroundImage: "url('/images/about-girl.jpg')",
        }}>
          <div className="overlay-bg"></div>
          <div className="service-contact-dtl text-white">
            <ul>
              <li> <h3>Support Email</h3> </li>
              <li><a href="email:" title="Contact" className="text-white">info@gaia.com</a></li>
              <li>Monday - Friday from </li>
              <li>8:00 a.m. to 8:00 p.m.</li>
            </ul>
            <Link href="/register" className="btn btn-primary" >Sign Up</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ServicesAside