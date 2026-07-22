import "./RecipeCardV2.scss"
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
      backgroundImgSrc
   } = props

   const likeButtonTitle = isLiked ? 'Dislike' : 'Like'

   const style = {
      backgroundImage: backgroundImgSrc,
   }

   return (
      <article
         className={clsx(
            'rcp-card',
            mode && `recipe-card--${mode}`
         )}
      >
         <a className="rcp-card__link"
            style={style}
            href="/"
         >
            <h3>{title}</h3>
            <Tags className='rcp-card__tags' type="rounded" items={tags} />
         </a>
         <button
            className={clsx(
               'rcp-card__like-button',
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