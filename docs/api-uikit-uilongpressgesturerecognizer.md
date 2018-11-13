---
author: Pony Cui
title: UILongPressGestureRecognizer
---

用于识别长按手势。

## Extends

[UIGestureRecognizer](./api-uikit-uigesturerecognizer.md)

## API

### Instance Fields

#### numberOfTapsRequired: `number`
需要长按多少次才可以触发手势识别。

#### numberOfTouchesRequired: `number`
需要多少只手指同时长按才可以触发手势识别。

#### minimumPressDuration: `number`
长按的最小识别时间（从按下到识别成功的时间）。

#### allowableMovement: `number`
长按的最大识别范围（从按下到识别成功其间，允许手指移动的偏移量。）

### Events

#### "began": (sender: UILongPressGestureRecognizer) => void
识别成功时触发。

#### "changed": (sender: UILongPressGestureRecognizer) => void
识别成功后，手指移动时触发。

#### "ended": (sender: UILongPressGestureRecognizer) => void
识别成功后，手指抬起时触发。

#### "cancelled": (sender: UILongPressGestureRecognizer) => void
识别成功后，手势被中断时触发。
