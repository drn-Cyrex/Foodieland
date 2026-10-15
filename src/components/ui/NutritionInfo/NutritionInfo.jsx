import './NutritionInfo.scss'

const NutritionInfo = (props) => {
   const { title, facts, note } = props

   return (
      <div className="nutrition-info">
         <h3 className="nutrition-info__title">{title}</h3>

         <table className="nutrition-info__table">
            <tbody >
               {facts.map((fact, index) => (
                  <tr key={index}>
                     <td className="nutrition-info__label">{fact.label}</td>
                     <td className="nutrition-info__value">{fact.value}</td>
                  </tr>
               ))}
            </tbody>
         </table>

         {note && <p className="nutrition-info__note">{note}</p>}
      </div>
   )
}

export default NutritionInfo

