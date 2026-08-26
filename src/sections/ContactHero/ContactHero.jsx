import "./ContactHero.scss"
import Section from "@/layouts/Section/Section"
import { Image } from "minista"
import FormField from "@/components/ui/FormField/FormField"
import Select from "@/components/ui/Select/Select"
import Button from "@/components/ui/Button/Button"

const ContactHero = () => {

   const items = [
      "text", "text", "text", "text", "text",
   ]

   return (
      <Section
         className='contact-hero container'
         title="Contact us"
         titleId="contact-hero"
         isHeaderVertical
      >
         <div className="contact-hero__wrapper">
            <Image
               className="contact-hero__image"
               src="/src/assets/images/q-contact.png"
            />

            <form action="">
               <FormField
                  type="name"
                  label="Enter your name..."
               />
               <FormField
                  type="text"
                  label="Enter subject..."
               />
               <FormField
                  type="email"
                  label="Your email address..."
               />

               <FormField
                  type="type"
                  label="Advertising"
               >
                  <Select>
                     {items.map((item, index) => (
                        <option value={item} key={index}>
                           {item}
                        </option>
                     ))}
                  </Select>
               </FormField>

               <Button
                  className="form-button" type="button">
                  Submit
               </Button>
            </form>
         </div>
      </Section>
   )
}

export default ContactHero