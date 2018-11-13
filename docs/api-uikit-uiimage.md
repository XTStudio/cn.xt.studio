---
author: Pony Cui
title: UIImage
---

用于描述图像，具体使用方法参阅[教程](./guide-image.md)。

## API

### constructor(options: { name?: `string`, base64?: `string`, data?: `Data`, renderingMode?: `UIImageRenderingMode` })

### Instance Fields

#### size: `UISize` *`readonly`* 
图像宽高。

#### scale: `number` *`readonly`* 
图像缩放系数。

### Events

#### "load": () => void
加载成功后触发。