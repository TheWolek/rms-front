<script>
import { mapState } from "vuex";
import CategorySection from "../components/shop/categorySection.vue";
import modal_addToBasket from "../components/shop/modal_addToBasket.vue";

export default {
  components: { CategorySection, modal_addToBasket },
  computed: {
    ...mapState({
      categories: (state) => state.shop.categories,
      modal_addToBasket_isActive: (state) =>
        state.shop.modalAddToBasket_isActive,
    }),
  },
  methods: {},
};
</script>
<template>
  <div id="shopView">
    <modal_addToBasket v-if="modal_addToBasket_isActive" />
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
