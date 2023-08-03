import axios from "axios";
import Layout from "../../components/layout/Layout";
import JobsApplied from "../../components/job/JobApplied";

import { isAuthenticatedUser } from "../../utils/isAuthenticated";

export default function JobsAppliedPage({ jobs, access_token }) {
  return (
    <>
      <Layout title="Work Visa Jobs Applied">
        <JobsApplied jobs={jobs} access_token={access_token} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${process.env.API_URL}/api/me/jobs/applied/`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const jobs = res.data;

  return {
    props: {
      jobs,
      access_token,
    },
  };
}
