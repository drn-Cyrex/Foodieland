import Hero from "@/sections/Hero/Hero"
import Categories from "@/sections/Categories/Categories"
import Recipes from "@/sections/Recipes/Recipes"
import Banner from "@/sections/Banner/Banner"
import Test from "@/sections/Test/Test"


export const metadata = {
   title: 'Home'
}

export default function () {
   return (
      <>
         <Hero />
         <Categories />
         <Recipes />
         <Banner />
         {/* <Test /> */}
      </>
   )
}


