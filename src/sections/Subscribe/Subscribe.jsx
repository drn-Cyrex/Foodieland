import "./Subscribe.scss"
import Section from "@/layouts/Section/Section"
import FormField from "@/components/ui/FormField/FormField"

const Subscribe = () => {
   return (
      <Section
         className="subscribe container"
         title="Deliciousness to your inbox"
         titleId="subscribe"
         description="Get fresh recipes, cooking inspiration, and delicious ideas delivered straight to your inbox. Subscribe and never miss a new recipe from Foodieland."
         isHeaderVertical
      >
         <form action="">
            <FormField
               className="subscribe__form"
               type="email"
               autoComplete="off"
               text="Your email address..."
               button
            />
         </form>

      </Section>
   )
}

export default Subscribe