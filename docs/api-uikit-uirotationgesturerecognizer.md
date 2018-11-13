---
author: Pony Cui
title: UIRotationGestureRecognizer
---

用于识别旋转手势（目前只有 iOS 提供该手势）。

## Extends

[UIGestureRecognizer](./api-uikit-uigesturerecognizer.md)

## API

### Instance Fields

#### rotation: `number`
旋转角度。

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
