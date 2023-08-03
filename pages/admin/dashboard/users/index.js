import axios from "axios";

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { LayoutProvider } from './../../../../components/layout/dashboard/layout/context/layoutcontext';
import Layout from './../../../../components/layout/dashboard/layout/layout';
import UserList from "../../../../components/user/UserList";


export default function Index({ data }) {
  return (
    <Layout>
      <UserList/>
    </Layout>
  );
}

// export async function getServerSideProps({ req }) {
//   const access_token = req.cookies.access;

//   const user = await isAuthenticatedUser(access_token);

//   if (!user) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   const res = await axios.get(`${process.env.API_URL}/api/me/jobs/`, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });

//   const jobs = res.data;

//   return {
//     props: {
//       jobs,
//       access_token,
//     },
//   };
// }
