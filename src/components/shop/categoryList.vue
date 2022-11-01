<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      categories: (state) => state.shop.categories,
    }),
  },
};
</script>
<template>
  <div id="listWrap">
    <div class="list">
      <div v-for="cat in this.categories" class="category">
        {{ cat.category_displayName }}
      </div>
    </div>
  </div>
</template>
<style scoped>
#listWrap {
  padding: 1em;
  background: #fff;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 35px;
  left: -100%;
  z-index: 998;
  transition: transform 0.2s ease;
}

#listWrap.active {
  transform: translateX(100%);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.category {
  cursor: pointer;
  padding: 0.5em;
  background: #eee;
}

.category:hover {
  background: rgb(184, 184, 184);
}

@media (min-width: 1024px) {
  #listWrap {
    position: static;
    padding: 1em 1em 0 0;
  }
}
</style>
