import "./Support.scss"
import Section from "@/layouts/Section/Section"
import Field from "@/components/ui/Field/Field"
import { Image } from "minista"


const Support = () => {
   return (
      <Section
         className='support container'
         title="Contact us"
         titleId="contact"
      >
         <div className="support-wrapper">
            <Image src="/src/assets/images/q-contact.png" />
            <Field/>
         </div>
      </Section>
   )
}

export default Support