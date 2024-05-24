<script setup>
import Imprint from "./Imprint.vue";
</script>

<template>
  <body class="overflow-hidden">
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
    <h1 id="about" class="text-left"></h1>
    <div
      class="flex flex-col xl:flex-row gap-x-8 max-w-screen-2xl mx-auto justify-center pt-12 px-6 xl:px-36"
    >
      <div class="mx-auto grow xl:mx-0 pt-2 xl:w-1/2">
        <img
          src="../assets/about/IMG_3730-2.jpg"
          class="max-h-64 xl:max-h-full rounded-full aspect-square xl:aspect-auto object-cover xl:rounded-md"
          alt="Sarah Wechselberger Fotografin"
        />
      </div>
      <div
        class="flex flex-col mx-auto xl:mx-0 items-start justify-center xl:w-1/2"
      >
        <h1 class="py-2 mt-6 md:mt-12 xl:mt-0 leading-none">
          sarah wechselberger
        </h1>
        <div class="h3 mt-2 font-light text-md md:text-xl">
          Hallo und herzlich willkommen auf meiner Seite! Ich bin eine
          leidenschaftliche Fotografin im wunderschönen Linz. Usprünglich komme
          ich aus Vorarlberg, wie die meisten meiner Fotos wahrscheinlich
          verraten :) Neben meinem Studium widme ich mich mit großer Hingabe der
          Kunst der Fotografie, um die einzigartigen Momente und Emotionen des
          Lebens einzufangen. In meinen Bildern erzähle ich Geschichten – von
          Menschen, Orten und Augenblicken, die das Leben so besonders machen.
          Ob es die kleinen, alltäglichen Augenblicke oder die großen,
          unvergesslichen Ereignisse sind, ich bin stets auf der Suche nach dem
          perfekten Licht und der schönsten Perspektive. Meine Arbeit ist
          geprägt von Kreativität, einem aufmerksamen Blick fürs Detail und
          einer tiefen Leidenschaft für das, was ich tue. Ich liebe es, mit
          Menschen zu arbeiten und ihre individuellen Geschichten in Bildern zu
          erzählen. Dabei ist es mir wichtig, dass sich meine Kunden wohl
          fühlen, besonders wenn sie es nicht gewohnt sind vor der Kamera zu
          stehen. Denn nur so entstehen natürliche und authentische Aufnahmen,
          die man gerne immer wieder anschaut.
        </div>
        <div class="pt-4 h3 font-semibold max-w-2xl text-md md:text-xl">
          Schreib mir gerne eine
          <a
            href="mailto:hello@sarahwechselberger.at"
            target="_blank"
            class="font-semibold underline"
          >
            E-Mail</a
          >, oder einfach auf
          <a
            href="https://www.instagram.com/sarahwframes"
            target="_blank"
            class="font-semibold underline"
          >
            Instagram!</a
          >
          Ich würde mich sehr freuen von dir zu hören!
        </div>
        <div class="flex mt-4 flex-col lg:flex-row">
          <a
            href="https://www.instagram.com/sarahwframes/"
            class="flex items-center"
          >
            <img
              class="h-5 w-5 my-3.5 mr-1"
              src="../assets/icons/instagram.svg"
            />
            <p>@sarahwframes</p>
          </a>
          <a
            href="mailto:hello@sarahwechselberger.at"
            class="flex items-center"
          >
            <img class="h-5 my-4 ml-2 mr-1" src="../assets/icons/mail.svg" />
            <p>hello@sarahwechselberger.at</p>
          </a>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-12 text-center">
      <Imprint class="pb-12"></Imprint>
      &copy; All Rights Reserved Sarah Wechselberger 2024
    </div>
  </body>
</template>

<style scoped>
h1 {
}
</style>
