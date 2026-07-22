import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import RecipeCardV2 from "@/components/ui/RecipeCardV2/RecipeCardV2"
import RecipeBanner from "@/components/ui/RecipeBanner/RecipeBanner"
import items from './data-v2.json'

const Recipes = () => {

   return (
      <Section
         className='recipes'
         title="Simple and tasty recipes"
         titleId="recipes"
         isHeaderVertical
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
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
                  <RecipeCardV2 {...rest} key={item.title} />
               )
            })}
         </GridAuto>
      </Section>
   )
}

export default Recipes