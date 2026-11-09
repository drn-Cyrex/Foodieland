import "./RecipesList.scss"
import RecipeCardStandard from "@/components/ui/RecipeCardStandard/RecipeCardStandard"
import Filter from "@/components/ui/Filter/Filter"

import { getAllRecipes } from "@/api/recipes"


const RecipesList = () => {

   const items = getAllRecipes()

   return (
      <div className="rcp-list container">

         <h2 className="rcp-list__title">
            All Recipes
         </h2>

         <div className="rcp-list__wrapper">

            <div
               className="rcp-list-grid"
               data-recipes-list
            >

               {items.map((item) => (
                  <RecipeCardStandard
                     {...item}
                     key={item.id || item.title}
                     data-pagination-item
                  />
               ))}

            </div>

            <div>
               <Filter img />
            </div>

         </div>

         <div
            className="pagination"
            data-pagination
         />

      </div>
   )
}

export default RecipesList