import "./RecipeHero.scss"
import AuthorCard from "@/components/ui/AuthorCard/AuthorCard"
import RecipeMeta from "@/components/ui/RecipeMeta/RecipeMeta"
import { getRecipeById } from "@/api/recipes/index";

const RecipeHero = () => {

   const recipe = getRecipeById("fruity-orange-blueberry-pancake");

   return (
      <div className="recipe-hero ">
         <h2 className="title-effect">{recipe.title}</h2>
         <div className="recipe-hero__meta-info">
            <AuthorCard
               imgSrc={recipe.author.imgSrc}
               name={recipe.author.name}
               date={{ dateTime: recipe.author.date, label: recipe.author.label }}
            />
            <RecipeMeta
               category={recipe.category}
               time={recipe.time}
            />
         </div>
      </div>
   )
}

export default RecipeHero