---
author: Pony Cui
title: 视图
---

视图（UIView），是一个抽象对象，视图用于描述指定矩形的渲染方法，同时用于组织子视图以构建整个应用。

视图可以管理子视图，子视图被添加到某一视图后，可以使用 ```superview``` 属性获取父级视图，父级视图可以使用 ```subviews``` 属性获取所有子级视图。你可以使用视图层级管理整个界面。

除此以外，视图还负责以下功能：

* 响应手势操作（包括 UIGestureRecognizer 的响应）
* 使用 Core Graphics 库进行定制渲染
* 响应动画
* 响应样式变化

## 层级管理

我们已经在起步指南中简单介绍了视图层级，在此，我们希望向开发者描述更多关于层级的细节。

### 层级顺序

最后添加的层级，可见优化级最高，此外，你可以通过 ```exchangeSubview``` 方法替换同层视图的顺序。

除了使用 ```addSubview``` 方法添加层级外，也可以使用 ```insertSubviewAtIndex``` ```insertSubviewBelowSubview``` ```insertSubviewAboveSubview``` 方法在图层间插入图层。

使用 ```bringSubviewToFront``` ```sendSubviewToBack``` 方法可以将指定图层拉至最高或推至最底。

### 超出边界渲染

默认情况下，视图可以超出父视图的边界进行渲染（性能更优），如果你需要禁止这个行为，可以将 ```clipsToBounds``` 属性设为 ```true```。

### 生命周期

UIView 的类方法会在特定事件发生时被调用，具体为：

* didAddSubview(subview: UIView): void - 添加一个子视图后
* willRemoveSubview(subview: UIView): void - 移除一个子视图前
* willMoveToSuperview(newSuperview: UIView): void - 被添加到一个子视图前
* didMoveToSuperview(): void - 被添加到一个子视图后

你可以重写这些方法，定制一些你认为需要 Hook 的行为。

## 布局管理

### frame / bounds / center

这三个属性是互相影响的，```frame``` 属性影响视图在父视图中的位置、大小，```bounds``` 属性用于描述内容的大小，```center``` 属性用于设置或获取视图的中心点。

### transform

transform 接受一个 UIAffineTransform 结构体，你可以使用变换属性对图层进行二维矩阵变换，具体变换规则可以参考[这篇文章](https://www.cnblogs.com/Ivy-s/p/6786622.html)。

### 对子视图布局

当 ```UIView::frame``` 属性被修改后，```UIView::layoutSubviews``` 方法会被调用，你可以在此时对子视图进行布局。

```typescript
class MainView extends UIView {
  
  yellowView = new UIView
  
  constructor() {
    super()
    this.yellowView.backgroundColor = UIColor.yellow
    this.addSubview(this.yellowView)
  }

  layoutSubviews() {
    super.layoutSubviews()
    this.yellowView.frame = {x: 0, y: 0, width: this.bounds.width / 2.0, height: this.bounds.height / 2.0}
  }
  
}
```

如上述代码，```yellowView``` 占据父视图的一半宽高。

## 触摸

我们已经在起步指南中简单介绍了 ```UIGestureRecognizer``` 的使用方法，在此不再说明。

值得关注的一个属性是，```UIView::touchAreaInsets``` 借助此属性你可以扩展视图的有效触摸区域，这对于小按钮而言是相关有用的一个属性。

## 样式

* 使用 ```backgroundColor``` 修改视图的背景色，它接受一个 [UIColor](UIColor.md) 对象。
* 使用 ```alpha``` 修改视图的不透明度，默认值是 1.0。
* 使用 ```hidden``` 隐藏一个视图。
* 使用 ```layer.cornerRadius``` 为视图添加圆角。
* 使用 ```layer.borderWidth``` 和 ```layer.borderColor``` 为视图添加边框。
* 使用 ```layer.shadowColor``` / ```layer.shadowOpacity``` / ```layer.shadowOffset``` / ```layer.shadowRadius``` 为视图添加阴影。

## 下一步

* 你可能想要知道如何处理超出边界的内容，请阅读[使用滚动视图](Scroller.md)一节。
* 你可能想要知道如何处理长按、拖动等手势，请阅读[处理手势事件](GestureRecognizers.md)一节。