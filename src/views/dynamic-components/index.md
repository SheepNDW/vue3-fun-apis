# `<component>` 與 `:is`

參考閱讀：[`<component>`](https://vuejs.org/api/built-in-special-elements.html#component)、[dynamic-components](https://vuejs.org/api/sfc-script-setup.html#dynamic-components)

## 需求

* 使用 `:is` 搭配 `<component>` 去實現頁籤動態切換

## 思路

1. 準備三個 tab 子元件
2. 準備一個 currentTab 的狀態去讓 `is` 決定呈現哪個元件

## 實現

* 準備三個 component

```html
<!-- Home.vue -->
<template>
  <div class="tab">Home component</div>
</template>

<!-- Posts.vue -->
<template>
  <div class="tab">Posts component</div>
</template>

<!-- Archive.vue -->
<template>
  <div class="tab">Archive component</div>
</template>
```

* 在父層中引入，把元件包裝成物件的形式去做渲染

這裡要注意的是 `script setup` 裡要直接拿 component 傳給 `is`，因為 template 只會辨識有在 `components: {...}` 註冊的名稱
> The built-in components can all be passed to `is`, but you must register them if you want to pass them by name. — 節錄自官方文檔

```vue
<script setup>
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import Archive from './components/Archive.vue'
import { ref } from 'vue'

const currentTab = ref('Home')

// const tabs = ['Home', 'Posts', 'Archive']
// 注意: script setup 沒有 components: { … } 讓 template 辨識所以不能直接配對字串
const tabs = {
  // 'Home': Home 的簡寫
  Home,
  Posts,
  Archive
}
</script>

<template>
  <div class="demo">
    <!-- v-for 遍歷物件的方式: v-for="(value, key, index) in object" -->
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
```
