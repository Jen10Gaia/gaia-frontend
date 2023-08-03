import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";

import DataTable from "react-data-table-component";

import SchoolContext from "../../context/SchoolContext";

const SchoolsApplied = ({ schools, access_token }) => {
  const { clearErrors, error,  paid } = useContext(SchoolContext);

  // const router = useRouter();
  useEffect(() => {

    if (error) {
      toast.error(error);
      clearErrors();
    }

  }, [error, paid]);

  
  // Function to handle payment process
  const payWithPaystack = (id, amount, email) => {
    const handler = window.PaystackPop.setup({
      key: 'pk_live_2e2d2a60617f46c811cc169d54fd283350191382', // Replace with your public key
      email: email,
      amount: amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
      currency: 'KES', // Use GHS for Ghana Cedis or USD for US Dollars
      callback: function (response) {
        // This happens after the payment is completed successfully
        candidateHasPaidHandler(id)
        const successMsg = "Payment complete!"
        toast.success(successMsg)

        //router.push("/");
      },
      onClose: function () {
        const CancelledMsg = "Payment Cancelled"
        toast.warn(CancelledMsg)
      },
    });

    handler.openIframe();
  };

  // Example usage: Call payWithPaystack with the required data from your database
  const handlePayment = (id, price, userEmail) => {
    let schoolId = id;
    let amount = price; // Replace with the actual amount from your database
    let emailfromDB = userEmail; // Replace with the actual email from your database

    payWithPaystack(schoolId,amount, emailfromDB);

  };


  const candidateHasPaidHandler = (id) => {
    candidateHasPaid(id, access_token);
  };


  const columns = [
    {
      name: "School name",
      sortable: true,
      selector: (row) => row.title,
    },
    {
      name: "Scholarship Type",
      sortable: true,
      selector: (row) => row.scholarshipType,
    },
    {
      name: "Price",
      sortable: true,
      selector: (row) => row.price,
    },
    {
      name: "Applied On",
      sortable: true,
      selector: (row) => row.appliedOn,
    },
    {
      name: "Status",
      sortable: true,
      selector: (row) => row.status,
    },
    {
      name: "Action",
      sortable: true,
      selector: (row) => row.action,
    },
  ];

  const data = [];

  schools &&
    schools.forEach((item) => {
      data.push({
        title: item.school.title,
        scholarshipType: item.school.scholarshipType,
        price: item.school.price,
        appliedOn: item.appliedAt.substring(0, 10),
        status: item.status,
        action: (
          <>
            {item.approved && (
              <button
                className={`btn btn-success mr-1 ${paid ? 'disabled' : ''}`}
                onClick={() => handlePayment(item.id, item.school.price, item.user_email)}
                disabled={paid}
              >
                <i className="fa fa-money"></i>
              </button>
            )}
            
            <Link className="btn btn-info" href={`/browse-student-visa-scholarships/${item.school.id}`}>
              <i aria-hidden className="fa fa-eye"></i>
            </Link>

          </>

        ),
      });
    });

  return (
    <>
      <div className="row">
        <div className="col-1"> </div>
        <div className="col-10 mt-5">
          <h4 className="my-4">Scholarhip Visas Applied</h4>
          <DataTable columns={columns} data={data} pagination responsive />
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default SchoolsApplied;
