import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

import OverviewCard from "../dashboard/OverviewCard";


const JobStats = ({
  jobsCount,
  ordersCount,
  newOrders,
  totalRevenue,
  percentIncrease,
  jobsPaidCandidates
}) => {



  return (
    <div className="grid">
      {/* <OverviewCard 
        title="Title"
        number={24}
        icon="pi pi-shopping-cart text-blue-500 text-xl"
        newNumber={30}
        endText="since last visit"
        newNumberPrefix="%"
        newNumberSuffix="+"
        iconBG="bg-blue-100"
      /> */}

      <OverviewCard
        title="Jobs"
        number={jobsCount}
        icon="pi pi-user text-blue-500 text-xl"
        // newNumber={1}
        // endText="Newly Added"
        iconBG="bg-blue-100"
      />

      <OverviewCard
        title="Customers Paid"
        number={jobsPaidCandidates}
        icon="pi pi-user text-purple-500 text-xl"
        endText="Out Of"
        iconBG="bg-purple-100"
      />
      <OverviewCard
        title="Orders"
        number={ordersCount}
        icon="pi pi-shopping-cart text-green-500 text-xl"
        newNumber={newOrders}
        endText="Since Last visit"
        iconBG="bg-green-100"
      />
      <OverviewCard
        title="Revenue"
        number={totalRevenue}
        icon="pi pi-map-marker text-orange-500 text-xl"
        newNumber={percentIncrease}
        endText="since last week"
        newNumberPrefix="%"
        newNumberSuffix="+"
        iconBG="bg-orange-100"
      />

    </div>
  )
}

export default JobStats