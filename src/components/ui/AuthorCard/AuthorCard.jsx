import './AuthorCard.scss'
import clsx from 'clsx'
import getAssetUrl from '@/utils/getAssetUrl'

const AuthorCard = (props) => {
   const {
      className,
      imgSrc,
      alt,
      name,
      date = {},
   } = props

   return (
      <article className={clsx('author-card', className)}>
         <img
            className="author-card__image"
            src={getAssetUrl(imgSrc)}
            alt={alt || name}
         />

         <div className="author-card__body">
            <p className="author-card__name">{name}</p>

            {date?.dateTime && (
               <time
                  className="author-card__date"
                  dateTime={date.dateTime}
               >
                  {date.label}
               </time>
            )}
         </div>
      </article>
   )
}

export default AuthorCard