---
author: Pony Cui
title: Timer
---

使用 Timer 创建一个定时器。

## API

### constructor(timeInterval: `number`, block: `() => void`, repeats: `boolean`)

* timeInterval - 在指定`秒`后执行。
* block - 要执行的任务回调
* repeats - 是否为重复任务

### Instance Fields

#### valid: `boolean` *`readonly`*
当前定时器是否有效。

### Instance Methods

#### fire(): `void`
立刻执行回调。

#### invalidate(): `void`
将该定时器标记为无效。