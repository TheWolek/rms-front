import router from "../../router";
import calculateBasketItemAmount from "../../helpers/calculateBasketItemAmount";

const state = () => ({
  items: [],
  categories: [],
  basket: [],
  basketItemsAmount: 0,
  modalAddToBasket_isActive: false,
  modalAddToBasket_item: {},
  TYP_isAcitve: false,
  TYPData: {},
});

const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  addToBasket(state, toAdd) {
    let itemInBasket = state.basket.findIndex((i) => i.dishId === toAdd.dishId);
    if (itemInBasket !== -1) {
      state.basket[itemInBasket].count += 1;
    } else {
      state.basket.push({ ...toAdd, count: 1 });
    }
    state.basketItemsAmount = calculateBasketItemAmount(state.basket);
  },
  clearBasket(state) {
    state.basket = [];
    state.basketItemsAmount = 0;
  },
  toggleModal_AddToBasket(state, data) {
    state.modalAddToBasket_isActive = data.newState;
    state.modalAddToBasket_item = data.item;
  },
  setTYPData(state, data) {
    state.TYPData = data;
  },
  showTYP(state, newState) {
    state.TYP_isAcitve = newState;
  },
  removeItemFromBasket(state, indexToRemove) {
    state.basket.splice(indexToRemove, 1);
    state.basketItemsAmount = calculateBasketItemAmount(state.basket);
  },
  setItemAmount(state, { itemIndex, newAmount }) {
    state.basket[itemIndex].count = newAmount;
    state.basketItemsAmount = calculateBasketItemAmount(state.basket);
  },
};

const actions = {
  fetchItems({ commit, state }) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/dishes`,
      requestOptions
    ).then(async (res) => {
      const resData = await res.json();
      commit("setItems", resData);
    });
    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/dishes/categories`,
      requestOptions
    ).then(async (res) => {
      const resData = await res.json();
      commit("setCategories", resData);
    });
  },
  submitOrder({ commit, state }, basketOptions) {
    let items = [];
    for (let i = 0; i < state.basket.length; i++) {
      const el = state.basket[i];
      for (let j = 0; j < el.count; j++) {
        items.push(el.dishId);
      }
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify({
        items: items,
        paymentMethod: basketOptions.paymentMethod,
        takeAway: basketOptions.takeAway,
      }),
    };

    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/orders`,
      requestOptions
    ).then(async (res) => {
      const resData = await res.json();
      commit("clearBasket");
      commit("setTYPData", resData);
      commit("showTYP", true);

      setTimeout(() => {
        commit("showTYP", false);
        router.push("/");
      }, 6000);
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
