import React from "react";

import Navbar from "./navbar.js";
import Footer from "./footer";


function Index(props) {


  return (
    <div>
      <Navbar/>
      <div className="wrapper">
        <div className="main">
          { props.children }
        </div>
        <Footer />
      </div>

    </div>
  );
}





export default Index;
