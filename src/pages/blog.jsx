import BlogHero from "@/sections/BlogHero/BlogHero"
import BlogContent from "@/sections/BlogContent/BlogContent"
import Subscribe from "@/sections/Subscribe/Subscribe"

export const metadata = {
   title: "blog",
}

export default function () {
   return (
      <>
         <BlogHero />
         <BlogContent />
         <Subscribe />
      </>
   )
}
