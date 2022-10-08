const state = {
  stationWorkItems: [],
};

const mutations = {
  setStationWorkItems(state, items) {
    state.stationWorkItems = items;
  },
};

const actions = {
  fetchItems({ state, commit }, station) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    fetch(`http://localhost:3000/stationwork/${station}`, requestOptions).then(
      async (res) => {
        const resData = await res.json();
        commit("setStationWorkItems", resData);
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
