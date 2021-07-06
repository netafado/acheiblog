import Author from "../author"
function IndexHeader({post}) {
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
                <div className="d-flex text-white justify-content-center">
                  {
                    post.authors &&
                    post.authors.map( author =>{
                      return(
                        <Author key={author.id} author={author}/>
                      )
                    } )
                  }
                </div>

              </div>
              
            </div>

    
        </div>

      </div>
    </>
  );
}



export default IndexHeader;