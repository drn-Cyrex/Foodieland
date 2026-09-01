import "./FormField.scss"
import clsx from "clsx"
import Button from "@/components/ui/Button/Button"
import getIdFromTitle from "@/utils/getIdFromTitle"

const FormField = (props) => {
   const {
      className,
      text,
      isFor,
      type,
      autoComplete,
      button,
      children,
   } = props

   const Component = type === "textarea" ? "textarea" : "input"

   return (
      <div className={clsx("field", className)}>

         <Component
            className="field__control"
            name={isFor}
            id={isFor}
            type={type}
            placeholder=""
            required
            autoComplete={autoComplete}
         />

         <label className="field__label" htmlFor={isFor}>
            {text}
         </label>

         <span className="field-border-top"></span>
         <span className="field-border-bottom"></span>

         {children}

         {button && (
            <Button type="submit">Subscribe</Button>
         )}

      </div >
   )
}

export default FormField