import './Section.scss'
import clsx from 'clsx'
import Button from '@/components/ui/Button/Button'
import getPageUrl from '@/utils/getPageUrl'

const Section = (props) => {
   const {
      className,
      title,
      titleId,
      titleEffect,
      isHeaderVertical,
      description,
      children,
      linkLabel,
      linkPage
   } = props

   return (
      <section
         className={clsx(className, 'section')}
         aria-labelledby={titleId}
      >
         <header
            className={clsx(
               'section__header',
               isHeaderVertical && 'section__header--vertical'
            )}
         >
            <h2
               className={clsx(
                  'section__title',
                  titleEffect && 'title-effect')}
               id={titleId}
            >
               {title}
            </h2>

            {description && (
               <div className="section__description">
                  <p>{description}</p>
               </div>
            )}

            {linkLabel && (
               <div>
                  <Button
                     href={getPageUrl(linkPage)}
                     mode="secondary"
                     className="section__link"
                  >
                     {linkLabel}
                  </Button>
               </div>
            )}
         </header>

         <div className="section__body">
            {children}
         </div>
      </section>
   )
}

export default Section