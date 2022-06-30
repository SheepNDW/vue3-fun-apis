import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import('@/views/index.vue')
const VideoPlayer = () => import('@/views/teleport/VideoPlayer.vue')
const ThemeColor = () => import('@/views/v-bind-in-css/ThemeColor.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/videoPlayer',
    component: VideoPlayer
  },
  {
    path: '/vbindcss',
    component: ThemeColor
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
