import './Ingredients.scss'

const Ingredients = (props) => {
   const {
      title,
      groups,
   } = props

   return (
      <div className='ingredient'>
         <h4 className='ingredient-title'>{title}</h4>

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
      </div >
   )
}

export default Ingredients