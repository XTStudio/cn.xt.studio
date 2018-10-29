---
author: Pony Cui
title: 介绍
---

## XT 是什么

XT 是一个用于构建跨平台移动应用的开发框架。XT 致力于在不同平台（iOS / Android / Web），使用一致的界面、通信、存储 API，构建表现一致的移动应用。同时，XT 被设计为可自底向上逐层开发的框架，你可以使用 XT 开发一个视图，也可以使用 XT 开发整个应用。

不同于其它框架，XT 更专注于应用的整体表现，倾向于由官方提供一致的、安全的、稳定的 API。

## 起步

* 在学习 XT 前，请确保你已经掌握 TypeScript 以及 NodeJS 开发环境的使用；
* 你不需要精通相关平台开发，只需掌握对应平台 Build 的方法即可（指南中也会具体描述）；
* 如果你需要为各自平台开发插件，那么，掌握对应平台的知识是必须的。

尝试 XT 最简单的方法是使用 [JSBin 上的 Hello World 例子](https://jsbin.com/cuhevor/2/edit?js,output)。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。

在 JSBin 上使用时，你将无法使用代码提示功能，你需要使用 VSCode 才能获得代码提示能力。

## 使用代码描述界面

不同于其它 WebApp 框架（React / Vue），XT 不使用任何 DOM 声明、编写界面。XT 的核心是使用 View 对象及其属性描述界面。

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

const main = new MainViewController
```

如 JSBin 例子所示，我们已经成功创建了第一个 XT 应用！我们逐一说明上述代码完成的事情。

1. 我们创建了一个 ```MainViewController``` 类并使其继承 ```UIViewController```；
2. 我们创建了一个文本框，并对该文本框设置文本居中，设置文本```Hello, XT!```；
3. 我们将此文本框添加到主视图中，并在 ```viewWillLayoutSubviews``` 方法中修改文本框的尺寸。

* 你可以在 JSBin 中尝试修改 ```fooLabel``` 和 ```this.view``` 的其它属性，我们将在接下来的指南中说明这些类和属性的使用。

## Frame 布局

XT 的布局描述也非常特别，为了保证核心库的精简，我们去掉了所有的 Flex / Constraint / Relative 布局，取而代之的是 Frame 布局。

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

const main = new MainViewController
```

在 JSBin 中运行这段代码，预览界面中将出现一个红色方块，它的左上角位置在相对屏幕左上角 {22, 22} 点处，并且它大小为 {44（宽）, 44（高）}。这就是 Frame 布局，```UIView``` 的 ```frame``` 属性描述了该视图的位置与大小。同时，我们可以通过 ```bounds``` 属性获得某一视图的大小。

* 请尝试修改 ```this.redView.frame```，使其宽度为屏幕的 90%。（Tips: 在 ```viewWillLayoutSubviews``` 方法中编写代码）

## 视图层级

在 XT 中， 你可以使用 ```addSubview``` 方法添加一个子视图，请看 [JSBin 例子](https://jsbin.com/yanokic/3/edit?js,output)。

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

const main = new MainViewController
```

通过对象嵌套对象的方式，我们重新构建了视图层级树，并使用该树渲染界面、响应触摸事件。

## 响应触摸

我们使用 ```UIGestureRecognizer``` 类响应触摸事件，默认情况下，所有的 ```UIView``` 都是可触摸的，它们可以响应轻触、长按、拖动事件。

下面的[例子](https://jsbin.com/tisulu/edit?js,output)描述了 ```redView``` 如何响应轻触事件。

```typescript
this.redView.addGestureRecognizer(new UITapGestureRecognizer().on("touch", () => {
    this.redView.backgroundColor = UIColor.yellow
}))

const main = new MainViewController
```

* 隐藏的视图、完全透明的视图、超出边界的视图不会响应触摸事件

## 准备好了吗？

我们刚才简单介绍了 XT 核心最基本的几个功能，本教程其余部分将具体描述其它高级功能及详细的细节，请务必从头开始阅读整个教程。