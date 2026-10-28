import "./Logo.scss"
import classNames from "classnames"
import { Image } from "minista"


const Logo = (props) => {

   const title = "Home"

   const baseUrl = import.meta.env.BASE_URL

   const {
      className
   } = props

   return (
      <a
         href={baseUrl}
         className={classNames(className, "logo")}
         title={title}
         aria-label={title}
      >
         <Image
            className="logo-image"
            src="/src/assets/icons/logo/Foodieland.png"
         />
      </a>
   )
}

export default Logo
