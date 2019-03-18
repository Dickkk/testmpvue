const counter={
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment: (state) => {
      const obj = state;
      obj.count += 1;
    },
    incrementcnt: (state, cnt) => {
      const obj = state;
      obj.count += cnt;
    },
    decrement: (state) => {
      const obj = state;
      obj.count -= 1;
    }
  },
  actions: {
    incrementAsyn: (context, cnt) => {
      context.commit('incrementcnt', cnt);
    }
  },
  getters: {
    getNextCount: (state) => {
      return state.count+1;
    }
  }
};
export default counter;
