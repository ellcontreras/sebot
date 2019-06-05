import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        text: "Hola, bienvenido a SeBot 😀",
        who: "bot"
      },
      {
        text: "Como estuvo tu dia? 😋",
        who: "bot"
      },
    ]
  },
  mutations: {
    ADD_MESSAGE: (state, payload) => {
      state.messages.push(payload);
    }
  },
  actions: {
    addMessage({ commit }, payload) {
      commit("ADD_MESSAGE", payload);
    }
  }
});
