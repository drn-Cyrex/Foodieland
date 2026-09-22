import { getAllRecipes } from "./getAll";

export function getLikedRecipes() {
   return getAllRecipes().filter((recipe) => recipe.isLiked);
}
