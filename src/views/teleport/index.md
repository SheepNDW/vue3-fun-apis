# Teleport 元件案例

## 需求：

1. 初始化一個影音播放器
2. 影片播放器如果在視口之外，在右下出現一個小視窗(播放器)
3. 大播放器和小播放器之間進行切換時，影片播放狀態須維持不變

## 思路：

1. 使用 video 或是第三方套件
2. 監聽大播放器區域是否在視口內 (透過 VueUse 幫忙)
3. Teleport 保持 dom 狀態的前提下完成傳送

## 實現：

* 準備兩個容器分別給大播放器和小播放器使用
```html
<template>
  <!-- 小播放器 -->
  <div id="small-player" class="fixed bottom-6 right-6 w-80 h-auto"></div>

  <!-- 大播放器 -->
  <div class="absolute top-6 left-6 w-[600px] h-auto">
    <!-- 透過 Teleport 將播放器傳送到 #small-player -->
    <Teleport to="#small-player">
      <div id="mse"></div>
    </Teleport>
  </div>

  <!-- 模擬滾動條 -->
  <div class="h-[2000px]"></div>
</template>
```

* 初始化播放器 (這裡使用第三方播放器：[西瓜播放器](https://v2.h5player.bytedance.com/))

```html
<script setup>
import { onMounted } from 'vue'
import Player from 'xgplayer'

// 在 Mounted 後針對 DOM 做操作
onMounted(() => {
  new Player({
    id: 'mse',
    url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    poster: 'https://media.w3.org/2010/05/sintel/poster.png',
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    volume: 0.3,
    fluid: true
    // 更多配置請參考官方文檔
  })
})
</script>
```

* 引入 VueUse 的 `useIntersectionObserver` 來幫忙監聽大播放器是否位在可視區域

```js
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// target: 要監聽的目標(DOM)
// targetIsVisible: 控制是否傳送的狀態
const target = ref(null)
const targetIsVisible = ref(true)
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  // isIntersecting 如果在視口內值為 true, 否則為 false
  targetIsVisible.value = isIntersecting
})
```

```html
<div class="..." ref="target">
  <Teleport to="#small-player" :disabled="targetIsVisible">
    <div id="mse"></div>
  </Teleport>
</div>
```



