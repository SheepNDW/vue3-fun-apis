<script setup>
import Player from 'xgplayer'
import { onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

onMounted(() => {
  new Player({
    id: 'mse',
    url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    poster: 'https://media.w3.org/2010/05/sintel/poster.png',
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    volume: 0.3,
    fluid: true
  })
})

const target = ref(null)
const targetIsVisible = ref(true)
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  // isIntersecting 如果在視口內值為 true, 否則為 false
  targetIsVisible.value = isIntersecting
})
</script>

<template>
  <!-- 小播放器 -->
  <div id="small-player" class="fixed bottom-6 right-6 w-80 h-auto"></div>

  <!-- 大播放器 -->
  <div class="absolute top-6 left-6 w-[600px] h-auto" ref="target">
    <Teleport to="#small-player" :disabled="targetIsVisible">
      <div id="mse"></div>
    </Teleport>
  </div>

  <!-- 模擬滾動條 -->
  <div class="h-[2000px]"></div>
</template>
