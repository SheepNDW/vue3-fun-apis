<script setup>
import { inject } from 'vue'

const { themeColor } = inject('theme')
</script>

<template>
  <header class="header">this is header</header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 3rem;
  background-color: v-bind(themeColor);
}
</style>
