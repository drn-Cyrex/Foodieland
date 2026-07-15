import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const swiper = new Swiper(".hero.swiper", {
   modules: [EffectCoverflow],
   speed: 800,
   centeredSlides: true,
   slidesPerView: "1.2",
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
