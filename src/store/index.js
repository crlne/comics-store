import { createStore } from 'vuex';
import api from '@/api';

export default createStore({
  state: {
    cart: [],
    showCart: false,
    comics: [],
  },
  mutations: {
    ADD_TO_CART(state, comic) {
      const item = state.cart.find(item => item.id === comic.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...comic, quantity: 1 });
      }
    },
    UPDATE_QUANTITY(state, { item, quantity }) {
      const cartItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
    REMOVE_FROM_CART(state, item) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== item.id);
    },
    TOGGLE_CART(state) {
      state.showCart = !state.showCart;
    },
    SET_COMICS(state, comics) {
      state.comics = comics;
    }
  },
  actions: {
    addToCart({ commit }, comic) {
      commit('ADD_TO_CART', comic);
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload);
    },
    removeFromCart({ commit }, item) {
      commit('REMOVE_FROM_CART', item);
    },
    toggleCart({ commit }) {
      commit('TOGGLE_CART');
    },
    async fetchComics({ commit }, params) {
      try {
        const response = await api.get('/comics', { params });
        commit('SET_COMICS', response.data.data.results);
      } catch (error) {
        console.error('Failed to fetch comics:', error);
      }
    }
  },
  getters: {
    cartItems: state => state.cart,
    showCart: state => state.showCart,
    cartItemCount: state => state.cart.reduce((acc, item) => acc + item.quantity, 0),
    cartSubtotal: state => state.cart.reduce((acc, item) => acc + item.quantity * item.prices[0].price, 0).toFixed(2),
    cartTotal: (state, getters) => getters.cartSubtotal,
    comics: state => state.comics,
  }
});
