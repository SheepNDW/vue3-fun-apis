# Suspense

## 需求

* 製作一個個人資訊卡片，在載入前有 Skeleton 讀取效果

## 思路

1. 準備兩個元件一個是卡片本體的元件 一個是 skeleton 元件
2. 透過 Suspense 去包裹兩個元件，讓卡片本體在請求資料前先呈現 skeleton 元件的內容

## 實現

* 模擬一個請求 API 的 function

```js
export default function loadUserData(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Sheep',
        pic: 'https://raw.githubusercontent.com/SheepNDW/Bootstrap5-learning/main/img/rice.jpg',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam quasi assumenda expedita quidem veritatis reiciendis iusto id voluptas voluptatem.'
      })
    }, timeout)
  })
}
```

* 在卡片元件呼叫 API 並使用頂層的 await 讓元件有異步依賴 (async dependencies) 讓 Suspense 可以等待

```vue
<script setup>
import { ref } from 'vue'
import loadUserData from './loadUserData'

const userData = ref(null)
userData.value = await loadUserData(2000)
</script>
```

* 在父層元件中引入兩個元件並搭配 Suspense 使用

```vue
<script setup>
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <ProfileCard />
    </template>
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
</template>
```
