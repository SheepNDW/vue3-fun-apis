<script setup>
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect((onCleanup) => {
  let timer = setInterval(() => {
    count.value++
    document.title = count.value
  }, 1000)
  // 清理副作用, 在元件被卸載時自動執行
  onCleanup(() => clearInterval(timer))
})
</script>

<template>
  <div
    class="w-[600px]] h-30 p-4 rounded-lg border border-gray-500/50 grid grid-cols-3 items-center"
  >
    <h3 class="col-span-3">
      透過 watchEffect 去監聽 count 讓網頁的 Title 每秒加一
    </h3>
    <div class="col-start-2 col-span-1 justify-self-center">
      count: {{ count }}
    </div>
  </div>
</template>
