import "./InstagramView.scss"
import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import InstagramCard from "@/components/ui/InstagramCard/InstagramCard"
import Button from "@/components/ui/Button/Button"
import Icon from "@/components/ui/Icon/Icon"
import { Image } from "minista"

const InstagramView = () => {

   const imageCard = [
      {
         imgSrc: "/src/assets/images/instagram/0.1.png"
      },
      {
         imgSrc: "/src/assets/images/instagram/0.2.png"
      },
      {
         imgSrc: "/src/assets/images/instagram/0.3.png"
      },
      {
         imgSrc: "/src/assets/images/instagram/0.4.png"
      },
   ]

   return (
      <Section
         className="instagram-view container"
         title="Check out @foodieland on Instagram"
         titleId="instagram-view"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
         isHeaderVertical
      >

         <GridAuto>
            {imageCard.map((image, index) => (
               <InstagramCard {...image} key={index} />
            ))}
         </GridAuto>

         <Button href="/"
            className="instagram-view__button"
         >
            <span>Visit Our Instagram</span>
            <Icon name="instagram" />
         </Button>
      </Section>
   )
}

export default InstagramView