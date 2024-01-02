<script>


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([Navigation]);
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
export default {
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        autoplay: {
          delay: 4000,
        },
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  },

};


</script>

<template>
  <div class="around">
    <div class="swiper-container">
      <div class="absolute z-10 text-white top-2 left-4"><a href="/" class="logo"><img class="h-16 w-16 mr-2" src="../assets/logo_white_square.svg"></a></div>
      <div class="z-10 absolute text-white top-2 right-4"><div class="inline-flex"> <router-link to="/outdoor"><h4 class="px-6">outdoor</h4></router-link>    <router-link to="/people"><h4 class="px-6">people</h4></router-link><router-link to="/about"><h4 class="px-6">me</h4></router-link></div></div>
      <div class="swiper-wrapper">

        <div class="swiper-slide"> <img class="swiper-img" src="../assets/cover/mountain_hochjoch.jpg">
          <div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6">
            <h3>MONTAFON, VORARLBERG</h3>
            <h1>Up & Up</h1>
            <div class="inline-flex items-center"><img class="h-4 w-4 mr-2" src="../assets/icons/play.svg">
              <a href="/" class="text-sm font-light link">explore my outdoor photography</a>
            </div>
          </div>
          <div class="absolute text-white bottom-2 left-14 md:left-auto md:right-4">
            <div class="flex m-2 md:m-4 mb-24 md:mb-6 text-xs">
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">ISO</p>
                <p>100</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">SHUTTER</p>
                <p>1/1000</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">APERTURE</p>
                <p>f/5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide"> <img class="swiper-img" src="../assets/cover/capricorns_hochjoch.jpg">
          <div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6">
            <h3>MONTAFON, VORARLBERG</h3>
            <h1>Kings of the Alps</h1>
            <div class="inline-flex items-center"><img class="h-4 w-4 mr-2" src="../assets/icons/play.svg">
              <a href="/" class="text-sm font-light link">explore my outdoor photography</a>
            </div>
          </div>
          <div class="absolute text-white bottom-2 left-14 md:left-auto md:right-4">
            <div class="flex m-2 md:m-4 mb-24 md:mb-6 text-xs">
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">ISO</p>
                <p>100</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">SHUTTER</p>
                <p>1/400</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">APERTURE</p>
                <p>f/6.3</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide"> <img class="swiper-img" src="../assets/cover/sonnenuntergang.jpg">
          <div class="text-white absolute top-2/4 left-2.5 px-16 text-left pt-6">
            <h3>BREGENZERWALD, VORARLBERG</h3>
            <h1>The Last Rays</h1>
            <div class="inline-flex items-center"><img class="h-4 w-4 mr-2" src="../assets/icons/play.svg">
              <a href="/" class="text-sm font-light link">explore my outdoor photography</a>
            </div>
          </div>
          <div class="absolute text-white bottom-2 left-14 md:left-auto md:right-4">
            <div class="flex m-2 md:m-4 mb-24 md:mb-6 text-xs">
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">ISO</p>
                <p>100</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">SHUTTER</p>
                <p>1/160</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
              <p class="font-bold">APERTURE</p>
              <p>f/4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>

    <span class="swiper-button-prev"></span><span class="swiper-button-next"></span>
  </div>

</div>
</template>

<style scoped>

html, body {
  overflow: hidden; /* Hide both vertical and horizontal scrollbars */
}


:global(.swiper-pagination-bullet) {
  background: white !important;
  opacity: 0.4 !important;
  scale: 0.6;
}

:global(.swiper-pagination-bullet-active) {
  background: white !important;
  opacity: 1 !important;
  scale: 0.6;
}

:global(.swiper-button-next) {
  color: white;
  scale: 0.3;
  cursor: none;
}

:global(.swiper-button-prev) {
  color: white;
  scale: 0.3;
  cursor: none;
}

.swiper-img {
  width: 100%;
  object-fit: cover;
  height: 100vh;
}

.swiper-slide{
  text-shadow: #6c6c6c 1px 0 10px
}


.around {
 overflow: hidden;
  
}

.header {
  background-image: url("../assets/cover/cover_mobile.jpg");
  background-repeat: no-repeat;
  display: block;
}


.header a {
  display: block;
}
/* CSS code */
a {
  position: relative;
  text-decoration: none;
  text-align: center;
  cursor: none;
}

a::after {
  content: '';
  position: absolute;
  left: 50%; /* Position the underline in the center horizontally */
  transform: translateX(-50%); 
  bottom: -2px;
  width: 0;
  height: 1px;
  background-color: white; /* Change to your desired underline color */
  transition: width 0.3s ease; /* Adjust the animation duration and timing function as needed */
}

a:hover::after {
  width: 30%;
}
.logo:hover::after{
  width: 0;
}

@media (min-width: 768px) {
  .header {
    background-image: url("../assets/cover/cover.jpg");
    display: flex;

  }

  .header a {
    display: flex;
  }

}</style>
