import './Grid.scss'
import clsx from 'clsx'

const Grid = (props) => {

   const {
      className,
      children,
      columns = 1,
   } = props


   return (
      <ul
         // className={clsx(`grid grid--${columns}`, className)}
         className={clsx(`grid grid--${columns}`, className)}
      >
         {children.map((child, index) => (
            <li
               className='grid-item'
               key={index}
            >
               {child}
            </li>
         ))}
      </ul>
   )
}

export default Grid