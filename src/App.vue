<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a {
  display: inline-block;
}

.snackBar {
  position: absolute;
  top: 1em;
  left: 100%;
  width: calc(100% - 1em);
  background: #ed0000;
  color: #000;
  font-weight: 500;
  padding: 1em;
  z-index: 9999;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.snackBar.active {
  transform: translateX(calc(-100% - 0.5em));
}

@media (min-width: 768px) {
  .snackBar {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  nav {
    display: flex;
    place-items: center;
    text-align: left;
    font-size: 1rem;
    max-height: 10vh;
  }
  .snackBar {
    width: 30%;
  }
}

@media (min-width: 1400px) {
  .snackBar {
    width: 18%;
  }
}
</style>
