import "./ContactHero.scss"
import Section from "@/layouts/Section/Section"
import { Image } from "minista"
import FormField from "@/components/ui/FormField/FormField"
import Select from "@/components/ui/Select/Select"
import Button from "@/components/ui/Button/Button"

const ContactHero = () => {

   return (
      <Section
         className="contact-hero container"
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
                  id="user-name"
                  required
                  minLength={2}
               />

               <FormField
                  type="email"
                  text="Your email address..."
                  id="user-mail"
                  required
               />

               <FormField
                  type="text"
                  text="Enter subject..."
                  id="subject"
                  required
                  minLength={3}
               />


               <Select
                  id="reason"
                  name="reason"
                  label="Reason for contacting us"
                  options={[
                     {
                        value: "advertising",
                        text: "Advertising",
                     },
                     {
                        value: "partnership",
                        text: "Partnership",
                     },
                     {
                        value: "recipe",
                        text: "Recipe submission",
                     },
                     {
                        value: "feedback",
                        text: "Feedback",
                     },
                     {
                        value: "other",
                        text: "Other",
                     },
                  ]}
               />

               <FormField
                  className="textarea"
                  type="textarea"
                  text="Enter your message..."
                  id="message"
                  required
                  minLength={10}
                  rows={6}
               />

               <Button type="submit" disabled>
                  Submit
               </Button>

            </form>

         </div>
      </Section>
   )
}

export default ContactHero