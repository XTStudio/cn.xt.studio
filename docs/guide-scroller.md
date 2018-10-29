---
author: Pony Cui
title: 滚动视图
---

当内容超出 ```UIView``` 的可视范围时，需要提供一种方式让用户能够查看到这些内容，滚动视图正是处理这种问题的最佳方法。

滚动视图实际上是一个普通的 ```UIView```，我们在 ```UIView``` 上添加了拖动手势，接收手势事件，并滚动内容视图。

除此以外，滚动视图还封装有以下功能：

* 滚动条
* 控制可滚动区域大小
* 控制滚动边缘
* 分页滚动
* 下拉刷新
* 加载更多

## 一个简单的例子

我们用一个简单的[例子](https://jsbin.com/firequg/edit?js,output)描述 ```UISrollView``` 的用法。

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

const main = new MainViewController
```

我们看看这个例子说明了什么：

1. 我们向 ```this.scrollView``` 添加了两个子视图，其中，第二个视图超出了 ```this.scrollView``` 的可视范围。
2. 这个时候，我们将 ```this.scrollView.contentSize``` 设置为高 600 的可滚动区域高度。
3. 这样，用户就可以通过拖动的方式，查看超出区域的内容。

## 列表视图

那么，我们可以用这种方式处理长列表视图吗？

可以，但是这会造成代码混乱，并且不利于性能优化，你应该使用 [UITableView](TableView.md) 处理列表视图。

## 分页滚动

分页滚动是一个常见的需求，对于简单的视图，只需要将 ```UIScrollView::pagingEnabled``` 设为 ```true``` 即可。

而对于复杂的分页滚动，可以使用 ```UIPageViewController``` 实现。

## 下拉刷新

在列表视图中，下拉刷新是非常常见的需求，XT 已经为你封装好对应控件（但目前你还未能自定义样式）。

用法与[示例](https://jsbin.com/bonorum/edit?js,output)如下：

```typescript
this.scrollView.addSubview(new UIRefreshControl().on("refresh", (sender: UIRefreshControl) => {
    DispatchQueue.main.asyncAfter(3.0, () => { // 延迟三秒模拟网络请求
        sender.endRefreshing()
    })
}))
```

## 加载更多

与下拉刷新组件用法类似，使用 ```UIFetchMoreControl```处理加载更多的情况，当用户滚动视图至底部时，相应回调会被触发。