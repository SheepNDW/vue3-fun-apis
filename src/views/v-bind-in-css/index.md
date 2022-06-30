# v-bind() in CSS 案例

## 需求

* 點擊按鈕切換當前主題顏色

## 思路

1. 準備好色票，例如： light (#e9ecef)、dark (#323232)
2. 定義一個當前色值，然後在點擊事件中去改變它
3. 將改變後的色值透過 `v-bind()` in CSS 動態綁定在 background-color 中

## 實現

* 使用 provide/inject 實現元件間的狀態共享
```vue
<script setup>
import Header from './ThemeHeader.vue'
import Main from './ThemeMain.vue'
import Footer from './ThemeFooter.vue'
import { provide, ref } from 'vue'

// Notes:
//   Header Main Footer 互為兄弟元件關係
//   Header Footer 要使用主題色
//   Main 則是對主題色進行修改操作

// 選擇在公共的父層元件提供色值狀態，透過 provide/inject 去讓三個元件共享
const themeColor = ref('#e9ecef')
const setThemeColor = (color) => {
  themeColor.value = color
}

provide('theme', {
  themeColor,
  setThemeColor
})
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>
```

`ThemeMain.vue`
```vue
<script setup>
import { inject } from 'vue'

const { setThemeColor } = inject('theme')
</script>

<template>
  <main class="flex justify-around items-center mt-8">
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
```

* 使用 v-bind in CSS 的方式動態決定背景色

`ThemeHeader.vue`
```vue
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
```

`ThemeFooter.vue`
```vue
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
```