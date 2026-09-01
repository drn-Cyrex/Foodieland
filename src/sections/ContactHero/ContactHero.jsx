import "./ContactHero.scss"
import Section from "@/layouts/Section/Section"
import { Image } from "minista"
import FormField from "@/components/ui/FormField/FormField"
import Select from "@/components/ui/Select/Select"
import Button from "@/components/ui/Button/Button"

const ContactHero = () => {

   const items = [
      "text 1", "text 2", "text 3", "text 4", "text 5",
   ]

   return (
      <Section
         className='contact-hero container'
         title="Contact us"
         titleId="contact-hero"
         isHeaderVertical
      >
         <div className="contact-hero__wrapper">
            <div className="contact-hero__image">
               <Image src="/src/assets/images/contact-c2.png" />
            </div>

            <form className="contact-form" action="">
               <FormField
                  type="text"
                  text="Enter your name..."
                  isFor="user-name"
               />
               <FormField
                  type="email"
                  text="Your email address..."
                  isFor="user-mail"
               />
               <FormField
                  type="text"
                  text="Enter subject..."
                  isFor="subject"
               />

               <FormField
                  type="text"
                  text="Advertising"
                  isFor="advertising"
               >
                  <Select
                     isFor="select-advertising"
                     options={[
                        { value: "Advertising--1" },
                        { value: "Advertising--2" },
                        { value: "Advertising--3" },
                        { value: "Advertising--4" },
                        { value: "Advertising--5" },
                        { value: "Advertising--6" },
                     ]}
                  />
               </FormField>

               <FormField
                  className="textarea"
                  type="textarea"
                  text="Enter your messages..."
                  isFor="message"
               />

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