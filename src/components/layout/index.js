import React from "react";

import Navbar from "./navbar.js";
import Footer from "./footer";
import Head from "next/head"

function Index(props) {


  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
