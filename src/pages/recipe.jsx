import RecipeHero from "@/sections/RecipeHero/RecipeHero"
import Subscribe from "@/sections/Subscribe/Subscribe"

export const metadata = {
   title: "recipe",
}

export default function () {
   return (
      <>
         <RecipeHero />
         <Subscribe />
      </>
   )
}
