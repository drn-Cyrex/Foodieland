import "./Subscribe.scss"
import Section from "@/layouts/Section/Section"
import Field from "@/components/ui/Field/Field"


const Subscribe = () => {
   return (
      <Section
         className="subscribe container"
         title="Deliciousness to your inbox"
         titleId="subscribe"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
         isHeaderVertical
      >
         <Field mail />
      </Section>
   )
}

export default Subscribe