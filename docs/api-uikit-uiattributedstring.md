---
author: Pony Cui
title: UIAttributedString
---

描述富文本字符串。

## API

### constructor(str: `string`, attributes: `{ [key: UIAttributedStringKey]: any }`)
使用指定文本以及样式标签，创建富文本字符串。

### Instance Methods

#### measure(inSize: `UISize`): `UIRect`
返回该文本在指定视图大小内的布局大小。

#### mutable(): `UIMutableAttributedString`
返回一个可变的富文本字符串。