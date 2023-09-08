<script setup>

</script>

<template>
  
  <h1 class="text-center text-4xl py-8">people</h1>
  <div class="image-gallery py-2">
    <div class="column">
      <div class="image-item">
        <img src="../people/image (10).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (2).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (3).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (1).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (13).jpg" alt="" />
      </div>

    </div>
    <div class="column">
      <div class="image-item">
        <img src="../people/image (4).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (5).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (6).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (11).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (14).jpg" alt="" />
      </div>
    </div>
    <div class="column">
      <div class="image-item">
        <img src="../people/image (7).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (8).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (9).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (12).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (15).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../people/image (15).jpg" alt="" />
      </div>
    </div>
  </div>

  <h1 class="text-center text-4xl py-8">outdoor</h1>
  <div class="image-gallery py-2">
    <div class="column">
      <div class="image-item">
        <img src="../outdoor/image (3).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (2).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (10).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (1).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (13).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (18).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (22).jpg" alt="" />
      </div>
  
    </div>
    <div class="column">
      <div class="image-item">
        <img src="../outdoor/image (4).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (5).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (6).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (19).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (14).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (11).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (16).jpg" alt="" />
      </div>
    </div>
    <div class="column">
      <div class="image-item">
        <img src="../outdoor/image (7).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (8).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (9).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (12).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (15).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (20).jpg" alt="" />
      </div>
      <div class="image-item">
        <img src="../outdoor/image (17).jpg" alt="" />
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
  border-radius: 5px;
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
}
</style>
