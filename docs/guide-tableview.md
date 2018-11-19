---
author: Pony Cui
title: 列表视图
---

列表视图（```UITableView```）用于显示一个垂直的滚动列表，每个元素之间结构近似而仅是数据不同。

开发者应使用列表视图处理长列表的情况，列表视图是滚动视图的高级封装。借助列表视图，你可以开发无限长的可滚动列表。

列表视图提供以下功能：

* 注册 Cell 模板
* 复用 Cell 以提升滚动性能
* 根据 IndexPath 自动计算 Cell 的布局
* 响应 Cell 点按事件

## 一个简单的例子

我们使用通讯录列表作为例子，尝试为你阐释列表视图的使用。[（例子）](https://stackblitz.com/edit/xt-sample-tableview)

请进入例子阅读代码，我们逐一分解例子。

### 定义数据源

正确的做法应该是从网络或者数据库中获取这些数据，在这里，我们使用一个数组模拟数据源。

```typescript
const names = [
  "Bob",
  "Tom",
  "Pony",
  "Benji",
  ...
]
```

### 定义一个 Cell 类

我们需要定义一个 ```ItemCell``` 类并继承 ```UITableViewCell```，每一行数据都会被渲染到该视图中。

```typescript
class ItemCell extends UITableViewCell {
  
  nameLabel = new UILabel
  
  constructor(context: any) {
     super(context)
     this.contentView.addSubview(this.nameLabel)
  }

  layoutSubviews() {
     super.layoutSubviews()
     this.nameLabel.frame = {x: 16, y: 0, width: this.bounds.width - 16, height: this.bounds.height}
  }
  
}
```

### 注册 Cell 到 TableView 中

在渲染前，必须先注册 ```ItemCell``` 到列表视图，其中第二个参数是 Cell 的复用标识。

```typescript
this.tableView.register((context: any) => {
    return new ItemCell(context)
}, "Cell")
```

### 定义数据源

我们需要告诉列表视图元素的数量，每行的高度以及每行的渲染方法。

```typescript
this.tableView.on("numberOfRows", () => names.length)
this.tableView.on("heightForRow", () => 44)
this.tableView.on("cellForRow", (indexPath: UIIndexPath) => {
    const cell = this.tableView.dequeueReusableCell("Cell", indexPath) as ItemCell
    cell.nameLabel.text = names[indexPath.row]
    return cell
})
```

使用 ```dequeueReusableCell``` 方法从列表视图中获取可复用的视图，其中 Cell 是注册时指定的复用标识。

### 刷新列表

最后，使用 ```reloadData``` 方法刷新整个列表视图。

## 响应 Cell 点按

当用户点按 Cell 时，使用以下代码进行响应。

```typescript
this.tableView.on("didSelectRow", (indexPath: UIIndexPath) => {
    new UIAlert("Call " + names[indexPath.row]).show()
})
```

## 多个章节的列表

列表视图可以轻松应对存在多个章节的情况，仍然使用通讯录作为示例，我们按字母进行排序，每一个字母是一个章节。[（例子）](https://stackblitz.com/edit/xt-sample-tableview-sections)

### 修改数据源

```typescript
const names = [
  {
    letter: "A",
    items: [
      "Apple Inc.",
    ],
  },
  {
    letter: "B",
    items: [
      "Benji",
      "Bob",
    ],
  },
  ...
]
```

### 定义数据源

当存在多个章节时，你需要告知列表视图章数以及每章的行数。

```typescript
this.tableView.on("numberOfSections", () => names.length)
this.tableView.on("numberOfRows", (inSection: number) => names[inSection].items.length)
this.tableView.on("heightForRow", () => 44)
this.tableView.on("cellForRow", (indexPath: UIIndexPath) => {
    const cell = this.tableView.dequeueReusableCell("Cell", indexPath) as ItemCell
    cell.nameLabel.text = names[indexPath.section].items[indexPath.row]
    return cell
})
```

### 添加章节头部内容

你可以为每一章的头部添加视图

#### 定义一个头部视图

```typescript
class SectionHeaderView extends UIView {
  
  titleLabel = new UILabel
  
  constructor(title: string) {
     super()
     this.backgroundColor = new UIColor(0.9, 0.9, 0.9, 1.0)
     this.titleLabel.text = title
     this.addSubview(this.titleLabel)
  }
     
  layoutSubviews() {
    super.layoutSubviews()
    this.titleLabel.frame = {x: 16, y: 0, width: this.bounds.width - 16, height: this.bounds.height}
  }
  
}
```

#### 设置数据源

告知列表视图头部视图的高度以及对应的视图实例。

```typescript
this.tableView.on("heightForHeader", () => 22)
this.tableView.on("viewForHeader", (inSection: number) => {
    return new SectionHeaderView(names[inSection].letter)
})
```

#### 章节底部视图

使用同样的方法可以设置每个章节的底部视图

#### Pinning

在 iOS 上，章节的头部和底部视图会悬浮在列表上，而 Android / Web 则暂时没有这个特性，我们会在后续的更新中为 Android / Web 添加该特性。

## 列表视图头部和底部视图

你可以向列表视图添加一个头部视图。[（例子）](https://stackblitz.com/edit/xt-sample-tableview-header)

```typescript
const headerView = new UIView
headerView.frame = {x: 0, y: 0, width: 0, height: 66}
headerView.backgroundColor = UIColor.yellow
this.tableView.tableHeaderView = headerView
```

同理，你也可以向列表视图添加一个底部视图。

## 下一步

* 了解 [CollectionView](guide-collectionview.md) 的使用。