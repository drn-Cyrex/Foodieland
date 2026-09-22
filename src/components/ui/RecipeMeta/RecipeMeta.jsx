import Icon from "../Icon/Icon"
import "./RecipeMeta.scss"


const RecipeMeta = (props) => {

   const {
      time, category
   } = props

   return (
      <ul className="recipe-meta__list">
         <li >
            <Icon name="timer" hasFill />
            <span>{time} Minutes</span>
         </li>
         <li >
            <Icon name="fork-knife" hasFill />
            <span>{category}</span>
         </li>
      </ul>
   )
}


export default RecipeMeta