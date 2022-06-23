import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import ContatoForm from '../views/ContatoForm.vue'
import ContatoUpdateForm from '../views/ContatoUpdateForm.vue'
import ContatoDeleteForm from '../views/ContatoeDeleteForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
    
  },
  {
    path: '/contato/:id',
    name: 'updateform',
    component: ContatoUpdateForm,
    params:true
    
  },
  {
    path: '/contato/:id',
    name: 'deleteform',
    component: ContatoDeleteForm,
    params:true
    
  },
  {
    path: '/contatoform',
    name: 'ContatoForm',
    component: ContatoForm
    
  }
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router