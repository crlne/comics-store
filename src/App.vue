<template>
  <div id="app">
    <SiteHeader :cartItemCount="cartItemCount" @toggle-cart="toggleCart" />
    <ComicsPanel />
    <PromoButtons />
    <router-view @add-to-cart="addToCart" />
    <ShoppingCart
      :cartItems="cartItems"
      :visible="showCart"
      @update-quantity="updateQuantity"
      @remove-from-cart="removeFromCart"
      @toggle-cart="toggleCart"
    />
    <ComicsFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SiteHeader from './components/layouts/SiteHeader'
import ComicsPanel from './components/layouts/ComicsPanel'
import PromoButtons from './components/common/PromoButtons'
import ShoppingCart from './components/common/ShoppingCart'
import ComicsFooter from './components/layouts/ComicsFooter'

export default {
  components: {
    SiteHeader,
    ComicsPanel,
    PromoButtons,
    ShoppingCart,
    ComicsFooter
  },
  computed: {
    ...mapGetters(['cartItems', 'showCart', 'cartItemCount'])
  },
  methods: {
    ...mapActions(['addToCart', 'updateQuantity', 'removeFromCart', 'toggleCart'])
  }
};
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden; 
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; 
}

header, .panel, .promo-buttons, footer {
  margin: 0;
  padding: 0;
}
</style>