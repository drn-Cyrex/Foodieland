import Hero from "@/sections/Hero/Hero"
import Categories from "@/sections/Categories/Categories"
import Recipes from "@/sections/Recipes/Recipes"

export const metadata = {
   title: 'Home'
}

export default function () {
   return (
      <>
         <Hero />
         <Categories />
         <Recipes/>
      </>
   )
}


