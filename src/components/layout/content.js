import { Card, CardBody, Container, Row, Col } from "reactstrap"

const Content = ({children})=>
    <Container className="container" style={{marginTop: -30, zIndex: 9, position: "relative"}}>
    <Row className="justify-content-center">
      <Col sm="12" md="10">
        <Card>
          <CardBody>
                {children}
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>


export default Content