<script setup></script>

<template>
  <h1 class="flex gap-4 justify-center text-5xl pt-6">
    <span class="text-green-600">Vue 3</span>Playground
    <img src="@/assets/logo.svg" alt="logo" class="w-11" />
  </h1>
  <main
    class="grid lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 p-10"
  >
    <RouterLink class="demo-link" to="/videoPlayer">
      使用 Teleport 實現影片縮放
    </RouterLink>
    <RouterLink class="demo-link" to="/vbindcss">
      使用 v-bind() in CSS 去切換主題色
    </RouterLink>
    <RouterLink class="demo-link" to="/debounce">
      使用 customRef() 做一個防抖效果
    </RouterLink>
    <RouterLink class="demo-link" to="/tabs">
      使用 v-bind:is 做一個 Tabs 效果
    </RouterLink>
    <RouterLink class="demo-link" to="/skeleton-loading">
      使用 Suspense 做一個 Skeleton 效果
    </RouterLink>
    <RouterLink class="demo-link" to="/watchEffect">
      watchEffect 函式
    </RouterLink>
    <RouterLink class="demo-link" to="/animals">
      使用 v-memo 來優化列表渲染的效能
    </RouterLink>
  </main>
</template>
