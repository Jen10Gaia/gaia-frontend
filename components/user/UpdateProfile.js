import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

import {
  firstTimeVisaApplicationOptions,
  medicalConditionOptions,
  marriedOptions,
  genderOptions,
  religionOptions,
} from "./data";

const UpdateProfile = ({ access_token }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstTimeVisaApplication, setFirstTimeVisaApplication] = useState("");
  const [medicalCondition, setMedicalCondition] = useState("No");
  const [medicalConditionDescription, setMedicalConditionDescription] = useState("");
  const [married, setMarried] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");


  const router = useRouter();

  const {
    updated,
    loading,
    error,
    user,
    clearErrors,
    updateProfile,
    setUpdated,
  } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
    }

    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (updated) {
      toast.success('Profile Updated Successfully')
      setUpdated(false);
      router.push("/upload/resume");
    }
  }, [error, user, updated]);

  const submitHandler = (e) => {
    e.preventDefault();
    updateProfile({
      firstName,
      lastName,
      email,
      password,
      firstTimeVisaApplication,
      medicalCondition,
      medicalConditionDescription,
      married,
      gender,
      religion,
    }, access_token);
  };

  return (
    <div className="modalMask">
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src="/images/profile.svg"
              alt="register"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={20}
            />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h2> Profile</h2>
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="inputBox">
                  <i aria-hidden className="fas fa-user-tie"></i>
                  <input
                    type="text"
                    placeholder="Enter Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="\S+@\S+\.\S+"
                    title="Your email is invalid"
                    required
                  />
                </div>
                <hr />

                <div className="headerWrapper">
                  <h2> Additional Details</h2>
                </div>

                {/* First Time Visa Application */}
                <h6 className="profileDetailsHeader">First Time Visa Application?</h6>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <div className="boxWrapper">
                    <div className="selectWrapper">
                      <select
                        className="profileSelectWrapper"
                        value={firstTimeVisaApplication}
                        onChange={(e) => setFirstTimeVisaApplication(e.target.value)}
                      >
                        {firstTimeVisaApplicationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Married */}
                <h6 className="profileDetailsHeader">Are you married?</h6>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <div className="boxWrapper">
                    <div className="selectWrapper">
                      <select
                        className="profileSelectWrapper"
                        value={married}
                        onChange={(e) => setMarried(e.target.value)}
                      >
                        {marriedOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Gender */}
                <h6 className="profileDetailsHeader">Your Gender?</h6>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <div className="boxWrapper">
                    <div className="selectWrapper">
                      <select
                        className="profileSelectWrapper"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        {genderOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Religion */}
                <h6 className="profileDetailsHeader">Your Religion?</h6>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <div className="boxWrapper">
                    <div className="selectWrapper">
                      <select
                        className="profileSelectWrapper"
                        value={religion}
                        onChange={(e) => setReligion(e.target.value)}
                      >
                        {religionOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Medical Conditions */}
                <h6 className="profileDetailsHeader">Any Medical Conditions?</h6>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <div className="boxWrapper">
                    <div className="selectWrapper">
                      <select
                        className="profileSelectWrapper"
                        value={medicalCondition}
                        onChange={(e) => setMedicalCondition(e.target.value)}
                      >
                        {medicalConditionOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Medical Condition Description*/}         
                {medicalCondition === "Yes" ? (
                  <div>
                    <h6 className="profileDetailsHeader">Medical Condition Description</h6>
                    <div className="inputBox">
                      <i aria-hidden className="fas fa-user-tie"></i>
                      <input
                        className="profileDescriptionox"
                        type="text"
                        placeholder="Medical Condition Description"
                        value={medicalConditionDescription}
                        onChange={(e) => setMedicalConditionDescription(e.target.value)}

                      />
                    </div>
                  </div>

                ): <></>}

                
                {/* <div className="inputBox">
                  <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                  />
                </div> */}

                <hr />


              </div>
              <div className="registerButtonWrapper">
                <button type="submit" className="registerButton">
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
