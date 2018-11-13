---
author: Pony Cui
title: UIPinchGestureRecognizer
---

用于识别捏合手势（目前只有 iOS 提供该手势）。

## Extends

[UIGestureRecognizer](./api-uikit-uigesturerecognizer.md)

## API

### Instance Fields

#### scale: `number`
当前捏合的缩放值。

#### velocity: `number` *`readonly`* 
手指速度。

### Events

#### "began": (sender: UILongPressGestureRecognizer) => void
识别成功时触发。

#### "changed": (sender: UILongPressGestureRecognizer) => void
识别成功后，手指移动时触发。

#### "ended": (sender: UILongPressGestureRecognizer) => void
识别成功后，手指抬起时触发。

#### "cancelled": (sender: UILongPressGestureRecognizer) => void
识别成功后，手势被中断时触发。
