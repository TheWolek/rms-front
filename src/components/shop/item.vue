<script>
import { mapState } from "vuex";
import store from "../../store";

export default {
  props: ["item"],
  methods: {
    addToBasket() {
      store.commit("shop/toggleModal_AddToBasket", {
        item: this.item,
        newState: true,
      });
      store.commit("shop/addToBasket", this.item);
    },
  },
};
</script>
<template>
  <div class="itemTile" id="item.id" @click="addToBasket">
    <div class="imgWrap"></div>
    <div class="details">
      <div class="name">{{ item.displayName }}</div>
      <div class="basketData">
        <div class="price">{{ item.price }} zł</div>
        <div class="basket">
          <img src="@/assets/cart.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.itemTile {
  display: flex;
  padding: 1em;
  background: #f1f1f1;
  transition: background-color 0.2s ease-out;
}

.itemTile:hover {
  cursor: pointer;
}

.itemTile + .itemTile {
}

.itemTile .imgWrap {
  width: 30%;
}

.itemTile .details {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 1em;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
}

.itemTile .basketData {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.itemTile .name {
  font-weight: 600;
}

.itemTile .basket {
  display: flex;
  align-items: center;
}

.itemTile .basket img {
  width: 1.5em;
}

.itemTile:hover {
  cursor: pointer;
  background: #e9e9e9;
}

@media (min-width: 1024px) {
  .itemTile:nth-child(4n + 1) {
    margin: 0;
  }

  .itemTile {
    height: 100px;
  }

  .itemTile .details {
    justify-content: space-between;
  }
}
</style>
