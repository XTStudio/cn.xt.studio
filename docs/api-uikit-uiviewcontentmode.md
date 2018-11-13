---
author: Pony Cui
title: UIViewContentMode
---

描述视图内容的拉伸方式。

#### scaleToFill
不按照内容比例，铺满整个视图。

#### scaleAspectFit
在保持长宽比的前提下，缩放图片，使得内容在容器内完整显示出来。

#### scaleAspectFill
在保持长宽比的前提下，缩放图片，使内容充满容器（你可能要配合 `clipsToBounds` 属性，裁剪超出边界的内容）。