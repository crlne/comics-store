<template>
  <div class="panel">
    <div class="left-panel">
      <div class="image-container">
        <img 
          src="@/assets/comics-background.png" 
          alt="Comics Background" class="background-image" 
        />
        <div class="search-container">
          <h2 class="marvel-title" v-show="!isMobile">Encontre seus Quadrinhos Favoritos</h2>
          <p v-show="!isMobile">Busque pelo título dos quadrinhos da Marvel</p>
          <div class="search-bar">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Buscar quadrinhos" 
              @keypress.enter="searchComics" 
            />
            <button @click="searchComics"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
    <SearchResultsModal v-if="showModal" :comics="filteredComics" @close="showModal = false" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SearchResultsModal from '../common/SearchResultsModal'

export default {
  name: 'ComicsPanel',
  components: {
    SearchResultsModal
  },
  data() {
    return {
      searchQuery: '',
      showModal: false,
      isMobile: window.innerWidth <= 767 
    };
  },
  computed: {
    ...mapGetters(['comics']),
    filteredComics() {
      if (!this.searchQuery) {
        return this.comics;
      }
      return this.comics.filter(comic =>
        comic.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(['fetchComics']),
    searchComics() {
      if (this.searchQuery.trim() !== '') {
        this.fetchComics({ title: this.searchQuery });
        this.showModal = true;
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 767;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
}

.marvel-title {
  font-family: 'Bangers', cursive;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.left-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.search-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  padding: 20px;
  box-sizing: border-box;
}

.search-container h2 {
  font-size: 2rem; 
  margin-bottom: 0.5rem;
}

.search-container p {
  font-size: 1.2rem; 
  margin-bottom: 1rem;
}

.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
}

.search-bar input {
  padding: 1rem; 
  font-size: 1.2rem; 
  border: 2px solid #000;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  width: 80%;
}

.search-bar input:focus {
  outline: none; 
  border-color: #ff4500;
  box-shadow: 0 0 5px #ff4500;
}

.search-bar button {
  padding: 1rem;
  background-color: #000;
  border: 2px solid #000;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.2rem;
  width: 80%;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.search-bar button:hover {
  background-color: #ff4500;
  color: #fff;
  box-shadow: 0 0 10px rgba(255, 69, 0, 0.5);
}

.search-bar button i {
  font-size: 1.2rem;
}

@media (min-width: 768px) {
  .panel {
    flex-direction: row;
  }

  .left-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .search-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }

  .search-bar {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .search-bar input {
    width: 300px;
    margin-bottom: 0;
    margin-right: 0.5rem;
  }

  .search-bar button {
    width: auto;
  }

  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 767px) {
  .search-container h2,
  .search-container p {
    display: none;
  }

  .search-bar {
    position: absolute;
    top: 10px;
    right: 10px;
    width: auto;
    flex-direction: row;
    justify-content: flex-end;
  }

  .search-bar input {
    padding: 0.5rem; 
    font-size: 1rem; 
    border: 1px solid #000;
    border-radius: 4px;
    margin-bottom: 0;
    margin-right: 0.5rem;
    width: 150px;
  }

  .search-bar button {
    padding: 0.5rem;
    background-color: #000;
    border: 1px solid #000;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }

  .search-bar button:hover {
    background-color: #ff4500;
    color: #fff;
    box-shadow: 0 0 10px rgba(255, 69, 0, 0.5);
  }

  .background-image {
    width: 100%;
    height: auto;
  }
}
</style>