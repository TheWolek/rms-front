<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><img src="#" alt="logo" /></RouterLink>
        <RouterLink to="/basket">Koszyk</RouterLink>
      </nav>
    </div>
  </header>
  <router-view />
</template>
<style>
header {
  background: #e0e0e0;
  padding: 1.5em 0;
}

header .wrapper {
  width: 65%;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
}
</style>
