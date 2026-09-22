import "./RecipesQuick.scss"
import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import RecipeCardMini from "@/components/ui/RecipeCardMini/RecipeCardMini";
import { getQuickRandom } from "@/api/recipes";

const RecipesQuick = () => {

   const quick = getQuickRandom(6);

   return (
      <Section
         className='recipes-more container'
         title="Try these quick recipes to lift your spirits"
         titleId="recipes"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      >
         <GridAuto>
            {quick.map((item) => {
               return (
                  <RecipeCardMini
                     {...item}
                     key={item.id}
                  />
               )
            })}
         </GridAuto>
      </Section>
   )
}

export default RecipesQuick