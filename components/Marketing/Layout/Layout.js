import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Header from "./Header";
import Footer from "./Footer";
import AuthContext from "../../../context/AuthContext";


const Layout = ({ children, title }) => {
  const {user} = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
