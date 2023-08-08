import { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        


        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossorigin="anonymous"
        /> */}
        {/* <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        /> */}
        <Script src="https://js.paystack.co/v1/inline.js"></Script>


        <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet" />
      </Head>
      <body>
        <NextScript
          src="https://kit.fontawesome.com/9edb65c86a.js"
          crossOrigin="anonymous"
        ></NextScript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}