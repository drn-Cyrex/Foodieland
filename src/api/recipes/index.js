import recipesBreakfast from "../../data/recipes-breakfast.json";
import recipesDessert from "../../data/recipes-dessert.json";
import recipesLunch from "../../data/recipes-lunch.json";
import recipesMeat from "../../data/recipes-meat.json";
import recipesVegan from "../../data/recipes-vegan.json";

export const allRecipes = {
   breakfast: recipesBreakfast,
   dessert: recipesDessert,
   lunch: recipesLunch,
   meat: recipesMeat,
   vegan: recipesVegan,
};

export { getAllRecipes } from "./getAll";
export { getRecipesByCategory } from "./getByCategory";
export { filterRecipes } from "./filter";
export { getRandomRecipes } from "./getRandom";
export { getLikedRecipes } from "./getLiked";
export { getLikedRandom } from "./getLikedRandom";
export { getQuickRecipes } from "./getQuick";
export { getQuickRandom } from "./getQuickRandom";
