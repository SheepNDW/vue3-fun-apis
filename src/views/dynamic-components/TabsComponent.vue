<script setup>
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import Archive from './components/Archive.vue'
import { ref } from 'vue'

const currentTab = ref('Home')

// const tabs = ['Home', 'Posts', 'Archive']
// 注意: script setup 沒有 components: { … } 讓 template 辨識所以不能直接配對字串
const tabs = {
  Home,
  Posts,
  Archive
}
</script>

<template>
  <div class="demo">
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

<style lang="scss" scoped>
.demo {
  width: 50%;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
