---
author: Pony Cui
title: UINavigationController
---

导航控制器，具体使用方法请参阅[教程](./guide-navigationcontroller.md)。

## Extends

[UIViewController](./api-uikit-uiviewcontroller.md)

## API

### constructor(rootViewController?: `UIViewController`)
创建一个导航控制器，如果第一个参数不为空，则使用该视图控制器作为首页。

### Instance Fields

#### navigationBar: `UINavigationBar` *`readonly`*
返回自带的导航栏。

### Instance Methods

#### pushViewController(viewController: `UIViewController`, animated?: `boolean`): `void`
推入一个新的视图控制器。

#### popViewController(animated?: `boolean`): `UIViewController | undefined`
弹出最后的一个视图控制器。

#### popToViewController(viewController: `UIViewController`, animated?: `boolean`): `UIViewController[]`
弹出至指定的视图控制器。

#### popToRootViewController(animated?: `boolean`): `UIViewController[]`
弹出至第一个视图控制器。

#### setViewControllers(viewControllers: `UIViewController[]`, animated?: `boolean`): `void`
重置视图控制器。

#### setNavigationBarHidden(hidden: `boolean`, animated: `boolean`): `void`
隐藏导航栏。