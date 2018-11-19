---
author: Pony Cui
title: 文本渲染
---

我们已经在[起步](guide-introduce.md)中演示了如何使用文本框，在这里，我们希望向开发者描述文本渲染的进阶用法。

## 普通文本

```UILabel``` 主要用于渲染文本，```UILabel``` 以垂直居中的形式对文本进行渲染。

修改以下属性可以修改文本样式：

* font: UIFont - 字体
* textColor: UIColor - 颜色
* textAlignment: UITextAlignment - 文本对齐方式
* lineBreakMode: UILineBreakMode - 文本换行方式
* numberOfLines: number - 最大容纳文本行数

具体样式表现，请参考[例子](https://stackblitz.com/edit/xt-sample-label)。

## 标签文本

你可以使用 ```UIAttributedString``` 类渲染标签文本，通过标签文本，可以为同一段文本中赋予不同的样式。[（例子）](https://stackblitz.com/edit/xt-sample-attributedtext)

```typescript
class MainViewController extends UIViewController {

  fooLabel = new UILabel
  
  viewDidLoad() {
    super.viewDidLoad()
    const attributedText = new UIMutableAttributedString("", {})
    attributedText.appendAttributedString(new UIAttributedString("Hello,", {
      [UIAttributedStringKey.foregroundColor]: UIColor.black
    }))
    attributedText.appendAttributedString(new UIAttributedString(" World!", {
      [UIAttributedStringKey.foregroundColor]: UIColor.red,
      [UIAttributedStringKey.font]: new UIFont(24)
    }))
    this.fooLabel.attributedText = attributedText
    this.view.addSubview(this.fooLabel)
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.fooLabel.frame = {x: 44, y: 44, width: 300, height: 300}
  }

}
```

你可以尝试更多的 API 以了解 ```UIAttributedString``` 的更多用法。

## 测量宽高

你可以使用 ```measure``` 方法，测量 ```UIAttributedString``` 的实际渲染宽高，其中 width 和 height 代表渲染目标的最大宽高。

```typescript
attributedText.measure({width: 300, height: 300})
```