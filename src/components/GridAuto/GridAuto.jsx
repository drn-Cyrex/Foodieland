import "./GridAuto.scss"
import clsx from 'clsx'

const GridAuto = (props) => {

   const {
      className,
      children,
   } = props

   return (
      <div className={clsx('grid-auto', className)}>
         {children}
      </div >
   )
}

export default GridAuto