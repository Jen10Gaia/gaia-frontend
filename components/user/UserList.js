import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";

import JobContext from "../../context/JobContext";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

const UserList = () => {
  const [users, setUsers] = useState([]);
 

  const router = useRouter();


  useEffect(() => {
    axios.get(`${process.env.API_URL}/api/admin/dashboard/users`)
      .then(response => {
        setUsers(response.data.users);
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



  users &&
    users.forEach((user) => {
      data.push({
        id: user.id,
        firstname: user.first_name,
        lastname: user.last_name,
        email: user.email,
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
        <h4 className="my-5">User List</h4>
        <DataTable columns={columns} data={data} pagination responsive />
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default UserList;
