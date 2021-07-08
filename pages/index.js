import React        from "react";
import Layout       from "../src/components/layout"
import BannerTopo   from "../src/components/banner"
import LoadingPage  from "../src/components/loader/page"
import {getPosts}   from "../src/api"

import { Col, Row, Container, Card, CardBody } from "reactstrap";
import PostItem from "../src/components/post/postList"

function Index({posts}) {
  const [loading, setLoading] = React.useState(false)
  return (
      <Layout >
        <LoadingPage loading={loading}/>
        <BannerTopo />
        <Container fluid style={{marginTop: -70}}>
          <Row className="justify-content-center">
            <Col lg="9">
              <Card className="card pd-2">
                <CardBody>
                  <Row>
                      {
                        posts.map( (post)=>{
                            console.log(post)
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
          </Row>
      </Container>
      </Layout>
  );
}


export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 30
  }
}


export default Index;
