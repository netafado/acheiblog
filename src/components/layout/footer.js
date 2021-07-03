

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
function DarkFooter() {
  return (
    <footer className=" bg-white pt-4">
      <Container>
        <Row>
          <Col className="align-self-center text-center">
            <Image className="m-auto" src={"/assets/img/logo@2x.png"} width={120} height={58}/>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mb-2">
            <a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/Achei-Fornecedor-113737716707790/"><Image width={25} height={25} src={"/assets/img/facebook.svg"} className="m-1" alt="Facebook" /></a>
            <a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/company/acheifornecedor"><Image width={25} height={25} src={"/assets/img/linkdin.svg"} className="m-1"  alt="Linkdin" /></a>
            <a target="_blank" rel='noreferrer noopener' href="https://www.instagram.com/acheifornecedor/?igshid=bpakap0k1iae"><Image width={25} height={25} src={"/assets/img/instagram.svg"} className="m-1" alt="Instagram" /></a>
        </Row>
        <Row>

          <div className="copyright text-center m-auto text-black-50" id="copyright">
            <p className="mb-0">
            <small>2021 © Todos os direitos reservados ACHEI FORNECEDOR PORTAL DE SERVIÇOS B2B LTDA.  CNPJ 40.341.475/0001-66</small>

            </p>
            <small>
            design por {" "}
            <a 
              href="https://isaiasfrancisco.com.br"
              target="_blank"
              rel='noreferrer noopener'
              className="text-black-50"
            >
              🥓
              </a>
            </small>
            .
          </div>
        </Row>

      </Container>
    </footer>
  );
}

export default DarkFooter;
