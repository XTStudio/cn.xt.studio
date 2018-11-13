---
author: Pony Cui
title: UITableView
---

展示一个列表视图，具体使用方法请参阅[教程](./guide-tableview.md)。

## Extends

[UIScrollView](./api-uikit-uiscrollview.md)

## API

### Instance Fields

#### tableHeaderView: `UIView | undefined`
列表视图头部视图。

#### tableFooterView: `UIView | undefined`
列表视图底部视图。

#### separatorColor: `UIColor | undefined`
分隔线的颜色。

#### separatorInset: `UIEdgeInsets`
分隔线的缩进距离。

#### allowsSelection: `boolean`
是否允许列表元素视图被选中。

#### allowsMultipleSelection: `boolean`
是否允许列表元素视图多选。

### Instance Methods

#### register(initializer: `(context: any) => UITableViewCell`, reuseIdentifier: `string`): `void`
根据指定的重用标识，注册一个 Cell。

#### dequeueReusableCell(reuseIdentifier: `string`, indexPath: `UIIndexPath`): `UITableViewCell`
使用指定的复用标识，返回 Cell 实例，使用这方法可以实现复用 Cell 的目的。

#### reloadData(): `void`
重载所有数据，并刷新视图。

#### selectRow(indexPath: `UIIndexPath`, animated: `boolean`): `void`
选中指定元素。

#### deselectRow(indexPath: `UIIndexPath`, animated: `boolean`): `void`
取消选中指定元素。

### Events

#### "numberOfSections": () => number
应在此回调中返回章节数。

#### "numberOfRows": (inSection: number) => number
应在此回调中返回章节的行数。

#### "heightForRow": (indexPath: UIIndexPath) => number
应在此回调中返回指定行的高度。

#### "cellForRow": (indexPath: UIIndexPath) => UITableViewCell
应在此回调中返回指定行的 Cell 实例。

#### "viewForHeader": (inSection: number) => UIView | undefined
应在此回调中返回指定章节的头部视图。

#### "heightForHeader": (inSection: number) => number
应在此回调中返回指定章节的头部视图高度。

#### "viewForFooter": (inSection: number) => UIView | undefined
应在此回调中返回指定章节的底部视图。

#### "heightForFooter": (inSection: number) => number
应在此回调中返回指定章节的底部视图高度。

#### "didSelectRow": (indexPath: UIIndexPath, cell: UITableViewCell) => void
当某一行被选中后触发。

#### "didDeselectRow": (indexPath: UIIndexPath, cell: UITableViewCell) => void
当某一行被取消选中后触发。