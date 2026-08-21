import "./FormField.scss"
import clsx from "clsx"
import Button from "@/components/ui/Button/Button"

const FormField = (props) => {
   const {
      className,
      type,
      text,
      button,
      autoComplete,
   } = props

   return (
      <div className={clsx("field", className)}>

         <input className="field__input"
            type={type}
            name={type}
            id={type}
            placeholder=""
            required
            autoComplete={autoComplete}
         />
         <label className="field__label" htmlFor={type}>
            {text}
         </label>

         <span className="field-border-top"></span>
         <span className="field-border-bottom"></span>

         {button && (
            <Button type="submit">Subscribe</Button>
         )}

      </div >
   )
}

export default FormField