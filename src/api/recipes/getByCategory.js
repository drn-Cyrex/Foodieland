import { allRecipes } from "./index";

// Получить рецепты по категории
export function getRecipesByCategory(category) {
   return allRecipes[category] || [];
}
