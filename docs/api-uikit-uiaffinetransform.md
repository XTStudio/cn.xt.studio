---
author: Pony Cui
title: `UIAffineTransform`
---

描述一个二维变换矩阵。

## Interface

```typescript
{ 
    a: `number`, 
    b: `number`, 
    c: `number`,
    d: `number`, 
    tx: `number`,
    ty: `number`
}
```

## Consts

#### UIAffineTransformIdentity: `UIAffineTransform`
返回一个 `{a: 1.0, b: 0.0, c: 0.0, d: 1.0, tx: 0.0, ty: 0.0}` 的对象。

## Functions

#### UIAffineTransformMakeTranslation(tx: `number`, ty: `number`): `UIAffineTransform`
返回一个 `{a: 1.0, b: 0.0, c: 0.0, d: 1.0, tx: tx, ty: ty}` 的对象。

#### UIAffineTransformMakeScale(sx: `number`, sy: `number`): `UIAffineTransform`
返回一个 `{a: sx, b: 0.0, c: 0.0, d: sy, tx: 0.0, ty: 0.0}` 的对象。

#### UIAffineTransformMakeRotation(angle: `number`): `UIAffineTransform`
返回一个 `{a: cos(angle), b: sin(angle), c: -sin(angle), d: cos(angle), tx: 0.0, ty: 0.0}` 的对象。

 /* Return true if `t' is the identity transform, false otherwise. */
#### UIAffineTransformIsIdentity(t: `UIAffineTransform`): boolean
检测 `t` 是否与 `UIAffineTransformIdentity` 相等。

#### UIAffineTransformTranslate(t: `UIAffineTransform`, tx: `number`, ty: `number`): `UIAffineTransform`
使 `t` 位移 (tx, ty)，并返回一个新的 `UIAffineTransform` 对象。

#### UIAffineTransformScale(t: `UIAffineTransform`, sx: `number`, sy: `number`): `UIAffineTransform`
使 `t` 拉伸 (tx, ty)，并返回一个新的 `UIAffineTransform` 对象。

#### UIAffineTransformRotate(t: `UIAffineTransform`, angle: `number`): `UIAffineTransform`
使 `t` 旋转指定的 `radians` 值，并返回一个新的 `UIAffineTransform` 对象。

#### UIAffineTransformInvert(t: `UIAffineTransform`): `UIAffineTransform`
反向变换 `t`，并返回一个新的 `UIAffineTransform` 对象。

#### UIAffineTransformConcat(t1: `UIAffineTransform`, t2: `UIAffineTransform`): `UIAffineTransform`
后向合并 `t2` 至 `t1` 中，并返回一个新的 `UIAffineTransform` 对象。

#### UIAffineTransformEqualToTransform(t1: `UIAffineTransform`, t2: `UIAffineTransform`): `UIAffineTransform`
检测两个 `UIAffineTransform` 是否相等。
