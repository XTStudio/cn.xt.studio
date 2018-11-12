---
author: Pony Cui
title: UICollectionViewCell
---

展示一个流式布局视图中的元素视图，具体使用方法请参阅教程。

## Extends

[UIView](./api-uikit-uiview.md)

## API

### constructor(context: `any`)
创建一个 Cell，其中 `context` 由 `UICollectionView` 中的注册回调传入。

### Instance Fields

#### contentView: `UIView` *`readonly`*
内容视图，你应始终往该视图上添加子视图。

#### reuseIdentifier: `string | undefined` *`readonly`*
复用标识。

### Events

#### "selected": `(sender: UICollectionViewCell, selected: boolean) => void`
当 Cell 被选中时触发。

#### "highlighted": `(sender: UICollectionViewCell, highlighted: boolean) => void`
当 Cell 被取消选中时触发。