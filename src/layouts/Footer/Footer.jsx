import "./Footer.scss"
import Logo from "@/components/ui/Logo/Logo"
import Socials from "@/components/ui/Socials/Socials"
import getPageUrl from "@/utils/getPageUrl"

const Footer = () => {
   const footerLinks = [
      {
         label: "Recipes",
         href: "/recipes",
      },
      {
         label: "Blog",
         href: "/blog",
      },
      {
         label: "Contact",
         href: "/contact",
      },
   ]

   return (
      <footer className="footer">
         <div className="footer__main container">
            <div className="footer__brand">
               <Logo />

               <p className="footer__description">
                  Discover delicious recipes, cooking inspiration, and ideas
                  to make every meal a little more special.
               </p>
            </div>

            <nav
               className="footer__navigation" aria-label="Footer navigation"
            >
               <span className="footer__navigation-title">
                  Explore
               </span>

               <ul className="footer__list">
                  {footerLinks.map(({ label, href }) => (
                     <li key={href}>
                        <a href={getPageUrl(href)}>
                           {label}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>

            <div className="footer__social">
               <span className="footer__navigation-title">
                  Follow us
               </span>

               <Socials />
            </div>
         </div>

         <div className="footer__bottom container">
            <p className="footer__copyright">
               © 2026 Foodieland. All rights reserved.
            </p>

            <span className="footer__signature" aria-hidden="true">
               FOODIELAND
            </span>
         </div>

         <div className="footer__decor" aria-hidden="true">
            FOODIELAND
         </div>
      </footer>
   )
}

export default Footer
