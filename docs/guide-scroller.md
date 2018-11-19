---
author: Pony Cui
title: 滚动视图
---

当内容超出视图可视范围时，需要一种方式让用户能够查看到这些内容，滚动视图正是处理这种问题的最佳方法。

滚动视图（```UIScrollView```）实际上是一个普通的视图，在该视图上添加拖动手势，当用户触发拖动手势时，滚动视图内容。

滚动视图还封装有以下功能：

* 滚动条
* 控制可滚动区域大小
* 控制滚动边缘
* 分页滚动
* 下拉刷新
* 加载更多

## 一个简单的例子

我们用一个简单的[例子](https://stackblitz.com/edit/xt-sample-scroller)描述 ```UISrollView``` 的用法。

```typescript
class MainViewController extends UIViewController {

  scrollView = new UIScrollView
  
  viewDidLoad() {
    super.viewDidLoad()
    this.setupScrollView()
  }

  setupScrollView() {
    this.scrollView.backgroundColor = UIColor.yellow
    this.scrollView.frame = {x: 0, y: 0, width: 200, height: 300}
    {
      const fooView = new UIView
      fooView.backgroundColor = UIColor.red
      fooView.frame = {x: 0, y: 0, width: 44, height: 44}
      this.scrollView.addSubview(fooView)
    }
    {
      const fooView = new UIView
      fooView.backgroundColor = UIColor.red
      fooView.frame = {x: 0, y: 300, width: 44, height: 44}
      this.scrollView.addSubview(fooView)
    }
    this.scrollView.contentSize = {width: 0, height: 600}
    this.view.addSubview(this.scrollView)
  }

}
```

这个例子做了什么？

1. 我们向 ```scrollView``` 添加了两个子视图，第二个视图超出了 ```scrollView``` 的可视范围。
2. 我们将 ```scrollView.contentSize``` 设置为高度为 600 的可滚动区域。
3. 这样，用户就可以通过拖动的方式，查看超出区域的内容。

#### 请尝试

* 向 ```scrollView``` 再添加几个红色方块试试。
* 尝试在 x 轴方向添加一些红色方块，设置 ```contentSize``` 的 ```width``` 为 ```600```。

## 列表视图

那么，我们可以用这种方式处理长列表视图吗？

答案是，可以，但是你需要手动计算各个视图块的 ```frame```。糟糕的是，随着列表行数增多，这些视图块也会增多，会造成严重的性能问题。

要解决这个问题，你可以使用[列表视图](./guide-tableview.md)。

## 分页滚动

要实现分页滚动，只需要将 ```pagingEnabled``` 设为 ```true``` 即可。[（例子）](https://stackblitz.com/edit/xt-sample-scroller-paging)

而对于复杂的分页滚动，可以使用 ```UIPageViewController``` 实现。

## 下拉刷新

在列表视图中，下拉刷新是常见的需求，XT 已经封装好对应控件（目前还未能自定义样式）。[（示例）](https://stackblitz.com/edit/xt-sample-scroller-refresh)

```typescript
this.scrollView.addSubview(new UIRefreshControl().on("refresh", (sender: UIRefreshControl) => {
    DispatchQueue.main.asyncAfter(3.0, () => { // 延迟三秒模拟网络请求
        sender.endRefreshing()
    })
}))
```

## 加载更多

与下拉刷新组件用法类似，使用 ```UIFetchMoreControl```处理加载更多的情况，当用户滚动视图至底部时，相应回调会被触发。

## 下一步

* 了解[长列表视图](guide-tableview.md)的使用。