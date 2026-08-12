import './Socials.scss'
import Icon from '../Icon/Icon'
import clsx from 'clsx'


const Socials = (props) => {
   const {
      className,
   } = props

   const links = [
      {
         label: 'Facebook',
         icon: 'facebook',
      },
      {
         label: 'Twitter',
         icon: 'twitter',
      },
      {
         label: 'Instagram',
         icon: 'instagram',
      },
   ]

   return (
      <div
         className={clsx('soc1als', className)}
      >
         <ul className="soc1als__list">
            {links.map(({ label, icon }, index) => (
               <li className="soc1als__item" key={index}>
                  <a
                     className="soc1als__link"
                     href="/"
                     title={label}
                  >
                     <span className="visually-hidden">{label}
                     </span>
                     <Icon name={icon} hasFill />
                  </a>
               </li>
            ))}
         </ul>
      </div>
   )
}


export default Socials