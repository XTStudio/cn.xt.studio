---
author: Pony Cui
title: UIPoint
---

描述矩形坐标与大小。

## Interface

```typescript
{ 
    x: number, 
    y: number,
    width: number,
    height: number
}
```

## Consts

#### UIRectZero: `UIRect`
返回一个 `{x: 0, y: 0, width: 0, height: 0}` 的对象。

## Functions

#### UIRectMake(x: `number`, y: `number`, width: `number`, height: `number`): `UIRect`
使用 x y width height 创建一个 `UIRect` 对象。

#### UIRectEqualToRect(rect1: `UIRect`, rect2: `UIRect`): `boolean`
检测两个 rect 是否相等。

#### UIRectInset(rect: `UIRect`, dx: `number`, dy: `number`): `UIRect`
返回一个新的 rect 对象，该对象边缘距离是原 rect 的 `dx` `dy` 之差。

#### UIRectOffset(rect: `UIRect`, dx: `number`, dy: `number`): `UIRect`
返回一个新的 rect 对象，使新的 rect 相对原 rect 位移 `dx` `dy` 距离。

#### UIRectContainsPoint(rect: `UIRect`, point: `UIPoint`): `boolean`
检测某一点是否位于给定 rect 内。

#### UIRectContainsRect(rect1: `UIRect`, rect2: `UIRect`): `boolean`
检测 rect1 是否位于 rect2 内。

#### UIRectIntersectsRect(rect1: `UIRect`, rect2: `UIRect`): `boolean`
检测两个 rect 是否相交