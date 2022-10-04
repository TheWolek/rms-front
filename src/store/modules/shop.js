const state = () => ({
  items: [],
  categories: [],
});

const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  setCategories(state, categories) {
    state.categories = categories;
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
