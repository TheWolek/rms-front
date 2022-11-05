<script>
import { mapState } from "vuex";
import store from "../../../store";

export default {
  props: ["cat"],
  data() {
    return {
      id: this.cat.category_id,
      title: this.cat.category_displayName,
    };
  },
  computed: {
    ...mapState({
      selectedCategory: (state) => state.shop.selectedCategory.category_id,
      searchActive: (state) => state.shop.searchActive,
      searchResultSelectedCategory: (state) =>
        state.shop.searchResultSelectedCategory,
    }),
    is_Active() {
      if (this.searchActive) {
        return this.searchResultSelectedCategory === this.id ? true : false;
      } else {
        return this.selectedCategory === this.id ? true : false;
      }
    },
  },
  methods: {
    filterItems(cat_id) {
      if (!this.searchActive) {
        store.commit("shop/selectCategory", cat_id);
        document.getElementById("listWrap").classList.toggle("active");
      } else {
        // store.commit("shop/selectCategory", cat_id);
        store.dispatch("shop/narrowResultCategories", cat_id);
        document.getElementById("listWrap").classList.toggle("active");
      }
    },
  },
};
</script>
<template>
  <div
    class="category"
    @click="
      () => {
        this.filterItems(this.id);
      }
    "
    :class="{
      active: is_Active,
    }"
  >
    {{ title }}
  </div>
</template>
<style scoped>
.category {
  cursor: pointer;
  padding: 0.5em;
  background: #eee;
}

.category:hover,
.category.active {
  background: rgb(184, 184, 184);
}
</style>
