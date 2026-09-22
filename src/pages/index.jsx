import Hero from "@/sections/Hero/Hero"
import Categories from "@/sections/Categories/Categories"
import ChefPromo from "@/sections/ChefPromo/ChefPromo"
import InstagramFeed from "@/sections/InstagramFeed/InstagramFeed"
import RecipesQuick from "@/sections/RecipesQuick/RecipesQuick"
import Subscribe from "@/sections/Subscribe/Subscribe"
import RecipesPopular from "@/sections/RecipesPopular/RecipesPopular"



export const metadata = {
   title: 'Home'
}

export default function () {
   return (
      <>
         <Hero />
         <Categories />
         <RecipesPopular />
         <ChefPromo />
         <InstagramFeed />
         <RecipesQuick />
         <Subscribe />
      </>
   )
}


