import Author from "../author"
function IndexHeader({post}) {
  const data = new Intl.DateTimeFormat('pt', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(post.published_at))

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
                <ul className="list-unstyled text-white justify-content-center d-flex">
                  <li className="mr-3">
                  <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>{data} </li>
                  <li> <i className="now-ui-icons education_paper"></i> tempo de leitura: {post.reading_time}min</li>

                </ul>
              </div>
              
            </div>

    
        </div>

      </div>
    </>
  );
}



export default IndexHeader;