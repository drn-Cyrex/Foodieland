import './BlogHero.scss'
import Section from "@/layouts/Section/Section"
import Field from '@/components/ui/Field/Field'

const BlogHero = () => {

   return (
      <Section
         className='blog-hero container'
         title='Blog & Article'
         description='Explore delicious recipes, cooking tips, and inspiring stories to make every meal more enjoyable.'
         isHeaderVertical
      >

         <form className='blog-hero__search' action="">
            <Field
               label="Search article, news or recipe..."
               type="search"
               name="search"
               id="blog-search"
               ariaLabel="Search"
               imageSrc="/src/assets/icons/blog-search.png"
               imageAlt=""
            />
         </form>

      </Section>
   )
}

export default BlogHero