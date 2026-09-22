import "./RecipesList.scss"
import RecipeCardStandard from "@/components/ui/RecipeCardStandard/RecipeCardStandard"
import Filter from "@/components/ui/Filter/Filter"

import {
   getAllRecipes,
   getRecipesByCategory,
   filterRecipes,
   getRandomRecipes
} from "@/api/recipes";

const RecipesList = () => {

   const items = getAllRecipes()

   return (
      <div className="rcp-list container">
         <h2 className="rcp-list__title title-effect">
            Recipes All
         </h2>

         <div className="rcp-list__wrapper">

            <div className="rcp-list-grid">
               {items.map((item) => {
                  // const { ...rest } = item

                  return (
                     <RecipeCardStandard
                        {...item}
                        key={item.id || item.title}
                     />
                  )
               })}
            </div>

            <div>
               <Filter img />
            </div>
         </div>

      </div>
   )
}

export default RecipesList