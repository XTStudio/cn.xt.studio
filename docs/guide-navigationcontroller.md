---
author: Pony Cui
title: 导航控制器
---

移动应用基本不会只由一个页面组成。管理多个页面的呈现、跳转的组件就是我们通常所说的导航。

XT 使用导航控制器（```UINavigationController```）实现导航功能，它实际上是一个视图控制器的封装，导航控制器提供以下功能：

* 页面跳转能力
* 导航栏的渲染

## 一个简单的例子

以下例子向我们展示了页面跳转的使用方法。[（示例）](https://stackblitz.com/edit/xt-sample-navigationcontroller)

```typescript
class SecondViewController extends UIViewController {
  
  fooButton = new UIButton
  
  viewDidLoad() {
    super.viewDidLoad()
    this.title = "Second Page"
    this.fooButton.setTitle("Back to first page.", UIControlState.normal)
    this.fooButton.on("touchUpInside", () => {
      if (this.navigationController) {
        this.navigationController.popViewController()
      }
    })
    this.view.addSubview(this.fooButton)
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.fooButton.frame = this.view.bounds
  }
  
}

class MainViewController extends UIViewController {

  fooButton = new UIButton
  
  viewDidLoad() {
    super.viewDidLoad()
    this.title = "First Page"
    this.fooButton.setTitle("Tap to next page.", UIControlState.normal)
    this.fooButton.on("touchUpInside", () => {
      if (this.navigationController) {
        this.navigationController.pushViewController(new SecondViewController)
      }
    })
    this.view.addSubview(this.fooButton)
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.fooButton.frame = this.view.bounds
  }

}

const main = new UINavigationController(new MainViewController)
```

你可能会困惑，为什么可以使用 ```this.navigationController``` 获得导航控制器，并发起跳转？

当 ```MainViewController``` 附着到 ```UINavigationController``` 后，可以使用 ```this.navigationController``` 获得当前导航控制器，并进行相关操作。

* 使用 ```pushViewController``` 可以推入一个页面
* 使用 ```popViewController``` 可以弹出一个页面

## 定义导航栏元素

### 定义标题

只需修改当前视图控制器的 ```title``` 属性即可。

```typescript
class MainViewController extends UIViewController {
  
  viewDidLoad() {
    super.viewDidLoad()
    this.title = "First Page"
    //...
  }

}
```

### 定义导航栏按钮

开发者可以为导航栏添加左侧和右侧按钮，可以是图标按钮也可以是文字按钮。[（示例）](https://stackblitz.com/edit/xt-sample-navigationitem)

```typescript
const item = new UIBarButtonItem
item.title = "Next"
item.on("touchUpInside", () => {
    new UIAlert("Hey, u touched me.").show()
})
this.navigationItem.rightBarButtonItem = item
```

## 自定义导航栏

由于平台差异，XT 在 iOS 和 Android / Web 上的导航栏样式并不一致。当开发者需要定制导航栏时，可以使用 ```UINavigationBarViewController``` 替代 ```UIViewController```。

该控制器，提供两个视图，```navigationBar``` 和 ```view```，开发者可自行添加对应子视图以实现自定义导航栏的目的。[（示例）](https://stackblitz.com/edit/xt-sample-navigationbarviewcontroller)