<script setup>
import Navbar from "./Navbar.vue";

import { ref, onMounted } from "vue";
import { reveal } from "../scripts/Outdoor";
import BlockRight from "./BlockRight.vue";
import BlockLeft from "./BlockLeft.vue";
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
            src="../assets/logo_black_square.svg"
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
      <!--first block-->
      <BlockRight
        img01="/assets/outdoor/IMG_1139.jpg"
        img02="/assets/outdoor/IMG_1194.jpg"
        img03="/assets/outdoor/IMG_1178.jpg"
        caption="hochjoch klettersteig"
        subcaption="unter den steinböcken"
        iso="100"
        shutter="1/400"
        arpeture="f/5"
      ></BlockRight>
      <!--second block-->
      <BlockLeft
        img01="src/assets/outdoor/image22.jpg"
        img02="src/assets/outdoor/IMG_9820.jpg"
        img03="src/assets/outdoor/image20.jpg"
        caption="bregenzerwald"
        subcaption="zutrauliche murmile"
        iso="100"
        shutter="1/250"
        arpeture="f/6.3"
      >
      </BlockLeft>
      <BlockRight
        img01="src/assets/outdoor/image05.jpg"
        img02="src/assets/outdoor/image04.jpg"
        img03="src/assets/outdoor/image13.jpg"
        caption="das neunte bundesland"
        subcaption="erster besuch im burgenland"
        iso="100"
        shutter="1/600"
        arpeture="f/1.8"
      ></BlockRight>
      <!--third block-->
    </div>
  </body>
</template>

<style scoped>
.reveal-right {
  position: relative;
  transform: translateX(500px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal-right.active {
  transform: translateX(0);
  opacity: 1;
}
.reveal-left {
  position: relative;
  transform: translateX(-500px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal-left.active {
  transform: translateX(0);
  opacity: 1;
}
.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1.5s all ease;
}
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
</style>
