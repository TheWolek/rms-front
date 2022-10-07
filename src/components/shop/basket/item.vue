<script>
import store from "../../../store";

export default {
  props: ["item", "itemIndex"],
  methods: {
    deleteItem() {
      store.commit("shop/removeItemFromBasket", this.itemIndex);
    },
  },
};
</script>
<template>
  <div class="item">
    <div class="leftSide">
      <div class="imgWrap"></div>
      <div class="name">{{ item.displayName }}</div>
    </div>

    <div class="rightSide">
      <div class="price">{{ item.price }} zł</div>
      <div class="removeItem" @click="deleteItem">Usuń</div>
    </div>
  </div>
</template>
<style scoped>
.item {
  width: 90%;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 0 auto;
}

.imgWrap {
  width: 40px;
  height: 40px;
  background: #000;
}

.name {
  padding: 0 1em;
}

.leftSide,
.rightSide {
  display: flex;
  align-items: center;
}

.removeItem {
  margin-left: 1em;
  font-weight: 500;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .item {
    width: 100%;
  }
}
</style>
