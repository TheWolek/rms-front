<script>
import store from "../../../store";

export default {
  props: ["item", "itemIndex"],
  methods: {
    deleteItem() {
      store.commit("shop/removeItemFromBasket", this.itemIndex);
    },
    changeAmount() {
      store.commit("shop/setItemAmount", {
        itemIndex: this.itemIndex,
        newAmount: parseInt(this.item.count),
      });
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
      <div class="count">
        <select v-model="this.item.count" @change="changeAmount">
          <option v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i">
            {{ i }}
          </option>
        </select>
      </div>
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
  font-weight: 500;
  cursor: pointer;
}

.rightSide {
  gap: 0.8em;
}

@media (min-width: 1024px) {
  .item {
    width: 100%;
  }
}
</style>
