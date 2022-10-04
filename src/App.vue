<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>
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

@media (min-width: 1024px) {
  nav {
    display: flex;
    place-items: center;
    text-align: left;
    font-size: 1rem;
    max-height: 10vh;
  }
}
</style>
