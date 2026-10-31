import "./RecipeVideo.scss"
import getAssetUrl from "@/utils/getAssetUrl"

const RecipeVideo = (props) => {
   const {
      poster,
      sources = [],
   } = props

   return (
      <div className="recipe-hero__video">
         <video
            className="recipe-hero__video-player"
            poster={getAssetUrl(poster)}
            controls
            playsInline
            preload="metadata"
         >
            {sources.map(({ src, type }) => (
               <source
                  key={src}
                  src={getAssetUrl(src)}
                  type={type}
               />
            ))}

            <p>Video not available</p>
         </video>
      </div>
   )
}

export default RecipeVideo
