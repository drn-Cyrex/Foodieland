import "./RecipeHero.scss"
import AuthorCard from "@/components/ui/AuthorCard/AuthorCard"
import RecipeMeta from "@/components/ui/RecipeMeta/RecipeMeta"
import Icon from "@/components/ui/Icon/Icon"
import RecipeVideo from "@/components/ui/RecipeVideo/RecipeVideo"
import NutritionInfo from "@/components/ui/NutritionInfo/NutritionInfo"

const RecipeHero = ({ recipe }) => {
   return (
      <section className="recipe-hero">
         <div className="recipe-hero__top">
            <div className="recipe-hero__info">
               <h2 className="recipe-hero__title">
                  {recipe.title}
               </h2>

               <p className="recipe-hero__description">
                  {recipe.description}
               </p>

               <div className="recipe-hero__meta">
                  <AuthorCard
                     className="recipe__meta-author"
                     imgSrc={recipe.author.imgSrc}
                     alt="Photo by the author"
                     name={recipe.author.name}
                     date={recipe.author.date}
                  />

                  <div className="recipe__meta-info">
                     <RecipeMeta
                        iconName="timer"
                        label="prep time"
                        value={recipe.time.prep}
                        unit="minutes"
                     />

                     <RecipeMeta
                        iconName="timer"
                        label="cook time"
                        value={recipe.time.cook}
                        unit="minutes"
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
            <RecipeVideo
               poster={recipe.video.poster}
               sources={recipe.video.sources}
            />

            <NutritionInfo
               title={recipe.nutrition.title}
               facts={recipe.nutrition.facts}
               note={recipe.nutrition.note}
            />
         </div>
      </section>
   )
}

export default RecipeHero