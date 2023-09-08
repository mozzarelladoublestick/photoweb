<script setup>

</script>

<template>
  <div class="header sm: bg-contain md:bg-cover min-h-screen text-lg text-center md:flex justify-center items-center text-white">
    <p class="sm:py-22 flex-col p-12">PEOPLE</p>
    <p class=" flex-col p-12">OUTDOOR</p>
    <p class="flex-col p-12">LOGO</p>
    <p class="flex-col p-12">ABOUT</p>
    <p class=" flex-col p-12">CONTACT</p>
  </div>
</template>

<style scoped>
.header{
  background-image: url("../assets/cover/cover_mobile.jpg");
}

@media (min-width: 768px) {
  .header{
  background-image: url("../assets/cover/cover.jpg");
  background-repeat: no-repeat;
}
}
</style>
