import Hero from "@/sections/Hero/Hero"
import Categories from "@/sections/Categories/Categories"
import Recipes from "@/sections/Recipes/Recipes"
import ChefPromo from "@/sections/ChefPromo/ChefPromo"
import InstagramFeed from "@/sections/InstagramFeed/InstagramFeed"
import RecipesMore from "@/sections/RecipesMore/RecipesMore"
import Subscribe from "@/sections/Subscribe/Subscribe"


export const metadata = {
   title: 'Home'
}

export default function () {
   return (
      <>
         <Hero />
         <Categories />
         <Recipes />
         <ChefPromo />
         <InstagramFeed />
         <RecipesMore />
         <Subscribe />
      </>
   )
}


