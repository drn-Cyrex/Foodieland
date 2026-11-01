import "./Ingredients.scss"

const Ingredients = (props) => {
   const { groups } = props

   return (
      <div className="ingredient">
         {groups.map((group, groupIndex) => (
            <fieldset
               className="ingredient-group"
               key={groupIndex}
            >
               <legend>{group.groupName}</legend>

               {group.items.map((item, itemIndex) => {
                  const inputId = `ingredient-${groupIndex}-${itemIndex}`

                  return (
                     <label
                        className="ingredient-group__label"
                        htmlFor={inputId}
                        key={inputId}
                     >
                        <input
                           type="checkbox"
                           name={inputId}
                           id={inputId}
                        />

                        <span>{item}</span>
                     </label>
                  )
               })}
            </fieldset>
         ))}
      </div>
   )
}

export default Ingredients
