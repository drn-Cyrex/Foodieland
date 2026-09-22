import "./RecipeCardStandard.scss"
import clsx from 'clsx'

const RecipeCardStandard = (props) => {

   const {
      id,
      title,
      description,
      category,
      items,
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
            <h3>{title}</h3>
            <p>{description}</p>


         </a>
         <div className="rcp-card-standard__category">      {category}
         </div>
      </article >
   )
}

export default RecipeCardStandard