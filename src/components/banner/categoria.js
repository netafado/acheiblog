import Author from "../author"
import { Badge } from "reactstrap"
function IndexHeader({tag}) {

  console.log(tag)
  return (
    <>
      <div className="clear-filter post-single" >
        <div
          className="top-image position-relative" style={{
            backgroundImage: `url(${tag.feature_image})`,
          }} >
          <div className="bg-image"></div>
            <div className="align-items-center justify-content-center h-100 d-flex position-absolute w-100">
              <div className="content-post">
              <p className="text-center mb-0 text-white text-italic">
                  Categoria:
                </p>
              <h1 className="text-center bold text-white">{tag.name}</h1>
                <div className="d-flex text-white justify-content-center">
                  {
                    tag.authors &&
                    tag.authors.map( author =>{
                      return(
                        <Author key={author.id} author={author}/>
                      )
                    } )
                  }
                <p className="text-center mb-0">
                  <Badge>Quantidade pe publicações: {tag.count.posts}</Badge>
                </p>
                </div>
              </div>
              
            </div>

    
        </div>

      </div>
    </>
  );
}



export default IndexHeader;