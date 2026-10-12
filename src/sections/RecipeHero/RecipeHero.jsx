import "./RecipeHero.scss"
import AuthorCard from "@/components/ui/AuthorCard/AuthorCard"
import RecipeMeta from "@/components/ui/RecipeMeta/RecipeMeta"
import { getRecipeById } from "@/api/recipes/index";

const RecipeHero = () => {

   const recipe = getRecipeById("strawberry-oatmeal-pancake");

   return (
      <div className="recipe-hero">

         <div className="recipe-top">

            <div className="recipe-info">
               <h2 className="title-effect">{recipe.title}
               </h2>

               <div className="recipe-info__meta">
                  <AuthorCard
                     imgSrc={recipe.author.imgSrc}
                     name={recipe.author.name}
                     date={{ dateTime: recipe.author.date, label: recipe.author.label }}
                  />
                  <RecipeMeta
                     className=""
                     category={recipe.category}
                     labelPrep="prep time"
                     timePrep={recipe.time.prep}
                     labelCook="cook time"
                     timeCook={recipe.time.cook}
                  />
               </div>
            </div>

            {/* <div>
               <span>PRINT</span>
               <span>SHARE</span>
            </div> */}
         </div>

         <div>
            video and Nutrition Information
         </div>


      </div>
   )
}

export default RecipeHero
