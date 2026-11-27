import './Field.scss'

const Field = (props) => {

   const {
      label,
      type,
      name,
      id,
      ariaLabel,
      imageSrc,
      imageAlt,
   } = props

   return (
      <div className="form-group" action="">

         <label htmlFor={id}>
            {label}
         </label>

         <input
            type={type}
            name={name}
            id={id}
            placeholder=''
            required
         />

         <button
            type="submit"
            aria-label={ariaLabel}
         >
            <img src={imageSrc} alt={imageAlt} />
         </button>
      </div>
   )
}

export default Field


