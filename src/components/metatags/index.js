 
 import Head from "next/head"
 const Metatags = ({og_title, url, title, og_description, description, og_image, feature_image})=>{
    return(
        <Head>
            {url ? <meta property="og:url"    content={ `${url}` }/>: null}
            <meta property="og:type"          content="company" />
            <meta property="og:title"         content={og_title  || title} />
            <meta property="og:description"   content={og_description || description} />
            <meta property="og:image"         content={og_image || feature_image} />
            <meta name="description" content={description}/>
            <title>{title}</title> 
        </Head>
    )
}

export default Metatags