import React, { useEffect, useContext } from "react";
import moment from "moment";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import SchoolContext from "../../context/SchoolContext";
import { toast } from "react-toastify";
import Link from "next/link";

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const SchoolDetails = ({ school, candidates, access_token }) => {
  const { 
    applyToSchool, 
    checkSchoolApplied, 
    applied, 
    clearErrors, 
    error, 
    loading, } = useContext(SchoolContext);

  useEffect( () => {
  

    if (error) {
      toast.error(error);
      clearErrors();
    }

    if(applied){
      toast.success("You have successfully applied")
    }

    checkSchoolApplied(school.id, access_token);
  }, [error, applied]);

  const applyToSchoolHandler = () => {
    applyToSchool(school.id, access_token);
  };

  const checkLastDateHandler= () =>{
    if(isLastDatePassed){
      toast.error("You can no longer apply to this service since it has expired.")
    }
  }

 

  const d1 = moment(school.lastDate);
  const d2 = moment(Date.now());
  const isLastDatePassed = d1.diff(d2, "days") < 0 ? true : false;

  return (
    <div className="job-details-wrapper">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="job-details p-3">
              <div className="job-header p-4">
                <h2>{school.title}</h2>
                <span>
                  <i aria-hidden className="fas fa-building"></i>
                  <span> {school.company}</span>
                </span>
                <span className="ml-4">
                  <i aria-hidden className="fas fa-map-marker-alt"></i>
                  <span> {school.address}</span>
                </span>

                <div className="mt-3">
                  <span>
                    {loading ? (
                      "Loading..."
                    ) : applied ? (
                      <button
                        disabled
                        className="btn btn-success px-4 py-2 apply-btn"
                      >
                        <i aria-hidden className="fas fa-check"></i>{" "}
                        {loading ? "Loading" : "Applied"}
                      </button>
                    ) : !isLastDatePassed && (
                     
                      <button
                        className="btn btn-primary px-4 py-2 apply-btn"
                        onClick={applyToSchoolHandler}
                        disabled={isLastDatePassed}
                      >
                        {loading ? "Loading..." : "Apply Now"}
                      </button>
                    )}
                    <span className="ml-4 text-success">
                      <b>{candidates}</b> candidate(s) applied to this scholarhip.
                    </span>
                  </span>
                </div>
              </div>

              <div className="job-description mt-5">
                <h4>Description</h4>
                <p>{school.description}</p>
              </div>

              <div className="job-summary">
                <h4 className="mt-5 mb-4">Scholarship Summary</h4>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Scholarship Type</td>
                      <td>:</td>
                      <td>{school.scholarshipType}</td>
                    </tr>

                    <tr>
                      <td> Course</td>
                      <td>:</td>
                      <td>{school.course}</td>
                    </tr>

                    <tr>
                      <td>Expected Tuition</td>
                      <td>:</td>
                      <td>${school.tuitionFee}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>:</td>
                      <td>${school.price}</td>
                    </tr>

                    <tr>
                      <td>Education</td>
                      <td>:</td>
                      <td>{school.educationLevel}</td>
                    </tr>


                    <tr>
                      <td>Company</td>
                      <td>:</td>
                      <td>{school.institution}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <div className="job-location">
                <h4 className="mt-5 mb-4">Job Location</h4>
                <div id="job-map" style={{ height: 520, width: "100%" }} />
              </div> */}
            </div>
          </div>

          <div className="col-xl-3 col-lg-4">
            <div className="job-contact-details p-3">
              <h4 className="my-4">More Details</h4>
              <hr />
              {/* <h5>Email Address:</h5>
              <p>{school.email}</p> */}

              <h5>Job Posted:</h5>
              <p>
                {moment.utc(school.createdAt).local().startOf("seconds").fromNow()}
              </p>

              <h5>Last Date:</h5>
              <p>{school.lastDate.substring(0, 10)}</p>
            </div>

            {isLastDatePassed && (
              <div className="mt-5 p-0">
                <div className="alert alert-danger">
                  <h5>Note:</h5>
                  You can no longer apply to this service since it has expired. Last
                  date to apply was:{" "}
                  <b>{school.lastDate.substring(0, 10)}</b>
                  <br /> <Link href="/schools">Browse Others</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;
