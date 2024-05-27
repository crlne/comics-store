<template>
  <div class="comic-item">
    <div class="message-container" v-if="isOutOfStock">
      <p class="out-of-stock-message">Fora de estoque</p>
    </div>
    <p v-if="showConfirmation" class="confirmation-message">
      Item adicionado ao carrinho!
    </p>
    <div class="add-to-cart-container">
      <button 
        @click="handleAddToCart" 
        :disabled="isOutOfStock" 
        class="add-to-cart-button"
      >
        <i class="fas fa-shopping-cart"></i> Comprar
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    comic: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showConfirmation: false
    };
  },
  computed: {
    isOutOfStock() {
      return !(this.comic.prices.length > 0 && this.comic.prices[0].price);
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    handleAddToCart() {
      if (!this.isOutOfStock) {
        this.addToCart(this.comic);
        this.showConfirmation = true;
        setTimeout(() => {
          this.showConfirmation = false;
        }, 2000);
      }
    }
  }
};
</script>

<style scoped>
.comic-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comic-item img {
  display: block;
  width: 100%;
  height: auto;
}

.message-container {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.out-of-stock-message {
  color: #fff;
  margin-bottom: 33%;
  background-color: red;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  opacity: 0.8;
  z-index: 1;
  top: 100%;
}

.add-to-cart-container {
  text-align: center;
}

.add-to-cart-button {
  color: #000;
  padding: 8px 15px;
  transition: background-color 0.3s;
  background-color: yellow;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
}

.add-to-cart-button:disabled {
  background-color: grey;
  cursor: not-allowed;
}

.add-to-cart-button:hover:enabled {
  background-color: #000;
  color: #fff;
}

.confirmation-message {
  color: #000;
  font-weight: bold;
  position: absolute;
  bottom: 90%;
  left: 50%;
  transform: translateX(-50%);
  background: yellow;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: solid 1px #000;
  z-index: 2;
}
</style>