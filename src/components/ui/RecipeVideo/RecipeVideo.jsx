import "./RecipeVideo.scss"

const RecipeVideo = (props) => {
   const {
      poster,
      sources = []
   } = props

   return (
      <div className="recipe-hero__video">
         <video
            className="recipe-hero__video-player"
            poster={poster}
            controls
            playsInline
            preload="metadata"
         >
            {sources.map(({ src, type }) => (
               <source
                  key={src}
                  src={src}
                  type={type}
               />
            ))}

            <p>Video not available</p>
         </video>
      </div>
   )
}

export default RecipeVideo
