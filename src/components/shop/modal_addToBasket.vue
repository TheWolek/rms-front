<script>
import { mapState } from "vuex";
import router from "../../router";
import store from "../../store";

export default {
  data() {
    return {
      selectedDrink: this.getDefaultDrink,
    };
  },
  computed: {
    ...mapState({
      basketItem: (state) => state.shop.modalAddToBasket_item,
      items: (state) => state.shop.items,
      basket: (state) => state.shop.basket,
    }),
    isBunddle() {
      return this.basketItem.isBunddle;
    },
    getItemIndex() {
      return this.basket.findIndex((i) => i.dishId === this.basketItem.dishId);
    },
    getDefaultDrink() {
      return this.basketItem.optionalDrinks[0];
    },
  },
  methods: {
    goToBasket() {
      if (this.isBunddle) {
        let bunddleItems = this.basketItem.bunddleItems;
        bunddleItems.pop();
        bunddleItems.push(
          this.selectedDrink !== undefined
            ? this.selectedDrink
            : this.getDefaultDrink
        );
        store.commit("shop/editBasketItemBunddle", {
          index: this.getItemIndex,
          newBunddleItems: bunddleItems,
        });
      }
      store.commit("shop/toggleModal_AddToBasket", {
        item: {},
        newState: false,
      });
      router.push("/basket");
    },
    closeModal() {
      store.commit("shop/toggleModal_AddToBasket", {
        item: {},
        newState: false,
      });
    },
    getItemDisplayName(id) {
      return this.items.find((i) => i.dishId === id).displayName;
    },
  },
};
</script>
<template>
  <div class="modalBg">
    <div class="modal" id="modal_addToBasket">
      <div class="header"><h2>Dodaj produkt do koszyka</h2></div>
      <div class="content">
        <div class="item">
          <div class="imgWrap" :class="{ small: isBunddle }"></div>
          <div class="details">
            <div class="name">{{ basketItem.displayName }}</div>
            <div class="price">{{ basketItem.price }} zł</div>
            <div class="chooseDrink" v-if="isBunddle">
              <h3>Wybierz napój do zestawu:</h3>
              <div class="chooseDrinkItems">
                <label
                  v-for="(drink, index) in basketItem.optionalDrinks"
                  :key="drink"
                  :for="drink"
                  class="tile"
                >
                  <input
                    type="radio"
                    name="chooseDrink"
                    :id="drink"
                    :checked="index === 0"
                    v-model="selectedDrink"
                    :value="drink"
                  />
                  <span>{{ getItemDisplayName(drink) }}</span></label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomBar">
        <div class="cancelBtn btn" @click="closeModal">Wróć do sklepu</div>
        <div class="goToBasketBtn btn" @click="goToBasket">
          Przejdź do koszyka
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modalBg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 101vh;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
}

.modal {
  background: rgb(236, 236, 236);
  width: 100vw;
  height: 100vh;
}

.header {
  background: rgb(199, 199, 199);
  padding: 1em 1.5em;
  height: 8vh;
}

.content {
  height: 84vh;
}

.bottomBar {
  height: 8vh;
  background: rgb(199, 199, 199);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
}

.goToBasketBtn {
  background: rgb(0, 125, 0);
  color: #fff;
}

.btn {
  padding: 0.5em;
}

.btn:hover {
  cursor: pointer;
}

.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3em;
}

.imgWrap {
  width: 75vw;
  height: 400px;
  background: #000;
}

.imgWrap.small {
  height: 250px;
}

.details {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}

.details .name {
  font-weight: 600;
  font-size: 1.1rem;
}

.details .tile {
  border: 1px solid var(--color-text);
  padding: 0.6em;
  cursor: pointer;
}

.details .tile span {
  margin-left: 0.8em;
  text-transform: capitalize;
  font-weight: 500;
}

.details .chooseDrinkItems {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

@media (min-width: 768px) {
  .details .chooseDrinkItems {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .details .tile {
    width: 45%;
    padding: 0.8em;
  }
}

@media (min-width: 1024px) {
  .modal {
    width: 55%;
    height: 80vh;
  }

  .header {
    background: rgb(199, 199, 199);
    padding: 1em 1.5em;
  }

  .header h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .content {
    height: 80%;
  }

  .imgWrap {
    width: 100%;
    height: 400px;
  }

  .details .name {
    font-size: 1.2rem;
  }
}

@media (min-width: 1400px) {
  .modal {
    width: 45%;
  }
}
</style>
