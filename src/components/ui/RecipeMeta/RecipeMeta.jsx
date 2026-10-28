import "./RecipeMeta.scss"
import Icon from "../Icon/Icon"

const RecipeMeta = ({ iconName, label, value, unit }) => (
   <div className="meta">
      <Icon className="meta__icon" name={iconName} hasFill />
      <div className="meta__item">
         <p className="meta__label">{label}</p>
         <span className="meta__value">
            {value}{unit && <span className="meta__unit"> {unit}</span>}
         </span>
      </div>
   </div>
)

export default RecipeMeta