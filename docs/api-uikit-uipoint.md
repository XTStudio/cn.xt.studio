---
author: Pony Cui
title: UIPoint
---

描述坐标点。

## Interface

```typescript
{ 
    x: number, 
    y: number
}
```

## Consts

#### UIPointZero: `UIPoint`
返回一个 `{x: 0, y: 0}` 的对象。

## Functions

#### UIPointMake(x: `number`, y: `number`): `UIPoint`
使用 x y 创建一个 `UIPoint` 对象。

#### UIPointEqualToPoint(point1: `UIPoint`, point2: `UIPoint`): `boolean`
检查两点是否相等。
