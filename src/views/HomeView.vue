<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"
          ><img src="@/assets/logo.svg" alt="logo"
        /></RouterLink>
        <RouterLink to="/basket"
          ><img src="@/assets/cart.png" alt="basket" id="basketIcon" />
          Koszyk</RouterLink
        >
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

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

nav a img {
  width: 3em;
}

#basketIcon {
  width: 5%;
  margin-right: 0.5em;
  width: 1.5em;
}
</style>
