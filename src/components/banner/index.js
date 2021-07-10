

/*eslint-disable*/
import React, {useRef, useEffect} from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import lottie from "lottie-web"
import animation from "/assets/json/bussiness.json"
import { motion } from 'framer-motion';
const imageVariants = {
  exit: { y: -150, opacity: 0, transition: { duration: 3.5 } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};
const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

function IndexHeader() {
  const container = useRef(null)
  console.log("index")

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
                    <motion.div variants={postVariants}>
                      <h1 className="text-primary bold title">Central de boas ideias Achei Fornecedor.</h1>
                      <p className="text-black-50">Informações relevantes para impulsionar seu negócio</p>
                    </motion.div>
                </Col>


              <Col lg={8} xl={8} className="align-self-center order-lg-2 order-1">
                <motion.div  variants={imageVariants} ref={container}></motion.div>
              </Col>
            </Row>
          </Container>        
        </div>

      </div>
    </>
  );
}



export default IndexHeader;
