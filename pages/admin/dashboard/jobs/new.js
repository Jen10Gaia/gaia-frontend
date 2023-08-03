import NewJob from "../../../../components/job/NewJob";

import { LayoutProvider } from './../../../../components/layout/dashboard/layout/context/layoutcontext';
import Layout from './../../../../components/layout/dashboard/layout/layout';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { isAuthenticatedUser } from "../../../../utils/isAuthenticated";

export default function NewJobPage({ access_token }) {
  return (
    <Layout title="Post a new Job">
      <NewJob access_token={access_token} />
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

  return {
    props: {
      access_token,
    },
  };
}
