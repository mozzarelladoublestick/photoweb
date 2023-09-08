<script setup>

</script>

<template>
  <div class="header sm: bg-contain bg-cover min-h-screen text-lg text-center md:flex justify-center items-center text-white">
    <a href="#people" class="px-22 font-medium sm:py-22 md:flex-col p-12">PEOPLE</a>
    <a href="#outdoor" class="font-medium md:flex-col p-12">OUTDOOR</a>
    <p class="font-medium md:flex-col p-12">LOGO</p>
    <a href="#about" class="font-medium md:flex-col p-12">ABOUT</a>
    <a href="#contact" class="font-medium md:flex-col p-12">CONTACT</a>
  </div>
</template>

<style scoped>
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
