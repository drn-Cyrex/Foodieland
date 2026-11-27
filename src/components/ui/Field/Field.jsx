import './Field.scss'

const Field = (props) => {

   const {
      label,
      type,
      name,
      id,
      ariaLabel,
   } = props

   return (
      <form className="subscribe-form" action="">
         <label htmlFor={name}>
            {label}
         </label>
         <input
            type={type}
            name={name}
            id={id}
         />

         <button
            type="submit"
            aria-label={ariaLabel}
         >
            иконка лупы
         </button>
      </form>
   )
}

export default Field


