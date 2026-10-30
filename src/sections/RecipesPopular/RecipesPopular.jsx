import './RecipesPopular.scss'
import Section from '@/layouts/Section/Section'
import GridAuto from '@/components/GridAuto/GridAuto'
import RecipeCardMini from '@/components/ui/RecipeCardMini/RecipeCardMini'
import RecipeBanner from '@/components/ui/RecipeBanner/RecipeBanner'
import { getLikedRandom } from '@/api/recipes'

const RecipesPopular = () => {
   const randomLiked = getLikedRandom(5)

   const itemsWithBanner = [
      ...randomLiked.slice(0, 3),
      <RecipeBanner key="banner" />,
      ...randomLiked.slice(3),
   ]

   return (
      <Section
         className="recipes container"
         title="Popular and delicious recipes"
         titleId="popular-recipes"
         description="Explore a selection of recipes that are perfect for everyday cooking, from quick meals to comforting favorites."
         isHeaderVertical
         titleEffect
      >
         <GridAuto>
            {itemsWithBanner.map((item, index) => {
               if (typeof item === 'object' && item.type) {
                  return item
               }

               return (
                  <RecipeCardMini
                     {...item}
                     key={item.id || index}
                  />
               )
            })}
         </GridAuto>
      </Section>
   )
}

export default RecipesPopular