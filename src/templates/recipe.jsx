import recipes from "@/sections/Recipes/data-v2.json";

export default function Page(props) {
  // const slug = props.data.slug;

   const recipe = recipes.find(
      (item) =>
         item.title.toLowerCase().replaceAll(" ", "-") === slug
   );

   return (
      <main>
         <h1>{recipe.title}</h1>
         {/* <p>Slug: {slug}</p>
         <p>Path: {props.path}</p> */}
      </main>
   );
}
