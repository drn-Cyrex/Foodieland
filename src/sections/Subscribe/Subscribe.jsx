import "./Subscribe.scss"
import Field from "@/components/ui/Field/Field"
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

         <form className="subscribe-form__mail" action="">
            <Field
               label="Your email address..."
               type="email"
               name="subscribe-mail"
               id="subscribe-mail"
               ariaLabel="mail"
               imageSrc="/src/assets/icons/mail-arrow-2.png" 
               imageAlt="submitting the form"
            />
         </form>

      </Section>
   )
}

export default Subscribe


