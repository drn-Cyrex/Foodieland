import { allRecipes } from "./index";

// Фильтр по типу (если добавишь type)
export function filterByType(type) {
   return getAllRecipes().filter((recipe) => recipe.type === type);
}
