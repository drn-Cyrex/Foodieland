import { Image } from "minista"
import "./Filter.scss"


const Filter = (props) => {
   const {
      img
   } = props

   return (
      <>
         <div className="overlay-filter" data-js-overlay-filter="">

            <h2 className="filter-title">
               Filter by type
            </h2>

            <div>
               <button
                  className="filter-button filter-active" data-filter="popular">
                  popular <span></span>
               </button>
               <button
                  className="filter-button"
                  data-filter="breakfast">
                  Breakfast <span></span>
               </button>
               <button
                  className="filter-button"
                  data-filter="vegan">
                  Vegan <span></span>
               </button>
               <button
                  className="filter-button"
                  data-filter="meat">
                  Meat <span></span>
               </button>
               {/* <button
                  className="filter-button"
                  data-filter="dessert">
                  Dessert <span></span>
               </button>
               <button
                  className="filter-button"
                  data-filter="lunch">
                  Lunch <span></span>
               </button>
               <button
                  className="filter-button"
                  data-filter="chocolate">
                  Chocolate <span></span>
               </button> */}
            </div>

            {img && (
               <Image src="/src/assets/images/q12.png" />
            )}

         </div>

         <button className="overlay-filter__btn"
            data-js-overlay-filter-button=""
         >
            filter
         </button>
      </>

   )
}

export default Filter