---
author: Pony Cui
title: UICollectionView
---

展示一个流式布局视图，具体使用方法请参阅教程。

## Extends

[UIScrollView](./api-uikit-uiscrollview.md)

## API

### constructor(collectionViewLayout: UICollectionViewLayout)
使用指定的布局实例创建视图。

### Instance Fields

#### collectionViewLayout: `UICollectionViewLayout` *`readonly`*
获取在初始化时指定的布局实例。

#### allowsSelection: boolean
设置视图内的元素视图是否可选。

#### allowsMultipleSelection: boolean
设置视图内的元素视图是否可多选。

### Instance Methods

#### register(initializer: `(context: any) => UICollectionViewCell`, reuseIdentifier: `string`): `void`
使用指定的复用标识，注册 Cell 。

#### dequeueReusableCell(reuseIdentifier: `string`, indexPath: `UIIndexPath`): `UICollectionViewCell`
使用指定的复用标识，返回 Cell 实例，使用这方法可以实现复用 Cell 的目的。

#### reloadData(): `void`
重载所有数据，并刷新视图。

#### selectItem(indexPath: `UIIndexPath`, animated: `boolean`): `void`
选中指定元素。

#### deselectItem(indexPath: `UIIndexPath`, animated: `boolean`): `void`
取消选中指定元素。

### Events

#### "numberOfSections": `() => number`
当加载数据时，触发事件，应返回该视图的章节数。

#### "numberOfItems": `(inSection: number) => number`
当加载数据时，触发事件，应返回具体章节数的行数。

#### "cellForItem": `(indexPath: UIIndexPath) => UICollectionViewCell`
当视图需要显示指定元素时，触发事件，应返回 Cell 实例。

#### "didSelectItem": `(indexPath: UIIndexPath, cell: UICollectionViewCell) => void`
当用户点按某一元素视图时触发。

#### "didDeselectItem": `(indexPath: UIIndexPath, cell: UICollectionViewCell) => void`
当用户再次点按已选中元素视图时触发。
