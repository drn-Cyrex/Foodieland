import "./InstagramView.scss"
import Section from "@/layouts/Section/Section"
import GridAuto from "@/components/GridAuto/GridAuto"
import Button from "@/components/ui/Button/Button"
import Icon from "@/components/ui/Icon/Icon"
import { Image } from "minista"

const InstagramView = () => {

   return (
      <Section
         className="instagram-view container"
         title="Check out @foodieland on Instagram"
         titleId="instagram-view"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
         isHeaderVertical
      >
         <div className="instagram-view__img-collection">
            <Image src="/src/assets/images/instagram/1.jpg" />
            <Image src="/src/assets/images/instagram/2.jpg" />
            <Image src="/src/assets/images/instagram/3.jpg" />
            <Image src="/src/assets/images/instagram/4.jpg" />
         </div>

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