import { allRecipes } from "./index";

export const getAllRecipes = () => {
   const items = Object.values(allRecipes).flat();

   return [...items].sort((a, b) =>
      (a.title ?? a.name ?? "").localeCompare(b.title ?? b.name ?? "", "ru", {
         sensitivity: "base",
      }),
   );
};
