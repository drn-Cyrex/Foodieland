import RecipeDirections from "@/sections/RecipeDirections/RecipeDirections"
import RecipeHero from "@/sections/RecipeHero/RecipeHero"
import RecipeIngredients from "@/sections/RecipeIngredients/RecipeIngredients"
import Subscribe from "@/sections/Subscribe/Subscribe"
import { getAllRecipes } from "@/api/recipes"

export const getStaticData = async () => {
   const recipes = getAllRecipes()

   return recipes.map((recipe) => ({
      paths: {
         id: recipe.id,
      },
      props: {
         recipe,
      },
   }))
}

export default function RecipePage({ recipe }) {
   return (
      <>
         <RecipeHero recipe={recipe} />
         <RecipeIngredients recipe={recipe} />
         <RecipeDirections recipe={recipe} />
         <Subscribe />
      </>
   )
}