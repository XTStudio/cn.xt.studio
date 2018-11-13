---
author: Pony Cui
title: UIScrollView
---

用于渲染一个滚动视图，具体使用方法请参阅[教程](./guide-scroller.md)。

## API

### Instance Fields

#### contentOffset: `UIPoint`
当前滚动位置。

#### contentSize: `UISize`
滚动内容大小。

#### contentInset: `UIEdgeInsets`
边界大小。

#### directionalLockEnabled: `boolean`
方向锁，当开启方向锁时，每次触摸事件循环只允许一个方向的滚动。

#### bounces: `boolean`
回弹效果开关。

#### alwaysBounceVertical: `boolean`
总是允许纵向回弹，即使内容高度小于视图高度时，也可以触发回弹效果。

#### alwaysBounceHorizontal: `boolean`
总是允许横向回弹，即使内容宽度小于视图宽度时，也可以触发回弹效果。

#### pagingEnabled: `boolean`
开启分页滚动效果。

#### scrollEnabled: `boolean`
滚动开关。

#### showsHorizontalScrollIndicator: `boolean`
显示、隐藏横向滚动条。

#### showsVerticalScrollIndicator: `boolean`
显示、隐藏纵向滚动条。

#### tracking: `boolean` *`readonly`*
用户是否正在触摸滚动视图。

#### dragging: `boolean` *`readonly`*
用户是否正在拖动滚动视图。

#### decelerating: `boolean` *`readonly`*
当前滚动视图是否正在执行惯性滚动动画。

#### scrollsToTop: `boolean`
是否允许该视图在用户触摸状态栏时滚动到最顶（仅 iOS 有效）。

### Instance Methods

#### setContentOffset(contentOffset: `UIPoint`, animated: `boolean`): `void`
设置滚动视图当前滚动位置。

#### scrollRectToVisible(rect: `UIRect`, animated: `boolean`): `void`
让滚动视图滚动到指定位置，使指定的 `rect` 在屏幕上可见。