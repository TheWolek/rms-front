const state = {
  station: null,
  stationWorkItems: [],
};

const mutations = {
  setStation(state, station) {
    state.station = station;
  },
  setStationWorkItems(state, items) {
    state.stationWorkItems = items;
  },
  clear(state) {
    state.stationWorkItems = [];
    state.station = null;
  },
  changeItemStatus(state, { itemId, newStatus }) {
    let item = state.stationWorkItems.findIndex((i) => {
      return i.id === itemId;
    });
    state.stationWorkItems[item].dishStatus = newStatus;
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
  changeItemStatus({ state, commit, dispatch }, { itemId, newStatus }) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify({
        id: itemId,
        newStatus: newStatus,
      }),
    };
    fetch(`http://localhost:3000/stationwork/complete`, requestOptions).then(
      async (res) => {
        const resData = await res.json();

        if (newStatus === "rdyToPck" || newStatus === "done") {
          console.log();
          dispatch("fetchItems", state.station);
        } else {
          commit("changeItemStatus", { itemId: itemId, newStatus: newStatus });
        }
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
