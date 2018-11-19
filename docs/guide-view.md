---
author: Pony Cui
title: 视图
---

视图，即 UIView 类，是整个界面系统的核心类。

视图类负责以下功能：

* 允许开发者在视图内添加任意个子视图
* 响应手势操作
* 响应动画
* 响应样式变化
* 允许使用 Core Graphics 库进行定制渲染

## 视图层级

我们已经在起步指南中简单介绍了视图层级，在此，我们希望向开发者描述更多关于层级的细节。

### 视图的添加与删除

你可以使用以下 API 对子视图进行添加、删除操作。[（例子）](https://stackblitz.com/edit/xt-sample-view)

* removeFromSuperview(): void
* insertSubviewAtIndex(view: UIView, index: number): void
* addSubview(view: UIView): void
* insertSubviewBelowSubview(view: UIView, belowSubview: UIView): void
* insertSubviewAboveSubview(view: UIView, aboveSubview: UIView): void

当视图被添加到父视图后，开发者可以使用 ```superview``` 属性获取父视图实例。

父视图可以使用 ```subviews``` 属性获取其管理的所有子视图。

### 显示顺序

越往后添加的图层，层级越高，你可以使用以下方法修改特定图层层级。[（例子）](https://stackblitz.com/edit/xt-sample-view)

* exchangeSubview(index1: number, index2: number): void
* bringSubviewToFront(view: UIView): void
* sendSubviewToBack(view: UIView): void

### 超出边界的处理

默认情况，当视图可以超出父视图的边界时，视图可以被正常渲染，如果你需要禁止这个行为，可以将 ```clipsToBounds``` 属性设为 ```true```。[（例子）](https://stackblitz.com/edit/xt-sample-viewmaskstobounds)

### 生命周期

视图类方法会在特定事件发生时被调用：

* didAddSubview(subview: UIView): void - 添加一个子视图后
* willRemoveSubview(subview: UIView): void - 移除一个子视图前
* willMoveToSuperview(newSuperview: UIView): void - 被添加到一个子视图前
* didMoveToSuperview(): void - 被添加到一个子视图后

你可以重写这些方法，定制你认为需要重写的行为。

## 布局

### frame

```frame``` 用于描述该视图在父视图中的相对位置。

### bounds

```bounds``` 用于描述该视图的内容大小。

### center

```center``` 用于描述该视图的中心点。

### transform

```transform``` 用于描述该视图的二维变换。

```transform``` 接收 ```UIAffineTransform``` 结构体，具体变换规则可以参考[这篇文章](https://www.cnblogs.com/Ivy-s/p/6786622.html)。

### 子视图布局

当 ```frame``` 属性被修改后，```layoutSubviews``` 方法会被调用，在此时对子视图进行布局。[（例子）](https://stackblitz.com/edit/xt-sample-view-layoutsubviews)

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

上述代码，```yellowView``` 占据父视图的一半宽高。

#### 练习

* 请尝试让 ```yellowView``` 居中显示 

## 触摸

我们已经在起步指南中简单介绍了 ```UIGestureRecognizer``` 的使用方法，在此不再说明。

值得关注的一个属性是 ```touchAreaInsets```， 借助此属性你可以扩展视图的有效触摸区域，这对于小按钮而言是相当有用的一个属性。

## 样式

* 使用 ```backgroundColor``` 修改视图的背景色，它接受一个 [UIColor](UIColor.md) 对象。
* 使用 ```alpha``` 修改视图的不透明度，默认值是 1.0。
* 使用 ```hidden``` 隐藏一个视图。
* 使用 ```layer.cornerRadius``` 为视图添加圆角。
* 使用 ```layer.borderWidth``` 和 ```layer.borderColor``` 为视图添加边框。
* 使用 ```layer.shadowColor``` / ```layer.shadowOpacity``` / ```layer.shadowOffset``` / ```layer.shadowRadius``` 为视图添加阴影。

具体用法请查看[例子](https://stackblitz.com/edit/xt-sample-view-style)。

## 下一步

* 你可能想要知道如何处理超出边界的内容，请阅读[使用滚动视图](guide-scroller.md)一节。
* 你可能想要知道如何处理长按、拖动等手势，请阅读[处理手势事件](GestureRecognizers.md)一节。