import "./FormField.scss"
import clsx from "clsx"

const FormField = (props) => {
   const {
      className,
      type,
      id,
      text,
   } = props

   const Component = type === "textarea" ? "textarea" : "input"

   return (
      <div className={clsx("field", className)}>

         <Component
            className="field__control"
            type={type}
            name={id}
            id={id}
            placeholder=" "
            required
         />

         <label className="field__label" htmlFor={id}>
            {text}
         </label>

         {/* <span className="field-border-top"></span>
         <span className="field-border-bottom"></span> */}

      </div >
   )
}

export default FormField