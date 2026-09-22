import './Tags.scss'
import Icon from '@/components/ui/Icon/Icon'
import clsx from 'clsx'

const Tags = (props) => {
   const {
      className,
      items = [],
      /**
       * '' (default) | 'rounded'
       */
      type = '',

   } = props

   if (items.length === 0) {
      return null
   }

   return (
      <div
         className={clsx(
            'tags',
            type === 'rounded' && 'tags--rounded',
            className
         )}
      >
         <ul className="tags__list">
            {items.map(({ iconName, label }, index) => (
               <li className="tags__item" key={index}>
                  <Icon name={iconName} hasFill />
                  <span className="tags__label">{label}</span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Tags
