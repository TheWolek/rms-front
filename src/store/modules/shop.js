import router from "../../router";
import calculateBasketItemAmount from "../../helpers/calculateBasketItemAmount";
import calculateBasketValue from "../../helpers/calculateBasketValue";
import VueCookies from "vue-cookies";

// const $cookies = inject("$cookies");

const state = () => ({
  items: [],
  categories: [],
  selectedCategory: {
    category_id: 1,
    category_displayName: "",
  },
  basket: VueCookies.get("basketItems") ? VueCookies.get("basketItems") : [],
  basketItemsAmount: 0,
  basketTotalValue: 0,
  modalAddToBasket_isActive: false,
  modalAddToBasket_item: {},
  TYP_isAcitve: false,
  TYPData: {},
  errorMsg: {
    active: false,
    message: "",
  },
  searchActive: false,
  searchResultsCategories: [],
  searchText: "",
  searchResultSelectedCategory: null,
});

const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  selectCategory(state, category_id) {
    let filtered = state.categories.find(
      (item) => item.category_id === category_id
    );
    state.selectedCategory = filtered;
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
    $cookies.set("basketItems", JSON.stringify(state.basket));
    state.basketItemsAmount = calculateBasketItemAmount(state.basket);
    state.basketTotalValue = calculateBasketValue(state.basket);
  },
  editBasketItemBunddle(state, { index, newBunddleItems }) {
    state.basket[index].bunddleItems = newBunddleItems;
  },
  clearBasket(state) {
    state.basket = [];
    $cookies.set("basketItems", JSON.stringify(state.basket));
    state.basketItemsAmount = 0;
    state.basketTotalValue = 0;
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
    $cookies.set("basketItems", JSON.stringify(state.basket));
    state.basketItemsAmount = calculateBasketItemAmount(state.basket);
    state.basketTotalValue = calculateBasketValue(state.basket);
  },
  setItemAmount(state, { itemIndex, newAmount }) {
    state.basket[itemIndex].count = newAmount;
    $cookies.set("basketItems", JSON.stringify(state.basket));
    state.basketItemsAmount = calculateBasketItemAmount(state.basket);
    state.basketTotalValue = calculateBasketValue(state.basket);
  },
  setError(state, message) {
    state.errorMsg = {
      active: true,
      message: message,
    };
  },
  clearError(state) {
    state.errorMsg.active = false;
  },
  calculateBasket(state) {
    state.basketItemsAmount = calculateBasketItemAmount(state.basket);
    state.basketTotalValue = calculateBasketValue(state.basket);
  },
  setSearchText(state, text) {
    state.searchText = text;
  },
  setSearchResults(state, categories) {
    state.searchActive = true;
    state.searchResultsCategories = categories;
    state.searchResultSelectedCategory = null;
  },
  updateSearchResults(state, { id, newData }) {
    state.searchResultsCategories[id] = newData;
  },
  exitSearchResults(state) {
    state.searchActive = false;
    state.searchResultsCategories = [];
    state.searchResultSelectedCategory = null;
  },
  setSearchResultSelectedCategory(state, category) {
    state.searchResultSelectedCategory = category;
  },
};

const actions = {
  fetchItems({ commit, state, dispatch }) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    fetch(`http://${import.meta.env.VITE_API_HOST}:3000/dishes`, requestOptions)
      .then(async (res) => {
        const resData = await res.json();
        commit("setItems", resData);
        commit("selectCategory", 1);
      })
      .catch((err) => {
        dispatch("displayError", "wystąpił błąd przy pobieraniu danych");
      });
    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/dishes/categories`,
      requestOptions
    )
      .then(async (res) => {
        const resData = await res.json();
        commit("setCategories", resData);
        commit("selectCategory", 1);
      })
      .catch((err) => {
        dispatch("displayError", "wystąpił błąd przy pobieraniu danych");
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
  displayError({ commit, state }, errorMsg) {
    commit("setError", errorMsg);

    setTimeout(() => {
      commit("clearError");
    }, 3000);
  },
  doSearchByText({ commit, state }) {
    let filtered = state.items.filter((i) =>
      i.displayName.toLowerCase().includes(state.searchText.toLowerCase())
    );
    let categories = [];
    filtered.forEach((i) => {
      let found = categories.find((cat) => cat.category_id === i.category_id);
      if (!found) {
        categories.push({
          category_id: i.category_id,
          category_displayName: i.category_displayName,
        });
      }
    });

    categories.forEach((cat) => {
      let items = filtered.filter((i) => i.category_id === cat.category_id);
      cat.items = items;
    });
    commit("setSearchResults", categories);
  },
  narrowResultCategories({ commit, state, dispatch }, selectedCategoryId) {
    dispatch("doSearchByText");
    let itemsByCategoryIndex = state.searchResultsCategories.findIndex(
      (i) => i.category_id === selectedCategoryId
    );

    state.searchResultsCategories.forEach((cat, index) => {
      if (index !== itemsByCategoryIndex) {
        cat.items = [];
        commit("updateSearchResults", { id: index, newData: cat });
      }
    });

    commit("setSearchResultSelectedCategory", selectedCategoryId);
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
