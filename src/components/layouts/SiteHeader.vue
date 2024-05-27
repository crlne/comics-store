<template>
  <header class="header">
    <h1 class="logo">Comics Store</h1>
    <div class="header-right">
      <button class="cart-button" @click="$emit('toggle-cart')">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">{{ cartItemCount }}</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    cartItemCount: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  background-color: #fff;
  color: #000;
}

.logo {
  font-family: 'Bangers', cursive;
  font-size: 2rem;
}

.header-right {
  display: flex;
  align-items: center;
}

.cart-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}
i {
  color: #000;
}
</style>
