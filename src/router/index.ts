import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contacto from '../views/Contacto.vue';
import Sobre from '../views/Sobre.vue';
import Privacidad from '../views/Privacidad.vue';
import Aviso from '../views/Aviso.vue';
import Trabajos from '../views/Trabajos.vue';


const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home 
  },
  { 
    path: '/contacto',
    name: 'Contacto',
    component: Contacto 
  },
  { 
    path: '/sobre-solintagro',
    name: 'Sobre',
    component: Sobre 
  },  
  {
    path: '/privacidad',
    name: 'Privacidad',
    component: Privacidad, 
  },
  {
    path: '/Aviso',
    name: 'Aviso',
    component: Aviso,
  },
  {
    path: '/Trabajos',
    name: 'Trabajos',
    component: Trabajos,
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;