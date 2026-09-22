import './RecipesPopular.scss'
import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import RecipeCardMini from '@/components/ui/RecipeCardMini/RecipeCardMini'
import RecipeBanner from "@/components/ui/RecipeBanner/RecipeBanner"
import { getLikedRecipes, getLikedRandom } from "@/api/recipes";

const RecipesPopular = () => {
   const randomLiked = getLikedRandom(5);

   const itemsWithBanner = [
      ...randomLiked.slice(0, 3),
      <RecipeBanner key="banner" />,
      ...randomLiked.slice(3)
   ];

   return (
      <Section
         className='recipes container'
         title="Popular  and tasty recipes"
         titleId="recipes"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
         isHeaderVertical
      >
         <GridAuto>
            {itemsWithBanner.map((item, index) => {
               if (typeof item === "object" && item.type) {
                  return item;
               }
               return (
                  <RecipeCardMini {...item}
                     key={item.id || index}
                  />
               );
            })}
         </GridAuto>
      </Section>
   )
}

export default RecipesPopular