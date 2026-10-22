import './Directions.scss'

const Directions = (props) => {

   const {
      steps
   } = props

   return (
      <>
         {steps.map((step, index) => (
            <div className='directions'>
               <span>{step.title}</span>
               <p>{step.description}</p>
            </div>
         ))}
      </>


   )

}

export default Directions