import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import('@/views/index.vue')
const VideoPlayer = () => import('@/views/teleport/VideoPlayer.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/videoPlayer',
    component: VideoPlayer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
