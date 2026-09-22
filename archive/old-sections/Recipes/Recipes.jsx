import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import RecipeCard from "../../old-components/RecipeCard/RecipeCard"
import RecipeBanner from "@/components/ui/RecipeBanner/RecipeBanner"
import items from './data.json'

const Recipes = () => {

   return (
      <Section
         className='recipes container'
         title="Simple and tasty recipes"
         titleId="recipes"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
         isHeaderVertical
      >
         <GridAuto>
            {items.map((item) => {
               const { type, ...rest } = item

               if (type === "banner") {
                  return (
                     <RecipeBanner {...rest} key={item.title} />
                  )
               }

               return (
                  <RecipeCard {...rest} key={item.title} />
               )
            })}
         </GridAuto>
      </Section>
   )
}

export default Recipes