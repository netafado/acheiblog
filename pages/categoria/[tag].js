import React from "react";
import Layout from "../../src/components/layout"
import {prepararTela} from "../../uteis/index"
import LoadingPage from "../../src/components/loader/page"
import {getTag, getTags, getPostsByTag} from "../../src/api"
import {  Row, Col, Breadcrumb } from "reactstrap"
import Head     from "next/head"
import Banner   from "../../src/components/banner/categoria"
import Metatags from "../../src/components/metatags";
import PostItem from "../../src/components/post/postList";
import Content  from "../../src/components/layout/content";
import "../../amplifyconfig"
import { useRouter } from 'next/router'
function Single(props) {
  const {tag, posts} = props
  const router = useRouter()

  React.useEffect(() => {
    prepararTela();
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  
  return (
      <Layout >
        <Head>
          <Metatags title={tag.name} og_image={tag.og_image} description={tag.description} feature_image={tag.feature_image}  /> 
        </Head>
        
        <LoadingPage loading={false}/>
        <Banner tag={tag}/>

        <Content>
            <Breadcrumb>
              <p>{tag.description}</p>
            </Breadcrumb>

                <Row>
                  {
                    posts.map( (post)=>{
                        return(
                          <Col sm="6" lg="12"  key={post.id} className="post" >
                            <PostItem post={post} />
                          </Col>
                        )
                    }) 
                  }
              </Row>
        </Content>
      </Layout>
  );
}

export async function getStaticPaths() {
  const result = await getTags()
  const paths = result.map((post) => ({
    params: { tag: post.slug },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps(context) {
  const tag = await getTag(context.params.tag)
  const posts = await(getPostsByTag(tag.slug))
  if (!tag) {
    return {
      notFound: true,
    }
  }
  return {
    props: { tag, posts },
    revalidate: 1
  }
}

export default Single;
