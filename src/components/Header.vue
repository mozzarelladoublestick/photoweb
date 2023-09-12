<script>


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
  mounted() {
    // Initialize Swiper when the component is mounted
    this.initSwiper();

    
  },
  methods: {
    initSwiper() {
      const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination, EffectFade],
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        keyboard: {
      enabled: true,
        onlyInViewport: true,
       },
        clickable: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },

      });
      document.querySelector('.swiper-container').addEventListener('click', () => {
     swiper.slideNext();
      },
      
      );

    },
  },
  
};


</script>

<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
   <div class="swiper-slide">  <img class="swiper-img"  src="../assets/cover/mountain_hochjoch.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"> <button class="swiper-button-prev"></button><button class="swiper-button-next"></button><h3>MONTAFON, VORARLBERG</h3><h1>Up & Up</h1><p>explore my outdoor photography</p><img class="h-12 w-12 m-4" src="../assets/icons/play.svg"></div><div class="absolute text-white bottom-2 left-14 md:left-auto md:right-4"><div class="flex m-2 md:m-4 mb-24 md:mb-6 text-xs"><div class="flex-row mx-4 md:mx-10"><p class="font-bold">ISO</p><p>100</p></div><div class="flex-row mx-4 md:mx-10"><p class="font-bold">SHUTTER</p><p>1/2000</p></div><div class="flex-row mx-4 md:mx-10"><p class="font-bold">ARPETURE</p><p>f/5.6</p></div></div></div> </div> 
   <div class="swiper-slide">  <img class="swiper-img" src="../assets/cover/capricorns_hochjoch.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"><button class="swiper-button-prev"></button><button class="swiper-button-next"></button><h3>MONTAFON, VORARLBERG</h3><h1>Kings of the Alps</h1><p>explore my outdoor photography</p> </div><div class="absolute text-white bottom-2 right-4"><div class="flex m-4 text-xs"><div class="flex-row mx-10"><p class="font-bold">ISO</p><p>200</p></div><div class="flex-row mx-10"><p class="font-bold">SHUTTER</p><p>1/600</p></div><div class="flex-row mx-10"><p class="font-bold">ARPETURE</p><p>f/5.6</p></div></div></div></div>
   <div class="swiper-slide"><img class="swiper-img" src="../assets/outdoor/image22.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"><button class="swiper-button-prev"></button><button class="swiper-button-next"></button><h3>BREGENZERWALD, VORARLBERG</h3><h1>The Last Rays</h1><p>explore my outdoor photography</p></div> <div class="absolute text-white bottom-2 right-4"><div class="flex m-4 text-xs"><div class="flex-row mx-10"><p class="font-bold">ISO</p><p>100</p></div><div class="flex-row mx-10"><p class="font-bold">SHUTTER</p><p>1/1400</p></div><div class="flex-row mx-10"><p class="font-bold">ARPETURE</p><p>f/4.6</p></div></div></div></div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
 
   </div>
</div>

</template>

<style scoped>
.swiper{
    :global(.swiper-pagination-bullet) {
      background: rgb(211, 211, 211);
      width: 0.2rem;
      height: 0.2rem;
      border-radius: .5rem;
      opacity: 1;
  }
  
  :global(.swiper-pagination-bullet-active) {
    background-color: rgb(255, 255, 255);
    width: 1rem;
    height: 0.2rem;
    border-radius: .5rem;
  }
  :global(.swiper-button-prev, .swiper-button-next){
    color: white;
    font-size: 24px;
  }
}
.swiper-container{
  overflow-y: hidden;
  overflow-x: hidden;
}
.swiper-img{
 width: 100%;
  object-fit: cover;
  object-position: center top;
  height: 100vh;
}
.swiper-button-prev, .swiper-button-next{
color:white;
font-size: 12px;
}
.swiper-button-next{
  left:auto;
    right:14rem;
    top: -2rem;
}
.swiper-button-prev{
right: auto;
left: auto;
    top: -2rem;
}

.header{
  background-image: url("../assets/cover/cover_mobile.jpg");
  background-repeat: no-repeat;
  display: block;
}
.header a{
  display: block;
}

@media (min-width: 768px) {
  .header{
  background-image: url("../assets/cover/cover.jpg");
  display: flex;

}
.header a{
  display: flex;
}
}
</style>
