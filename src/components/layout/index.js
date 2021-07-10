import React from "react";

import Navbar from "./navbar.js";
import Footer from "./footer";
import Head from "next/head"

function Index(props) {


  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossOrigin="anonymous" />


      </Head>
      <Navbar/>
      <div className="wrapper ">
        <div className="main bg-left">
          { props.children }
        </div>
        <Footer />
      </div>

    </div>
  );
}





export default Index;
