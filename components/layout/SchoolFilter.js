import React, { useState } from "react";
import { useRouter } from "next/router";

const SchoolFilter = () => {
  const router = useRouter();

  const [isScholarshipTypeOpen, setScholarshipTypeOpen] = useState(false);
  const [isAccomodationOpen, setAccomodationOpen] = useState(false);
  const [isCountriesOpen, setCountriesOpen] = useState(false);
  const [isEducationLevelOpen, setEducationLevelOpen] = useState(false);
  const [isCourseOpen, setCourseOpen] = useState(false);

  const toggleScholarshipType = () => {
    setScholarshipTypeOpen(!isScholarshipTypeOpen);
  };
  const toggleAccomodation = () => {
    setAccomodationOpen(!isAccomodationOpen);
  };

  const toggleCountries = () => {
    setCountriesOpen(!isCountriesOpen);
  };

  const toggleEducationLevel = () => {
    setEducationLevelOpen(!isEducationLevelOpen);
  };

  const toggleCourse = () => {
    setCourseOpen(!isCourseOpen);
  };


  let queryParams;
  if (typeof window !== "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  function handleClick(checkbox) {
    if (typeof window !== "undefined") {
      const checkboxes = document.getElementsByName(checkbox.name);

      checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
      });
    }

    if (checkbox.checked === false) {
      // Delete the filter from query
      if (queryParams.has(checkbox.name)) {
        queryParams.delete(checkbox.name);
        router.replace({
          search: queryParams.toString(),
        });
      }
    } else {
      // Set new filter value if it alredy there
      if (queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value);
      } else {
        // Append the new filter
        queryParams.append(checkbox.name, checkbox.value);
      }

      router.replace({
        search: queryParams.toString(),
      });
    }
  }

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  return (
    <div className="sidebar mt-5 container side-bar-bg">
      <h4>Filters</h4>
      <hr />

      {/* Scholarship Type Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleScholarshipType}>
          {isScholarshipTypeOpen ? (
            <span> - Scholarship Type</span>
          ) : (
            <span> + Scholarship Type</span>
          )}

        </h5>

        <div className={`collapse${isScholarshipTypeOpen ? " show" : ""} mb-2`}>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="scholarshipType"
              id="check1"
              value="Full-tuition"
              defaultChecked={checkHandler("scholarshipType", "Full-tuition")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label " htmlFor="check1">
              Full-tuition
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="scholarshipType"
              id="check2"
              value="Partial-tuition"
              defaultChecked={checkHandler("scholarshipType", "Partial-tuition")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check2">
              Partial-tuition
            </label>
          </div>
        </div>
      </div>
      <hr />

      {/* Countries Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleCountries}>
          {isCountriesOpen ? (
            <span> - Countries</span>
          ) : (
            <span> + Countries</span>
          )}

        </h5>

        <div className={`collapse${isCountriesOpen ? " show" : ""} mb-2`}>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="country"
              id="check3"
              value="UK"
              defaultChecked={checkHandler("country", "UK")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check3">
              UK
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="country"
              id="check4"
              value="USA"
              defaultChecked={checkHandler("country", "USA")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check4">
              USA
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="country"
              id="check5"
              value="Canada"
              defaultChecked={checkHandler("country", "Canada")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check5">
              Canada
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="country"
              id="check6"
              value="Australia"
              defaultChecked={checkHandler("country", "Australia")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check6">
              Australia
            </label>
          </div>

        </div>
      </div>
      <hr />

      {/* Education Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleEducationLevel}>
          {isEducationLevelOpen ? (
            <span> - Education Level</span>
          ) : (
            <span> + Education Level</span>
          )}

        </h5>

        <div className={`collapse${isEducationLevelOpen ? " show" : ""} mb-2`}>
          {/* Certificate */}
          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="educationLevel"
              id="check7"
              value="Certificate"
              defaultChecked={checkHandler("educationLevel", "Certificate")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check7">
              Certificate
            </label>
          </div>

          {/* Diploma */}
          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="educationLevel"
              id="check8"
              value="Diploma"
              defaultChecked={checkHandler("educationLevel", "Diploma")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check8">
              Diploma
            </label>
          </div>

          {/* Bachelors */}
          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="educationLevel"
              id="check9"
              value="Bachelors"
              defaultChecked={checkHandler("educationLevel", "Bachelors")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check9">
              Bachelors
            </label>
          </div>

          {/* Masters */}
          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="educationLevel"
              id="check10"
              value="Masters"
              defaultChecked={checkHandler("educationLevel", "Masters")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check10">
              Masters
            </label>
          </div>

          {/* Phd */}
          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="educationLevel"
              id="check11"
              value="Phd"
              defaultChecked={checkHandler("educationLevel", "Phd")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check11">
              Phd
            </label>
          </div>

        </div>
      </div>
      <hr />

      {/* Acomodation Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleAccomodation}>
          {isAccomodationOpen ? (
            <span> - Accomodation </span>
          ) : (
            <span> + Accomodation </span>
          )}

        </h5>

        <div className={`collapse${isAccomodationOpen ? " show" : ""} mb-2`}>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="accomodation"
              id="check12"
              value="Yes"
              defaultChecked={checkHandler("accomodation", "Yes")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check12">
              Yes
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="accomodation"
              id="check13"
              value="No"
              defaultChecked={checkHandler("experience", "No")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check13">
              No
            </label>
          </div>

        </div>
      </div>
      <hr />

      {/* Course Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleCourse}>
          {isCourseOpen ? (
            <span> - Course</span>
          ) : (
            <span> + Course</span>
          )}

        </h5>

        <div className={`collapse${isCourseOpen ? " show" : ""} mb-2`}>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check14"
              value="Business"
              defaultChecked={checkHandler("course", "Business")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check16">
              Business
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check15"
              value="Information Technology"
              defaultChecked={checkHandler("course", "Information Technology")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check15">
              IT
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check16"
              value="Finance"
              defaultChecked={checkHandler("course", "Finance")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check16">
              Finance
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check17"
              value="Education"
              defaultChecked={checkHandler("course", "Education")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check17">
              Education
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check18"
              value="Health"
              defaultChecked={checkHandler("course", "Health")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check18">
              Health
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check19"
              value="Telecommunication"
              defaultChecked={checkHandler("course", "Telecommunication")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check19">
              Telecommunication
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check20"
              value="Engineering"
              defaultChecked={checkHandler("course", "Engineering")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check20">
              Engineering
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check21"
              value="Architecture"
              defaultChecked={checkHandler("course", "Architecture")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check21">
              Architecture
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check22"
              value="Arts"
              defaultChecked={checkHandler("course", "Arts")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check22">
              Arts
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="course"
              id="check23"
              value="Law"
              defaultChecked={checkHandler("course", "Law")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check23">
            Law
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check24"
              value="Others"
              defaultChecked={checkHandler("industry", "Others")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check24">
              Others
            </label>
          </div>


        </div>
      </div>
      <hr />



    </div>
  )
}

export default SchoolFilter







