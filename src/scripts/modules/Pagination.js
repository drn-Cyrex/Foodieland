const itemsPerPage = 9

function initPagination() {

   const cards = document.querySelectorAll("[data-pagination-item]")
   const pagination = document.querySelector("[data-pagination]")
   const filterButtons = document.querySelectorAll("[data-filter]")


   // Если на странице нет пагинации —
   // ничего не делаем
   if (!pagination) {
      return
   }


   let currentPage = 1
   let currentCategory = "all"


   function getFilteredCards() {

      if (currentCategory === "all") {
         return Array.from(cards)
      }

      return Array.from(cards).filter((card) => {
         return card.dataset.category === currentCategory
      })
   }


   function getTotalPages(filteredCards) {
      return Math.ceil(filteredCards.length / itemsPerPage)
   }


   function renderPage(page) {

      const filteredCards = getFilteredCards()
      const totalPages = getTotalPages(filteredCards)


      // Если после фильтра текущей страницы больше не существует,
      // возвращаемся на первую
      if (page > totalPages && totalPages > 0) {
         page = 1
      }


      currentPage = page


      const startIndex = (page - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage


      // Скрываем все карточки
      cards.forEach((card) => {
         card.hidden = true
      })


      // Показываем карточки текущей страницы
      filteredCards
         .slice(startIndex, endIndex)
         .forEach((card) => {
            card.hidden = false
         })


      renderPagination(totalPages)
   }


   function renderPagination(totalPages) {

      pagination.innerHTML = ""


      // Если страниц 0 или 1 —
      // пагинация не нужна
      if (totalPages <= 1) {
         return
      }


      for (let page = 1; page <= totalPages; page++) {

         const button = document.createElement("button")


         button.type = "button"
         button.textContent = page


         // Активная страница
         button.classList.toggle(
            "is-active",
            page === currentPage
         )


         button.addEventListener("click", () => {
            renderPage(page)
         })


         pagination.append(button)
      }
   }


   function applyFilter(category) {

      currentCategory = category

      // При смене категории
      // всегда начинаем с первой страницы
      currentPage = 1

      renderPage(1)
   }


   filterButtons.forEach((button) => {

      button.addEventListener("click", () => {

         const category = button.dataset.filter

         applyFilter(category)

      })

   })


   // Первая отрисовка
   renderPage(1)
}


initPagination()