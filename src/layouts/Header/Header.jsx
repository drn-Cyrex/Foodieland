import './Header.scss'
import Logo from '@/components/ui/Logo/Logo'
import classNames from 'classnames'
import Socials from '@/components/ui/Socials/Socials'
import ButtonDropdown from '@/components/ui/ButtonDropdown/ButtonDropdown'


const Header = (props) => {

   const { url } = props

   const baseUrl = import.meta.env.BASE_URL;

   const menuItems = [
      {
         label: "Home",
         href: baseUrl,
      },
      {
         label: "Recipes",
         href: `${baseUrl}recipes`,
      },
      {
         label: "Blog",
         href: `${baseUrl}blog`,
      },
      {
         label: "Contact",
         href: `${baseUrl}contact`,
      },
   ]


   return (
      <>
         <header className="header" data-js-header-hidden="">

            <div className='header-wrapper'>
               <Logo />
               <div className="line line__hover"></div>
               <div className="line line__active"></div>

               <nav className="header__nav" data-js-overlay-menu-mobile="">
                  <ul className="header__list">
                     {menuItems.map(({ label, href }, index) => (
                        <li key={index}>
                           <a
                              className={classNames("", "header__link", {
                                 "is-active-page": href === url,
                              })}
                              href={href}
                           >
                              {label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </nav>
               <Socials className='header__soc1als' />
               <ButtonDropdown />
            </div>

         </header>
      </>
   )
}

export default Header