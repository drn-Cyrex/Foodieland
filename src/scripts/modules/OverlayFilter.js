const overlayFilterBtn = document?.querySelector(
   "[data-js-overlay-filter-button]",
);

const overlayFilter = document?.querySelector("[data-js-overlay-filter]");

if (overlayFilterBtn && overlayFilter) {
   overlayFilterBtn.addEventListener("click", () => {
      overlayFilter.classList.toggle("is-active-filter");
   });
}
