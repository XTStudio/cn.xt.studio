---
author: Pony Cui
title: UITapGestureRecognizer
---

用于识别点按手势。

## Extends

[UIGestureRecognizer](./api-uikit-uigesturerecognizer.md)

## API

### Instance Fields

#### numberOfTapsRequired: `number`
需要点击多少次才可以触发手势识别。

#### numberOfTouchesRequired: `number`
需要多少只手指同时点击才可以触发手势识别。

### Events

#### "touch": (sender: UITapGestureRecognizer) => void
手势被识别时触发。