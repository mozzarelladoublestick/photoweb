<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import { ref } from "vue";
import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
       // Function to go to the next slide
    const goToNextSlide = (swiper) => {
        swiper.slideNext();
};
    return {
      onSwiper,
      onSlideChange,
      goToNextSlide,
      modules: [EffectFade, Navigation, Pagination],
    };
  },
};

</script>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    :effect="'fade'"
    :navigation="false"
    :pagination="{
    clickable: true,
}"
:modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="relative text-center h-screen swiper">
         <swiper-slide>
         <img class="swiper-img"  src="../assets/cover/mountain_hochjoch.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"><h3>MONTAFON, VORARLBERG</h3><h1>Up & Up</h1><p>explore my outdoor photography</p></div> 
       </swiper-slide>
       <swiper-slide>
         <img class="swiper-img" src="../assets/cover/capricorns_hochjoch.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"><h3>MONTAFON, VORARLBERG</h3><h1>Kings of the Alps</h1><p>explore my outdoor photography</p></div> 
       </swiper-slide>
       <swiper-slide>
         <img class="swiper-img" src="../assets/cover/cover.jpg">   <div class="absolute text-white top-2 left-4">LOGO</div><div class="absolute text-white top-2 right-4">outdoor people me</div><div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6"><h3>MONTAFON, VORARLBERG</h3><h1>Kings of the Alps</h1><p>explore my outdoor photography</p></div> 
       </swiper-slide>
  </swiper>
  <button  @click="goToNextSlide">click me</button>


  <div class="header sm: bg-contain bg-cover min-h-screen text-lg text-center md:flex justify-center items-center text-white">
    <a href="#people" class="px-22 font-medium sm:py-22 md:flex-col p-12">PEOPLE</a>
    <a href="#outdoor" class="font-medium md:flex-col p-12">OUTDOOR</a>
    <p class="font-medium md:flex-col p-12">LOGO</p>
    <a href="#about" class="font-medium md:flex-col p-12">ABOUT</a>
    <a href="#contact" class="font-medium md:flex-col p-12">CONTACT</a>
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
  height: auto;
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
