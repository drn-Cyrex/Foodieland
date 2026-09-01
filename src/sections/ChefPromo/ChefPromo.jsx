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
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
         linkLabel='Learn More'
      >
         <div className='chef-wrapper'>
            <Image className='chef-promo__image-cook' src='/src/assets/images/q2.png' />

            <Image className='chef-promo__image-meat' src='/src/assets/images/categories/meat.png' />
            <Image className='chef-promo__image-onion' src='/src/assets/images/categories/onion.png' />
            <Image className='chef-promo__image-vegan' src='/src/assets/images/categories/vegan.png' />
            <Image className='chef-promo__image-tomato' src='/src/assets/images/categories/tomato.png' />
         </div>
      </Section>
   )
}

export default ChefPromo