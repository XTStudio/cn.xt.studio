---
author: Pony Cui
title: UITableViewCell
---

展示一个列表元素视图，具体使用方法请参阅[教程](./guide-tableview.md)。

## Extends

[UIView](./api-uikit-uiview.md)

### constructor(context: `any`)
创建一个 Cell，其中 `context` 由 `UITableView` 中的注册回调传入。

### Instance Fields

#### contentView: `UIView` *`readonly`*
内容视图，你应始终往该视图上添加子视图。

#### reuseIdentifier: `string | undefined` *`readonly`*
复用标识。

#### hasSelectionStyle: boolean
在选中时，是否有选中样式（灰色背景）。

### Events

#### "selected": (sender: UITableViewCell, selected: boolean, animated: boolean) => void
当 Cell 被选中时触发。

#### "highlighted": (sender: UITableViewCell, highlighted: boolean, animated: boolean) => void
当 Cell 进入高亮状态时触发。