document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll("[data-filter]");
   const cards = document.querySelectorAll(".rcp-card-standard");

   if (!buttons.length || !cards.length) return;

   buttons.forEach((button) => {
      button.addEventListener("click", () => {
         const filter = button.dataset.filter;

         // active button
         buttons.forEach((btn) => btn.classList.remove("filter-active"));

         button.classList.add("filter-active");

         cards.forEach((card) => {
            if (filter === "all") {
               card.style.display = "";
               return;
            }

            const category = card.dataset.category;
            const tags = card.dataset.tags.split(",");

            const match = category === filter || tags.includes(filter);

            card.style.display = match ? "" : "none";
         });
      });
   });
});

