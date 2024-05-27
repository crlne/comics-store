<template>
  <div class="shopping-cart" v-if="visible">
    <div class="cart-header">
      <h2>Carrinho de Compras</h2>
      <button class="close-button" @click="toggleCart">X</button>
    </div>
    <div v-if="cartItems.length === 0">O carrinho está vazio.</div>
    <div v-else class="cart-body">
      <ul class="cart-items">
        <li v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-info">
            <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="item.title" />
            <div class="item-details">
              <h3>{{ item.title }}</h3>
              <p>{{ item.series.name }}</p>
              <p>${{ item.prices[0]?.price || 'N/A' }}</p>
            </div>
          </div>
          <div class="item-actions">
            <div class="quantity-controls">
              <button 
                @click="updateQuantity({ item, quantity: item.quantity - 1 })" 
                :disabled="item.quantity <= 1">-</button>
              <input type="number" v-model.number="item.quantity" 
                @change="updateQuantity({ item, quantity: item.quantity })" 
                min="1" class="quantity-input" 
              />
              <button @click="updateQuantity({ item, quantity: item.quantity + 1 })">+</button>
            </div>
            <button @click="removeFromCart(item)" class="remove-button">
              Remover
            </button>
          </div>
        </li>
      </ul>
      <div class="cart-summary">
        <p>Subtotal: ${{ cartSubtotal }}</p>
        <p>Total: ${{ cartTotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartSubtotal', 'cartTotal'])
  },
  methods: {
    ...mapActions(['updateQuantity', 'removeFromCart', 'toggleCart'])
  }
};
</script>

<style scoped>
.shopping-cart {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.cart-header h2 {
  font-size: 1.5rem;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #ff4500;
}

.close-button:hover {
  color: #000;
}

.cart-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.cart-items {
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.item-info {
  display: flex;
  align-items: center;
}

.item-info img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.item-details h3 {
  font-size: 1rem;
  margin: 0;
  color: #333;
}

.item-details p {
  font-size: 0.875rem;
  margin: 2px 0;
  color: #666;
}

.item-actions {
  display: flex;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls button {
  background-color: yellow;
  color: #000;
  border: solid 1px #000;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-controls button:disabled {
  background-color: grey;
  cursor: not-allowed;
}

.quantity-controls button:hover:enabled {
  background-color: #000;
  color: #fff;
}

.quantity-input {
  width: 50px;
  margin: 0 5px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  -moz-appearance: textfield;
}

.quantity-input::-webkit-outer-spin-button,
.quantity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.quantity-input:focus {
  outline: none;
  border-color: yellow;
  box-shadow: 0 0 5px rgba(255, 69, 0, 0.5);
}

.remove-button {
  background-color: yellow;
  color: #000;
  border: solid 1px #000;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 10px;
}

.remove-button:hover {
  background-color: #000;
  color: #fff;
}

.cart-summary {
  border-top: 1px solid #ddd;
  padding-top: 10px;
  text-align: right;
  font-size: 1rem;
  color: #333;
  background: #f0f0f0;
  padding-bottom: 10px;
}

.cart-summary p {
  margin: 5px 0;
}
</style>
