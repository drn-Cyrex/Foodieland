import "./RecipeMeta.scss"
import Icon from "../Icon/Icon"
import clsx from "clsx"

const RecipeMeta = (props) => {

   const {
      className,
      time,
      category,
   } = props

   return (
      <ul className="recipe-meta__list">
         {time && (
            <li className={clsx(className, "recipe-meta__timer"
            )}>
               <Icon name="timer" hasFill />
               <span>{time} Minutes</span>
            </li>
         )}
         {category && (
            <li className="recipe-meta__category">
               <Icon name="fork-knife" hasFill />
               <span>{category}</span>
            </li>
         )}
      </ul>
   )
}


export default RecipeMeta