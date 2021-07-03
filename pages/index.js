import React from "react";
import Layout from "../src/components/layout"
import BannerTopo from "../src/components/banner"
import LoadingPage from "../src/components/loader/page"
import { Badge, Label } from "reactstrap";
import {getPosts} from "../src/api"
import Link from "next/link"
import { Col, Row, Container, Card, CardBody } from "reactstrap";
import Image from "next/image"
function Index({posts}) {
  const [loading, setLoading] = React.useState(false)
  console.log(posts)
  return (
      <Layout >
        <LoadingPage loading={loading}/>
        <BannerTopo />
        <Container fluid style={{marginTop: -70}}>

        <Row className="justify-content-center">
          <Col lg="9">
            <Card className="card pd-2">
            <CardBody>
                <Row id="all-post">
                    {
                            posts.map( (post)=>{
                                return(
                                  <Col sm="6" md="4" lg="6"  key={post.id} className="post" >
                                    <div className="title-card">
                                        <h4 className="bold mb-0 text-truncate"><Link  href={`/${post.slug}`}>{post.title}</Link></h4>
                                        <Label className="text-muted">{post.dateFormatted}</Label>
                                    </div>
                                    <div className="position-relative mb-3">
                                      <div className="bg-image"></div>
                                      {
                                        post.feature_image &&  <Image src={post.feature_image}  alt="" width="1353" height="822" className="img-thumbnail"  layout='responsive' />

                                      }
                                      <ul className="list-inline overImage">
                                        <li className="list-inline-item me-3">
                                        {
                                          post.tags && post.tags.map( (tag, i) => {return <Badge color="primary" key={`tag-${i}`}>{tag.name}</Badge> } )
                                        }
                                        </li>
                                      </ul>
                                        <div className="author-wrapper">
                                          {
                                            post.authors &&
                                            post.authors.map( author =>{
                                              return(
                                                <div key={author.id} className="d-flex align-items-center ml-2" style={{marginTop: -10}}>
                                                  <Image className="rounded-circle" alt={author.name} src={author.profile_image} height="40" width="40" />
                                                  <p className="mb-0 ml-2" key={author.id}>autor: {author.name}</p>
                                                </div>
                                              )
                                            } )
                                          }
                                        </div>
                                    </div>

                                    <p className="post-text">{post.custom_excerpt}</p>
                                    <div>
                                      <Link href={`/${post.slug}`}>
                                      <a className="btn btn-round text-center btn-primary">Saiba mais <i className="mdi mdi-arrow-right" /></a>
                                      </Link>
                                    </div>
                                    <hr />
                                  </Col>
                                )
                            } ) 
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
    props: { posts }
  }
}


export default Index;
