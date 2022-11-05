<script>
import { mapState } from "vuex";

import item from "../item.vue";
import emptyResults from "./emptyResults.vue";

export default {
  components: { item, emptyResults },
  computed: {
    ...mapState({
      searchResultsCategories: (state) => state.shop.searchResultsCategories,
    }),
  },
};
</script>
<template>
  <emptyResults v-if="searchResultsCategories.length === 0" />
  <div v-for="cat in searchResultsCategories">
    <h3 v-if="cat.items.length !== 0">{{ cat.category_displayName }}</h3>
    <div class="items">
      <item v-for="item in cat.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<style scoped>
.items {
  display: grid;
  gap: 1em;
}
</style>
