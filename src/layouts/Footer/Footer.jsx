import "./Footer.scss"
import Logo from "@/components/ui/Logo/Logo"
import Socials from "@/components/ui/Socials/Socials"

const Footer = () => {

   const footerLinks = [
      {
         links: 'Recipes',
         href: '/Recipes'
      },
      {
         links: 'Blog',
         href: '/Blog'
      },
      {
         links: 'Contact',
         href: '/Contact'
      },
      {
         links: 'About-Us',
         href: '/AboutUs'
      },
   ]

   return (
      <footer className="footer">

         <div className="footer-inner">
            <div className="footer-desc">
               <Logo />
               <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit,
               </p>
            </div>

            <div className="footer-links">
               <ul className="footer-list">
                  {footerLinks.map(({ links, href }, index) => (
                     <li key={index}>
                        <a href={href}>{links}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="footer-extra container">
            <p className="footer-copyright">© 2020 Flowbase. Powered by <span>Webflow</span>
            </p>
            <Socials />
         </div>
      </footer>
   )
}

export default Footer
