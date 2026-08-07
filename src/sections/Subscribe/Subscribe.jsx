import "./Subscribe.scss"
import Section from "@/layouts/Section/Section"
import Button from "@/components/ui/Button/Button"

const Subscribe = () => {


   return (
      <Section
         className="subscribe container"
         title="Deliciousness to your inbox"
         titleId="subscribe"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
         isHeaderVertical
      >
         <form className="form">

            <div className="form-group">
               <span></span>
               <input className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  required
               />
               <label className="form-label">
                  Your email address...
               </label>
               <Button>Subscribe</Button>
            </div>

         </form>

      </Section>
   )
}

export default Subscribe