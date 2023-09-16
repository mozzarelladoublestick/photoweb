<script setup>
import Header from './components/Header.vue'
import ImageGallery from './components/ImageGallery.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import router from './router';

import { ref, onMounted, onUnmounted } from 'vue';

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
</script>

<template>
   <div class="custom-cursor flex items-center justify-center"><div class="small-cursor"></div></div>
<router-view></router-view>
</template>

<style scoped>
.custom-cursor {
  width: 20px;
  height: 20px;
  border: 1px solid #fff; /* Change the border color */
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none; /* Ensure the cursor does not interfere with content */
  transition: all 0.1s ease;
  z-index: 10;
}
.small-cursor {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff; /* Change to the desired background color */
  transition: all 0.1s ease-in; /* Add transition for smooth size change */
}

.small-cursor.active {
  width: 12px; /* Increase the size when active */
  height: 12px;
  background-color: #ffffff52;
}
a {
  cursor: none;
}

.router-link-active {
  cursor: none;
}

</style>
