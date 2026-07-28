import "./InstagramCard.scss"
import { Image } from "minista"
import Icon from "../Icon/Icon"

const InstagramCard = (props) => {

   const {
      imgSrc,
   } = props

   return (
      <div className="instagram__card">
         <header className="instagram__card-header">
            <Image className="instagram__card-logo"
               src="/src/assets/images/instagram-logo-card.svg" />
            <div>
               <h4 className="instagram__card-title">
                  Foodieland
               </h4>
               <span className="instagram__card-location">
                  Tokyo: Japan
               </span>
            </div>
         </header>

         <div className="instagram__card--body">

            <div className="instagram__card-img">
               <Image src={imgSrc} />
            </div>

            <div className="instagram__card-icon">
               <Icon name={'like'} />
               <Icon name={'comment'} />
               <Icon name={'share'} />
               <Icon name={'save'} />
            </div>

         </div>
      </div>
   )
}

export default InstagramCard