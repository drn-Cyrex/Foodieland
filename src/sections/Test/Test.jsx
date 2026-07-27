import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import RecipeCardV2 from "@/components/ui/RecipeCardV2/RecipeCardV2"
import RecipeBanner from "@/components/ui/RecipeBanner/RecipeBanner"
import InstagramCard from "@/components/ui/InstagramCard/InstagramCard"


const Test = () => {

   const imageCard = [
      {
         imgSrc: "/src/assets/images/instagram/jpg.jpg"
      },
      {
         imgSrc: "/src/assets/images/instagram/jpg.jpg"
      },
      {
         imgSrc: "/src/assets/images/instagram/jpg.jpg"
      },
      {
         imgSrc: "/src/assets/images/instagram/jpg.jpg"
      },
   ]

   return (
      <Section
         className='test container'
         title="T E S T"
         titleId="test"
         description="test test test"
         isHeaderVertical
      >
         <GridAuto>
            {imageCard.map((image, index) => (
               <InstagramCard {...image} key={index} />
            ))}
         </GridAuto>

      </Section>
   )
}

export default Test