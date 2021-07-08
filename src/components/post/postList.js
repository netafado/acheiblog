import Author           from "../author"
import Image            from "next/image"
import Link             from "next/link"
import {Label, Badge}   from "reactstrap"

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
        <div className="position-relative mb-3">
            <div className="bg-image"></div>
            {
                post.feature_image &&  <img src={post.feature_image}  alt="" width="1353" height="822" className="img-thumbnail"  layout='responsive' />
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
                post.authors.map( author =>{
                    return(
                        <Author key={author.id} author={author}/>
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
        </>
    )
}

export default PostItem