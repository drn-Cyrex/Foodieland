import './RecipeDirections.scss'
import Directions from '@/components/ui/Directions/Directions';
import { getRecipeById } from "@/api/recipes/index";

const RecipeDirections = () => {

   const recipe = getRecipeById("strawberry-oatmeal-pancake");

   return (
      <section className='recipe-directions container'>

         <h5 className='recipe-directions__title'>
            {recipe.directions.title}
         </h5>
         
         <Directions 
            steps={recipe.directions.steps}
         />
      </section>
   )
}

export default RecipeDirections