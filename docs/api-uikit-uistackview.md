---
author: Pony Cui
title: UIStackView
---

用于渲染一个栈布局视图。

## API

### constructor(arrangedSubviews: `UIView[]`)
使用指定的子视图创建栈布局视图。

### Instance Fields

#### arrangedSubviews: `UIView[]` *`readonly`*
当前栈布局视图管理的所有子视图。

#### axis: `UILayoutConstraintAxis`
主轴方向。

#### distribution: `UIStackViewDistribution`
铺排方式。

#### alignment: `UIStackViewAlignment`
对齐方式。

#### spacing: `number`
空间参数。

### Instance Methods

#### addArrangedSubview(view: `UIView`): `void`
添加一个子视图。

#### removeArrangedSubview(view: `UIView`): `void`
移除一个子视图。

#### insertArrangedSubview(view: `UIView`, atIndex: `number`): `void`
在指定位置插入一个子视图。

#### layoutArrangedSubview(subview: `UIView`, size?: `{ width?: number, height?: number } | undefined`): `void`
为子视图设置布局宽高。