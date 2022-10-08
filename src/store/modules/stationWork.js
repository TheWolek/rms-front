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
    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/stationwork/${station}`,
      requestOptions
    ).then(async (res) => {
      const resData = await res.json();
      commit("setStationWorkItems", resData);
    });
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
    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/stationwork/complete`,
      requestOptions
    ).then(async (res) => {
      const resData = await res.json();

      if (newStatus === "rdyToPck" || newStatus === "done") {
        dispatch("fetchItems", state.station);
      } else {
        commit("changeItemStatus", { itemId: itemId, newStatus: newStatus });
      }
    });
  },
  changeOrderStatus({ state, commit, dispatch }, { orderId, newStatus }) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    };
    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/orders/${orderId}`,
      requestOptions
    ).then(async (res) => {
      dispatch("fetchItems", state.station);
    });
  },
  closeOrder({ state, commit, dispatch }, orderId) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    fetch(
      `http://${import.meta.env.VITE_API_HOST}:3000/orders/${orderId}/finish`,
      requestOptions
    ).then(async (res) => {
      dispatch("fetchItems", state.station);
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
