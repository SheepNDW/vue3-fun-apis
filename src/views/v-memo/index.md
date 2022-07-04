# v-memo

參考閱讀：[官方文檔](https://vuejs.org/api/built-in-directives.html#v-memo)

## 需求

只有輸入詞能夠對應到 animalTypes 裡的三個動物名，才能去重新渲染那 1000 筆資料

## 思路

v-memo 會偵測 dependency 是否發生改變，只有在發生改變的情況才去更新視圖的渲染

## 實現

* 監聽 keywords 並透過修改 shouldUpdated 去更新畫面

```vue
<script setup>
import { ref, watch } from 'vue'

const animalTypes = {
  sheep: '🐑',
  cow: '🐄',
  rooster: '🐓'
}

const keywords = ref('sheep')

// 監聽 keywords 的值, 如果和 animalTypes 中的 key 值相符, 就去修改 shouldUpdated
const shouldUpdated = ref(0)
watch(keywords, () => {
  if (Object.keys(animalTypes).includes(keywords.value)) {
    shouldUpdated.value++
  }
})
</script>

<template>
  <div class="p-10">
    <input
      type="text"
      class="border outline-gray-500 px-1 mb-4"
      placeholder="sheep, cow, rooster"
      v-model="keywords"
    />

    <ul
      class="grid grid-cols-12 border justify-items-center border-gray-400 rounded-md"
    >
      <!-- v-for 搭配 v-memo 一起使用 -->
      <li v-for="i in 1000" :key="i" v-memo="[shouldUpdated]">
        {{ keywords }} - {{ animalTypes[keywords] }}
      </li>
    </ul>
  </div>
</template>
```
