<script setup>
import { ref, customRef } from 'vue'

// 原版 ref
const msg = ref('original')

// 使用自定義 Ref 來實現 Debounce 效果
function useDebouncedRef(value, delay = 200) {
  let timer
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 通知Vue追蹤value的變化
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() // 通知Vue去重新解析模板
        }, delay)
      }
    }
  })
}

const debounceMsg = useDebouncedRef('debounceText', 500)
</script>

<template>
  <main class="flex justify-center gap-8 p-8">
    <div class="flex flex-col justify-center gap-2 w-70 border p-4">
      <h2>原版 Ref</h2>
      <input type="text" class="border outline-gray-500 px-1" v-model="msg" />
      <span>text: {{ msg }}</span>
    </div>
    <div class="flex flex-col justify-center gap-2 w-70 border p-4">
      <h2>customRef</h2>
      <input
        type="text"
        class="border outline-gray-500 px-1"
        v-model="debounceMsg"
      />
      <span>text: {{ debounceMsg }}</span>
    </div>
  </main>
</template>
