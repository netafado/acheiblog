import React from "react";
import Layout from "../src/components/layout"
import BannerTopo from "../src/components/banner/topo"
import {prepararTela} from "../uteis/index"
import LoadingPage from "../src/components/loader/page"
import {getSinglePost, getPosts} from "../src/api"
import { Card, CardBody, Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap"
import  Link from "next/link"
function Single(props) {
  const {post} = props
  React.useEffect(() => {
    prepararTela();


  }, []);
  return (
      <Layout >
        <LoadingPage loading={false}/>
        <BannerTopo post={props.post}/>
        <Container className="container" style={{marginTop: -30, zIndex: 9, position: "relative"}}>
          <Row className="justify-content-center">
            <Col sm="12" md="10">
              <Card>
                <CardBody>
                <Breadcrumb>
                  <BreadcrumbItem><Link href="/">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{post.title}</BreadcrumbItem>
                </Breadcrumb>
                 <h1>{props.post.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: props.post.html }} />     
              </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
    revalidate: 40
  }
}

export default Single;
