import React        from "react";
import Layout       from "../src/components/layout"
import BannerTopo   from "../src/components/banner"
import LoadingPage  from "../src/components/loader/page"
import {getPosts, getTags, getSettings}   from "../src/api"

import { Col, Row, Container, Card, CardBody } from "reactstrap";
import PostItem from "../src/components/post/postList"
import Categoria from "../src/components/post/categorias"
import Metatags from "../src/components/metatags"
import "../amplifyconfig"
function Index({ posts, categorias, settings }) {
  const [loading, setLoading] = React.useState(false)

  return (
      <Layout >
        <Metatags title={settings.title} og_image={settings.og_image} description={settings.description} og_description={settings.description} />
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
  const settings = await getSettings()
  return {
    props: { posts, categorias, settings },
    revalidate: 5
  }
}


export default Index;
