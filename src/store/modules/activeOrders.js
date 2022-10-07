const state = {
  ordersInProgress: [],
  ordersDone: [],
};

const mutations = {
  setOrders(state, { inProgress, done }) {
    state.ordersInProgress = inProgress;
    state.ordersDone = done;
  },
};

const actions = {
  fetchOrders({ commit, state }) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    fetch("http://localhost:3000/orders/active", requestOptions).then(
      async (res) => {
        const resData = await res.json();
        let inProgress = [];
        let ready = [];

        resData.forEach((order) => {
          if (order.status === "rdy") {
            ready.push(order);
          } else {
            inProgress.push(order);
          }
        });
        commit("setOrders", { inProgress: inProgress, done: ready });
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
