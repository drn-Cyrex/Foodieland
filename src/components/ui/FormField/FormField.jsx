import "./FormField.scss"
import clsx from "clsx"
import Button from "@/components/ui/Button/Button"

const FormField = (props) => {
   const {
      className,
      type,
      name,
      id,
      text,
      button,
   } = props

   return (
      <div className={clsx("field", className)}>
         <input className="field__input"
            type={type}
            name={name}
            id={id}
            placeholder=""
            required
         />
         <label className="field__label">
            {text}
         </label>
         <span className="field-border-top"></span>
         <span className="field-border-bottom"></span>

         {button && (
            <Button>Subscribe</Button>
         )}

      </div >
   )
}

export default FormField