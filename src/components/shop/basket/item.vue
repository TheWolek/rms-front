<script>
import store from "../../../store";

import bunddleItems from "./bunddleItems.vue";

export default {
  props: ["item", "itemIndex"],
  components: { bunddleItems },
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
      <div class="itemsNames">
        <div class="name">{{ item.displayName }}</div>
        <bunddleItems
          v-for="bi in item.bunddleItems"
          :key="bi"
          class="bunddleItemName"
          :bi="bi"
        />
      </div>
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
  padding-left: 0.8em;
}

.bunddleItemName {
  padding-left: 1.5em;
}

.leftSide,
.rightSide {
  display: flex;
  align-items: center;
  max-width: 60%;
}

.removeItem {
  font-weight: 500;
  cursor: pointer;
  padding: 0.1em 0.3em;
}

.removeItem:hover {
  background: #eee;
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
