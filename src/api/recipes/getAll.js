import { allRecipes } from "./index";

// Получить все рецепты
export function getAllRecipes() {
   return Object.values(allRecipes).flat();
}
