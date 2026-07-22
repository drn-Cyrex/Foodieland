import './RecipeBanner.scss'
import { Image } from 'minista'

const RecipeBanner = (props) => {

   const {
      title,
      site,
      imgSrc
   } = props

   return (
      <a
         className='recipe-banner'
         href='/'
      >
         <h3>{title}</h3>
         <Image src='/src/assets/images/recipes/0.png' />
         <span>{site}</span>
      </a>
   )
}

export default RecipeBanner