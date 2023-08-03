import React, { useEffect,  useState } from "react";

import axios from "axios";
import DataTable from "react-data-table-component";

const PaidCandidates = () => {
  const [paidCandidates, setPaidCandidates] = useState([]);

  useEffect(() => {

    axios.get(`${process.env.API_URL}/api/admin/dashboard/orders`)
      .then(response => {
        setPaidCandidates(response.data.paidCandidates);

      })
      .catch(error => console.error(error));

  }, []);

  const columns = [
    {
      name: "id",
      sortable: true,
      selector: (row) => row.id,
    },
    {
      name: "First Name",
      sortable: true,
      selector: (row) => row.firstname,
      maxWidth: "3rem",
    },
    {
      name: "Last Name",
      sortable: true,
      selector: (row) => row.lastname,
      maxWidth: "3rem",
    },
    {
      name: "Email",
      sortable: true,
      selector: (row) => row.email,

    },

  ];

  const data = [];

  paidCandidates &&
    paidCandidates.forEach((paidCandidate) => {
      data.push({
        id: paidCandidate.id,
        firstname: paidCandidate.first_name,
        lastname: paidCandidate.last_name,
        email: paidCandidate.email,
        // action: (
        //   <>


        //   </>
        // ),
      });
    });

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10 mt-5">
        {/* <h4 className="my-2">Paid Candidates</h4> */}
        <DataTable columns={columns} data={data} pagination responsive />
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default PaidCandidates