import { createRouter, createWebHistory } from 'vue-router';
import ComicList from './components/comics/ComicList.vue';

const routes = [
  { path: '/', component: ComicList },
  { path: '/:pathMatch(.*)*', redirect: '/' } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

console.log('Roteador configurado', routes);

export default router;
