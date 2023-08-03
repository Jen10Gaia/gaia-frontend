import Layout from "../../components/layout/Layout";
import NotFound from "../../components/layout/NotFound";
import SchoolDetails from "../../components/school/SchoolDetail";

import { isAuthenticatedUser } from "../../utils/isAuthenticated";


import axios from "axios";

export default function SchoolDetailsPage({
  school,
  candidates,
  access_token,
  error,
}) {
  if (error?.includes("Not found")) return <NotFound />;

  return (
    <Layout title={school.title}>
      <SchoolDetails
        school={school}
        candidates={candidates}
        access_token={access_token}
      />
    </Layout>
  );
}

export async function getServerSideProps({ req, params }) {
  try {
    const access_token = req.cookies.access || "";

 
    const user = await isAuthenticatedUser(access_token);

    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const res = await axios.get(
      `${process.env.API_URL}/api/schools/${params.id}/`
    );

    const school = res.data.school;
    const candidates = res.data.candidates;


    return {
      props: {
        school,
        candidates,
        access_token,
      },
    };
  } catch (error) {
    return {
      props: {
        //error: error.response.data.detail,
        error: null
      },
    };
  }
}
