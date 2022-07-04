import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import('@/views/index.vue')
const VideoPlayer = () => import('@/views/teleport/VideoPlayer.vue')
const ThemeColor = () => import('@/views/v-bind-in-css/ThemeColor.vue')
const DebounceDemo = () => import('@/views/customRef/Debounce.vue')
const Tabs = () => import('@/views/dynamic-components/TabsComponent.vue')
const Skeleton = () => import('@/views/suspense/SkeletonEffect.vue')
const WatchEffect = () => import('@/views/watchEffect/demo.vue')

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
  },
  {
    path: '/tabs',
    component: Tabs
  },
  {
    path: '/skeleton-loading',
    component: Skeleton
  },
  {
    path: '/watchEffect',
    component: WatchEffect
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
