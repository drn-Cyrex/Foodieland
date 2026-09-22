import { getQuickRecipes } from "./getQuick";

export function getQuickRandom(count = 6, maxTime = 10) {
   const quick = getQuickRecipes(maxTime);

   const shuffled = quick.sort(() => Math.random() - 0.5);

   return shuffled.slice(0, count);
}
