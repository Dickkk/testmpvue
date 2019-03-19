import Vue from 'vue';
import Vuex from 'vuex';
import counter from './counter';
import prdtList from './prdtList';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter: counter,
    prdtList: prdtList
  }
}
);
export default store;
