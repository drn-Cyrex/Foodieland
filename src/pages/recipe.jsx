import RecipeDirections from "@/sections/RecipeDirections/RecipeDirections"
import RecipeHero from "@/sections/RecipeHero/RecipeHero"
import RecipeIngredients from "@/sections/RecipeIngredients/RecipeIngredients"
import Subscribe from "@/sections/Subscribe/Subscribe"

export const metadata = {
   title: "recipe",
}

export default function () {
   return (
      <>
         <RecipeHero />
         <RecipeIngredients/>
         <RecipeDirections/>
         <Subscribe />
      </>
   )
}
