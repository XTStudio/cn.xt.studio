---
author: Pony Cui
title: global
---

`global` 是一个全局变量，使用 `global` 可以定义或读取一个全局变量。

## Sample

```typescript
global.t = "123" // 你可以在这里定义一个全局变量。
console.log(t) // 然后，可以去掉 global. 前缀直接读取该变量。
```