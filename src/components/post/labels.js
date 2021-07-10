import { Badge } from "reactstrap"
import Link from "next/link"
const Labels = ({tags}) =>{
    if(!tags) return null
    return(
        <ul className="list-inline overImage">
        <li className="list-inline-item me-3">
            {
                tags && tags.map( (tag, i) => {return (
                    <Link key={`tag-${i}`} passHref href={ `/categoria/${tag.slug}` }>
                        <Badge color="primary" className="ml-1" key={`tag-${i}`}>{tag.name}</Badge> 
                    </Link>
                )} )
            }
        </li>
    </ul>
)}



export default Labels