import Author           from "../author"
import Image            from "next/image"
import Link             from "next/link"
import {Label, Badge}   from "reactstrap"
import Labels           from "./labels"
const PostItem = ({post})=>{
    const data = new Intl.DateTimeFormat('pt', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(post.published_at))
    return(
        <>
        <div className="title">
            <div>
            <h4 className="bold mb-0 text-truncate"><Link  href={`/${post.slug}`}>{post.title}</Link></h4>
                <Label className="text-muted">{data}</Label>
            </div>
        </div>
        <div className="position-relative mb-3 imageBgContainer">
            <div className="bg-image"></div>
            <div className="imageBg" style={{backgroundImage: `url(${post.feature_image})`}}></div>
            {
                post.feature_image &&  
                <div className="w-100 position-relative">

                </div>
            }
            <div className="author-wrapper">
                    {
                    post.authors.map( author =>{
                        return(
                            <Author key={author.id} author={author}/>
                        )
                    } )
                    }
            </div>
            <Labels tags={post.tags}/>


        </div>

        <p className="post-text text-black-50">{post.custom_excerpt}</p>
        <div>
            <Link href={`/${post.slug}`}>
            <a className="btn btn-round text-center btn-primary">Saiba mais <i className="mdi mdi-arrow-right" /></a>
            </Link>
        </div>
        <hr />
        </>
    )
}

export default PostItem