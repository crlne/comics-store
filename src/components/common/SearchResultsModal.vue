<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <button class="close-button" @click="closeModal">X</button>
      <h2>Resultados da Busca</h2>
      <div v-if="comics.length === 0">Nenhum quadrinho encontrado.</div>
      <div v-else class="comics-list">
        <div v-for="comic in comics" :key="comic.id" class="comic-item">
          <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" :alt="comic.title" />
          <h3>{{ comic.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comics: {
      type: Array,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.close-button {
  background: yellow;
  border: solid 1px #000;
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: #000;
  color: #fff;
}

h2 {
  text-align: center;
  margin-top: 0;
}

.comics-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.comic-item {
  width: 150px;
  text-align: center;
}

.comic-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.comic-item h3 {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>