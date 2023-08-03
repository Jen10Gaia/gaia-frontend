import { LayoutProvider } from './../../../../components/layout/dashboard/layout/context/layoutcontext';
import Layout from './../../../../components/layout/dashboard/layout/layout';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import NotFound from "../../../../components/layout/NotFound";
import User from "../../../../components/user/User";

import { isAuthenticatedUser } from "../../../../utils/isAuthenticated";

import axios from "axios";

export default function UpdateJobPage({ job, access_token, error }) {
  if (error?.includes("Not found")) return <NotFound />;

  return (
    <Layout title="Job Candidates">
      <User job={job} access_token={access_token} />
    </Layout>
  );
}

export async function getServerSideProps({ req, params }) {
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

  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/jobs/${params.id}/`
    );

    const job = res.data.job;

    return {
      props: {
        job,
        access_token,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.response.data.detail,
      },
    };
  }
}
