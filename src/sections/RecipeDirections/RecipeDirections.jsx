import "./RecipeDirections.scss"
import Directions from "@/components/ui/Directions/Directions"

const RecipeDirections = ({ recipe }) => {
   return (
      <section className="recipe-directions container">
         <h5 className="recipe-directions__title">
            {recipe.directions.title}
         </h5>

         <Directions
            steps={recipe.directions.steps}
         />
      </section>
   )
}

export default RecipeDirections