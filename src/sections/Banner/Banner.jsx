import './Banner.scss'
import { Image } from 'minista'
import Section from '@/layouts/Section/Section'

const Banner = () => {

   return (
      <Section
         className="banner container"
         title="Everyone can be a
               chef in their own kitchen"
         titleId="banner"
         description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
         linkLabel='Learn More'
      >
         <div className='banner__inner'>
            <Image className='banner__image-cook' src='/src/assets/images/q1.png' />

            <Image className='banner__image-meat' src='/src/assets/images/categories/meat.png' />
            <Image className='banner__image-onion' src='/src/assets/images/categories/onion.png' />
            <Image className='banner__image-vegan' src='/src/assets/images/categories/vegan.png' />
            <Image className='banner__image-tomato' src='/src/assets/images/categories/tomato.png' />
         </div>
      </Section>
   )
}

export default Banner