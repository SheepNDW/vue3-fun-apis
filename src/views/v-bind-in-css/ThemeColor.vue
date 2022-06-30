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
