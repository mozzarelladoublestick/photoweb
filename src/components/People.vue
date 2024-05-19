<script setup>
import Navbar from "./Navbar.vue";
import BlockRight from "./BlockRight.vue";
import BlockLeft from "./BlockLeft.vue";
import { ref, onMounted } from "vue";
import { reveal } from "/src/scripts/Outdoor";
onMounted(() => {
  // To check the scroll position on page load
  window.addEventListener("scroll", reveal);
  reveal();
});
</script>

<template>
  <body class="relative overflow-hidden h-full">
    <div class="relative z-10 text-black top-2 left-4">
      <div class="flex items-center justify-center">
        <a href="/" class="logo">
          <img
            class="md:h-16 md:w-16 w-32 h-32 mr-2"
            src="/src/assets/logo_black_square.svg"
          />
        </a>
      </div>
    </div>
    <div class="z-10 relative my-6 text-black top-2 right-4 text-center">
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
    <div class="mt-10 mx-4 md:mx-60">
      <BlockLeft
        img01="/src/assets/people/IMG_6375.jpg"
        img02="/src/assets/people/IMG_6639.jpg"
        img03="/src/assets/people/IMG_6528.jpg"
        caption="love at sunset"
        subcaption="am schönen attersee"
        iso="100"
        shutter="1/1000"
        arpeture="f/1.8"
      ></BlockLeft>

      <BlockRight
        img01="/src/assets/people/IMG_2288.jpg"
        img02="/src/assets/people/IMG_3590.jpg"
        img03="/src/assets/people/IMG_3444.jpg"
        caption="ein lachendes gesicht"
        subcaption="unterwegs in süddeutschland"
        iso="100"
        shutter="1/320"
        arpeture="f/1.8"
      ></BlockRight>

      <img
        class="pt-4 reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
        src="/src/assets/people/image07.jpg"
      />

      <BlockLeft
        img01="/src/assets/people/IMG_9445.jpg"
        img02="/src/assets/people/IMG_9307.jpg"
        img03="/src/assets/people/IMG_9546.jpg"
        caption="linzer sommer"
        subcaption="verregnetes grillen"
        iso="100"
        shutter="1/250"
        arpeture="f/1.8"
      ></BlockLeft>

      <img
        class="pt-4 reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
        src="/src/assets/people/IMG_5102.jpg"
      />

      <BlockRight
        img01="/src/assets/people/IMG_2611.jpg"
        img02="/src/assets/people/IMG_2523.jpg"
        img03="/src/assets/people/IMG_6837.jpg"
        caption="u-bahn gedanken"
        subcaption="herbstliche urlaubstage"
        iso="100"
        shutter="1/30"
        arpeture="f/1.8"
      ></BlockRight>

      <BlockLeft
        img01="/src/assets/people/IMG_3252.jpg"
        img02="/src/assets/people/IMG_3232.jpg"
        img03="/src/assets/people/image02.jpg"
        caption="ganz hoch oben"
        subcaption="in den vorarlberger bergen"
        iso="100"
        shutter="1/4000"
        arpeture="f/1.8"
      ></BlockLeft>
    </div>
  </body>
</template>
