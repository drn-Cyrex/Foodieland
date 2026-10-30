import "./RecipeCardStandard.scss"
import RecipeMeta from "../RecipeMeta/RecipeMeta"
import clsx from 'clsx'
import getAssetUrl from "@/utils/getAssetUrl"


const RecipeCardStandard = (props) => {
   const {
      id,
      title,
      description,
      category,
      tags,
      time,
      backgroundImgSrc,
   } = props

   const style = {
      backgroundImage: `url(${getAssetUrl(backgroundImgSrc)})`,
   }


   return (
      <article
         className='rcp-card-standard'
         data-id={id}
         data-category={category}
         data-tags={tags.join(",")}
         style={{
            ...style,
            viewTransitionName: `recipe-${id}`,
         }}
      >

         <a href="/recipe"
         >
            <div className="rcp-card-standard__info">
               <h3>{title}</h3>
               <p>{description}</p>
            </div>

            <div className="rcp-card-standard__footer">
               <RecipeMeta
                  iconName="timer"
                  value={time.cook}
                  unit='min'
               />

               <ul className="rcp-card-standard__tags-list">
                  {tags.map((tag, index) => (
                     <li key={index}
                        className={clsx(
                           'rcp-card-standard__tag',
                           `rcp-card-standard__tag--${tag}`
                        )}>
                        {tag}
                     </li>
                  ))}
               </ul>


            </div>



            <span className="rcp-card-standard__category">             {category}
            </span>
         </a>

      </article >
   )
}

export default RecipeCardStandard