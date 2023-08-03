import axios from "axios";

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Layout from "../../../../../components/layout/dashboard/layout/layout";
import NotFound from "../../../../../components/layout/NotFound";
import SchoolCandidates from "../../../../../components/school/SchoolCandidates";

import { isAuthenticatedUser } from "../../../../../utils/isAuthenticated";


export default function SchoolCandidatesPage({ candidatesApplied, access_token, error }) {
  if (error?.includes("Not found")) return <NotFound />;
  return (
    <Layout title="School Candidates">
      <SchoolCandidates candidatesApplied={candidatesApplied} access_token={access_token}/>
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
      `${process.env.API_URL}/api/schools/${params.id}/candidates/`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    
    const candidatesApplied = res.data;
    
    return {
      props: {
        candidatesApplied,
        access_token,
      },
    };
  } catch (error) {
    return {
      props: {
        // error: error.response.data.detail,
        error: null,
      },
    };
  }
}
