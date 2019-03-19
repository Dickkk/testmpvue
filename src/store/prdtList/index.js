const prdtList={
  namespaced: true,
  state: {
    prdts: [
      {prdtId: 1, prdtTile: '定期10天', bankName: '民生银行', prdtDate: '20190311', prdtLong: 10, prdtRate: 3.14, ipw: 1.01, tag: '底风险'},
      {prdtId: 1, prdtTile: '定期10天', bankName: '民生银行', prdtDate: '20190312', prdtLong: 10, prdtRate: 3.14, ipw: 1.01, tag: '底风险'},
      {prdtId: 1, prdtTile: '定期10天', bankName: '民生银行', prdtDate: '20190313', prdtLong: 10, prdtRate: 3.14, ipw: 1.01, tag: '底风险'},
      {prdtId: 1, prdtTile: '定期10天', bankName: '民生银行', prdtDate: '20190314', prdtLong: 10, prdtRate: 3.14, ipw: 1.01, tag: '底风险'}
    ]
  },
  mutations: {
    // incrementcnt: (state, cnt) => {
    //   const obj = state;
    //   obj.count += cnt;
    // }
    initData: (state, data) => {
      const obj = state;
      obj.prdts =data;
    },
    appendData: (state, datas) => {
      state.prdts=state.prdts.concat(datas);
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
    getmorePrdts: (context, curPage) => {
      mpvue.showLoading({
        title: '加载中'
      });
      // 调用后台
      setTimeout(function() {
        let prdtsFromServer=[
          {prdtId: 2, prdtTile: '定期30天', bankName: '民生银行', prdtDate: '20190311', prdtLong: 10, prdtRate: 3.64, ipw: 1.01, tag: '底风险'},
          {prdtId: 2, prdtTile: '定期30天', bankName: '民生银行', prdtDate: '20190312', prdtLong: 10, prdtRate: 3.64, ipw: 1.01, tag: '底风险'},
          {prdtId: 2, prdtTile: '定期30天', bankName: '民生银行', prdtDate: '20190313', prdtLong: 10, prdtRate: 3.64, ipw: 1.01, tag: '底风险'},
          {prdtId: 2, prdtTile: '定期30天', bankName: '民生银行', prdtDate: '20190314', prdtLong: 10, prdtRate: 3.64, ipw: 1.01, tag: '底风险'},
          {prdtId: 2, prdtTile: '定期30天', bankName: '民生银行', prdtDate: '20190315', prdtLong: 10, prdtRate: 3.64, ipw: 1.01, tag: '底风险'}
        ];
        context.commit('appendData', prdtsFromServer);
        mpvue.hideLoading();
      }, 2000);
    }
  },
  getters: {
    // getNextCount: (state) => {
    //   return state.count+1;
    // }
    recommandPrdt: ({prdts}) => {
      return prdts[0];
    }
  }
};
export default prdtList;
