import React from "react";
import Link from "next/link";

import moment from "moment";

const SchoolItem = ({ school }) => {
  return (
    <Link className="" href={`/browse-student-visa-scholarships/${school.id}`} >
      <div className="job-listing ">
        <div className="job-listing-details">
          <div className="job-listing-description">
            <h4 className="job-listing-company">{school.company}</h4>
            <h3 className="job-listing-title">{school.title}</h3>
            <p className="job-listing-text">
              {school.description.substring(0, 200)}...
            </p>
          </div>

          <span className="bookmark-icon"></span>
        </div>

        <div className="job-listing-footer">
          <ul>
            <li>
              <i aria-hidden className="fas fa-industry"></i> {school.course}
            </li>

            <li>
              <i aria-hidden className="fas fa-briefcase"></i> {school.scholarshipType}
            </li>
            <li>
              <i aria-hidden className="fas fa-bed"></i> {school.accomodation}
            </li>
            <li>
              <i aria-hidden className="fas fa-money-check-alt"></i>$
              {school.price}
            </li>
            <li>
              <i aria-hidden className="far fa-clock"></i>
              {moment.utc(school.createdAt).local().startOf("seconds").fromNow()}
            </li>
          </ul>
        </div>
      </div>


    </Link>
  );
};

export default SchoolItem;
