import { getAllRecipes } from "./getAll";

export function filterRecipes(filters = {}) {
   const { categories, tags, diet, maxTime, search } = filters;

   return getAllRecipes().filter((r) => {
      if (categories && categories.length && !categories.includes(r.category)) {
         return false;
      }

      if (tags && tags.length && !tags.some((t) => r.tags?.includes(t))) {
         return false;
      }

      if (diet && r.diet !== diet) {
         return false;
      }

      if (maxTime && r.time > maxTime) {
         return false;
      }

      if (search && !r.title.toLowerCase().includes(search.toLowerCase())) {
         return false;
      }

      return true;
   });
}
