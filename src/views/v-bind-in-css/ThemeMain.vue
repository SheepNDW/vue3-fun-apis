<script setup>
import { inject } from 'vue'

const { setThemeColor } = inject('theme')
</script>

<template>
  <main class="flex gap-4 justify-center items-center mt-8">
    <button class="btn bg-light-800" @click="setThemeColor('#e9ecef')">
      Light
    </button>
    <button
      class="btn bg-dark-200 text-light-200"
      @click="setThemeColor('#323232')"
    >
      dark
    </button>
  </main>
</template>

<style lang="scss" scoped>
.btn {
  @apply w-20 px-4 py-2 rounded;
}
</style>
