import axios from "axios";
import React, {  useEffect, useState } from "react";


// import JobItem from "./job/JobItem";
// import Filters from "./layout/Filters";
import OverviewCard from "./dashboard/OverviewCard";
import PaidCandidates from "./job/PaidCandidates";
import JobStats from "./job/JobStats";
import SchoolStats from "./school/SchoolStats";

const DashboardHome = ({ access_token }) => {

  // General Stats State Values
  const [userCount, setUserCount] = useState(0);
  const [newUsers, setNewUsers] = useState(0);

  // Job Stats State Values
  const [jobsCount, setJobsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [newOrders, setNewOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [recentRevenue, setRecentRevenue] = useState(0);
  const [percentIncrease, setPercentIncrease] = useState(0);
  const [jobsPaidCandidates, setJobsPaidCandidates] = useState(0);

  // School Stats State Values
  const [schoolsCount, setSchoolsCount] = useState(0);
  const [schoolOrdersCount, setSchoolOrdersCount] = useState(0);
  const [schoolNewOrders, setSchoolNewOrders] = useState(0);
  const [schoolTotalRevenue, setSchoolTotalRevenue] = useState(0);
  const [schoolPercentIncrease, setSchoolPercentIncrease] = useState(0);
  const [schoolRecentRevenue, setSchoolRecentRevenue] = useState(0);
  const [schoolPaidCandidates, setSchoolPaidCandidates] = useState(0);


  // Computed Variables
  let overallTotalRevenue = totalRevenue + schoolTotalRevenue
  let overallPercentIncrease = percentIncrease + schoolPercentIncrease
  let paidCandidates = jobsPaidCandidates + schoolPaidCandidates

  useEffect(() => {
    GeneralStatsApiCalls();
    JobsStatsApiCalls();
    SchoolStatsApiCalls();



  }, []);

  function GeneralStatsApiCalls() {
    // User Count API Call
    axios.get(`${process.env.API_URL}/api/admin/dashboard/users`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then(response => {
        setUserCount(response.data.userCount);
        // setUsers(response.data.users);
        setNewUsers(response.data.newUsers);
      }).catch(error => console.error(error));


  }

  function JobsStatsApiCalls() {
    // Job count API Call
    axios.get(
      `${process.env.API_URL}/api/jobs`
    ).then(response => {
      setJobsCount(response.data.count)
    })


    // Job Revenue API Calls
    axios.get(`${process.env.API_URL}/api/admin/dashboard/revenue`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    ).then(response => {
      setTotalRevenue(response.data.totalRevenue);
      setRecentRevenue(response.data.recentRevenue);
      setPercentIncrease(response.data.percentIncrease);
    }).catch(error => console.error(error));



    // Job Orders API Calls
    axios.get(`${process.env.API_URL}/api/admin/dashboard/orders`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    ).then(response => {
      setJobsPaidCandidates(response.data.paidCandidates);
      setOrdersCount(response.data.ordersCount);
      setNewOrders(response.data.newUsers);
    })
      .catch(error => console.error(error));



  }

  function SchoolStatsApiCalls() {

    // School Count Api Call
    axios.get(
      `${process.env.API_URL}/api/schools`
    ).then(response => {
      setSchoolsCount(response.data.count)
    })


    // School Revenue API Call
    axios.get(`${process.env.API_URL}/api/schools/admin/dashboard/revenue`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then(response => {
        setSchoolTotalRevenue(response.data.totalRevenue);
        setSchoolPercentIncrease(response.data.percentIncrease);
        setSchoolRecentRevenue(response.data.recentRevenue);
      }).catch(error => console.error(error));

    // School Orders API Calls
    axios.get(`${process.env.API_URL}/api/schools/admin/dashboard/orders`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    ).then(response => {
      setSchoolPaidCandidates(response.data.paidCandidates);
      setSchoolOrdersCount(response.data.ordersCount);
      setSchoolNewOrders(response.data.newUsers);
    })
      .catch(error => console.error(error));



  }




  return (
    <>
      <h3>OVERALL</h3>
      <div className="grid">

        <OverviewCard
          title="Customers"
          number={userCount}
          icon="pi pi-user text-blue-500 text-xl"
          newNumber={newUsers}
          endText="Newly Registered"
          iconBG="bg-blue-100"
        />
        <OverviewCard
          title="Total Revenue"
          number={overallTotalRevenue}
          icon="pi pi-map-marker text-orange-500 text-xl"
          newNumber={overallPercentIncrease}
          endText="since last week"
          newNumberPrefix="%"
          newNumberSuffix="+"
          iconBG="bg-orange-100"
        />
        <hr />
      </div>

      <h3>JOB STATS</h3>
      <JobStats
        jobsCount={jobsCount}
        ordersCount={ordersCount}
        newOrders={newOrders}
        totalRevenue={totalRevenue}
        recentRevenue={recentRevenue}
        percentIncrease={percentIncrease}
        jobsPaidCandidates={ordersCount}

      />
      <hr />

      <h3>SCHOLARSHIP STATS</h3>
      <SchoolStats 
        schoolsCount={schoolsCount}
        schoolOrdersCount={schoolOrdersCount}
        schoolNewOrders={schoolNewOrders}
        schoolTotalRevenue={schoolTotalRevenue}
        schoolPercentIncrease={schoolPercentIncrease}
        schoolRecentRevenue={schoolRecentRevenue}
        schoolPaidCandidates={schoolOrdersCount}
      />
      <hr />

      <h3>PAID CANDIDATES</h3>
      <PaidCandidates paidCandidates={paidCandidates} />
    </>

  );
};

export default DashboardHome;
