import { getAllRecipes } from "./getAll";

export function getQuickRecipes(maxTime = 10) {
   return getAllRecipes().filter((recipe) => recipe.time <= maxTime);
}
