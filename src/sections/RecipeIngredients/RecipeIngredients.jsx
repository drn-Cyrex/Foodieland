import "./RecipeIngredients.scss"
import { getRecipeById } from "@/api/recipes/index";
import Ingredients from "@/components/ui/Ingredients/Ingredients"
import RecipeBanner from "@/components/ui/RecipeBanner/RecipeBanner"


const RecipeIngredients = () => {

   const recipe = getRecipeById("strawberry-oatmeal-pancake");

   return (
      <section className="recipe-ingredients container">
         <Ingredients
            title={recipe.ingredients.title}
            groups={recipe.ingredients.groups}
         />
         <RecipeBanner />
      </section>
   )
}

export default RecipeIngredients