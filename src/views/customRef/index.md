# customRef()

參考閱讀：[官方文檔](https://vuejs.org/api/reactivity-advanced.html#customref)

## 用法

引用官方範例 - Debounce （去抖動）

```js
import { customRef } from 'vue'

const debounceMsg = useDebouncedRef('debounceText', 500)

// 使用自定義 Ref 來實現 Debounce 效果
function useDebouncedRef(value, delay = 200) {
  let timer
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 通知Vue追蹤value的變化
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() // 通知Vue去重新解析模板
        }, delay)
      }
    }
  })
}
```
