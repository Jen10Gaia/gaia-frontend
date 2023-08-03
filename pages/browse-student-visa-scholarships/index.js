import Layout from "./../../components/layout/Layout";
import SchoolHome from "./../../components/SchoolHome";

import axios from "axios";

export default function Index({ data }) {
  return (
    <Layout title="School Visas & Scholarships">
      <SchoolHome data={data}/>
    </Layout>
  );
}

//For the filters
export async function getServerSideProps({ query }) {
  const scholarshipType = query.scholarshipType || "";
  const accomodation = query.accomodation || "";
  const country = query.country || "";
  const educationLevel = query.educationLevel || "";
  const keyword = query.keyword || "";
  const location = query.location || "";
  const course = query.course || ""
  const page = query.page || 1;


  const queryStr = `keyword=${keyword}&location=${location}&page=${page}&scholarshipType=${scholarshipType}&educationLevel=${educationLevel}&accomodation=${accomodation}&country=${country}&course=${course}`;

  const res = await axios.get(`${process.env.API_URL}/api/schools?${queryStr}`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}