import './Categories.scss'
import Section from '@/layouts/Section/Section'
import Grid from '@/components/Grid/Grid'
import CategoriesCard from '@/components/ui/CategoriesCard/CategoriesCard'

const Categories = () => {

   const categories = [
      {
         title: 'Breakfast',
         imgSrc: '/src/assets/images/categories/breakfast.png',
         backgroundGradient: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)',
      },
      {
         title: 'Vegan',
         imgSrc: '/src/assets/images/categories/vegan.png',
         backgroundGradient: 'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
      },
      {
         title: 'Meat',
         imgSrc: '/src/assets/images/categories/meat.png',
         backgroundGradient: 'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)',
      },
      {
         title: 'Dessert',
         imgSrc: '/src/assets/images/categories/dessert.png',
         backgroundGradient: 'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)',
      },
      {
         title: 'Lunch',
         imgSrc: '/src/assets/images/categories/lunch.png',
         backgroundGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(253, 221, 159, 0.1) 100%)',
      },
      {
         title: 'Chocolate',
         imgSrc: '/src/assets/images/categories/chocolate.png',
         backgroundGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(210, 105, 30, 0.1) 100%)',
      },
   ]


   return (
      <Section
         className='categories container'
         title='Categories'
         titleId='categories'
         linkLabel='View All Categories'
         linkPage="/recipes"
      >
         <Grid columns={6} className='categories-list'>
            {categories.map((category, index) => (
               <CategoriesCard {...category} key={index} />
            ))}
         </Grid>
      </Section>
   )
}

export default Categories