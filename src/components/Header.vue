<script>
import Menu from "./Menu.vue";
import Swiper from "swiper";
import Imprint from "./Imprint.vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
Swiper.use([Navigation]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default {
  data() {
    return {
      isMenuVisible: false,
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      const swiper = new Swiper(".swiper-container", {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        autoplay: {
          delay: 4000,
        },
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    toggleMenu() {
      if (!this.isMenuVisible) this.isMenuVisible = true;
      else this.isMenuVisible = false;
    },
  },
};
</script>

<template>
  <div
    v-show="this.isMenuVisible"
    class="absolute top-0 right-0 w-screen h-screen z-20 bg-white"
  >
    <div class="flex flex-col items-center justify-center">
      <a href="/" class="logo">
        <img
          class="md:h-16 md:w-16 w-32 h-32 mb-24"
          src="../assets/logo_black_square.svg"
        />
      </a>
      <div class="flex flex-col justify-center items-center px-6 text-center">
        <router-link to="/outdoor">
          <h4 class="px-6">outdoor</h4>
        </router-link>
        <router-link to="/people">
          <h4 class="px-6">people</h4>
        </router-link>
        <router-link to="/about">
          <h4 class="px-6 mb-24">about</h4>
        </router-link>
        <h3>Impressum</h3>
        <p>Sarah Wechselberger</p>
        <p>Hyrtlstraße 17, 4020 Linz</p>
        <a href="mailto:hello@sarahwechselberger.at" class="underline"
          ><p>hello@sarahwechselberger.at</p></a
        >
        <div class="text-xs mt-4">
          &copy; All Rights Reserved Sarah Wechselberger 2024
        </div>
      </div>
    </div>
  </div>
  <div class="around">
    <div class="swiper-container relative">
      <div class="absolute top-0 md:top-2 left-4 z-50">
        <div class="flex items-center justify-center">
          <a href="/" class="logo">
            <img
              class="md:h-16 md:w-16 w-32 h-32 mr-2"
              src="../assets/logo_white_square.svg"
            />
          </a>
        </div>
      </div>
      <div
        class="hidden md:block absolute left-10 md:left-0 md:top-2 right-4 mb-4 text-center text-white md:text-right z-50"
      >
        <div class="inline-flex">
          <router-link to="/outdoor">
            <h4 class="px-6">outdoor</h4>
          </router-link>
          <router-link to="/people">
            <h4 class="px-6">people</h4>
          </router-link>
          <router-link to="/about">
            <h4 class="px-6">about</h4>
          </router-link>
        </div>
      </div>
      <img
        v-show="!this.isMenuVisible"
        @click="toggleMenu()"
        class="block md:hidden absolute top-0 right-0 z-50 w-8 h-8 m-4"
        src="../assets/icons/menu.svg"
      />
      <img
        v-show="this.isMenuVisible"
        @click="toggleMenu()"
        class="block md:hidden absolute top-0 right-0 z-50 w-8 h-8 m-4"
        src="../assets/icons/close.svg"
      />
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="../assets/cover/mountain_hochjoch.jpg"
            alt="Hochjoch Mountains"
          />
          <div
            class="text-white absolute bottom-1/4 md:top-2/4 left-2.5 px-8 md:px-16 text-left pt-6"
          >
            <h3>MONTAFON, VORARLBERG</h3>
            <h2>Up & Up</h2>
            <a
              href="/outdoor"
              class="inline-flex items-center text-md md:text-lg !text-left font-light link"
            >
              <img class="h-4 w-4 mr-2" src="../assets/icons/play.svg" />

              explore my outdoor photography
            </a>
          </div>
          <div
            class="absolute text-white bottom-2 left-5 md:left-auto md:right-4"
          >
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
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="../assets/people/IMG_6524.jpg"
            alt="Attersee Paarfoto"
          />
          <div
            class="text-white absolute bottom-1/4 md:top-2/4 left-2.5 px-8 md:px-16 text-left pt-6"
          >
            <h3>ATTERSEE, UPPER AUSTRIA</h3>
            <h2>Sunset Love</h2>
            <a
              href="/people"
              class="inline-flex items-center text-md md:text-lg !text-left font-light link"
            >
              <img class="h-4 w-4 mr-2" src="../assets/icons/play.svg" />

              explore my people photography
            </a>
          </div>
          <div
            class="absolute text-white bottom-2 left-5 md:left-auto md:right-4"
          >
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
                <p>f/1.8</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="../assets/cover/IMG_3509.jpg"
            alt="Schnee Paarfoto"
          />
          <div
            class="text-white absolute bottom-1/4 md:top-2/4 left-2.5 px-8 md:px-16 text-left pt-6"
          >
            <h3>UPPER AUSTRIA</h3>
            <h2>Winter Love</h2>
            <a
              href="/people"
              class="inline-flex items-center text-md md:text-lg !text-left font-light link"
            >
              <img class="h-4 w-4 mr-2" src="../assets/icons/play.svg" />

              explore my people photography
            </a>
          </div>
          <div
            class="absolute text-white bottom-2 left-5 md:left-auto md:right-4"
          >
            <div class="flex m-2 md:m-4 mb-24 md:mb-6 text-xs">
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">ISO</p>
                <p>100</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">SHUTTER</p>
                <p>1/1250</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">APERTURE</p>
                <p>f/1.8</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="../assets/cover/capricorns_hochjoch.jpg"
            alt="Steinböcke Berge Outdoorfotografie"
          />
          <div
            class="text-white absolute bottom-1/4 md:top-2/4 left-2.5 px-8 md:px-16 text-left pt-6"
          >
            <h3>MONTAFON, VORARLBERG</h3>
            <h2>Kings of the Alps</h2>
            <a
              href="/outdoor"
              class="inline-flex items-center text-md md:text-lg !text-left font-light link"
            >
              <img class="h-4 w-4 mr-2" src="../assets/icons/play.svg" />

              explore my outdoor photography
            </a>
          </div>
          <div
            class="absolute text-white bottom-2 left-5 md:left-auto md:right-4"
          >
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
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="../assets/people/IMG_5080.jpg"
            alt="Feier Fotografie"
          />
          <div
            class="text-white absolute bottom-1/4 md:top-2/4 left-2.5 px-8 md:px-16 ext-left pt-6"
          >
            <h3>LINZ, UPPER AUSTRIA</h3>
            <h2>Let's celebrate!</h2>
            <a
              href="/people"
              class="inline-flex items-center text-md md:text-lg !text-left font-light link"
            >
              <img class="h-4 w-4 mr-2" src="../assets/icons/play.svg" />

              explore my people photography
            </a>
          </div>
          <div
            class="absolute text-white bottom-2 left-5 md:left-auto md:right-4"
          >
            <div class="flex m-2 md:m-4 mb-24 md:mb-6 text-xs">
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">ISO</p>
                <p>500</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">SHUTTER</p>
                <p>1/250</p>
              </div>
              <div class="flex-row mx-4 md:mx-10">
                <p class="font-bold">APERTURE</p>
                <p>f/1.8</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="../assets/cover/sonnenuntergang.jpg"
            alt="Sonnenuntergang Berge Fotografie"
          />
          <div
            class="text-white absolute bottom-1/4 md:top-2/4 left-2.5 px-8 md:px-16 text-left pt-6"
          >
            <h3>BREGENZERWALD, VORARLBERG</h3>
            <h2>The Last Rays</h2>
            <a
              href="/outdoor"
              class="inline-flex items-center text-md md:text-lg !text-left font-light link"
            >
              <img class="h-4 w-4 mr-2" src="../assets/icons/play.svg" />

              explore my outdoor photography
            </a>
          </div>
          <div
            class="absolute text-white bottom-2 left-5 md:left-auto md:right-4"
          >
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

      <span class="swiper-button-prev"></span>
      <span class="swiper-button-next"></span>
    </div>
  </div>
</template>

<style scoped>
html {
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
  cursor: pointer;
  color: white;
  scale: 0.5;
}

:global(.swiper-button-prev) {
  color: white;
  scale: 0.5;
}

.swiper-img {
  width: 100%;
  object-fit: cover;
  height: 100vh;
}

.swiper-slide {
  text-shadow: #6c6c6c 1px 0 10px;
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
</style>
