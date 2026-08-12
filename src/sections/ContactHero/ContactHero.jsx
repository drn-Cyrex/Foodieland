import "./ContactHero.scss"
import Section from "@/layouts/Section/Section"
import ContactForm from "@/components/ui/ContactForm/ContactForm"
import { Image } from "minista"


const ContactHero = () => {
   return (
      <Section
         className='contact-hero container'
         title="Contact us"
         titleId="contact-hero"
         isHeaderVertical
      >
         <div className="contact-hero__wrapper">
            <Image src="/src/assets/images/q-contact.png" />
            <ContactForm/>
         </div>
      </Section>
   )
}

export default ContactHero