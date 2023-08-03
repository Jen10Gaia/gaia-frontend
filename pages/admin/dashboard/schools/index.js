import MySchools from "./../../../../components/school/MySchools";

import { LayoutProvider } from './../../../../components/layout/dashboard/layout/context/layoutcontext';
import Layout from './../../../../components/layout/dashboard/layout/layout';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { isAuthenticatedUser } from "./../../../../utils/isAuthenticated";
import axios from "axios";

export default function MySchoolsPage({ schools, access_token }) {
  return (
    <Layout title="My Schools">
      <MySchools schools={schools} access_token={access_token} />
    </Layout>
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

  const res = await axios.get(`${process.env.API_URL}/api/me/schools/`, {
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
