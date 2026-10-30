import "./RecipeMeta.scss"
import Icon from "../Icon/Icon"


const RecipeMeta = (props) => {

   const {
      iconName,
      label,
      value,
      unit,
   } = props

   return (
      <div className='meta'>
         <Icon
            className="meta__icon"
            name={iconName}
            hasFill
         />

         <div className='meta__item'>
            {label && (
               <span className="meta__label">
                  {label}
               </span>
            )}

            <span className="meta__value">
               {value}

               {unit && (
                  <span className="meta__unit">
                     {unit}
                  </span>
               )}
            </span>
         </div>
      </div>
   )
}

export default RecipeMeta