---
author: Pony Cui
title: UIEdgeInsets
---

描述边界大小。

## Interface

```typescript
{ 
    top: number, 
    left: number, 
    bottom: number, 
    right: number
}
```

## Consts

#### UIEdgeInsetsZero: `UIEdgeInsets`
返回一个 `{top: 0, left: 0, bottom: 0, right: 0}` 的对象。

## Functions

#### UIEdgeInsetsMake(top: `number`, left: `number`, bottom: `number`, right: `number`): `UIEdgeInsets`
使用 top left bottom right 构建一个 `UIEdgeInsets` 对象。

#### UIEdgeInsetsInsetRect(rect: `UIRect`, insets: `UIEdgeInsets`): `UIRect`
返回 `{x: rect.x - insets.left, y: rect.x - insets.top, width: rect.x - insets.left - insets.right, bottom: rect.y - insets.top - insets.bottom}` 对象。

#### UIEdgeInsetsEqualToEdgeInsets(rect1: `UIEdgeInsets`, rect2: `UIEdgeInsets`): `boolean`
检测两个 insets 是否相等。