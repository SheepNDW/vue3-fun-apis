import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import('@/views/index.vue')
const VideoPlayer = () => import('@/views/teleport/VideoPlayer.vue')
const ThemeColor = () => import('@/views/v-bind-in-css/ThemeColor.vue')
const DebounceDemo = () => import('@/views/customRef/Debounce.vue')

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
  },
  {
    path: '/debounce',
    component: DebounceDemo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
