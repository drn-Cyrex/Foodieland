// api/getById.js
import { allRecipes } from "./index";

export const getRecipeById = (id) => {
   for (const category of Object.values(allRecipes)) {
      const recipe = category.find((r) => r.id === id);
      if (recipe) return recipe;
   }
   return null;
};