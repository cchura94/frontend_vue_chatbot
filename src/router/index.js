import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import InicioView from './../views/web/Inicio.vue'
import Servicios from './../views/web/Servicios.vue'
import Pruebas from './../views/admin/whatsapp/Pruebas.vue'
import AppLayout from '@/layout/AppLayout.vue';


const routes = [
  {
    path: '/admin',
    component: AppLayout,
    children: [
      { path: 'pruebas', component: Pruebas },
    ]
    
  },
  { path: '/servicios', component: Servicios },
  { path: '/', component: InicioView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;