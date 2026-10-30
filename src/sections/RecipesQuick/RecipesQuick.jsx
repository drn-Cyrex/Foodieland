
import "./RecipesQuick.scss"
import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import RecipeCardMini from "@/components/ui/RecipeCardMini/RecipeCardMini"
import { getQuickRandom } from "@/api/recipes"

const RecipesQuick = () => {
   const quick = getQuickRandom(6)

   return (
      <Section
         className="recipes-more container"
         title="Try these quick recipes to lift your spirits"
         titleId="quick-recipes"
         description="Short on time? These quick and delicious recipes are perfect for busy days when you want a homemade meal without the wait."
      >
         <GridAuto>
            {quick.map((item) => (
               <RecipeCardMini
                  {...item}
                  key={item.id}
               />
            ))}
         </GridAuto>
      </Section>
   )
}

export default RecipesQuick
