---
author: Pony Cui
title: 图片
---

XT 允许你使用多种方式加载图片资源，开发者可以加载应用内、网络、工程目录中的图片，也可以加载 Base64 编码图片。

## 加载工程目录下的图片

### 放置图片

> 在图片放置完成后，可能需要重新运行 ```npm run debug``` 命令才能正确加载资源。

在加载图片前，将要加载的图片放置在工程目录 ```res/images``` 目录下，假设我们的工程名称为 AwesomeProject，则目录结构应该是这样的。

```
./AwesomeProject/res/images/foo@2x.png
```

你可能注意到了 @2x 的后缀，XT 会根据 @2x / @3x 后缀判断该图片的缩放比率，其中 2 倍图是必须存在的。

### 加载图片

我们使用 ```UIImage``` 类加载图片，假定我们要加载的图片文件名为 ```foo@2x.png```，使用以下代码加载。

```typescript
const fooImage = new UIImage({name: "foo"})
```

## 加载应用包内的图片

XT 支持直接加载对应平台内的图片资源，使用这种方式，你可以在不同的脚本间共享资源。

### 放置图片

#### iOS

在 iOS 上，将静态图片放置到 ```Assets.xcassets``` 图片管理器中。

#### Android

在 Android 上，将静态图片放置到应用的 ```assets/images``` 目录中。

#### Web

在 Web 上，将静态图片放置到 html 同级目录下的 ```assets/images``` 目录中。

### 加载图片

同样使用 ```UIImage``` 类加载图片，使用以下代码加载，如果同名文件同时存在应用包和工程目录，则优先使用工程目录下的资源。

```typescript
const fooImage = new UIImage({name: "foo"})
```

## 加载 Base64 编码图片

要通过 Base64 编码字符串加载图片，只需使用以下方法即可，其中 ```name``` 是可选的，它用于说明该图片的倍率。

```typescript
const fooImage = new UIImage({name: "icon_base64@2x.png", base64: "base64 encoded string"})
```

## 渲染图片

要将加载得到的 ```UIImage``` 在屏幕上显示，我们需要使用 ```UIImageView```。[（示例）](https://jsbin.com/fixotaf/edit?js,output)

```typescript
const image = new UIImage({base64: "iVBO..."})

class MainViewController extends UIViewController {

  fooImageView = new UIImageView
  
  viewDidLoad() {
    super.viewDidLoad()
    this.fooImageView.image = image
    this.view.addSubview(this.fooImageView)
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.fooImageView.frame = {x: 44, y: 44, width: 64, height: 64}
  }

}
```

## 加载网络图片

要加载网络图片，需要使用 ```UIImageView::loadImageWithURLString``` 方法。[（示例）](https://jsbin.com/fumayun/edit?js,output)

```typescript
class MainViewController extends UIViewController {

  fooImageView = new UIImageView
  
  viewDidLoad() {
    super.viewDidLoad()
    this.fooImageView.loadImageWithURLString("https://avatars2.githubusercontent.com/u/6128438?s=200&v=4")
    this.view.addSubview(this.fooImageView)
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.fooImageView.frame = {x: 44, y: 44, width: 128, height: 128}
  }

}
```


