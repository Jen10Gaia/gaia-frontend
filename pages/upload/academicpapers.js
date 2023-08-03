import Layout from "../../components/layout/Layout";
import UploadAcademicPapers from "../../components/user/UploadAcademicPapers";

import { isAuthenticatedUser } from "../../utils/isAuthenticated";

export default function UploadAcademicPapersPage({ access_token }) {
  return (
    <Layout title="Upload Your academic papers">
      <UploadAcademicPapers access_token={access_token} />
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



