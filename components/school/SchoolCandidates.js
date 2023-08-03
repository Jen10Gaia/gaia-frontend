import React, { useEffect, useContext } from "react";
import { toast } from "react-toastify";

import Link from "next/link";
import DataTable from "react-data-table-component";

import SchoolContext from "../../context/SchoolContext";


const SchoolCandidates = ({ candidatesApplied, access_token }) => {
  const { clearErrors, error, loading, approveApplication, setApproved, approved,  positionsLeft } = useContext(SchoolContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (approved) {
      toast.success('Candidate Approved');
      setApproved(false)
    }


  }, [error,approveApplication]);


  const approveApplicationHandler = (id) => {
    approveApplication(id, access_token);
  };
  const columns = [
    {
      name: "School Name",
      sortable: true,
      selector: (row) => row.title,
    },
    {
      name: "Application ID",
      sortable: true,
      selector: (row) => row.id,
      maxWidth: "12rem"
    },
    {
      name: "User Email",
      sortable: true,
      selector: (row) => row.email,
    },
    {
      name: "Price",
      sortable: true,
      selector: (row) => row.price,
      maxWidth: "6rem"
    },

    {
      name: "Candidate Resume",
      sortable: true,
      selector: (row) => row.resume,
    },
    {
      name: "Candidate Bank Statements",
      sortable: true,
      selector: (row) => row.bankStatements,
    },
    {
      name: "Academic Papers",
      sortable: true,
      selector: (row) => row.academicPapers,
    },
    {
      name: "Applied At",
      sortable: true,
      selector: (row) => row.appliedAt,
    },
    {
      name: "Deadline",
      sortable: true,
      selector: (row) => row.lastDate,
    },
    {
      name: "Status",
      sortable: true,
      selector: (row) => row.status,
      maxWidth: "6rem"
    },
    {
      name: "Action",
      sortable: true,
      selector: (row) => row.action,
    },
  ];

  const data = [];

  candidatesApplied &&
    candidatesApplied.forEach((item) => {
      data.push({
        title: item.school.title,
        id: item.id,
        email: item.user_email,
        price: item.school.price,
        lastDate: item.school.lastDate.substring(0, 10),
        status: item.status,
        resume: (
          <>
            <Link
              href={`https://jobbee.s3.amazonaws.com/${item.resume}`}
              rel="noreferrer"
              target="_blank"
            >
              <div className="text-success text-center ml-4">
                <b>
                  <i aria-hidden className="fas fa-download"></i> View Resume
                </b>
              </div>
            </Link>

          </>

        ),
        academicPapers: (
          <>
            <Link href={`https://jobbee.s3.amazonaws.com/${item.academicPapers}`}
              rel="noreferrer"
              target="_blank"
            >
              <div className="text-success text-center ml-4">
                <b>
                  <i aria-hidden className="fas fa-download"></i> View Academic Papers
                </b>
              </div>
            </Link>
          </>
        ),
        bankStatements: (
          <>

            <Link href={`https://jobbee.s3.amazonaws.com/${item.bankStatements}`}
              rel="noreferrer"
              target="_blank"
            >
              <div
                className="text-success text-center ml-4"

              >
                <b>
                  <i aria-hidden className="fas fa-download"></i> View Bank Statements
                </b>
              </div>
            </Link>
          </>

        ),
        action: (
          <>
            {positionsLeft < item.school.positions & !item.approved & !item.rejected ? (
              <button
                className="btn btn-success mx-1"
                onClick={() => approveApplicationHandler(item.id)}
              >
                <i className="fa fa-check"></i>
              </button>

            ) : item.rejected ? (
              <button
                disabled
                className="btn btn-danger mx-1"
              >
                <i className="fa fa-close"></i>

              </button>
            ) : (
              <button
                disabled
                className="btn btn-secondary mx-1"
              >
                <i className="fa fa-check"></i>

              </button>
            )}
          </>
        ),
        appliedAt: item.appliedAt.substring(0, 10),
      });
    });

  // if (loading) {
  //   return <><div>Loading...</div></>
  // }

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10 mt-5">
        <h4 className="my-5">
          {candidatesApplied &&
            `${candidatesApplied.length} Candidates applied to this Scholarship`}
        </h4>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <DataTable columns={columns} data={data} pagination responsive />
        )}
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default SchoolCandidates;
