import React from 'react';

import OverviewCard from "../dashboard/OverviewCard";


const SchoolStats = ({
  schoolsCount,
  schoolOrdersCount,
  schoolNewOrders,
  schoolTotalRevenue,
  schoolPercentIncrease,
  schoolRecentRevenue,
  schoolPaidCandidates
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
        title="Scholarships"
        number={schoolsCount}
        icon="pi pi-user text-blue-500 text-xl"
        // newNumber={1}
        // endText="Newly Added"
        iconBG="bg-blue-100"
      />

      <OverviewCard
        title="Customers Paid"
        number={schoolPaidCandidates}
        icon="pi pi-user text-purple-500 text-xl"
        newNumber={schoolRecentRevenue}
        endText="Out Of"
        iconBG="bg-purple-100"
      />
      <OverviewCard
        title="Orders"
        number={schoolOrdersCount}
        icon="pi pi-shopping-cart text-green-500 text-xl"
        newNumber={schoolNewOrders}
        endText="Since Last visit"
        iconBG="bg-green-100"
      />
      <OverviewCard
        title="Revenue"
        number={schoolTotalRevenue}
        icon="pi pi-map-marker text-orange-500 text-xl"
        newNumber={schoolPercentIncrease}
        endText="since last week"
        newNumberPrefix="%"
        newNumberSuffix="+"
        iconBG="bg-orange-100"
      />

    </div>
  )
}

export default SchoolStats