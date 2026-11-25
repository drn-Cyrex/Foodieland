import "./Subscribe.scss"
import Section from "@/layouts/Section/Section"
import Button from "@/components/ui/Button/Button"

const Subscribe = () => {
   return (
      <Section
         className="subscribe container"
         title="Deliciousness to your inbox"
         titleId="subscribe"
         description="Get fresh recipes, cooking inspiration, and delicious ideas delivered straight to your inbox. Subscribe and never miss a new recipe from Foodieland."
         isHeaderVertical
      >
         <form className="subscribe-form" action="">
            <input
               type="email"
               name="subscribe-mail"
               id="subscribe-mail"
               placeholder="Your email address..."
            />

            <Button type="button">
               Subscribe
            </Button>
         </form>

      </Section>
   )
}

export default Subscribe