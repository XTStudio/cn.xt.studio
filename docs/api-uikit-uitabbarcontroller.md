---
author: Pony Cui
title: UITabBarController
---

使用 ```UITabBarController``` 构建一个多 Tab 页面，具体请参阅教程。

## Extends

[UIViewController](./api-uikit-uiviewcontroller.md)

## API

### Instance Fields

#### selectedIndex: `number`
当前显示的 Tab 页面序号。

#### selectedViewController: `UIViewController | undefined`
当前显示的 Tab 页面。

#### tabBar: `UITabBar` *`readonly`*
返回 TabBar 实例。

### Instance Methods

#### setViewControllers(viewControllers: `UIViewController[]`, animated?: `boolean`): `void`
设置 Tab 页面。

### Events

#### "onSelectedViewController": (sender: UITabBarController, repeat: boolean) => void
当 Tab 按钮被点按时触发。