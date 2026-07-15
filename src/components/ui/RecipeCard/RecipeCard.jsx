import './RecipeCard.scss'
import { Image } from 'minista'
import clsx from 'clsx'
import Tags from '../Tags/Tags'
import Icon from '../Icon/Icon'


const RecipeCard = (props) => {

   const {
      title,
      titleExtraClassName = 'h4',
      /**
       * '' (default), 'transparent',
       */
      mode = '',
      tags = [],
      isLiked,
      backgroundImgSrc,
   } = props

   const style = {
      backgroundImage: backgroundImgSrc,
   }

   const likeButtonTitle = isLiked ? 'Dislike' : 'Like'

   return (
      <article
         className={clsx(
            'recipe-card',
            mode && `recipe-card--${mode}`
         )}
      >
         <a
            className="recipe-card__link"
            href="/"
            style={style}
         >

            <h3 className={clsx('recipe-card__title', titleExtraClassName)}>
               {title}
            </h3>
            <Tags
               className="recipe-card__tags"
               items={tags}
            />
         </a>
         <button
            className={clsx(
               'recipe-card__like-button',
               isLiked && 'is-liked',
               isLiked && 'disable-hover'
            )}
            type="button"
            aria-label={likeButtonTitle}
            title={likeButtonTitle}
         >
            <Icon name="heart" hasFill />
         </button>
      </article>
   )
}

export default RecipeCard