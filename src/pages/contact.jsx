import ContactHero from "@/sections/ContactHero/ContactHero"
import RecipesMore from "@/sections/RecipesMore/RecipesMore"
import Subscribe from "@/sections/Subscribe/Subscribe"

export const metadata = {
   title: "contact",
}

export default function () {
   return (
      <>
         <ContactHero />
         <Subscribe />
      </>
   )
}
