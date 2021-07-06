import Image from "next/image"
const Author = ({author})=>{
    return(
        <div className="d-flex align-items-center ml-2" style={{marginTop: -10}}>
        {author.profile_image ?
          <img className="rounded-circle" alt={author.name} src={author.profile_image} height="40" width="40" />: null
        }
        <p className="mb-0 ml-2" key={author.id}>autor: {author.name}</p>
      </div>
    )
}

export default Author