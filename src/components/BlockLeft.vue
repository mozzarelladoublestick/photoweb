<template>
  <div class="flex flex-col md:flex-row md:justify-center">
    <div class="flex md:m-4">
      <div class="flex flex-col">
        <div class="image-block">
          <img
            class="rotate-90 md:transform-none md:pt-10 flex w-8 h-fit align-right"
            src="../assets/icons/arrow_right.svg"
          />
          <div class="reveal-left">
            <p class="pt-10 flex text-left text-lg font-bold">{{ caption }}</p>
            <p class="flex text-left">{{ subcaption }}</p>
            <div class="flex mt-4 text-left text-xs">
              <div class="flex-row mr-4">
                <p class="font-bold">ISO</p>
                <p>{{ iso }}</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">SHUTTER</p>
                <p>{{ shutter }}</p>
              </div>
              <div class="flex-row mr-4">
                <p class="font-bold">APERTURE</p>
                <p>{{ arpeture }}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          class="flex mb-4 md:mb-0 md:mt-auto w-full md:w-96 h-fit reveal-left"
          :src="img01"
        />
      </div>
    </div>
    <img class="md:m-4 w-full md:w-96 flex h-fit reveal-right" :src="img02" />
  </div>
  <img
    class="reveal m-4 mx-auto align-center w-full md:w-[801px] h-fit"
    :src="img03"
  />
</template>

<script>
import { reveal } from "../scripts/Outdoor";

export default {
  props: {
    img01: {
      type: String,
      required: true,
    },
    img02: {
      type: String,
      required: true,
    },
    img03: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    subcaption: {
      type: String,
      required: true,
    },
    iso: {
      type: String,
      required: true,
    },
    shutter: {
      type: String,
      required: true,
    },
    arpeture: {
      type: String,
      required: true,
    },
  },
};
</script>
