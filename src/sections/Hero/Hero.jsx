import './Hero.scss'
import HeroContent from '@/components/ui/HeroContent/HeroContent'

const Hero = () => {

   return (
      <section>
         <div className="hero swiper">
            <div className="swiper-wrapper">

               <div className="swiper-slide">
                  <HeroContent
                     category={{
                        imgSrc: '/src/assets/images/scroll.png',
                        label: 'Hot Recipes'
                     }}
                     title='Fragrant chicken grill with haze'
                     TitleTag='h2'
                     description='Juicy chicken legs with a golden brown crust, baked to perfection. Served with lemon, fresh herbs and baked garlic on a stylish dark plate.'
                     tags={[
                        {
                           iconName: 'timer',
                           label: '30 Minutes'
                        },
                        {
                           iconName: 'fork-knife',
                           label: 'Meat'
                        }
                     ]}
                     author={{
                        imgSrc: '/src/assets/images/man.jpg',
                        name: 'John Smith',
                        date: {
                           dateTime: '2022-03-15',
                           label: '15 March 2022'
                        },
                     }}
                  />
               </div>

               <div className="swiper-slide">
                  <HeroContent
                     category={{
                        imgSrc: '/src/assets/images/scroll.png',
                        label: 'Hot Recipes'
                     }}
                     title='The magic of Asian sauce'
                     TitleTag='h1'
                     description='Appetizing chicken pieces topped with a sticky, caramelized sesame sauce. The perfect snack or base for dinner.'
                     tags={[
                        {
                           iconName: 'timer',
                           label: '30 Minutes'
                        },
                        {
                           iconName: 'fork-knife',
                           label: 'Meat'
                        }
                     ]}
                     author={{
                        imgSrc: '/src/assets/images/man.jpg',
                        name: 'John Smith',
                        date: {
                           dateTime: '2022-03-15',
                           label: '15 March 2022'
                        },
                     }}
                  />
               </div>

               <div className="swiper-slide">
                  <HeroContent
                     category={{
                        imgSrc: '/src/assets/images/scroll.png',
                        label: 'Hot Recipes'
                     }}
                     title=' Fundamentals of Taste'
                     TitleTag='h2'
                     description='Garlic, lime, chili and coriander — a classic combination for preparing Asian or Mexican dishes.'
                     tags={[
                        {
                           iconName: 'timer',
                           label: '30 Minutes'
                        },
                        {
                           iconName: 'fork-knife',
                           label: 'Vegan'
                        }
                     ]}
                     author={{
                        imgSrc: '/src/assets/images/man.jpg',
                        name: 'John Smith',
                        date: {
                           dateTime: '2022-03-15',
                           label: '15 March 2022'
                        },
                     }}
                  />
               </div>
            </div>
         </div>

      </section>
   )

}

export default Hero
