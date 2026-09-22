import "./RecipeCardMini.scss"
import clsx from "clsx"
import Icon from "../Icon/Icon"
import RecipeMeta from "../RecipeMeta/RecipeMeta"

const RecipeCardMini = (props) => {

   const {
      id,
      title,
      description,
      time,
      category,
      backgroundImgSrc,
      isLiked
   } = props

   const likeButtonTitle = isLiked ? 'Dislike' : 'Like'

   const style = {
      backgroundImage: backgroundImgSrc,
   }

   return (
      <article className="rcp-card-mini" data-id={id}>
         <a href={`/recipes/${id}`}
            style={style}
            className="rcp-card-mini__link"
         >
            <h3>{title}</h3>

            <RecipeMeta
               time={time}
               category={category}
            />
         </a>

         <button className={clsx(
            'rcp-card-mini__liked',
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

export default RecipeCardMini