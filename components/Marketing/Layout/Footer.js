import React from 'react'
import Link from "next/link";

import moment from "moment";

const Footer = () => {
  return (
    <div>
      {/* <!-- footer start--> */}
      <div className="tiny-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright-block">
                <p>
                  
                  &copy;
                  {moment().year()}&nbsp;
                  <a href="#" title="Global Access Visa Consulting & Immigration">
                    Global Access Immigration Agency
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="copyright-social">
                <ul>
                  <li className="policy">
                    <Link href="/privacy-policy" title='Privacy Policy'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li >
                    <Link href="/terms-and-conditions" title='Terms and Conditions'>
                      Terms &amp; Conditions 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer end--> */}
    </div>
  )
}

export default Footer