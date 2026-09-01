import "./Select.scss"

const Select = (props) => {

   const {
      label,
      name,
      isFor,
      /** 
       * Array <{
       * value: string
       * isSelected?: boolean 
       * }>
       * 
      */
      options = [],

   } = props

   return (
      <div>
         <label htmlFor={isFor}>{label}</label>
         <select className="select" name={name} id={isFor}>
            {options.map(({ value }, index) => (
               <option className="select__option"
                  value={value} key={index}>
                  {value}
               </option>
            ))}
         </select>
      </div>

   )

}

export default Select