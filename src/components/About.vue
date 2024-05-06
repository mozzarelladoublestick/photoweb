<script setup></script>

<template>
  <body class="overflow-hidden">
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
    <h1 id="about" class="text-center"></h1>
    <div class="pt-2 flex justify-center">
      <img
        src="../assets/about/IMG_3730.jpg"
        class="w-48 md:w-64 h-48 md:h-64 rounded-full"
      />
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-center py-4">sarah wechselberger</h1>
      <div class="h3 mx-4 md:mx-0 max-w-xl text-md md:text-lg text-center">
        hallo, freut mich, dass du auf meiner seite gelandet bist!<br />ich bin
        (noch) studentin, momentan in der softwareentwicklung tätig und
        fotografiere gerne nebenbei :)<br />ich bin ursprünglich aus vorarlberg,
        wohne aber in linz und fotografiere gerne hier in meiner gegend.
      </div>
      <div
        class="pt-4 h3 mx-4 md:mx-0 font-bold max-w-2xl text-md md:text-xl text-center"
      >
        würde mich sehr freuen, von dir zu hören!
      </div>
      <div class="flex mt-24">
        <a href="https://www.instagram.com/sarahwframes/" class="logo">
          <img class="h-8 w-8 m-3.5" src="../assets/icons/instagram.svg" />
        </a>
        <a href="mailto:sarah.wechselberger@vol.at" class="text-white">
          <img class="h-7 m-4" src="../assets/icons/mail.svg" />
        </a>
      </div>
      <div>&copy; All Rights Reserved Sarah Wechselberger 2024</div>
    </div>
  </body>
</template>

<style scoped>
h1 {
}
</style>
