import './Ingredients.scss'

const Ingredients = (props) => {
   const {
      groups,
   } = props

   return (
      <div className='ingredient'>
         <div className='ingredient-wrapper'>
            {groups.map((group, index) => (
               <field className='ingredient-group' key={index}>

                  <legend >{group.groupName}</legend>

                  {group.items.map((item, index) => (
                     <label className='ingredient-group__label'
                        htmlFor={item} key={index}>
                        <input
                           type="checkbox"
                           name={item}
                           id={item} />
                        <span>{item}</span>
                     </label>
                  ))}

               </field>
            ))}
         </div>
      </div >
   )
}

export default Ingredients