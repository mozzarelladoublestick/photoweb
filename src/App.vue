<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import router from "./router";

import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "app",
  components: {
    Header,
    Menu,
  },
};
/*
const cursor = ref(null);
const smallCursor = ref(null);

function updateCursorPosition(event) {
  const x = event.clientX;
  const y = event.clientY;
  cursor.value.style.left = x + 'px';
  cursor.value.style.top = y + 'px';
}

function toggleActiveCursor() {
  smallCursor.value.classList.add('active');

  // Reset the cursor size after a short delay (e.g., 300ms)
  setTimeout(() => {
    smallCursor.value.classList.remove('active');
  }, 300);
}

onMounted(() => {
  cursor.value = document.querySelector('.custom-cursor');
  smallCursor.value = document.querySelector('.small-cursor');
  window.addEventListener('mousemove', updateCursorPosition);
  window.addEventListener('click', toggleActiveCursor);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
  window.removeEventListener('click', toggleActiveCursor);
});
*/
</script>

<template>
  <header>
    <meta name="color-scheme" content="light only" />
  </header>
  <div class="flex items-center justify-center"></div>
  <router-view></router-view>
</template>

<style scoped>
.router-link-active {
  cursor: none;
}
</style>
