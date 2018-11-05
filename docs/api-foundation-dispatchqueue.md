---
author: Pony Cui
title: DispatchQueue
---

使用 DispatchQueue 执行多线程任务。

## API

### Static Fields

#### main: `DispatchQueue` *`readonly`*
返回主线程队列。

#### global: `DispatchQueue` *`readonly`*
返回子线程总队列。

### constructor(identifier?: string)
通过指定 identifier 创建一个线程队列（不建议自行创建线程队列）。

### Instance Methods

#### async(asyncBlock: () => void): `void`
添加异步任务。

#### asyncAfter(delayInSeconds: number, asyncBlock: () => void): `void` 
添加异步任务，并使这个任务在指定`秒`后执行。

#### isolate(isolateBlock: () => void, ...arguments: any[]): `void`
添加孤立任务，当向另一个线程队列添加任务时，只能使用 ```isolate``` 方法添加任务。