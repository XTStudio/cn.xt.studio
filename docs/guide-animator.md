---
author: Pony Cui
title: 动画
---

流畅、有意义的动画对于移动应用用户体验来说是非常重要的。现实生活中的物体在开始移动和停下来的时候都具有一定的惯性，我们在界面中也可以使用动画来实现契合物理规律的交互。

XT 使用 ```UIAnimator``` 创建动画，提供四种补间动画。

* curve - 曲线动画
* linear - 直线（匀速）动画
* spring - 弹性动画
* bouncy - 使用 bounciness 与 speed 数值表达的弹性动画

## 创建一个简单的动画

XT 的动画 API 与 iOS 原生开发十分类似，只需要在 Block 中指定动画元素的终点，即可。[（示例）](https://stackblitz.com/edit/xt-sample-uianimator)

```typescript
class MainViewController extends UIViewController {

  redView = new UIView
  
  viewDidLoad() {
    super.viewDidLoad()
    this.setupViews()
    this.createAnimation()
  }

  setupViews() {
    this.redView.backgroundColor = UIColor.red
    this.redView.frame = {x: 44, y: 44, width: 44, height: 44}
    this.view.addSubview(this.redView)
  }

  createAnimation() {
    this.redView.addGestureRecognizer(new UITapGestureRecognizer().on("touch", () => {
      UIAnimator.curve(0.3, () => {
        this.redView.frame = {x: 88, y: 88, width: 88, height: 88}
        this.redView.backgroundColor = UIColor.yellow
        // 我们在这里指定动画的终点属性
      }, () => {
          console.log("动画执行结束")
      })
    }))
  }

}
```

在上述例子中，当用户点按红色方块时，动画就会执行。

## 弹性动画

XT 提供两种弹性补间，底层的实现是借助 Facebook 开源的 [Rebound](http://facebook.github.io/rebound/) 动画引擎。

弹性动画的实现方法与曲线动画无异，请参考[示例](https://stackblitz.com/edit/xt-sample-uianimator-spring)。

## 动画属性

以下视图属性可以响应动画：

* alpha
* backgroundColor
* frame
* center
* transform
