import "./BlogCard.scss"
import getAssetUrl from "@/utils/getAssetUrl"

const BlogCard = (props) => {

   const {
      slug,
      image = {},
      title,
      description,
   } = props

   return (
      <article className="blog-card">
         <a
            href={`/blog/${slug}`}
            className="blog-card__link"
         >
            <div className="blog-card__image">
               <img
                  src={getAssetUrl(image.src)}
                  alt={image.alt}
               />
            </div>

            <div className="blog-card__info">
               <h3>{title}</h3>
               <p>{description}</p>
            </div>
         </a>
      </article>
   )
}

export default BlogCard