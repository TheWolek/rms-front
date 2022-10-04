const state = () => ({
  items: [],
  categories: [],
  basket: [],
  modalAddToBasket_isActive: false,
  modalAddToBasket_item: {},
});

const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  addToBasket(state, toAdd) {
    state.basket.push(toAdd);
  },
  clearBasket(state) {
    state.basket = [];
  },
  toggleModal_AddToBasket(state, data) {
    state.modalAddToBasket_isActive = data.newState;
    state.modalAddToBasket_item = data.item;
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
    fetch("http://localhost:3000/dishes", requestOptions).then(async (res) => {
      const resData = await res.json();
      console.log(resData);
      commit("setItems", resData);
    });
    fetch("http://localhost:3000/dishes/categories", requestOptions).then(
      async (res) => {
        const resData = await res.json();
        commit("setCategories", resData);
      }
    );
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
