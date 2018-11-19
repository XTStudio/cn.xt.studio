---
author: Pony Cui
title: 定时器
---

定时器是非常有用的 API，XT 使用 ```Timer``` 类提供定时器功能。

### 单次执行定时器

只需要初始化一个 ```Timer``` 实例即可创建定时任务。[（示例）](https://stackblitz.com/edit/xt-getting-timer)

```typescript
new Timer(3.0, () => {
    // do some jobs.
}, false)
```

### 重复执行定时器

在初始化 ```Timer``` 时，将第三个参数设为 `true` 即可使该任务以指定时间间隔重复执行。

### 移除定时器

调用 `invalidate` 方法即可移除定时器。

```typescript
const timer = new Timer(3.0, () => {
    // do some jobs.
}, false)
timer.invalidate()
```