---
author: Pony Cui
title: UIColor
---

描述颜色，当前只支持 RGBA 色域。

## API

### Static Fields

#### black: `UIColor` *`readonly`*
#### clear: `UIColor` *`readonly`*
#### gray: `UIColor` *`readonly`*
#### red: `UIColor` *`readonly`*
#### yellow: `UIColor` *`readonly`*
#### green: `UIColor` *`readonly`*
#### blue: `UIColor` *`readonly`*
#### white: `UIColor` *`readonly`*

### Static Methods

#### hexColor(hexValue: `string`): `UIColor`
使用 RGB 或 ARGB 16 进制值创建 `UIColor`

### constructor(r: `number`, g: `number`, b: `number`, a: `number`)
使用 RGBA 创建颜色，有效值为 [0.0, 1.0]