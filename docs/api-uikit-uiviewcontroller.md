---
author: Pony Cui
title: UIViewController
---

视图控制器，具体使用方法参阅[教程](./guide-viewcontroller.md)。

## API

### Instance Fields

#### title: `string`
页面标题（会显示在导航栏中）。

#### view: `UIView`
该视图控制器管理的视图。

#### safeAreaInsets: `UIEdgeInsets` *`readonly`* 
安全区域，你应该使用该参数，确保内容不会在非安全区域中出现（一般用于 iPhoneX 适配）。

#### parentViewController: `UIViewController | undefined` *`readonly`* 
父级视图控制器。

#### presentedViewController: `UIViewController | undefined` *`readonly`* 
通过视图控制器（A）弹出视图控制器（B），该返回值为 B，本实现为 A。

#### presentingViewController: `UIViewController | undefined` *`readonly`* 
通过视图控制器（A）弹出视图控制器（B），该返回值为 A，本实例为 B。

#### childViewControllers: `UIViewController[]` *`readonly`* 
返回所有子视图控制器。

#### navigationController: `UINavigationController | undefined` *`readonly`* 
返回本视图控制器附着的导航控制器。

#### navigationItem: `UINavigationItem` *`readonly`* 
返回用于描述该场景的导航信息实例。

#### tabBarController: `UITabBarController` *`readonly`* 
返回本视图控制器附着的 `TabBarController`。

#### tabBarItem: `UITabBarItem` *`readonly`* 
返回用于描述该场景的 TabBar 信息实例。

### Instance Methods

#### viewDidLoad(): `void`
在顶级视图加载完成后，该方法会被执行，并且该方法只会执行一次。

#### viewWillAppear(animated: `boolean`): `void`
在顶级视图将要显示在页面时，该方法被执行，该方法可能被执行多次。

#### viewDidAppear(animated: `boolean`): `void`
在顶级视图已经显示在页面后，该方法被执行，该方法可能被执行多次。

#### viewWillDisappear(animated: `boolean`): `void`
在顶级视图即将消失于页面上时，该方法被执行，该方法可能被执行多次。

#### viewDidDisappear(animated: `boolean`): `void`
在顶级视图消失于页面后，该方法被执行，该方法可能被执行多次。

#### viewWillLayoutSubviews(): `void`
在顶级视图布局发生改变时，该方法被执行，开发者应该在此方法中对子视图进行布局。

#### viewDidLayoutSubviews(): `void`
在顶级视图对子视图完成布局后，该方法被执行。

#### presentViewController(viewController: `UIViewController`, animated?: `boolean`, completion?: `() => void`): `void`
使用模态的方式推入一个视图控制器（视图）。

#### dismissViewController(animated?: `boolean`, completion?: () => void): `void`
弹出最后一个模态视图控制器。

#### addChildViewController(viewController: `UIViewController`): `void`
添加一个子视图控制器。

#### removeFromParentViewController(): `void`
从父视图控制器中移除本视图控制器。

#### willMoveToParentViewController(parent?: `UIViewController`): `void`
当即将被添加到某一父视图控制器时，该方法被调用。

#### didMoveToParentViewController(parent?: `UIViewController`): `void`
被添加到某一父视图控制器后，该方法被调用。

#### setNeedsStatusBarAppearanceUpdate(): `void`
触发状态栏样式修改。