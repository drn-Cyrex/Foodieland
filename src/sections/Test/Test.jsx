import Section from "@/layouts/Section/Section"
import RecipeCardV2 from "@/components/ui/RecipeCardV2/RecipeCardV2"
import items from "./data.json"

const Test = () => {

   return (
      <Section
         className="test"
         title="test"
      >
         {items.map((item) => {
            const { ...rest } = item

            return (
               <RecipeCardV2 {...rest} key={item.title} />
            )
         })}
      </Section>
   )
}

export default Test