<script>


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
  mounted() {
    // Initialize Swiper when the component is mounted
    this.initSwiper();
    swiper.slideNext();
  },
  methods: {
    initSwiper() {
      const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
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
      document.querySelector('.next-button').addEventListener('click', () => {
        swiper.slideNext(); // Trigger next slide
      });
    },
  },
  
};


</script>

<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
   <div class="swiper-slide">  <img class="swiper-img"  src="../assets/cover/mountain_hochjoch.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div>
  <div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"> <button class="swiper-button-prev"></button><button class="swiper-button-next"></button><h3>MONTAFON, VORARLBERG</h3><h1>Up & Up</h1><p>explore my outdoor photography</p></div> </div>
   <div class="swiper-slide">  <img class="swiper-img" src="../assets/cover/capricorns_hochjoch.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"><button class="swiper-button-prev"></button><button class="swiper-button-next"></button><h3>MONTAFON, VORARLBERG</h3><h1>Kings of the Alps</h1><p>explore my outdoor photography</p></div> </div>
   <div class="swiper-slide"><img class="swiper-img" src="../assets/cover/cover.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"><button class="swiper-button-prev"></button><button class="swiper-button-next"></button><h3>MONTAFON, VORARLBERG</h3><h1>Kings of the Alps</h1><p>explore my outdoor photography</p></div> </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
 
   </div>
<div class="next-button">hit me</div>
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
