import "./Select.scss"

const Select = (props) => {

   const {
      name,
      id,
      children,
   } = props

   return (
      <select
         className="select"
         name={name} id={id}
      >
         {children}
      </select>
   )

}

export default Select