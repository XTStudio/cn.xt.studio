---
author: Pony Cui
title: UIPageViewController
---

用于展示带分页功能的滚动视图，一页由一个视图控制器组成。

## Extends

[UIViewController](./api-uikit-uiviewcontroller.md)

## API

### constructor(isVertical?: boolean = false)
创建一个分页视图控制器，其中 ```isVertical``` 为 ```true``` 时，表示纵向滚动。

### Instance Fields

#### loops: `boolean`
当 ```pageItems``` 生效时，设置是否循环滚动。

#### pageItems: `UIViewController[]`
设置静态分页内容。

#### currentPage: `UIViewController | undefined`
获取、设置当前分页。

### Instance Methods

#### scrollToNextPage(animated?: `boolean` = true): `void`
滚动到下一页。

#### scrollToPreviousPage(animated?: `boolean` = true): `void`
滚动到上一页。

### Events

#### "beforeViewController": (currentPage: `UIViewController`) => `UIViewController | undefined`
在请求上一页内容时触发，应返回相对于 `currentPage` 的上一页视图控制器。

#### "afterViewController": (currentPage: `UIViewController`) => `UIViewController | undefined`
在请求下一页内容时触发，应返回相对于 `currentPage` 的下一页视图控制器。

#### "didFinishAnimating": (currentPage: `UIViewController`, previousPage: `UIViewController`) => `void`
在完成分页滚动后触发。