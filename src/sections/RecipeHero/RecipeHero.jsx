import AuthorCard from "@/components/ui/AuthorCard/AuthorCard"
import "./RecipeHero.scss"
import RecipeMeta from "@/components/ui/RecipeMeta/RecipeMeta"

const RecipeHero = () => {


   return (
      <div className="recipe-hero ">
         <h2 className="title-effect">Health Japanese Fried Rice</h2>
         <div className="recipe-hero__meta-info">
            <AuthorCard
               imgSrc="/src/assets/images/man.jpg"
               name="John Doe"
               date={{ dateTime: '2024-01-15', label: '15 января 2024' }}
            />
            <RecipeMeta/>
         </div>
      </div>
   )
}

export default RecipeHero