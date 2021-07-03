import Image from "next/image"
function IndexHeader({post}) {
  console.log(post)
  return (
    <>
      <div className="clear-filter post-single" >
        <div
          className="top-image position-relative" style={{
            backgroundImage: `url(${post.feature_image})`,
          }} >
          <div className="bg-image"></div>
            <div className="align-items-center justify-content-center h-100 d-flex position-absolute w-100">
              <div className="content-post">
              <h1 className="text-center bold text-white">{post.title}</h1>
                {
                  post.authors &&
                  post.authors.map( author =>{
                    return(
                      <div key={author.id} className="d-flex align-items-center ml-2 justify-content-center" style={{marginTop: -10}}>
                        <Image className="rounded-circle thumbnail" alt={author.name} src={author.profile_image} height="40" width="40" />
                        <p className="mb-0 ml-2 text-white" key={author.id}>autor: {author.name}</p>
                      </div>
                    )
                  } )
                }
              </div>
              
            </div>

    
        </div>

      </div>
    </>
  );
}



export default IndexHeader;