import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import './../styles/layout/layout.scss';
import "react-toastify/dist/ReactToastify.css";


import { LayoutProvider } from './../components/layout/dashboard/layout/context/layoutcontext'
import { AuthProvider } from "./../context/AuthContext";
import { JobProvider } from "./../context/JobContext";
import { SchoolProvider } from "./../context/SchoolContext";

import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    import("bootstrap/dist/js/bootstrap");
  }, [])

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <AuthProvider>
          <LayoutProvider>
            <JobProvider>
              <SchoolProvider>
                <Component {...pageProps} />
              </SchoolProvider>
            </JobProvider>
          </LayoutProvider>
        </AuthProvider>
      </>
    )
  }



}

export default MyApp