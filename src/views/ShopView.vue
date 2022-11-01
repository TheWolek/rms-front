<script>
import { mapState } from "vuex";
import CategorySection from "../components/shop/categorySection.vue";
import modal_addToBasket from "../components/shop/modal_addToBasket.vue";
import categorySelect from "../components/shop/categorySelect.vue";

export default {
  components: { CategorySection, modal_addToBasket, categorySelect },
  computed: {
    ...mapState({
      selectedCategory: (state) => state.shop.selectedCategory,
      modal_addToBasket_isActive: (state) =>
        state.shop.modalAddToBasket_isActive,
    }),
  },
  methods: {},
};
</script>
<template>
  <modal_addToBasket v-if="modal_addToBasket_isActive" />
  <div class="wrap">
    <categorySelect />
    <div id="shopView">
      <CategorySection :cat="selectedCategory" />
    </div>
  </div>
</template>
<style>
#shopView {
  padding: 1em;
  margin: 0 auto;
}

.wrap {
  height: 100vh;
}

@media (min-width: 1024px) {
  .itemTile:nth-child(5n) {
    margin: 0;
  }

  #shopView {
    width: 100%;
    padding: 1em 0 1em 1em;
  }

  .wrap {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    justify-items: center;
    margin: 0 2em;
  }
}

@media (min-width: 1400px) {
}
</style>
