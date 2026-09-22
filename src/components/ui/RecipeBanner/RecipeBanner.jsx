import './RecipeBanner.scss'
import { Image } from 'minista'

const RecipeBanner = (props) => {

   const item = {
      type: "banner",
      title: "Don’t forget to eat healthy food",
      site: "www.foodieland.com"
   }
   
   return (
      <a
         className='recipe-banner'
         href='/'
      >
         <h3>{item.title}</h3>
         <Image src='/src/assets/images/recipes/0.png' />
         <span>{item.site}</span>
      </a>
   )
}

export default RecipeBanner