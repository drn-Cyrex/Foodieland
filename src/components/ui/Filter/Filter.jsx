import "./Filter.scss"
import { Image } from "minista"


const Filter = (props) => {
   const {
      img
   } = props

   return (
      <>
         <div className="overlay-filter" data-js-overlay-filter="">

            <h2 className="filter-title">
               Filter
            </h2>

            <div>
               <button
                  className="filter-button filter-active"
                  data-filter="all"
               >
                  All <span></span>
               </button>
               <button
                  className="filter-button" data-filter="breakfast">
                  breakfast<span></span>
               </button>
               <button
                  className="filter-button" data-filter="dessert">
                  dessert<span></span>
               </button>
               <button
                  className="filter-button" data-filter="lunch">
                  lunch<span></span>
               </button>
               <button
                  className="filter-button" data-filter="meat">
                  meat<span></span>
               </button>
               <button
                  className="filter-button" data-filter="vegan">
                  vegan<span></span>
               </button>
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



