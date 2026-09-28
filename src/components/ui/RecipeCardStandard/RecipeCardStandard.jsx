import "./RecipeCardStandard.scss"
import clsx from 'clsx'

const RecipeCardStandard = (props) => {

   const {
      id,
      title,
      description,
      category,
      tags,
      backgroundImgSrc,
   } = props

   const style = {
      backgroundImage: backgroundImgSrc,
   }


   return (
      <article
         className={clsx('rcp-card-standard')}
         data-id={id}
      >

         <a href=""
            style={style}
         >
            <div className="rcp-card-standard__info">
               <h3>{title}</h3>
               <p>{description}</p>
            </div>

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

            <span className="rcp-card-standard__category">             {category}
            </span>
         </a>

      </article >
   )
}

export default RecipeCardStandard