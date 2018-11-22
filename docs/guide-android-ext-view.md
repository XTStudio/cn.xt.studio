---
author: Pony Cui
title: 原生视图（Android）
---

> 在阅读本文前，请先阅读[原生类](./guide-android-ext-regular.md)，原生视图的扩展方法也基于原生类。

在如今的 App 中，已经有成千上万的原生 UI 部件了——其中的一些是平台的一部分，另一些可能来自于一些第三方库，而且可能你自己还收藏了很多。XT 已经封装了大部分最常见的组件，但不可能封装全部组件。而且，说不定你曾经为自己以前的 App 还封装过一些组件，XT 肯定没法包含它们。幸运的是，在 XT 应用程序中封装和植入已有的组件非常简单。

和原生类嵌入教程一样，本向导也是一个相对高级的向导，我们假设你已经对 Android 编程颇有经验。本向导会引导你如何构建一个原生 UI 组件，带领你了解 XT 核心库中 MapView 组件的具体实现。

*鉴于 Android 并没有自带的地图组件，添加第三方 SDK 会增加教程复杂度，因此，我们以一个纯色的 View 替代地图组件用于演示。*

## 导出示例

导出一个视图和导出一个类除了继承类外，并无什么区别。

### 创建 MKMapView 类

首先，创建 `MKMapView` 类，并使该类继承 `UIView`，导出该类。

```kotlin
class MKMapView: UIView() {

    init {
        this.edo_backgroundColor = UIColor.gray
    }

}
```

*稍等，我们创建的是 `UIView` 的子类，要如何往里面填充一个原生视图？在 `init` 方法中，使用 `addView` 方法添加原生视图，你只需要把 `UIView` 看到是 `FrameLayout` 即可。*

### 编写 d.ts 文件

回到 TypeScript 工程，添加一个 MKMapView 的定义。

```typescript
declare class MKMapView extends UIView {

}
```

### 编写测试文件

回到 TypeScript 工程，添加测试代码。

```typescript
/// <reference path="../sample_ext.d.ts" />

class MainViewController extends UIViewController {

    mapView = new MKMapView

    viewDidLoad() {
        super.viewDidLoad()
        this.setupMapView()
    }

    setupMapView() {
        this.view.addSubview(this.mapView)
    }

    viewWillLayoutSubviews() {
        super.viewWillLayoutSubviews()
        this.mapView.frame = { x: 0, y: 66, width: this.view.bounds.width, height: this.view.bounds.height - 66 }
    }

}

global.main = new MainViewController
```

在命令行中重新编译 ts 文件 `npm run build`，在 Android Studio 中启动应用。此时，一个地图组件（纯灰色视图）将呈现在你面前。

至此，一个视图组件已经成功集成到 XT 运行时了！

### 导出类属性、实例属性、实例方法

如需导出类属性、实例属性、实例方法，请参考[『原生类』](./guide-ios-ext-regular.md)教程，导出、使用方法一致。