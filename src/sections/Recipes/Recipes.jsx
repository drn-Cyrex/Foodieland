import './Recipes.scss'
import Section from '@/layouts/Section/Section'
import Grid from '@/components/Grid/Grid'
import RecipeBanner from '@/components/ui/RecipeBanner/RecipeBanner'
import RecipeCard from '@/components/ui/RecipeCard/RecipeCard'
import items from './data.json'

const Recipes = () => {

   return (
      <Section
         className='recipes'
         title="Simple and tasty recipes"
         titleId="recipes"
         isHeaderVertical
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      >
         <Grid columns={3}>
            {items.map((item) => {
               const { type, ...rest } = item

               if (type === 'banner') {
                  return (
                     <RecipeBanner {...rest} key={item.title} />
                  )
               }

               return (
                  <RecipeCard {...rest} key={item.title} />
               )
            })}
         </Grid>
      </Section>
   )
}

export default Recipes