import "./RecipeIngredients.scss"
import { getRecipeById } from "@/api/recipes/index";
import Ingredients from "@/components/ui/Ingredients/Ingredients"


const RecipeIngredients = () => {

   const recipe = getRecipeById("strawberry-oatmeal-pancake");

   return (
      <section className="recipe-ingredients container">
         <h4
            className='recipe-ingredients-title'>
            {recipe.ingredients.title}
         </h4>
         <Ingredients
            groups={recipe.ingredients.groups}
         />
      </section>
   )
}

export default RecipeIngredients