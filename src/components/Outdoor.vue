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
  <body class="relative overflow-hidden">
    <div class="relative z-10 text-black top-2 left-4">
      <div class="flex items-center justify-center">
        <a href="/" class="logo">
          <img
            class="h-16 w-16 md:w-32 md:h-32"
            src="../assets/logo_black_square.svg"
          />
        </a>
      </div>
    </div>
    <div class="mt-10 mx-4 md:mx-60">
      <!--first block-->
      <BlockRight
        img01="/outdoor/IMG_1139-2.jpg"
        img02="/outdoor/IMG_1194.jpg"
        img03="/outdoor/IMG_1178.jpg"
        caption="hochjoch klettersteig"
        subcaption="unter den steinböcken"
        iso="100"
        shutter="1/400"
        arpeture="f/5"
      ></BlockRight>
      <!--second block-->
      <BlockLeft
        img01="/outdoor/image22.jpg"
        img02="/outdoor/IMG_9820.jpg"
        img03="/outdoor/image20.jpg"
        caption="bregenzerwald"
        subcaption="zutrauliche murmile"
        iso="100"
        shutter="1/250"
        arpeture="f/6.3"
      >
      </BlockLeft>
      <BlockRight
        img01="/outdoor/image05.jpg"
        img02="/outdoor/image04.jpg"
        img03="/outdoor/image13.jpg"
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
