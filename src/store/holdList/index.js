const holdList={
  namespaced: true,
  state: {
    holds: [
      {holdId: 1, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 10.23, intst: 23.14},
      {holdId: 2, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 100.23, intst: 33.14},
      {holdId: 3, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 104.54, intst: 43.14},
      {holdId: 4, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 100, intst: 3.54}
    ],
    totalAmt:'10000.00',
    yestodayIntst:'10.34',
    totalIntst:'10000'
  },
  mutations: {
    initData: (state, data) => {
      const obj = state;
      obj.holds =data;
    },
    appendData: (state, datas) => {
      state.holds=state.holds.concat(datas);
    }
  },
  actions: {
    // incrementAsyn: (context, cnt) => {
    //   context.commit('incrementcnt', cnt);
    // }
    init: (context) => {
      let data=[];
      // 后台调用
      context.commit('initData', data);
    },
    getmoreholds: (context, curPage) => {
      mpvue.showLoading({
        title: '加载中'
      });
      // 调用后台
      setTimeout(function() {
        let holdsFromServer=[
          {holdId: curPage*4+1, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 10.23, intst: 23.14},
          {holdId: curPage*4+2, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 100.23, intst: 33.14},
          {holdId: curPage*4+3, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 104.54, intst: 43.14},
          {holdId: curPage*4+4, holdTile: '定期10天', bankName: '民生银行', mtrDays: '8', txAmt: 100, intst: 3.54}
        ];
        context.commit('appendData', holdsFromServer);
        mpvue.hideLoading();
      }, 2000);
    }
  },
  getters: {
    // getNextCount: (state) => {
    //   return state.count+1;
    // }
    recommandhold: ({holds}) => {
      return holds[0];
    }
  }
};
export default holdList;
