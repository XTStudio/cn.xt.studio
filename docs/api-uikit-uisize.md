---
author: Pony Cui
title: UISize
---

描述大小。

## Interface

```typescript
{ 
    width: number,
    height: number
}
```

## Consts

#### UISizeZero: `UISize`
返回 `{width: 0, height: 0}` 对象。

## Methods

#### UISizeMake(width: `number`, height: `number`): `UISize`
使用 width height 创建一个 `UISize` 对象。

#### UISizeEqualToSize(size1: `UISize`, size2: `UISize`): `boolean`
检测两个 size 对象是否相等。