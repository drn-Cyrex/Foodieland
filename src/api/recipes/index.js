import recipesBreakfast from "../../data/recipes-breakfast.json";
import recipesDessert from "../../data/recipes-dessert.json";
import recipesLunch from "../../data/recipes-lunch.json";
import recipesMeat from "../../data/recipes-meat.json";
import recipesVegan from "../../data/recipes-vegan.json";

// перечень тэгов в рецептах
// {
//   "quick": "Быстрые",
//   "healthy": "Здоровые",
//   "sweet": "Сладкие",
//   "vegan": "Веган",
//   "meat": "Мясо/рыба",
//   "comfort": "Сытные",
//   "popular": "Популярные"
// }

export const allRecipes = {
   breakfast: recipesBreakfast,
   dessert: recipesDessert,
   lunch: recipesLunch,
   meat: recipesMeat,
   vegan: recipesVegan,
};

export { getAllRecipes } from "./getAll";
export { filterRecipes } from "./filter";
export { getRecipesByCategory } from "./getByCategory";
export { getRandomRecipes } from "./getRandom";
export { getLikedRecipes } from "./getLiked";
export { getLikedRandom } from "./getLikedRandom";
export { getQuickRecipes } from "./getQuick";
export { getQuickRandom } from "./getQuickRandom";



