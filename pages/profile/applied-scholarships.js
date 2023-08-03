import axios from "axios";
import Layout from "../../components/layout/Layout";
import SchoolApplied from "../../components/school/SchoolApplied";

import { isAuthenticatedUser } from "../../utils/isAuthenticated";

export default function SchoolsAppliedPage({ schools, access_token }) {
  return (
    <>
      <Layout title="Scholarships and Visas Applied">
        <SchoolApplied schools={schools} access_token={access_token} />
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

  const res = await axios.get(`${process.env.API_URL}/api/me/schools/applied/`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const schools = res.data;

  return {
    props: {
      schools,
      access_token,
    },
  };
}
