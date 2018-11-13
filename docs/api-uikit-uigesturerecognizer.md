---
author: Pony Cui
title: UIGestureRecognizer
---

手势识别器，与 ```UIView``` 组合使用，用于响应触摸事件。

## API

### Instance Fields

#### state: `UIGestureRecognizerState` *`readonly`*
当前识别状态。

#### enabled: `boolean`
是否为可识别状态。

#### view: `UIView | undefined` *`readonly`*
附着的视图。

#### requiresExclusiveTouchType: `boolean`
是否允许其它视图同时识别其它手势。

### Instance Methods

#### requireGestureRecognizerToFail(otherGestureRecognizer: `UIGestureRecognizer`): `void`
要求指定的手势识别失败后，才允许本手势被识别。

#### locationInView(view: `UIView`): `UIPoint`
获取第一只手指的坐标点（相对于指定视图）。