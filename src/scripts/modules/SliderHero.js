import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const initHeroSlider = () => {
   const heroSlider = document.querySelector(".hero.swiper");

   

   if (!heroSlider) {
      return;
   }

   new Swiper(heroSlider, {
      modules: [EffectCoverflow],

      speed: 800,
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 20,
      initialSlide: 1,

      effect: "coverflow",

      coverflowEffect: {
         depth: 0,
         rotate: 30,
         slideShadows: true,
         stretch: 50,
      },
   });
};

export default initHeroSlider;
