<script setup>

</script>

<template>
  
  <h1 id="people" class="text-center text-black text-4xl pt-8 pb-4">people</h1>
  <p class="text-center pb-8">capturing moments. <br/> capturing smiles.<br/> capturing tears.</p>
  <div class="image-gallery py-2">
    <div class="column">
      <div class="image-item">
        <img src="../assets/people/image10.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image02.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image03.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image01.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image13.jpg" alt="" />
      </div>

    </div>
    <div class="column">
      <div class="image-item">
        <img src="../assets/people/image04.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image05.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image06.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image07.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image14.jpg" alt="" />
      </div>
    </div>
    <div class="column">
      <div class="image-item">
        <img src="../assets/people/image08.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image09.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image12.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/people/image15.jpg" alt="" />
      </div>
    </div>
  </div>

  <h1 id="outdoor" class="text-center text-black text-4xl pt-8 pb-4">outdoor</h1>
  <p class="text-center pb-8">capturing sunrays. <br/> capturing raindrops.<br/> capturing beauty.</p>
  <div class="image-gallery py-2">
    <div class="column">
      <div class="image-item">
        <img src="../assets/outdoor/image03.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image02.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image10.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image01.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image13.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image18.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image22.jpg" alt="" />
      </div>
  
    </div>
    <div class="column">
      <div class="image-item">
        <img src="../assets/outdoor/image04.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image05.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image06.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image19.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image14.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image11.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image16.jpg" alt="" />
      </div>
    </div>
    <div class="column">
      <div class="image-item">
        <img src="../assets/outdoor/image07.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image08.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image09.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image12.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image15.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image20.jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../assets/outdoor/image17.jpg" alt="" />
      </div>
    </div>
  </div>
</template>


<style scoped>
h1{
  font-family: 'Homemade Apple';
}
.image-gallery {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-gallery .column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-item img {
  width: 100%;

  height: 100%;
  object-fit: cover;
}
.image-item:hover{
  filter:grayscale();
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
;
}

@media only screen and (min-width: 768px) {
  .image-gallery {
    flex-direction: row;
  }
  .image-item img{
    border-radius: 5px;
  }
}
</style>
