import './Directions.scss'

const Directions = (props) => {

   const {
      steps
   } = props

   return (
      <div className='directions'>
         {steps.map((step, index) => (
            <div className='directions-group'>
               <span className='directions-group__title'>{step.title}
               </span>
               <p className='directions-group__description'>{step.description}
               </p>
            </div>
         ))}
      </div>
   )
}

export default Directions