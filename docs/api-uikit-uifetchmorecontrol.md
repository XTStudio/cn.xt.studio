---
author: Pony Cui
title: UIFetchMoreControl
---

创建一个加载更多控制器，配合 ```UIScrollView``` 使用，用法参考[教程](./guide-scroller.md)。

## Extends

[UIView](./api-uikit-uiview.md)

## API

### Instance Fields

#### enabled: `boolean`
该值为 `false` 时，加载更多功能被禁用。

#### fetching: `boolean` *`readonly`*
获取当前是否为加载状态。

#### tintColor: `UIColor`
指示器的颜色。

### Instance Methods

#### beginFetching(): `void`
主动触发加载操作。

#### endFetching(): `void`
结束加载操作。

### Events

#### "fetch": (sender: UIFetchMoreControl) => void
滚动视图到达底部时触发。




