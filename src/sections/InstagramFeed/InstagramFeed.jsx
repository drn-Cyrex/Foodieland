import "./InstagramFeed.scss"
import Section from "@/layouts/Section/Section"
import InstagramCard from "@/components/ui/InstagramCard/InstagramCard"
import Button from "@/components/ui/Button/Button"
import Icon from "@/components/ui/Icon/Icon"

const InstagramFeed = () => {

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
         className="instagram-feed"
         title="Check out @foodieland on Instagram"
         titleId="instagram-feed"
         description="Follow @foodieland for more delicious recipes, cooking inspiration, and food ideas. Discover new dishes, get inspired, and see what’s cooking in our kitchen."
         isHeaderVertical
         titleEffect
      >
         <div className="instagram-feed__grid">
            {imageCard.map((image, index) => (
               <InstagramCard {...image} key={index} />
            ))}
         </div>

         <div className="button-wrapper">
            <Button href="/"
               className="instagram-feed__button"
            >
               Visit Our Instagram
               <Icon name="instagram" hasFill />
            </Button>
         </div>

      </Section>
   )
}

export default InstagramFeed