import Logo from "@/components/ui/Logo/Logo"
import "./Footer.scss"
//import Socials from "@/components/ui/Socials/Socials"

const Footer = () => {

   // footerLinks = [
   //    {
   //       title: 'Recipes',
   //       href: '/Recipes'
   //    },
   //    {
   //       item: 'Blog',
   //       href: '/Blog'
   //    },
   //    {
   //       item: 'Contact',
   //       href: '/Contact'
   //    },
   //    {
   //       item: 'About-Us',
   //       href: '/AboutUs'
   //    },
   // ]

   return (
      <footer className="footer">

         <div className="footer-inner container">
            <div>
               <Logo />
               <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit,
               </p>
            </div>

            <div className="footer-links">
               {/* {footerLinks.map(({ title, href }, index) => (
                  <ul key={index}>
                     <li>
                        <a href={href}>{title}</a>
                     </li>
                  </ul>
               ))} */}
            </div>
         </div>

         <div></div>
      </footer>
   )
}

export default Footer
