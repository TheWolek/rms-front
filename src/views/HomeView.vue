<script>
import { mapState } from "vuex";
import store from "../store";

export default {
  computed: {
    ...mapState({
      basketItemCount(state) {
        return state.shop.basketItemsAmount;
      },
    }),
  },
  mounted() {
    store.dispatch("shop/fetchItems");
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"
          ><img src="@/assets/logo.svg" alt="logo"
        /></RouterLink>
        <RouterLink to="/basket"
          ><img src="@/assets/cart.png" alt="basket" id="basketIcon" /> Koszyk
          <div class="basketItemCounter" v-if="basketItemCount !== 0">
            <span>{{ basketItemCount }}</span>
          </div></RouterLink
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
  padding: 0 2em;
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

.basketItemCounter {
  background: rgb(0, 125, 0);
  color: #fff;
  border-radius: 8px;
  line-height: 0;
  font-size: 11px;
  font-weight: normal;
  text-decoration: none;
  height: 16px;
  min-width: 16px;
  display: flex;
  justify-content: center;
  padding: 0px 4px;
  margin-left: 0.5em;
}

.basketItemCounter span {
  position: absolute;
  top: 8px;
}

@media (min-width: 1024px) {
  header .wrapper {
    width: 85%;
    margin: 0 auto;
  }
}

@media (min-width: 1400px) {
  header .wrapper {
    width: 75%;
  }
}
</style>
