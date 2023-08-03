import React, { useState } from "react";
import { useRouter } from "next/router";

const Filters_2 = () => {
  const router = useRouter();

  const [isJobTypeOpen, setJobTypeOpen] = useState(false);
  const [isCountriesOpen, setCountriesOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);
  const [isExperienceOpen, setExperienceOpen] = useState(false);
  const [isIndustryOpen, setIndustryOpen] = useState(false);

  const toggleJobType = () => {
    setJobTypeOpen(!isJobTypeOpen);
  };

  const toggleCountries = () => {
    setCountriesOpen(!isCountriesOpen);
  };

  const toggleEducation = () => {
    setEducationOpen(!isEducationOpen);
  };

  const toggleExperience = () => {
    setExperienceOpen(!isExperienceOpen);
  };

  const toggleIndustry = () => {
    setIndustryOpen(!isIndustryOpen);
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
      <hr  className="side-bar-hr"/>

      {/* Job Type Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleJobType}>
          {isJobTypeOpen ? (
            <span> - Job Type</span>
          ) : (
            <span> + Job Type</span>
          )}

        </h5>

        <div className={`collapse${isJobTypeOpen ? " show" : ""} mb-2`}>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="jobType"
              id="check1"
              value="Permanent"
              defaultChecked={checkHandler("jobType", "Permanent")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label " htmlFor="check1">
              Permanent
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="jobType"
              id="check2"
              value="Temporary"
              defaultChecked={checkHandler("jobType", "Temporary")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check2">
              Temporary
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
        <h5 className="filter-heading mb-3" onClick={toggleEducation}>
          {isEducationOpen ? (
            <span> - Education</span>
          ) : (
            <span> + Education</span>
          )}

        </h5>

        <div className={`collapse${isEducationOpen ? " show" : ""} mb-2`}>
          {/* Certificate */}
          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="education"
              id="check7"
              value="Certificate"
              defaultChecked={checkHandler("education", "Certificate")}
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
              name="education"
              id="check8"
              value="Diploma"
              defaultChecked={checkHandler("education", "Diploma")}
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
              name="education"
              id="check9"
              value="Bachelors"
              defaultChecked={checkHandler("education", "Bachelors")}
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
              name="education"
              id="check10"
              value="Masters"
              defaultChecked={checkHandler("education", "Masters")}
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
              name="education"
              id="check11"
              value="Phd"
              defaultChecked={checkHandler("education", "Phd")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check11">
              Phd
            </label>
          </div>

        </div>
      </div>
      <hr />

      {/* Experience Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleExperience}>
          {isExperienceOpen ? (
            <span> - Experience </span>
          ) : (
            <span> + Experience </span>
          )}

        </h5>

        <div className={`collapse${isExperienceOpen ? " show" : ""} mb-2`}>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="experience"
              id="check12"
              value="No Experience"
              defaultChecked={checkHandler("experience", "No Experience")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check12">
              No Experience
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="experience"
              id="check13"
              value="1 Years"
              defaultChecked={checkHandler("experience", "1 Years")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check13">
              1 Years
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="experience"
              id="check14"
              value="2 Years"
              defaultChecked={checkHandler("experience", "2 Years")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check14">
              2 Years
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="experience"
              id="check15"
              value="3 Years above"
              defaultChecked={checkHandler("experience", "3 Years above")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check15">
              3 Year+
            </label>
          </div>
        </div>
      </div>
      <hr />

      {/* Industry Section */}
      <div className="filter-section">
        <h5 className="filter-heading mb-3" onClick={toggleIndustry}>
          {isIndustryOpen ? (
            <span> - Industry</span>
          ) : (
            <span> + Industry</span>
          )}

        </h5>

        <div className={`collapse${isIndustryOpen ? " show" : ""} mb-2`}>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check16"
              value="Business"
              defaultChecked={checkHandler("industry", "Business")}
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
              name="industry"
              id="check17"
              value="Information Technology"
              defaultChecked={checkHandler("industry", "Information Technology")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check17">
              IT
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check18"
              value="Banking"
              defaultChecked={checkHandler("industry", "Banking")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check18">
              Banking
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check19"
              value="Education"
              defaultChecked={checkHandler("industry", "Education")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check19">
              Education
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check20"
              value="Transportation"
              defaultChecked={checkHandler("industry", "Transportation")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check20">
              Transportation
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check21"
              value="Health"
              defaultChecked={checkHandler("industry", "Health")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check21">
              Health
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check22"
              value="Engineering"
              defaultChecked={checkHandler("industry", "Engineering")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check22">
              Engineering
            </label>
          </div>

          <div className="form-check list-group-item px-5">
            <input
              className="form-check-input"
              type="checkbox"
              name="industry"
              id="check23"
              value="Construction"
              defaultChecked={checkHandler("industry", "Construction")}
              onClick={(e) => handleClick(e.target)}
            />
            <label className="form-check-label" htmlFor="check23">
              Construction
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

export default Filters_2







