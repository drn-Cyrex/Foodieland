import './Search.scss'
import Button from '../Button/Button'

const Search = () => {

   return (
      <form
         action="/search"
         className='search-wrapper'
      >
         <input
            className='search'
            type="search"
            name=""
            id=""
            placeholder=" Search article, news or recipe..."
            required
            results
         />
         <Button
            className="search-button"
            type="button"
         >
            Search
         </Button>
      </form>

   )
}

export default Search