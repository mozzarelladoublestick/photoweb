<script setup>
import Navbar from "./Navbar.vue";

import { ref, onMounted } from "vue";
import { reveal } from "../scripts/Outdoor";
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
      <div class="flex flex-col md:flex-row md:justify-center">
        <img
          class="md:m-4 w-full md:w-96 flex h-fit reveal-left"
          src="../assets/people/IMG_2288.jpg"
        />
        <div class="flex md:m-4">
          <div class="flex flex-col">
            <div class="image-block">
              <img
                class="rotate-90 md:transform-none md:pt-10 flex w-8 h-fit align-left"
                src="../assets/icons/arrow_left.svg"
              />
              <div class="reveal-right">
                <p class="pt-10 flex text-left text-lg font-bold">
                  ein lachendes gesicht
                </p>
                <p class="flex text-left">unterwegs in süddeutschland</p>
                <div class="flex mt-4 text-left text-xs">
                  <div class="flex-row mr-4">
                    <p class="font-bold">ISO</p>
                    <p>100</p>
                  </div>
                  <div class="flex-row mr-4">
                    <p class="font-bold">SHUTTER</p>
                    <p>1/320</p>
                  </div>
                  <div class="flex-row mr-4">
                    <p class="font-bold">APERTURE</p>
                    <p>f/1.8</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="flex mt-auto w-full md:w-96 h-fit reveal-right"
              src="../assets/people/IMG_3590.jpg"
            />
          </div>
        </div>
      </div>
      <img
        class="reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
        src="../assets/people/image07.jpg"
      />
      <!--second block-->

      <div class="flex flex-col md:flex-row md:justify-center">
        <div class="flex md:m-4">
          <div class="flex flex-col">
            <div class="image-block">
              <img
                class="rotate-90 md:transform-none md:pt-10 flex w-8 h-fit align-right"
                src="../assets/icons/arrow_right.svg"
              />
              <div class="reveal-left">
                <p class="pt-10 flex text-left text-lg font-bold">
                  linzer sommer
                </p>
                <p class="flex text-left">verregnetes grillen</p>
                <div class="flex mt-4 text-left text-xs">
                  <div class="flex-row mr-4">
                    <p class="font-bold">ISO</p>
                    <p>100</p>
                  </div>
                  <div class="flex-row mr-4">
                    <p class="font-bold">SHUTTER</p>
                    <p>1/250</p>
                  </div>
                  <div class="flex-row mr-4">
                    <p class="font-bold">APERTURE</p>
                    <p>f/1.8</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="flex mb-4 md:mb-0 md:mt-auto w-full md:w-96 h-fit reveal-left"
              src="../assets/people/IMG_9445.jpg"
            />
          </div>
        </div>
        <img
          class="md:m-4 w-full md:w-96 flex h-fit reveal-right"
          src="../assets/people/IMG_9307.jpg"
        />
      </div>
      <img
        class="reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
        src="../assets/people/IMG_9546.jpg"
      />
      <img
        class="pt-4 reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
        src="../assets/people/IMG_5102.jpg"
      />

      <!--third block-->
      <div class="flex flex-col md:flex-row md:justify-center">
        <img
          class="md:m-4 w-full md:w-96 flex h-fit reveal-left"
          src="../assets/people/IMG_2611.jpg"
        />
        <div class="flex md:m-4">
          <div class="flex flex-col">
            <div class="image-block">
              <img
                class="rotate-90 md:transform-none md:pt-10 flex w-8 h-fit align-left"
                src="../assets/icons/arrow_left.svg"
              />
              <div class="reveal-right">
                <p class="pt-10 flex text-left text-lg font-bold">
                  u-bahn gedanken
                </p>
                <p class="flex text-left">herbstliche urlaubstage</p>
                <div class="flex mt-4 text-left text-xs">
                  <div class="flex-row mr-4">
                    <p class="font-bold">ISO</p>
                    <p>100</p>
                  </div>
                  <div class="flex-row mr-4">
                    <p class="font-bold">SHUTTER</p>
                    <p>1/30</p>
                  </div>
                  <div class="flex-row mr-4">
                    <p class="font-bold">APERTURE</p>
                    <p>f/1.8</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="flex mt-auto w-full md:w-96 h-fit reveal-right"
              src="../assets/people/IMG_2523.jpg"
            />
          </div>
        </div>
      </div>
      <img
        class="reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
        src="../assets/people/IMG_6837.jpg"
      />
    </div>
    <div class="flex flex-col md:flex-row md:justify-center">
      <div class="flex md:m-4">
        <div class="flex flex-col">
          <div class="image-block">
            <img
              class="rotate-90 md:transform-none md:pt-10 flex w-8 h-fit align-right"
              src="../assets/icons/arrow_right.svg"
            />
            <div class="reveal-left">
              <p class="pt-10 flex text-left text-lg font-bold">
                ganz hoch oben
              </p>
              <p class="flex text-left">in den vorarlberger bergen</p>
              <div class="flex mt-4 text-left text-xs">
                <div class="flex-row mr-4">
                  <p class="font-bold">ISO</p>
                  <p>100</p>
                </div>
                <div class="flex-row mr-4">
                  <p class="font-bold">SHUTTER</p>
                  <p>1/4000</p>
                </div>
                <div class="flex-row mr-4">
                  <p class="font-bold">APERTURE</p>
                  <p>f/1.8</p>
                </div>
              </div>
            </div>
          </div>
          <img
            class="flex mb-4 md:mb-0 md:mt-auto w-full md:w-96 h-fit reveal-left"
            src="../assets/people/IMG_3252.jpg"
          />
        </div>
      </div>
      <img
        class="md:m-4 w-full md:w-96 flex h-fit reveal-right"
        src="../assets/people/IMG_3232.jpg"
      />
    </div>
    <img
      class="reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
      src="../assets/people/image02.jpg"
    />
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
