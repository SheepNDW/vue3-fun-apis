<script setup>
import { inject } from 'vue'

const { themeColor } = inject('theme')
</script>

<template>
  <footer class="footer">this is footer</footer>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: v-bind(themeColor);
}
</style>
