import Layout from "./../../components/layout/Layout";
import JobHome from "./../../components/JobHome";

import axios from "axios";

export default function Index({ data }) {
  return (
    <Layout title="Work Visa Jobs">
      <JobHome data={data}/>
    </Layout>
  );
}

//For the filters
// Add total cost and other necessary filter
export async function getServerSideProps({ query }) {
  const jobType = query.jobType || "";
  const education = query.education || "";
  const country = query.country || "";
  const experience = query.experience || "";
  const keyword = query.keyword || "";
  const location = query.location || "";
  const price = query.price || ""
  const industry = query.industry || ""
  const page = query.page || 1;

  let min_salary = "";
  let max_salary = "";

  if (query.salary) {
    const [min, max] = query.salary.split("-");
    min_salary = min;
    max_salary = max;
  }

  const queryStr = `keyword=${keyword}&location=${location}&page=${page}&jobType=${jobType}&education=${education}&experience=${experience}&country=${country}&industry=${industry}&min_salary=${min_salary}&max_salary=${max_salary}&price=${price}`;

  const res = await axios.get(`${process.env.API_URL}/api/jobs?${queryStr}`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}