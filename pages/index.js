import React        from "react";
import Layout       from "../src/components/layout"
import BannerTopo   from "../src/components/banner"
import LoadingPage  from "../src/components/loader/page"
import {getPosts, getTags}   from "../src/api"

import { Col, Row, Container, Card, CardBody } from "reactstrap";
import PostItem from "../src/components/post/postList"
import Categoria from "../src/components/post/categorias"

function Index({ posts, categorias }) {
  const [loading, setLoading] = React.useState(false)
  return (
      <Layout >
        <LoadingPage loading={loading}/>
        <BannerTopo />
        <Container fluid style={{marginTop: -70}}>
          <Row className="justify-content-center">
            <Col lg="6">
              <Card className="card pd-2">
                <CardBody>
                  <Row>
                      {
                        posts.map( (post)=>{
                            return(
                              <Col sm="6" md="4" lg="6"  key={post.id} className="post" >
                                <PostItem post={post} />
                              </Col>
                            )
                        }) 
                      }
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
            <Card className="card pd-2">
                <CardBody>
                <h4 className="bold mb-0 text-truncate mt-0">Categorias</h4>

                  <Row>
                  {
                        categorias.map( (post)=>{
                            return(
                              <Col sm="12"  key={post.id} className="post" >
                                <Categoria tag={post} />
                              </Col>
                            )
                        }) 
                      }

                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </Container>
      </Layout>
  );
}


export async function getStaticProps() {
  const posts = await getPosts();
  const categorias = await getTags();
  return {
    props: { posts, categorias },
    revalidate: 30
  }
}


export default Index;
