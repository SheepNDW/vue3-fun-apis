<script setup>
import { ref } from 'vue'
import Son from './Son.vue'

const show = ref(true)
</script>

<template>
  <div class="h-full flex flex-col gap-4 items-center justify-center">
    <Son v-if="show" />
    <button
      class="px-4 py-2 bg-sky-400 rounded hover:(bg-sky-300)"
      @click="show = false"
    >
      卸載 Son 元件
    </button>
  </div>
</template>
