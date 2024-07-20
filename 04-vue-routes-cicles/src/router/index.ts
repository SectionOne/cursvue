import { createRouter, createWebHashHistory } from 'vue-router';
import PaginaPrincipal from '../moduls/landing/pagines/PrincipalPage.vue';
const router = createRouter({
  //Coneixer quines son les pagines anterior i tenir un historial de navegacions
  history: createWebHashHistory(import.meta.env.BASE_URL), //Recuperem la variable d'entorn BASE_URL a on es troba la base de la nostre aplicació
  routes: [
    //Definim les diferents routes accesibles
    {
      path: '/',
      name: 'Inici', //Nom de la ruta
      component: PaginaPrincipal,
    },
  ],
});

export default router;
