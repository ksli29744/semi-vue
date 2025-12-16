import {createWebHistory, createRouter} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./layouts/default-layout/index.vue'),
    children: [
      {path: '', name: 'home', component: () => import('./views/home.vue')},
      {path: 'test', name: 'test', component: () => import('./views/test.vue')},
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router