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
      >
         <div className='banner__image'>
            
         </div>

      </Section>
   )
}

export default Banner