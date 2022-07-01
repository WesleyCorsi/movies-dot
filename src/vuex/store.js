import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrinhoTab: false,
    carrinho: [],
    favoritosTab: false,
    favoritos: [],
  },
  mutations: {
    openOrCloseFav: (state) => {
      state.favoritosTab = !state.favoritosTab;
    },
    updateFavoritos: (state, favoritos) => {
      state.favoritos = favoritos;
    },
    openOrCloseCart: (state) => {
      state.carrinhoTab = !state.carrinhoTab;
    },
    updateCarrinho: (state, carrinho) => {
      state.carrinho = carrinho;
    },
  },
  actions: {
    listFavoritos: ({ commit, state }, payload) => {
      let newFavs = JSON.parse(JSON.stringify(state.favoritos));
      let filmFav = newFavs.some((movie) => movie.id === payload.id);
      if (!filmFav) {
        newFavs.push(payload);
        commit("updateFavoritos", newFavs);
      } else {
        let idx = newFavs.findIndex((fav) => fav.id === payload.id);
        newFavs.splice(idx, 1);
        commit("updateFavoritos", newFavs);
      }
    },
    listCarrinho: ({ commit, state }, payload) => {
      let newshopcart = JSON.parse(JSON.stringify(state.carrinho));
      let jaTemFilme = newshopcart.some((movie) => movie.id === payload.id);
      if (jaTemFilme) {
        let idx = newshopcart.findIndex((movie) => movie.id === payload.id);
        ++newshopcart[idx].qt;
      } else {
        newshopcart.push(payload);
      }
      commit("updateCarrinho", newshopcart);
    },
    deletarItem: ({ commit, state }, payload) => {
      let newshopcart = JSON.parse(JSON.stringify(state.carrinho));
      let idx = newshopcart.findIndex((movie) => movie.id === payload.id);
      if (payload.qt === 1) {
        newshopcart.splice(idx, 1);
      } else {
        --newshopcart[idx].qt;
      }
      commit("updateCarrinho", newshopcart);
    },
    esvaziarCarrinho: ({ commit }) => {
      commit("updateCarrinho", []);
    },
  },
});
