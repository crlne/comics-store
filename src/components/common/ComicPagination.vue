<template>
  <ul class="pagination">
    <li :class="{ disabled: currentPage === 1 }" @click="prevPage">
      <button :disabled="currentPage === 1">Anterior</button>
    </li>
    <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="changePage(page)">
      <button>{{ page }}</button>
    </li>
    <li :class="{ disabled: currentPage === totalPages }" @click="nextPage">
      <button :disabled="currentPage === totalPages">Próximo</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ComicPagination',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(page) {
      if (page !== this.currentPage) {
        this.$emit('page-changed', page);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.pagination li {
  margin: 0 0.5rem;
}

.pagination button {
  color: #000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination button:hover:enabled {
  background-color: #ddd;
  border-color: #bbb;
}

.pagination .active button {
  background-color: #000;
  color: #fff;
  border-color: #000;
}
</style>
