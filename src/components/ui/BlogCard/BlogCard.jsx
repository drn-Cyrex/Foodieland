import "./BlogCard.scss"

const BlogCard = (props) => {

   const {
      imgSrs,
      title = 'title',
      description = 'description',
      author = 'author',
      date = 'date'

   } = props

   return (
      <article>
         <img src={imgSrs} alt="image" />
         <div>
            <div>
               <h3>{title}</h3>
               <p>{description}</p>
            </div>
            <div>
               <span>{author}</span>
               <span>{date}</span>
            </div>
         </div>
      </article>
   )
}

export default BlogCard 