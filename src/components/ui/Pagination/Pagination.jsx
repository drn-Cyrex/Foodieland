import './Pagination.scss'

const Pagination = ({ type }) => {



   return (
      <div
         className="pagination"
         data-pagination={type}
      />
   )
}

export default Pagination