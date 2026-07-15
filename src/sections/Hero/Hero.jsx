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
                     title='Spicy delicious chicken wings'
                     TitleTag='h2'
                     description='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
                     tags={[
                        {
                           iconName: 'timer',
                           label: '30 Minutes'
                        },
                        {
                           iconName: 'fork-knife',
                           label: 'Chicken'
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
                     title='Spicy delicious chicken wings'
                     TitleTag='h1'
                     description='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
                     tags={[
                        {
                           iconName: 'timer',
                           label: '30 Minutes'
                        },
                        {
                           iconName: 'fork-knife',
                           label: 'Chicken'
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
                     title='Spicy delicious chicken wings'
                     TitleTag='h2'
                     description='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
                     tags={[
                        {
                           iconName: 'timer',
                           label: '30 Minutes'
                        },
                        {
                           iconName: 'fork-knife',
                           label: 'Chicken'
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
