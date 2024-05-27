<template>
  <div class="promo-buttons">
    <button class="promo-button">
      <i class="fa fa-truck icon"></i>
      <span>Frete grátis em cada pedido</span>
    </button>
    <button class="promo-button">
      <i class="fa fa-store icon"></i>
      <span>Retirada gratuita na loja</span>
    </button>
    <button class="promo-button">
      <i class="fa fa-shopping-bag icon"></i>
      <span>Bag & Board grátis em todos os quadrinhos</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PromoButtons',
};
</script>

<style scoped>
.promo-buttons {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
}

.promo-button {
  background-color: yellow;
  border: 2px solid black;
  border-radius: 50%;
  padding: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
}

.promo-button .icon {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.promo-button:hover {
  transform: scale(1.05);
}

.icon {
  margin-right: 1rem;
}
</style>