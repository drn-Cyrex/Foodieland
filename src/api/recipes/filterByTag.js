import { allRecipes } from "./index";

// Фильтр по тегу
export function filterByTag(tag) {
   return getAllRecipes().filter((recipe) =>
      recipe.tags?.some((t) => t.label === tag),
   );
}
