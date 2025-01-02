import { createRouter, createWebHistory } from 'vue-router';


import Home from '../views/Home.vue';
import Contacto from '../views/Contacto.vue';
import Sobre from '../views/Sobre.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/sobre-solintagro', name: 'Sobre', component: Sobre },  
];


const router = createRouter({
  history: createWebHistory(), 
  routes,
});


export default router;
