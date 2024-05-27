<template>
  <div class="modal-mask" @click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header">
        <h3>{{ comic.title }}</h3>
        <button @click="closeModal">Fechar</button>
      </div>
      <div class="modal-body">
        <img 
          :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" 
          :alt="comic.title" 
        />
        <div class="comic-info">
          <p v-if="comic.series">Series: {{ comic.series.name }}</p>
          <p v-if="comic.description">{{ comic.description }}</p>
          <div v-if="comic.prices.length">
            <h4>
            Valor:
             <span v-for="price in comic.prices" :key="price.type">
              ${{ price.price }}
            </span>
            </h4>
           
          </div>
          <p v-if="comic.dates.length">
            Ano de Lançamento: {{ getYear(comic.dates) }}
          </p>
          <AddToCartButton :comic="comic" @add-to-cart="$emit('add-to-cart', comic)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddToCartButton from '../common/AddToCartButton'

export default {
  props: {
    comic: {
      type: Object,
      required: true
    },
    showModal: {
      type: Boolean,
      required: true
    }
  },
  components: {
    AddToCartButton
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    getYear(dates) {
      const onSaleDate = dates.find(date => date.type === 'onsaleDate');
      return onSaleDate ? new Date(onSaleDate.date).getFullYear() : 'N/A';
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
}

.modal-header h3 {
  font-size: 1.8rem;
  margin: 0;
  color: #333;
  font-family: 'Bangers', cursive;
}

.modal-body {
  margin-top: 15px;
}

.modal-body img {
  max-width: 100%;
  height: 400px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.comic-info p, 
.comic-info h4, 
.comic-info ul {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin: 5px 0;
}

.comic-info h4 {
  margin-top: 10px;
}

.comic-info ul {
  padding-left: 1.5rem;
}

button {
  color: #000;
  padding: 8px 15px;
  transition: background-color 0.3s;
  background-color: yellow;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #000;
  color: #fff;
}
</style>