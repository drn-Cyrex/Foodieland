import "./Field.scss"
import Button from "@/components/ui/Button/Button"

const Field = (props) => {

   const {
      mail,
      type,
      name,
      id,
      
   } = props


   return (
      <form className="form">
         {mail && (
            <div className="form-group">
               <input className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  required
               />
               <label className="form-label">
                  Your email address...
               </label>
               <span className="form-border-top"></span>
               <span className="form-border-bottom"></span>
               <Button>Subscribe</Button>
            </div>
         )}

      </form>
   )
}

export default Field