import { getAllRecipes } from "./getAll";

export function getRandomRecipes(count = 3) {
   return getAllRecipes()
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
}
