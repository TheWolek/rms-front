<script>
import { mapState } from "vuex";
import store from "../../../store";

import categoryBtn from "./categoryBtn.vue";

export default {
  components: { categoryBtn },
  computed: {
    ...mapState({
      categories: (state) => state.shop.categories,
      searchResultsCategories: (state) => state.shop.searchResultsCategories,
      searchActive: (state) => state.shop.searchActive,
    }),
  },
};
</script>
<template>
  <div id="listWrap">
    <div v-if="!searchActive" class="list">
      <categoryBtn
        v-for="cat in this.categories"
        :cat="cat"
        :key="cat.category_id"
      />
    </div>
    <div v-if="searchActive" class="list">
      <categoryBtn
        v-for="cat in this.searchResultsCategories"
        :cat="cat"
        :key="cat.category_id"
      />
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

.list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

@media (min-width: 1024px) {
  #listWrap {
    position: static;
    padding: 1em 1em 0 0;
  }
}

@media (max-width: 1023px) {
  #listWrap.active {
    transform: translateX(100%);
  }
}
</style>
