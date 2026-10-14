import "./RecipeMeta.scss"
import Icon from "../Icon/Icon"

const RecipeMeta = (props) => {

   const {
      iconName,
      label,
      value,
   } = props

   return (
      <div className="meta">
         <Icon className="meta__icon" name={iconName} hasFill />
         <div className="meta__item">
            <p className="meta__label">
               {label}
            </p>
            <span className="meta__value">
               {value}
            </span>
         </div>
      </div>
   )
}


export default RecipeMeta