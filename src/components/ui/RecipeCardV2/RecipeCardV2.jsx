import "./RecipeCardV2.scss"
import { Image } from 'minista'
import clsx from 'clsx'
import Tags from '../Tags/Tags'
import Icon from '../Icon/Icon'

const RecipeCardV2 = (props) => {

   const {
      title,
      /**
       * '' (default), 'transparent',
       */
      mode = '',
      tags = [],
      isLiked,
      imgSrc,
   } = props

   const likeButtonTitle = isLiked ? 'Dislike' : 'Like'

   return (
      <article
         className={clsx(
            'recipe-card-v2',
            mode && `recipe-card--${mode}`
         )}
      >
         <a className="recipe-card__link-v2" href="/">
            <div className="recipe-card__wrapper">
               <h3>{title}</h3>
               <Tags className='recipe-card__tags-v2' type="rounded" items={tags} />
            </div>

            <Image src={imgSrc} />
         </a>
         <button
            className={clsx(
               'recipe-card__like-button-v2',
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

export default RecipeCardV2