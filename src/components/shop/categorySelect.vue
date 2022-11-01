<script>
import categoryList from "./categoryList.vue";

export default {
  components: { categoryList },
  methods: {
    toggle() {
      document.getElementById("listWrap").classList.toggle("active");
    },
  },
};
</script>
<template>
  <div @click="toggle" class="burger">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <categoryList />
</template>
<style scoped>
.burger {
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  margin: 1em;
}

.burger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--color-text);
}

@media (min-width: 1024px) {
  .burger {
    display: none;
  }
}
</style>
