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
      <div className={clsx(className, 'meta')}>
         {time && (
            <span className="meta-timer">
               <Icon name="timer" hasFill />
               <span>{time} Min</span>
            </span>
         )}
         {category && (
            <span className="meta-category">
               <Icon name="fork-knife" hasFill />
               <span>{category}</span>
            </span>
         )}
      </div>
   )
}


export default RecipeMeta