---
author: Pony Cui
title: UILabel
---

用于渲染文本，具体使用方法参阅[教程](./guide-label.md)。

## Extends

[UIView](./api-uikit-uiview.md)

## API

### Instance Fields

#### text: `string | undefined`
要显示的文本。

#### attributedText: `UIAttributedString | undefined`
要显示的富文本。

#### font: `UIFont | undefined`
指定字体。

#### textColor: `UIColor | undefined`
文本颜色。

#### textAlignment: `UITextAlignment`
文本的水平对齐方式。

#### lineBreakMode: `UILineBreakMode`
文本的断行方式。

#### numberOfLines: `number`
最多允许同时显示多少行文本，值为 `0` 时表示不限制行数。