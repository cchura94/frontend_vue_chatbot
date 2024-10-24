import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import InicioView from './../views/web/Inicio.vue'
import Servicios from './../views/web/Servicios.vue'
import Pruebas from './../views/admin/whatsapp/Pruebas.vue'
import AppLayout from '@/layout/AppLayout.vue';

import MensajeTexto from '@/views/admin/mensajes/MensajeTexto.vue'

import MensajeImagen from '@/views/admin/mensajes/MensajeImagen.vue'


const routes = [
  {
    path: '/admin',
    component: AppLayout,
    children: [
      { path: 'pruebas', component: Pruebas },
      {
        path: 'texto',
        component: MensajeTexto
      },
      {
        path: 'imagen',
        component: MensajeImagen
      }
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