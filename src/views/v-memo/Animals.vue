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
      <li v-for="i in 1000" :key="i" v-memo="[shouldUpdated]">
        {{ keywords }} - {{ animalTypes[keywords] }}
      </li>
    </ul>
  </div>
</template>
