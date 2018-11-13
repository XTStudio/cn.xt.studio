---
author: Pony Cui
title: UIPanGestureRecognizer
---

用于识别滑动手势。

## Extends

[UIGestureRecognizer](./api-uikit-uigesturerecognizer.md)

## API

### Instance Fields

#### minimumNumberOfTouches: `number`
最少要求多少只手指拖动才能识别手势。

#### maximumNumberOfTouches: `number`
最多允许多少只手指同时拖动。

### Instance Methods

#### translationInView(view?: `UIView`): `UIPoint`
返回从识别成功到现在的手指偏移量。

#### setTranslation(translate: `UIPoint`, inView?: `UIView`): `void`
重置手指偏移量。

#### velocityInView(view?: `UIView`): `UIPoint`
返回手指移动速度。

### Events

#### "began": (sender: UILongPressGestureRecognizer) => void
识别成功时触发。

#### "changed": (sender: UILongPressGestureRecognizer) => void
识别成功后，手指移动时触发。

#### "ended": (sender: UILongPressGestureRecognizer) => void
识别成功后，手指抬起时触发。

#### "cancelled": (sender: UILongPressGestureRecognizer) => void
识别成功后，手势被中断时触发。
