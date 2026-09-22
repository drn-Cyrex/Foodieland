import { getLikedRecipes } from "./getLiked";

export function getLikedRandom(count = 3) {
   const liked = getLikedRecipes();

   // Перемешиваем массив
   const shuffled = liked.sort(() => Math.random() - 0.5);

   // Возвращаем первые N элементов
   return shuffled.slice(0, count);
}
