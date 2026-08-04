import Section from "@/layouts/Section/Section"
import "./Subscribe.scss"

const Subscribe = () => {


   return (
      <Section
         className="subscribe container"
         title="Deliciousness to your inbox"
         titleId="subscribe"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
         isHeaderVertical
      >
         <div className="subscribe-input">
            <input type="email" name="" id="" placeholder="Your email address..." />
         </div>

      </Section>
   )
}

export default Subscribe