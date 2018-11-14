---
author: Pony Cui
title: CADisplayLink
---

用于监听屏幕刷新，当屏幕刷新时，会触发指定回调。

## Sample

```typescript
new CADisplayLink(() => {
    // callback
}).active()
```

## API

### constructor(vsyncBlock: () => void)
创建一个屏幕刷新监视器，并给予一个回调函数。

### Instance Fields

#### timestamp: `number`
最后一次屏幕刷新时间戳（`秒`）。

### Instance Methods

#### active(): void
激活监视器。

#### invalidate(): void
禁用监视器。