import "./RecipeHero.scss"
import AuthorCard from "@/components/ui/AuthorCard/AuthorCard"
import RecipeMeta from "@/components/ui/RecipeMeta/RecipeMeta"
import { getRecipeById } from "@/api/recipes/index";
import Icon from "@/components/ui/Icon/Icon";
import RecipeVideo from "@/components/ui/RecipeVideo/RecipeVideo";
import NutritionInfo from "@/components/ui/NutritionInfo/NutritionInfo";

const RecipeHero = () => {

   const recipe = getRecipeById("strawberry-oatmeal-pancake");

   const authorDate = {
      dateTime: recipe.author.date,
      label: recipe.author.label,
   };

   return (
      <section className="recipe-hero">

         <div className="recipe-hero__top">

            <div className="recipe-hero__info">
               <h2 className="title-effect">{recipe.title}
               </h2>

               <p className="recipe-hero__description">
                  {recipe.description}
               </p>

               <div className="recipe-hero__meta">
                  <AuthorCard
                     className='recipe__meta-author'
                     imgSrc={recipe.author.imgSrc}
                     alt="photo by the author"
                     name={recipe.author.name}
                     date={authorDate}
                  />
                  <div className="recipe__meta-info">
                     <RecipeMeta
                        iconName="timer"
                        label="prep time"
                        value={recipe.time.prep}
                     />
                     <RecipeMeta
                        iconName="timer"
                        label="cook time"
                        value={recipe.time.cook}
                     />
                     <RecipeMeta
                        iconName="fork-knife"
                        value={recipe.category}
                     />
                  </div>

               </div>
            </div>

            <div className="recipe-hero__action">
               <button
                  type="button"
                  aria-label="Print recipe"
               >
                  <Icon name="printer" />
               </button>
               <button
                  type="button"
                  aria-label="Share recipe"
               >
                  <Icon name="share" />
               </button>
            </div>
         </div>

         <div className="recipe-hero__content">
            <RecipeVideo />
            <NutritionInfo />
         </div>
      </section >
   )
}

export default RecipeHero
