---
author: Pony Cui
title: UIRefreshControl
---

创建一个下拉刷新控制器，配合 ```UIScrollView``` 使用，用法参考[教程](./guide-scroller.md)。

## Extends

[UIView](./api-uikit-uiview.md)

## API

### Instance Fields

#### enabled: `boolean`
该值为 `false` 时，下拉刷新功能被禁用。

#### refreshing: `boolean` *`readonly`*
获取当前是否为刷新状态。

#### tintColor: `UIColor`
指示器的颜色。

### Instance Methods

#### beginRefreshing(): `void`
主动触发刷新操作，滚动视图会同时滚动到顶部。

#### endRefreshing(): `void`
结束刷新操作。

### Events

#### "refresh": (sender: UIRefreshControl) => void
发生下拉刷新操作时触发。




