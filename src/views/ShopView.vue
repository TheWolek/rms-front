<script>
import { mapState } from "vuex";
import categorySection from "../components/shop/categorySection.vue";
import CategorySection from "../components/shop/categorySection.vue";

export default {
  components: { CategorySection },
  computed: {
    ...mapState({
      categories: (state) => state.shop.categories,
    }),
  },
  methods: {},
};
</script>
<template>
  <div id="shopView">
    <CategorySection v-for="cat in categories" :key="cat.id" :cat="cat" />
  </div>
</template>
<style>
#shopView {
  padding: 1em;
}

@media (min-width: 1024px) {
  .itemTile:nth-child(5n) {
    margin: 0;
  }
}
</style>
