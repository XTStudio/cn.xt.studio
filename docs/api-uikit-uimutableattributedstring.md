---
author: Pony Cui
title: UIMutableAttributedString
---

描述富文本字符串（可变）。

## Extends

[UIAttributedString](./api-uikit-uiattributedstring.md)

## API

### constructor(str: `string`, attributes: `{ [key: UIAttributedStringKey]: any }`)
使用指定文本以及样式标签，创建富文本字符串。

### Instance Methods

#### replaceCharacters(inRange: `UIRange`, withString: `string`): `void`
替换指定范围内的文本。

#### setAttributes(attributes: `{ [key: string]: any }`, range: `UIRange`): `void`
替换指定范围内的样式。

#### addAttribute(attrName: `string`, value: `any`, range: `UIRange`): `void`
在指定范围内添加样式。

#### addAttributes(attributes: `{ [key: string]: any }`, range: `UIRange`): `void`
在指定范围内添加样式。

#### removeAttribute(attrName: `string`, range: `UIRange`): `void`
移除指定范围内的指定样式。

#### replaceCharactersWithAttributedString(inRange: `UIRange`, withAttributedString: `UIAttributedString`): `void`
替换指定范围内的富文本。

#### insertAttributedString(attributedString: `UIAttributedString`, atIndex: `number`): `void`
在指定位置插入富文本。

#### appendAttributedString(attributedString: `UIAttributedString`): `void`
在末端添加富文本。

#### deleteCharacters(inRange: `UIRange`): `void`
删除指定范围内的文本。

#### immutable(): `UIAttributedString`
返回一个不可变富文本实例。