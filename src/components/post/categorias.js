
import Link             from "next/link"
import { Badge } from "reactstrap"
const Categoria = ({tag})=>{
    return(
        <Link passHref className="text-white"  href={`/categoria/${tag.slug}`}>
            <div className="position-relative mb-3 text-white border-r">
                <div className="bg-image"></div>
                <div className="imageBg cat-blur" style={{backgroundImage: `url(${tag.feature_image})`}}>

                </div>
                <div className="categoria">
                    <div className="cat">
                        <Badge>Quantidade pe publicações: {tag.count.posts}</Badge>
                        <h4 className="bold mb-0 text-truncate text-white">{tag.name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Categoria