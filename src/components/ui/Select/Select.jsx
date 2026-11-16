import "./Select.scss"

const Select = (props) => {
   const {
      label,
      id,
      name,
      options = [],

   } = props

   return (
      <div className="select-wrapper">

         <label
            className="select-label"
            htmlFor={id}
         >
            {label}
         </label>

         <select
            className="select-control"
            id={id}
            name={name}
            defaultValue=""
            required
         >
            <option value="" disabled>
               Select a reason...
            </option>

            {options.map(({ value, text }) => (
               <option value={value} key={value}>
                  {text}
               </option>
            ))}

         </select>
      </div>
   )
}

export default Select