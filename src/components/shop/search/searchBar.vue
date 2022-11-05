<script>
import store from "../../../store";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      if (this.searchText === "") {
        return this.exitSearchResults();
      }
      store.dispatch("shop/doSearchByText", this.searchText);
    },
    exitSearchResults() {
      store.commit("shop/exitSearchResults");
    },
  },
};
</script>
<template>
  <form class="searchWrap" v-on:search="search" @submit.prevent>
    <input
      id="searchInput"
      type="search"
      placeholder="wyszukaj produktu"
      v-model="searchText"
    />
  </form>
</template>
<style scoped>
.searchWrap {
  display: flex;
  align-items: center;
}

#searchInput {
  border-radius: 8px;
  outline: none;
  border: 1px solid var(--color-text);
  padding: 0.3em 0.5em;
  line-height: 20px;
  font-size: 14px;
}
</style>
