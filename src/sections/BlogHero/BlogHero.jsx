import './BlogHero.scss'
import Section from "@/layouts/Section/Section"
import Search from '@/components/ui/Search/Search'


const BlogHero = () => {

   return (
      <Section
         className='blog-hero container'
         title='Blog & Article'
         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
         isHeaderVertical
      >
         <Search/>
      </Section>
   )
}

export default BlogHero