import Field from "@/components/ui/Field/Field"
import "./Subscribe.scss"
import Section from "@/layouts/Section/Section"


const Subscribe = () => {
   return (
      <Section
         className="subscribe container"
         title="Deliciousness to your inbox"
         titleId="subscribe"
         description="Get fresh recipes, cooking inspiration, and delicious ideas delivered straight to your inbox. Subscribe and never miss a new recipe from Foodieland."
         isHeaderVertical
      >
         <Field
            label="Your email address..."
            type="email"
            name="subscribe-mail"
            id="subscribe-mail"
            ariaLabel="mail"
         />
      </Section>
   )
}

export default Subscribe


