---
author: Pony Cui
title: UIView
---

```UIView``` 是所有视图的基类。

## API

### Instance Fields

#### layer: `CALayer` *`readonly`*
渲染层。

#### frame: `UIRect`
视图布局。

#### bounds: `UIRect`
视图内容大小。

#### center: `UIPoint`
视图布局中心点。

#### transform: `UIAffineTransform`
视图 2D 变换参数。

#### touchAreaInsets: `UIEdgeInsets`
触摸区域边界修正值。

#### tag: `number`
数字标识。

#### superview: `UIView | undefined` *`readonly`*
父视图。

#### subviews: `UIView[]` *`readonly`*
子视图列表。

#### window: `UIWindow | undefined` *`readonly`*
附着的窗口。

#### clipsToBounds: `boolean`
是否裁剪边界。

#### backgroundColor: `UIColor | undefined`
背景色。

#### alpha: `number`
不透明度。

#### hidden: `boolean`
是否隐藏。

#### opaque: `boolean`
不透明？

#### contentMode: `UIViewContentMode`
内容渲染模式。

#### tintColor: `UIColor`
前景色。

#### userInteractionEnabled: `boolean`
是否允许该视图（及其所有子视图）响应触摸。

#### gestureRecognizers: `UIGestureRecognizer[]`
返回该视图已添加的所有手势识别器。

#### isAccessibilityElement: `boolean`
辅助功能。

#### accessibilityLabel: `string`
辅助功能。

#### accessibilityHint: `string`
辅助功能。

#### accessibilityValue: `string`
辅助功能。

#### accessibilityIdentifier: `string`
辅助功能。

### Instance Methods

#### removeFromSuperview(): `void`
从父视图中移除本视图。

#### insertSubviewAtIndex(view: `UIView`, index: `number`): `void`
在指定位置插入子视图。

#### exchangeSubview(index1: `number`, index2: `number`): `void`
交换指定位置的子视图。

#### addSubview(view: `UIView`): `void`
添加一个子视图。

#### insertSubviewBelowSubview(view: `UIView`, belowSubview: `UIView`): `void`
在指定子视图下方插入一个子视图。

#### insertSubviewAboveSubview(view: `UIView`, aboveSubview: `UIView`): `void`
在指定子视图上方插入一个子视图。

#### bringSubviewToFront(view: `UIView`): `void`
将指定子视图拉到最顶。

#### sendSubviewToBack(view: `UIView`): `void`
将指定子视图推到最底。

#### isDescendantOfView(view: `UIView`): `boolean`
检查当前视图是否从属于某一个视图。

#### viewWithTag(tag: number): `UIView | undefined`
在视图层级中递归查找指定数字标识的视图，并返回。

#### didAddSubview(subview: `UIView`): `void`
当一个子视图被添加到本视图后，该方法被调用。

#### willRemoveSubview(subview: `UIView`): `void`
当一个子视图将被移出本视图时，该方法被调用。

#### willMoveToSuperview(newSuperview: `UIView`): `void`
当本视图即将附着到某一视图时，该方法被调用。

#### didMoveToSuperview(): `void`
当本视图附着到某一视图后，该方法被调用。

#### setNeedsLayout(): `void`
触发一次视图布局更新。

#### layoutIfNeeded(): `void`
立即触发一次视图布局更新。

#### layoutSubviews(): `void`
重写该方法，在该方法中对子视图进行布局。

#### setNeedsDisplay(): `void`
触发一次渲染更新。

#### tintColorDidChange(): `void`
当本视图的 `tintColor` 发生变化时，该方法被调用。

#### addGestureRecognizer(gestureRecognizer: `UIGestureRecognizer`): `void`
添加一个手势识别器到本视图。

#### removeGestureRecognizer(gestureRecognizer: `UIGestureRecognizer`): `void`
从本视图中移除一个手势识别器。