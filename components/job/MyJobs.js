import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";

import JobContext from "../../context/JobContext";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

const MyJobs = ({ jobs, access_token }) => {
  const { clearErrors, error, loading, deleted, deleteJob, setDeleted, positionsLeft } = useContext(JobContext);
  const [posLeft, setPosLeft] = useState(3);
  const router = useRouter();

  var text = ""



  useEffect(() => {

    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (deleted) {
      setDeleted(false);
      router.push(router.asPath);
    }
  }, [error, deleted]);

  const deleteJobHandler = (id, jobTitle) => {
    if (confirm(`Are you sure you want to delete ${jobTitle}`)) {
      deleteJob(id, access_token);
      text = `You deleted ${jobTitle}`;
    } else {
      text = "Operation Cancelled";
    } 
    
  };

  const columns = [
    {
      name: "Job ID",
      sortable: true,
      selector: (row) => row.id,
      maxWidth: "6rem",
    },
    {
      name: "Job name",
      sortable: true,
      selector: (row) => row.title,
      maxWidth: "12rem",
    },
    {
      name: "Price",
      sortable: true,
      selector: (row) => row.price,
      maxWidth: "1rem",

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
      maxWidth: "24rem",

    },
  ];

  const data = [];

  jobs &&
    jobs.forEach((job) => {
      data.push({
        id: job.id,
        title: job.title,
        positions: job.positions,
        price: job.price,
        action: (
          <>
            {positionsLeft <= 0 ? (
              <>

                <div>
                  <Link href={`/jobs/${job.id}`}>
                    <div className="btn btn-primary">
                      <i aria-hidden className="fa fa-eye"></i>
                    </div>
                  </Link>
                  <Link href={`/admin/dashboard/jobs/candidates/${job.id}`}>
                    <div className="btn btn-success my-2 mx-1">
                      <i aria-hidden className="fa fa-users"></i>
                    </div>
                  </Link>
                  <Link href={`/admin/dashboard/jobs/${job.id}`}>
                    <div className="btn btn-warning my-2 mx-1">
                      <i aria-hidden className="fa fa-pencil"></i>
                    </div>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteJobHandler(job.id, job.title)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>

                {/* <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteJobHandler(job.id, job.title)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div> */}


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
        <h4 className="my-5">My Work Visa Jobs</h4>
        <DataTable columns={columns} data={data} pagination responsive />
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default MyJobs;
