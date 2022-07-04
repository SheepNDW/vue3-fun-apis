# watchEffect

## 需求

每隔一秒鐘 網站的 title 就加 1，並在元件卸載時停止

## 實現

* 生命週期的思維：

在 onMounted 時掛上計時器並對 dom 進行操作，在 unMounted 時清掉計時器

```js
import { onMounted, onUnmounted, ref } from 'vue'

const count = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    count.value++
    document.title = count.value
  }, 1000)
})

onUnmounted(() => clearInterval(timer))
```

* 副作用的思維：

副作用執行 - 操作 dom 副作用的清理

```js
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect((onCleanup) => {
  let timer = setInterval(() => {
    count.value++
    document.title = count.value
  }, 1000)
  
  // 清理副作用, 在元件被卸載時自動執行
  onCleanup(() => clearInterval(timer))
})
```
