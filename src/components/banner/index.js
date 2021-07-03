

/*eslint-disable*/
import React, {useRef, useEffect} from "react";
import Link from "next/link"
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import lottie from "lottie-web"
import animation from "/assets/json/bussiness.json"

function IndexHeader() {
  const container = useRef(null)
  useEffect(()=>{
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        autoplay: true,
        animationData: animation
      })
    }, [])
  return (
    <>
      <div className="page-header clear-filter"  style={{
            backgroundImage: "url(assets/img/bg-topo.png)",
          }} >
        <div
          className="page-header-image" >
          <Container fluid>
            <Row className="align-self-center justify-content-center">
              <Col lg={4} xl={3} className="align-self-center order-2 order-lg-1">
                  <h1 className="text-primary bold title">Central de boas ideias Achei Fornecedor.</h1>
                  <p className="text-black-50">Informações relevantes para impulsionar seu negócio</p>
              </Col>
              <Col lg={8} xl={8} className="align-self-center order-lg-2 order-1">
                <div ref={container}></div>
              </Col>
            </Row>
          </Container>        
        </div>

      </div>
    </>
  );
}



export default IndexHeader;
