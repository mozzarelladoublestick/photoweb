<script setup>
import Navbar from './Navbar.vue';

import { ref, onMounted } from 'vue';
import { reveal } from '../scripts/Outdoor';
onMounted(() => {
  // To check the scroll position on page load
  window.addEventListener("scroll", reveal);
  reveal();
});
</script>

<template>
      <div class="absolute z-10 text-black top-2 left-4"><a href="/" class="logo"><img class="h-16 w-16 mr-2" src="../assets/logo_black_square.svg"></a></div>
      <div class="z-10 absolute text-black top-2 right-4 mb-4"><div class="inline-flex"> <router-link to="/outdoor"><h4 class="px-6">outdoor</h4></router-link>    <router-link to="/people"><h4 class="px-6">people</h4></router-link><router-link to="/about"><h4 class="px-6">me</h4></router-link></div></div>

<div class="mt-10 ml-60 mr-60">
<div class=" flex flex-row justify-center">
<img class="m-4 flex w-96 h-fit reveal-left" src="../assets/outdoor/IMG_1139.jpg">
<div class="flex m-4 ">
    <div class="flex flex-col ">
    <div class="mt-4 mb-4">
    <img class="reveal-left pt-10 flex w-8 h-fit" src="../assets/icons/arrow_left.svg">
    <div class="reveal-right">
    <p class="pt-10 flex text-left text-lg font-bold">hochjoch klettersteig</p>
    <p class="flex text-left">experiencing the experience</p>
            <div class="flex mt-4 text-left text-xs">
              <div class="flex-row mr-4">
                <p class="font-bold">ISO</p>
                <p>100</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">SHUTTER</p>
                <p>1/1000</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">APERTURE</p>
                <p>f/5</p>
              </div>
            </div>
          </div>
    </div>
    <img class="reveal-right flex w-96 h-fit mt-auto" src="../assets/outdoor/IMG_1194.jpg">
</div>
</div>
</div>
<img class="reveal m-4 mx-auto align-center w-[801px] h-fit" src="../assets/outdoor/IMG_1178.jpg">



<div class=" flex flex-row justify-center">

<div class="flex m-4 ">
    <div class="flex flex-col ">
    <div class="mt-4 mb-4">
    <img class="reveal-right pt-10 flex w-8 h-fit align-right" src="../assets/icons/arrow_right.svg">
    <div class="reveal-left">
    <p class="pt-10 flex text-right text-lg font-bold">murmile luaga</p>
    <p class="flex text-right">experiencing the experience</p>
            <div class="flex mt-4 text-left text-xs">
              <div class="flex-row mr-4">
                <p class="font-bold">ISO</p>
                <p>100</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">SHUTTER</p>
                <p>1/1000</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">APERTURE</p>
                <p>f/5</p>
              </div>
            </div>
          </div>
    </div>
    <img class="reveal-left flex w-96 h-fit mt-auto" src="../assets/outdoor/image22.jpg">
</div>
</div>
<img class="m-4 flex w-96 h-fit reveal-right" src="../assets/outdoor/IMG_9820.jpg">
</div>
<img class="reveal m-4 mx-auto align-center w-[801px] h-fit" src="../assets/outdoor/image20.jpg">




<div class=" flex flex-row justify-center">
<img class="m-4 flex w-96 h-fit reveal-left" src="../assets/outdoor/image05.jpg">
<div class="flex m-4 ">
    <div class="flex flex-col ">
    <div class="mt-4 mb-4">
    <img class="reveal-left pt-10 flex w-8 h-fit" src="../assets/icons/arrow_left.svg">
    <div class="reveal-right">
    <p class="pt-10 flex text-left text-lg font-bold">das neunte bundesland</p>
    <p class="flex text-left">experiencing the experience</p>
            <div class="flex mt-4 text-left text-xs">
              <div class="flex-row mr-4">
                <p class="font-bold">ISO</p>
                <p>100</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">SHUTTER</p>
                <p>1/1000</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">APERTURE</p>
                <p>f/5</p>
              </div>
            </div>
          </div>
    </div>
    <img class="reveal-right flex w-96 h-fit mt-auto" src="../assets/outdoor/image04.jpg">
</div>
</div>
</div>
<img class="reveal m-4 mx-auto align-center w-[801px] h-fit" src="../assets/outdoor/image13.jpg">


</div>

</template>

<style scoped>
.reveal-right{
  position: relative;
  transform: translateX(500px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal-right.active{
  transform: translateX(0);
  opacity: 1;
}
.reveal-left{
  position: relative;
  transform: translateX(-500px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal-left.active{
  transform: translateX(0);
  opacity: 1;
}
.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1.5s all ease;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
</style>
