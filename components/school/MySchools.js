import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";

import SchoolContext from "../../context/SchoolContext";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

const MySchools = ({ schools, access_token }) => {
  const { clearErrors, error, deleted, deleteSchool, setDeleted, positionsLeft } = useContext(SchoolContext);
  const router = useRouter();



  useEffect(() => {

    console.log(positionsLeft);

    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (deleted) {
      setDeleted(false);
      router.push(router.asPath);
    }
  }, [error, deleted]);

  const deleteSchoolHandler = (id,schoolTitle) => {
    if (confirm(`Are you sure you want to delete ${schoolTitle}?`)) {
      deleteSchool(id, access_token);
      text = `You deleted ${schoolTitle}`;
    } else {
      text = "Operation Cancelled";
    } 
  };

  const columns = [
    {
      name: "ID",
      sortable: true,
      selector: (row) => row.id,
      maxWidth: "12rem",
    },
    {
      name: " Title",
      sortable: true,
      selector: (row) => row.title,
      maxWidth: "12rem",
    },  
    {
      name: "Price",
      sortable: true,
      selector: (row) => row.price,
      maxWidth: "2rem",

    },
    {
      name: "Positions",
      sortable: true,
      selector: (row) => row.positions,
      maxWidth: "1rem",
    },
    {
      name: "Action",
      sortable: true,
      selector: (row) => row.action,

    },
  ];

  const data = [];

  schools &&
    schools.forEach((school) => {
      data.push({
        id: school.id,
        title: school.title,
        positions: school.positions,
        price: school.price,
        action: (
          <>
            {positionsLeft <= 0 ? (
              <>

                <Link href={`/schools/${school.id}`}>
                  <div className="btn btn-primary">
                    <i aria-hidden className="fa fa-eye"></i>
                  </div>
                </Link>
                <Link href={`/admin/dashboard/schools/candidates/${school.id}`}>
                  <div className="btn btn-success my-2 mx-1">
                    <i aria-hidden className="fa fa-users"></i>
                  </div>
                </Link>
                <Link href={`/admin/dashboard/schools/${school.id}`}>
                  <div className="btn btn-warning my-2 mx-1">
                    <i aria-hidden className="fa fa-pencil"></i>
                  </div>
                </Link>

                <button
                  className="btn btn-danger mx-1"
                  onClick={() => deleteSchoolHandler(school.id, school.title)}
                >
                  <i className="fa fa-trash"></i>
                </button>

              </>
            ) : (
              <button
                className="btn btn-secondary mx-1"
                disabled
              >
                All Applicants Approved
              </button>
            )}

          </>
        ),
      });
    });

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10 mt-5">
        <h4 className="my-5">My Scholarhips & Visas </h4>
        <DataTable columns={columns} data={data} pagination responsive />
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default MySchools;
