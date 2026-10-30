import "./RecipeIngredients.scss"
import Ingredients from "@/components/ui/Ingredients/Ingredients"

const RecipeIngredients = ({ recipe }) => {
   return (
      <section className="recipe-ingredients container">
         <h4 className="recipe-ingredients-title">
            {recipe.ingredients.title}
         </h4>

         <Ingredients
            groups={recipe.ingredients.groups}
         />
      </section>
   )
}

export default RecipeIngredients