import './CategoriesCard.scss'
import { Image } from 'minista'

const CategoriesCard = (props) => {
   const {
      title,
      imgSrc,
      color,
      backgroundGradient,
      borderGradient
   } = props

   const styles = {
      backgroundImage: backgroundGradient,
      // borderImage: borderGradient,
   }

   return (
      <article
         className='category-card'
         style={{ styles }}
      >

         <Image src={imgSrc} />
         <h3 className='category-card__title'>{title}</h3>
      </article>
   )
}

export default CategoriesCard