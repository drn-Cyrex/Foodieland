import './HeroContent.scss'
import { Image } from 'minista'
import clsx from 'clsx'
import Icon from '../Icon/Icon'
import AuthorCard from '../AuthorCard/AuthorCard'
import Button from '../Button/Button'

const HeroContent = (props) => {

   const {
      className,
      category,
      title,
      TitleTag = 'h1',
      description,
      author,
   } = props

   return (
      <div className={clsx('hero-content', className)}>

         <div className='hero-content__body'>

            <div className='hero-content__category'>
               <Image
                  className='hero-content__category-image'
                  src={category.imgSrc}
               />
               <span>Hot Recipes</span>
            </div>

            <TitleTag className="hero-content__title">
               {title}
            </TitleTag>

            <div className='hero-description'>
               <p>{description}</p>
            </div>
            <div className='hero-content__footer'>
               <AuthorCard
                  className='hero-content__author'
                  {...author}
               />
               <Button href="/" className="hero-content__button" >
                  <span>View Recipe</span>
                  <Icon name='play' hasFill />
               </Button>
            </div>

         </div>

      </div>
   )
}

export default HeroContent