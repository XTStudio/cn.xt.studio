---
author: Pony Cui
title: 介绍
---

## XT 是什么

XT 是一个用于构建跨平台移动应用的开发框架。

XT 致力于在不同平台（iOS / Android / Web），通过一致的界面、通信、存储 API，构建表现一致的移动应用。XT 被设计为可自底向上逐层开发的框架，你可以使用 XT 开发一个视图，也可以使用 XT 开发整个应用。

不同于其它框架，XT 专注于应用的整体表现，倾向于由官方提供一致的、安全的、稳定的 API。

## 起步

* 在学习 XT 前，请确保你已经掌握 [TypeScript](https://www.tslang.cn/) 以及 [NodeJS](https://nodejs.org/en/) 开发环境的使用。
* 你不需要精通相关平台开发，只需掌握对应平台的构建方法即可。

尝试 XT 最简单的方法是使用 [JSBin 上的 Hello World 例子](https://jsbin.com/cuhevor/edit?js,output)。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。

在 JSBin 上使用时，你将无法使用代码提示功能，你需要使用 VSCode 才能获得代码提示能力。

## 使用代码描述界面

不同于其它 JavaScript 框架，XT 并不使用 DOM 声明和编写界面。XT 的核心是使用视图对象及其属性描述界面。

```typescript
class MainViewController extends UIViewController {

  fooLabel = new UILabel
  
  viewDidLoad() {
    super.viewDidLoad()
    this.fooLabel.text = "Hello, XT!"
    this.fooLabel.textAlignment = UITextAlignment.center
    this.view.addSubview(this.fooLabel)
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.fooLabel.frame = this.view.bounds
  }

}
```

我们已经成功创建了第一个 XT 应用！上述代码做了什么事情？

1. 创建一个 ```MainViewController``` 类并使其继承 ```UIViewController```。
2. 创建一个文本框，并对该文本框设置文本居中，设置文本```Hello, XT!```。
3. 将此文本框添加到主视图中，并在 ```viewWillLayoutSubviews``` 方法中修改文本框的尺寸。

#### 请尝试

* 将 ```fooLabel``` 文本修改为 "Hello, Pony!"。
* 将 ```fooLabel``` 文本修改为左对齐。

## Frame 布局

为了保证核心库的精简，我们去掉了所有的 Flex / Constraint / Relative 布局，取而代之的是 Frame 布局。

为了说明 Frame 布局，我们创建了[另一个 JSBin 示例](https://jsbin.com/fugozah/edit?js,output)。

```typescript
class MainViewController extends UIViewController {

  redView = new UIView
  
  viewDidLoad() {
    super.viewDidLoad()
    this.redView.backgroundColor = UIColor.red
    this.redView.frame = {x: 22, y: 22, width: 44, height: 44}
    this.view.addSubview(this.redView)
  }

}
```

运行这段代码，预览界面中将出现一个红色方块，它位于屏幕左上角 {x: 22, y: 22} 点处，大小为 {width: 44, height: 44}。

这就是 Frame 布局，```frame``` 属性描述该视图的位置与大小。与此同时，我们可以通过 ```bounds``` 属性获得指定视图的大小。注意一点，在 XT 中，所有涉及布局的单位都是 Pt。

#### 请尝试

* 修改 ```redView.frame``` 中的 4 个值。

## 视图层级

在 XT 中， 你可以使用 ```addSubview``` 方法添加一个子视图。（[例子](https://jsbin.com/yanokic/edit?js,output)）

```typescript
class MainViewController extends UIViewController {

  redView = new UIView
  yellowView = new UIView
  
  viewDidLoad() {
    super.viewDidLoad()
    this.redView.backgroundColor = UIColor.red
    this.yellowView.backgroundColor = UIColor.yellow
    this.redView.addSubview(this.yellowView)
    this.view.addSubview(this.redView)
  }

  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.redView.frame = {x: 22, y: 22, width: 88, height: 88}
    this.yellowView.frame = {x: 22, y: 22, width: 22, height: 22}
  }

}
```

XT 通过对象嵌套对象的方式，构建完整的视图层级树，并使用该树渲染界面、响应触摸事件。

#### 请尝试

* 在 ```redView``` 上添加一个绿色背景的视图。

## 响应触摸

我们使用 ```UIGestureRecognizer``` 类响应触摸事件，默认情况下，所有的 ```UIView``` 都是可触摸的，它们可以响应轻触、长按、拖动事件。[例子](https://jsbin.com/tisulu/edit?js,output)

```typescript
this.redView.addGestureRecognizer(new UITapGestureRecognizer().on("touch", () => {
    this.redView.backgroundColor = UIColor.yellow
}))
```

你可以向视图添加多个手势识别器，当用户触摸对应视图时，对应的手势回调会被触发。

#### 请尝试

* 添加一个双击手势到 ```redView``` 上。

## 准备好了吗？

我们刚才简单介绍了 XT 核心最基本的几个功能，本教程其余部分将具体描述其它高级功能及详细的细节，请务必从头开始阅读整个教程。