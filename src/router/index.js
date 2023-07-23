import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../pages/ProductList.vue';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/perfume',
    component: Home,
  },
  {
    path: '/perfume/productList',
    component: ProductList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;