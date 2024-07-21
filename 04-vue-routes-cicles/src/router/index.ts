import { createRouter, createWebHistory } from 'vue-router';
import PaginaPrincipal from '../moduls/landing/pagines/PrincipalPage.vue';
const router = createRouter({
  //Coneixer quines son les pagines anterior i tenir un historial de navegacions
  history: createWebHistory(import.meta.env.BASE_URL), //Recuperem la variable d'entorn BASE_URL a on es troba la base de la nostre aplicació
  routes: [
    //Ruta pare
    {
      path: '/',
      name: 'Principal', //Nom de la ruta
      //Aixi carregarem de forma dinamica la pàgina segons demanda i no importada si o si desde l'inici
      component: () => import('../moduls/landing/layouts/LandingLayout.vue'),
      children: [
        //Definim les diferents routes accesibles
        {
          path: '/',
          name: 'Inici', //Nom de la ruta
          component: PaginaPrincipal,
        },
        {
          path: '/caracteristiques',
          name: 'Caracteristiques', //Nom de la ruta
          //Aixi carregarem de forma dinamica la pàgina segons demanda i no importada si o si desde l'inici
          component: () => import('../moduls/landing/pagines/CaracteristiquesPage.vue'),
        },
        {
          path: '/preus',
          name: 'Preus', //Nom de la ruta
          //Aixi carregarem de forma dinamica la pàgina segons demanda i no importada si o si desde l'inici
          component: () => import('../moduls/landing/pagines/PreusPage.vue'),
        },
        {
          path: '/contacte',
          name: 'Contacte', //Nom de la ruta
          //Aixi carregarem de forma dinamica la pàgina segons demanda i no importada si o si desde l'inici
          component: () => import('../moduls/landing/pagines/ContactPage.vue'),
        },
      ],
    },

    //Auth
    {
      path: '/auth',
      redirect: '/auth/login',
      name: 'Login', //Nom de la ruta
      //Aixi carregarem de forma dinamica la pàgina segons demanda i no importada si o si desde l'inici
      component: () => import('../moduls/auth/layouts/AuthLayout.vue'),
      children: [
        //Definim les diferents routes accesibles
        {
          path: '/auth/login',
          name: 'Iniciar Sessió', //Nom de la ruta
          //Aixi carregarem de forma dinamica la pàgina segons demanda i no importada si o si desde l'inici
          component: () => import('../moduls/auth/pagines/LoginPage.vue'),
        },
        {
          path: '/auth/register',
          name: 'Registre', //Nom de la ruta
          //Aixi carregarem de forma dinamica la pàgina segons demanda i no importada si o si desde l'inici
          component: () => import('../moduls/auth/pagines/RegisterPage.vue'),
        },
      ],
    },
  ],
});

export default router;
