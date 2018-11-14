---
author: Pony Cui
title: CAShapeLayer
---

使用 ```CAShapeLayer``` 渲染一个渐变图层，一般与 ```UIBezierPath``` 配合使用，示例请参阅[此处](./api-uikit-uibezierpath.md)。

## Extends

[CALayer](./api-coregraphics-calayer.md)

## API

### Instance Fields

#### path: `UIBezierPath | undefined`
渲染路径。

#### fillColor: `UIColor | undefined`
填充色。

#### fillRule: `CAShapeFillRule`
填充方式。

#### lineCap: `CAShapeLineCap`
端点样式。

#### lineDashPattern: `number[]`
虚线描述数组。

#### lineDashPhase: `number`
虚线偏移值。

#### lineJoin: `CAShapeLineJoin`
线条交汇处边角的样式。

#### lineWidth: `number`
线宽。

#### miterLimit: `number`
最大斜接长度。

#### strokeColor: `UIColor | undefined`
线条颜色。

#### strokeStart: `number`
线条渲染起点，值范围 `[0.0, 1.0]`。

#### strokeEnd: `number`
线条渲染终点，值范围 `[0.0, 1.0]`。