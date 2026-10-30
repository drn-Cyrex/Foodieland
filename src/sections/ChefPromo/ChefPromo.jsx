import './ChefPromo.scss'
import Section from '@/layouts/Section/Section'
import { Image } from 'minista'

const ChefPromo = () => {

   return (
      <Section
         className="chef-promo container"
         title="Everyone can be a
               chef in their own kitchen"
         titleId="chef-promo"
         description="You don’t need to be a professional chef to make something delicious. Find inspiring recipes, try new flavors, and enjoy the simple pleasure of cooking at home."
         linkLabel='Learn More'
         titleEffect
      >
         <div className='chef-wrapper'>
            <Image className='chef-promo__image-cook'
               src='/src/assets/images/q2.png' />

            <Image className='chef-promo__image-meat'
               src='/src/assets/images/categories/meat.png' />
            <Image className='chef-promo__image-onion' src='/src/assets/images/categories/onion.png' />
            <Image className='chef-promo__image-vegan' src='/src/assets/images/categories/vegan.png' />
            <Image className='chef-promo__image-tomato' src='/src/assets/images/categories/tomato.png' />
         </div>
      </Section>
   )
}

export default ChefPromo