import './Search.scss'
import Button from '../Button/Button'

const Search = () => {

   return (
      <form
         className="search-form"
      //onSubmit={handleSubmit}
      >
         <label
            className="visually-hidden"
            htmlFor="blog-search"
         >
            Search
         </label>
         <input
            className="search-form__input"
            type="search"
            name="search"
            id="blog-search"
            placeholder="Search article, news or recipe..."
            required
         />

         <Button
            className="search-form__button"
            type="submit"
         >
            Search
         </Button>
      </form>

   )
}

export default Search