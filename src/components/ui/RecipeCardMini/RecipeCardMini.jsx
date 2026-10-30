import "./RecipeCardMini.scss"
import clsx from "clsx"
import Icon from "../Icon/Icon"
import RecipeMeta from "../RecipeMeta/RecipeMeta"
import getAssetUrl from "@/utils/getAssetUrl"
import getPageUrl from "@/utils/getPageUrl"

const RecipeCardMini = (props) => {

   const {
      id,
      title,
      time,
      category,
      backgroundImgSrc,
      isLiked
   } = props

   const likeButtonTitle = isLiked ? 'Dislike' : 'Like'

   const style = {
      backgroundImage: `url(${getAssetUrl(backgroundImgSrc)})`,
   }

   return (
      <article
         className="rcp-card-mini"
         data-id={id}
         style={style}>
            
         <a href={getPageUrl(`/recipe/${id}`)}
            className="rcp-card-mini__link"
         >
            <h3>{title}</h3>
         </a>

         <div className="rcp-card-mini__meta">
            <RecipeMeta
               iconName="timer"
               value={time.cook}
               unit="min"
               blur
            />

            <RecipeMeta
               iconName="fork-knife"
               value={category}
               blur
            />
         </div>


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