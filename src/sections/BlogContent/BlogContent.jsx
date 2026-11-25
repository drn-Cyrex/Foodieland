import './BlogContent.scss'
import Section from '@/layouts/Section/Section'
import BlogCard from '@/components/ui/BlogCard/BlogCard'
import { getAllPosts } from "@/api/blog"
import GridAuto from '@/components/GridAuto/GridAuto'
import Pagination from '@/components/ui/Pagination/Pagination'

const BlogContent = () => {

   const posts = getAllPosts()

   return (
      <Section className='blog-content  container'>

         <GridAuto className='blog-list'>
            {posts.map((post) => (
               <BlogCard
                  {...post}
                  key={post.id}
                  data-pagination-item
               />
            ))}
         </GridAuto>

         <Pagination />
      </Section>
   )
}

export default BlogContent
