<template>
  <div class="comic-list-container">
    <h1 class="comic-link">
      Coleção Épica de Quadrinhos
      <span>Explore o Mundo Marvel</span>
    </h1>

    <div class="comic-list">
      <div 
        v-for="comic in paginatedComics" 
        :key="comic.id" 
        class="comic-item" 
        @click="openModal(comic.id)"
        >
        <img 
          :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" 
          :alt="comic.title" 
        />
        <h3>{{ comic.title }}</h3>
      </div>
    </div>
    <ComicPagination
      v-if="comics.length > itemsPerPage"
      :totalPages="pageCount"
      :currentPage="currentPage"
      @page-changed="handlePageClick"
    />
    <ComicDetailModal
      v-if="showModal"
      :comic="selectedComic"
      :showModal="showModal"
      @close="closeModal"
    />
  </div>
</template>

<script>
import api from '@/api';
import ComicPagination from '../common/ComicPagination';
import ComicDetailModal from './ComicDetailModal';

export default {
  components: {
    ComicPagination,
    ComicDetailModal,
  },
  data() {
    return {
      comics: [],
      currentPage: 1,
      itemsPerPage: 8,
      showModal: false,
      selectedComic: null,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.comics.length / this.itemsPerPage);
    },
    paginatedComics() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.comics.slice(start, end);
    },
  },
  async created() {
    try {
      const response = await api.get('/comics');
      this.comics = response.data.data.results;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    handlePageClick(pageNum) {
      this.currentPage = pageNum;
    },
    async openModal(comicId) {
      try {
        const response = await api.get(`/comics/${comicId}`);
        this.selectedComic = response.data.data.results[0];
        this.showModal = true;
      } catch (error) {
        console.error(error);
      }
    },
    closeModal() {
      this.showModal = false;
      this.selectedComic = null;
    }
  }
};
</script>

<style scoped>
.comic-list-container {
  text-align: center;
  padding: 2rem;
  font-family: 'Bangers', cursive;
  font-size: 1.5rem;
}

.comic-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.comic-item {
  flex: 1 1 calc(50% - 1rem);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
}

.comic-item:hover {
  transform: scale(1.05);
}

.comic-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.comic-list-container h1 span {
  display: block;
  margin-top: 0.5rem;
  font-family: 'Bangers', cursive;
}

h3 {
  font-size: 16px;
}

@media (min-width: 768px) {
  .comic-item {
    flex: 1 1 calc(33.33% - 1rem);
  }
}

@media (min-width: 1024px) {
  .comic-item {
    flex: 1 1 calc(25% - 1rem); 
  }
}
</style>
