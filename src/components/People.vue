<script setup>
import Navbar from "./Navbar.vue";
import BlockRight from "./BlockRight.vue";
import BlockLeft from "./BlockLeft.vue";
import { ref, onMounted } from "vue";
import { reveal } from "../scripts/Outdoor";
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
      <BlockLeft
        img01="/people/IMG_6375.jpg"
        img02="/people/IMG_6639.jpg"
        img03="/people/IMG_6528.jpg"
        caption="love at sunset"
        subcaption="am schönen attersee"
        iso="100"
        shutter="1/1000"
        arpeture="f/1.8"
      ></BlockLeft>

      <BlockRight
        img01="/people/IMG_8518.jpg"
        img02="/people/IMG_9767.jpg"
        img03="/people/IMG_0471.jpg"
        caption="hagenberger sommerfest"
        subcaption="semester done!"
        iso="200"
        shutter="1/320"
        arpeture="f/6.3"
      ></BlockRight>

      <img
        class="pt-4 reveal m-4 mx-auto w-full md:w-[801px]"
        src="../assets/people/IMG_9629.jpg"
      />

      <BlockRight
        img01="/people/IMG_3551.jpg"
        img02="/people/IMG_3590.jpg"
        img03="/people/IMG_3444.jpg"
        caption="winterliebe"
        subcaption="im mühlviertel"
        iso="100"
        shutter="1/400"
        arpeture="f/1.8"
      ></BlockRight>

      <BlockLeft
        img01="/people/IMG_5170.jpg"
        img02="/people/IMG_5358.jpg"
        img03="/people/IMG_5423.jpg"
        caption="engagement shoot!"
        subcaption="im montafon"
        iso="100"
        shutter="1/400"
        arpeture="f/1.8"
      ></BlockLeft>

      <img
        class="pt-4 reveal m-4 mx-auto w-full md:w-[801px]"
        src="../assets/people/image07.jpg"
      />

      <BlockLeft
        img01="/people/IMG_9445.jpg"
        img02="/people/IMG_9307.jpg"
        img03="/people/IMG_9546.jpg"
        caption="linzer sommer"
        subcaption="verregnetes grillen"
        iso="100"
        shutter="1/250"
        arpeture="f/1.8"
      ></BlockLeft>

      <img
        class="pt-4 reveal m-4 mx-auto w-full md:w-[801px]"
        src="../assets/people/IMG_5102.jpg"
      />

      <BlockRight
        img01="/people/IMG_2611.jpg"
        img02="/people/IMG_2523.jpg"
        img03="/people/IMG_6837.jpg"
        caption="u-bahn gedanken"
        subcaption="herbstliche urlaubstage"
        iso="100"
        shutter="1/30"
        arpeture="f/1.8"
      ></BlockRight>

      <BlockLeft
        img01="/people/IMG_3252.jpg"
        img02="/people/IMG_3232.jpg"
        img03="/people/image02.jpg"
        caption="ganz hoch oben"
        subcaption="in den vorarlberger bergen"
        iso="100"
        shutter="1/4000"
        arpeture="f/1.8"
      ></BlockLeft>
    </div>
  </body>
</template>
