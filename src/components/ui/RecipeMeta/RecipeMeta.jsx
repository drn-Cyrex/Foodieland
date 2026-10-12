import "./RecipeMeta.scss"
import Icon from "../Icon/Icon"
import clsx from "clsx"

const RecipeMeta = (props) => {

   const {
      className,
      labelPrep,
      timePrep,
      labelCook,
      timeCook,
      category,
   } = props

   return (
      <div className={clsx(className, 'meta')}>
         {timePrep && (
            <div className="meta-prep">
               <Icon name="timer" hasFill />
               <div className="meta-wrapper">
                  <span>{labelPrep}</span>
                  <p>{timePrep}</p>
               </div>
            </div>
         )}
         {timeCook && (
            <div className="meta-timer">
               <Icon name="timer" hasFill />
               <div className="meta-wrapper">
                  <span>{labelCook}</span>
                  <p>{timeCook}</p>
               </div>
            </div>
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