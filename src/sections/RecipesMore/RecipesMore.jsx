import "./RecipesMore.scss"
import GridAuto from "@/components/GridAuto/GridAuto"
import Section from "@/layouts/Section/Section"
import items from "./data.json"
import RecipeCardV2 from "@/components/ui/RecipeCardV2/RecipeCardV2"

const RecipesMore = (props) => {

   return (
      <Section
         className='recipes-more container'
         title="Try this delicious recipe
               to make your day"
         titleId="recipes"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      >
         <GridAuto>
            {items.map((item) => {
               const { ...rest } = item

               return (
                  <RecipeCardV2
                     {...rest}
                     key={item.title}
                  />
               )
            })}
         </GridAuto>
      </Section>
   )
}

export default RecipesMore