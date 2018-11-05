---
author: Pony Cui
title: URLSessionTask
---

一个 URLSessionTask 实例代表单个网络请求任务。

## API

### Instance Fields

#### state: `URLSessionTaskState` *`readonly`*
当前请求状态，[参考值](./api-foundation-urlsessiontaskstate.md)。

#### countOfBytesExpectedToReceive: `number` *`readonly`*
期望接收到的字节数。

#### countOfBytesReceived: `number` *`readonly`*
已接收到的字节数。

#### countOfBytesExpectedToSend: `number` *`readonly`*
期望发送的字节数。

#### countOfBytesSent: `number` *`readonly`*
已经发送的字节数。

### Instance Methods

#### cancel(): `void`
取消任务。

#### resume(): `void`
恢复（开始）任务。