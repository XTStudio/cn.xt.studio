---
author: Pony Cui
title: CALayer
---

使用 ```CALayer``` 渲染一个轻量级的界面。

## API

### Instance Fields

#### frame: `UIRect`
该参数用于描述渲染层的位置与大小。

#### superlayer: `CALayer | undefined` *`readonly`*
父级渲染层。

#### sublayers: `CALayer[]` *`readonly`*
所有子级渲染层。

#### hidden: `boolean`
是否隐藏。

#### mask: `CALayer | undefined`
遮罩层。

#### masksToBounds: `boolean`
裁剪超出边界的图层。

#### backgroundColor: `UIColor | undefined`
背景色。

#### cornerRadius: `number`
圆角。

#### borderWidth: `number`
描边宽度，

#### borderColor: `UIColor | undefined`
描边颜色。

#### opacity: `number`
不透明度。

#### shadowColor: `UIColor | undefined`
阴影颜色。

#### shadowOpacity: `number`
阴影透明度。

#### shadowOffset: `UISize`
阴影大小。

#### shadowRadius: `number`
阴影半径。