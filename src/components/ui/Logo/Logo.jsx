import "./Logo.scss"
import classNames from "classnames"

const Logo = (props) => {
   const title = "Home"

   const { className,
      loading = "lazy"
   } = props

   return (
      <a
         href="/"
         className={classNames(className, "logo")}
         title={title}
         aria-label={title}
      >
         <img
            className="logo-image"
            src="/src/assets/icons/logo/Foodieland.png"
            alt=""
            height={30}
            width={110}
            loading={loading}
         />
      </a>
   )
}

export default Logo
