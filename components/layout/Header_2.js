import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import AuthContext from "../../context/AuthContext";

const Header_2 = () => {
  // We use the sate here to diplay user i the header
  const { loading, user, logout, isAdmin } = useContext(AuthContext);

 

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-custom-1 navbar-expand-lg justify-content-between mt-4 px-4 py-4 rounded nav-custom" >
       
        <button className="navbar-toggler order-2"
          type="button" data-toggle="collapse"
          data-target="#navbar-list-9"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse w-100 order-3 order-lg-1" id="navbar-list-9">
          <ul className="navbar-nav">
          <li className="nav-item landing">
              <Link className="nav-link" href="/"> <span className="bold">HOME</span></Link>
            </li>
            <li className="nav-item landing ">
              <Link className="nav-link" href="/partners"> <span className="bold">PARTNERS</span></Link>
            </li>
            <li className="nav-item landing dropdown " >
              <Link
                href=""
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"

              >
                <span className="bold">SERVICES</span>{" "}
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" >
                <Link className="link" href="/services/work-visa-services">
                  <div className="dropdown-item">Job Services</div>
                </Link>
                <Link className="link" href="/services/student-visa-services">
                  <div className="dropdown-item">Scholarship Services</div>
                </Link>
              </div>
            </li>
            
            <li className="nav-item landing ">
              <Link className="nav-link" href="/about"> <span className="bold">ABOUT</span></Link>
            </li>
            
              
          </ul>
        </div>
        <Link className="navbar-brand mx-lg-0 order-1 order-lg-2" href="/">
          <Image src="/images/logo.png" width="130" height="50" alt="logo" />
        </Link>

        <div className="collapse navbar-collapse justify-content-end w-100 order-3" id="navbar-list-9">
          {user ? (
            <ul className="navbar-nav ">
              <li className="nav-item dropdown mx-2 my-2" >
                <Link
                  href="#"
                  className="nav-link btn-outline dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"

                >
                  <span className="bold">BROWSE</span>{" "}
                </Link>
                <div className="dropdown-menu dropdown-menu-left dropdown-menu-lg-right" >
                  <Link className="link" href="/browse-work-visa-jobs">
                    <div className="dropdown-item">Jobs</div>
                  </Link>

                  <Link className="link" href="/browse-student-visa-scholarships">
                    <div className="dropdown-item">Scholarships</div>
                  </Link>
                </div>
              </li> 
              <li className="nav-item dropdown mx-2 my-2" >
                <Link
                  href="#"
                  className="nav-link btn-outline dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"

                >

                  {/* <Image src="/images/logo.png" width="40" height="40" className="rounded-circle" alt="profile" /> */}
                  <span className="bold"><i class="fas fa-person"></i>{user.first_name.toUpperCase()}</span>{" "}

                </Link>
                <div className="dropdown-menu dropdown-menu-left dropdown-menu-lg-right" >
                  {isAdmin ? (
                    <Link className="link" href="/admin/dashboard">
                      <div className="dropdown-item">Dashboard</div>
                    </Link>
                  ) : (
                    <Link className="link" href="/profile">
                      <div className="dropdown-item">Profile</div>
                    </Link>
                  )}


                  <Link className="link" href="/upload/resume">
                    <div className="dropdown-item">Upload Files</div>
                  </Link>

                  <Link className="link" href="/profile/applied-work">
                    <div className="dropdown-item">Job Applications</div>
                  </Link>

                  <Link className="link" href="/profile/applied-scholarships">
                    <div className="dropdown-item">Scholarship Applications</div>
                  </Link>

                  <div className="dropdown-divider"></div>

                  <Link className="link" href="/">
                    <div
                      className="dropdown-item text-danger"
                      onClick={logoutHandler}
                    >
                      Logout
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          ) : (
            !loading && (
              <Link className="link" href="/login">
                <button className="loginButton2">
                  <span>Login</span>
                </button>
              </Link>
            )

          )}
        </div>
      </nav>
    </div>


  );
};

export default Header_2;