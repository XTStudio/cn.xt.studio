---
author: Pony Cui
title: UIAnimator
---

使用 `UIAnimator` 创建动画，具体使用方法请参阅[教程](./guide-animator.md)。

## API

### Static Methods

#### curve(duration: `number`, animations: `() => void`, completion?: `(finished: boolean) => void`): `void`
创建曲线动画。

#### linear(duration: `number`, animations: `() => void`, completion?: `(finished: boolean) => void`): `void`
创建直线动画。

#### spring(tension: `number`, friction: `number`, animations: `() => void`, completion?: `() => void`): `void`
创建弹性动画。

#### bouncy(bounciness: `number`, speed: `number`, animations: `() => void`, completion?: `() => void`): `void`
创建弹性动画（使用弹性、速度参数）。