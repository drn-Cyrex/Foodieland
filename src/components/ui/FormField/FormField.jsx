import "./FormField.scss"
import clsx from "clsx"

const FormField = (props) => {
   const {
      className,
      type = "text",
      id,
      text,
      required = false,
      ...rest
   } = props

   const Component = type === "textarea" ? "textarea" : "input"

   return (
      <div className={clsx("field", className)}>
         <Component
            className="field__control"
            {...(Component === "input" && { type })}
            name={id}
            id={id}
            placeholder=" "
            required={required}
            {...rest}
         />

         <label className="field__label" htmlFor={id}>
            {text}
         </label>
      </div>
   )
}

export default FormField