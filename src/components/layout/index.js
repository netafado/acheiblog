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
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-3HJSRVT06E`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-3HJSRVT06E');
          `,
            }}
          />
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
