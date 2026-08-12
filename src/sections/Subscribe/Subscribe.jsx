import "./Subscribe.scss"
import Section from "@/layouts/Section/Section"
import FormField from "@/components/ui/FormField/FormField"

const Subscribe = () => {
   return (
      <Section
         className="subscribe container"
         title="Deliciousness to your inbox"
         titleId="subscribe"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
         isHeaderVertical
      >
         <FormField
            className="subscribe__form"
            type="email"
            name="email"
            id="email"
            text="Your email address..."
            button
         />

      </Section>
   )
}

export default Subscribe