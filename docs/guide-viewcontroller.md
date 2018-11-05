---
author: Pony Cui
title: 视图控制器
---

视图控制器（```UIViewController```），用于控制单个视图的生命周期。一般来说，一个视图控制器就是一个场景。

## 生命周期

视图控制器必定持有一个顶级视图对象 ```view```，并在指定事件发生时，主动调用 ```UIViewController``` 类方法。

### viewDidLoad

在顶级视图加载完成后，该方法会被执行，并且该方法只会执行一次。

一般来说，我们会在该方法中将子视图添加到顶级视图中，并配置子视图属性。如果存在网络请求，也应在这个方法中发起调用，具体例子如下。

```typescript
class MainViewController extends UIViewController {

  fooLabel = new UILabel
  
  viewDidLoad() {
    super.viewDidLoad()
    this.fooLabel.text = "Hello, XT!"
    this.fooLabel.textAlignment = UITextAlignment.center
    this.view.addSubview(this.fooLabel)
  }

}
```

#### constructor

既然 ```viewDidLoad``` 和 ```constructor``` 一样，都只会被执行一次，那么，我们可以在类初始化方法中执行子视图添加操作吗？

不可以！

你应该始终在 ```viewDidLoad``` 中执行与 ```view``` 有关的操作，过早地调用 ```view``` 属性会打乱视图控制器的生命周期，影响应用性能。

### viewWillAppear

在顶级视图将要显示在页面时，该方法被执行，该方法可能被执行多次。

该方法的执行一定在 ```viewDidLoad``` 后，一般来说，我们会在该方法中执行一些幂等操作。

### viewDidAppear

在顶级视图已经显示在页面后，该方法被执行，该方法可能被执行多次。

### viewWillDisappear

在顶级视图即将消失于页面上时，该方法被执行，该方法可能被执行多次。

### viewDidDisappear

在顶级视图消失于页面后，该方法被执行，该方法可能被执行多次。

### viewWillLayoutSubviews

在顶级视图布局发生改变时，该方法被执行，开发者应该在此方法中对子视图进行布局。

```typescript
class MainViewController extends UIViewController {

  fooLabel = new UILabel
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.fooLabel.frame = {x: 0, y: 0, width: this.view.bounds.width, height: 44}
  }

}
```

### viewDidLayoutSubviews

在顶级视图对子视图完成布局后，该方法被执行。

## 子控制器

视图控制器可以嵌套子控制器，形成新的控制器树，这个概念与视图层级是一致的。子控制器被嵌套后，可以将父控制器的生命周期绑定到自身。开发者可以通过这种方式，进一步重构视图控制器。[（例子）](https://jsbin.com/noyamih/edit?js,output)

```typescript
class RedViewController extends UIViewController {
  
   viewDidLoad() {
     super.viewDidLoad()
     this.view.backgroundColor = UIColor.red
   }
  
}

class MainViewController extends UIViewController {

  redViewController = new RedViewController
  
  viewDidLoad() {
    super.viewDidLoad()
    this.addChildViewController(this.redViewController)
    this.view.addSubview(this.redViewController.view)
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.redViewController.view.frame = {x: 44, y: 44, width: 44, height: 44}
  }

}
```