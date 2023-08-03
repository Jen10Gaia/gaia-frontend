import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import SchoolContext from "../../context/SchoolContext";

import {
  scholarshipTypeOptions,
  accomodationOptions,
  countryOptions,
  educationLevelOptions,
  courseOptions,
} from "./data";

const NewSchool = ({ access_token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [scholarshipType, setScholarshipType] = useState("Full-tuition");
  const [accomodation, setAccomodation] = useState("Yes");
  const [country, setCountry] = useState("USA");
  const [educationLevel, setEducationLevel] = useState("Bachelors");
  const [course, setCourse] = useState("Business");
  const [tuitionFee, setTuitionFee] = useState("");
  const [price, setPrice] = useState("");
  const [positions, setPositions] = useState("");
  const [institution, setInstitution] = useState("");

  const { clearErrors, error, loading, created, newSchool, setCreated } = useContext(SchoolContext);

  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (created) {
      setCreated(false);
      toast.success("School Posted successfully.");
      router.push("/admin/dashboard/schools");
    }
  }, [error, created]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      email,
      address,
      scholarshipType,
      country,
      educationLevel,
      course,
      tuitionFee,
      price,
      positions,
      institution,
    };


    newSchool(data, access_token);
    
  };

  return (
    <div className="newJobcontainer">
      <div className="formWrapper">
        <div className="headerWrapper">
          <div className="headerLogoWrapper"></div>
          <h1>
            <i aria-hidden className="fas fa-copy mr-2"></i> New Scholarship
          </h1>
        </div>
        <form className="form" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-8 col-md-12 ">
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fab fa-tumblr"></i>
                  <input
                    type="text"
                    placeholder="Enter Scholarship Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-file-medical-alt"></i>
                  <textarea
                    className="description"
                    type="text"
                    placeholder="Enter Scholarship Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    pattern="\S+@\S+\.\S+"
                    title="Your email is invalid"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-dollar-sign"></i>
                  <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-dollar-sign"></i>
                  <input
                    type="number"
                    placeholder="Enter Tuition Range"
                    value={tuitionFee}
                    onChange={(e) => setTuitionFee(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-users"></i>
                  <input
                    type="number"
                    placeholder="Enter No. of Positions"
                    value={positions}
                    onChange={(e) => setPositions(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-building"></i>
                  <input
                    type="text"
                    placeholder="Enter Institution Name"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-4 col-md-12 ml-0 mt-0 mt-md-0 ml-md-0 ">
              <div className="boxWrapper">
                <h4>Scholarship Types:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={scholarshipType}
                    onChange={(e) => setScholarshipType(e.target.value)}
                  >
                    {scholarshipTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="boxWrapper">
                <h4>Accomodation :</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={accomodation}
                    onChange={(e) => setAccomodation(e.target.value)}
                  >
                    {accomodationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="boxWrapper">
                <h4>Countries:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="boxWrapper">
                <h4>Education Level:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                  >
                    {educationLevelOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="boxWrapper">
                <h4>Course:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    {courseOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

             
            </div>

            <div className="col text-center mt-3">
              <button className="createButton">
                {loading ? "Posting..." : "Post Scholarship"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewSchool;
