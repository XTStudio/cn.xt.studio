---
author: Pony Cui
title: URLSession
---

使用 URLSession 创建一个网络请求任务。

## API

### Static Fields

#### shared: `URLSession` *`readonly`*
返回一个 ```URLSession``` 实例。

### Instance Methods

#### dataTask(req: `$0`, complete: `$1`): `URLSessionTask`

返回一个 Task 实例，请求参数如下。

##### $0 = string | URL | URLRequest
提供一个 url 字符串， [URL](./api-foundation-url.md) 或者 [URLRequest](./api-foundation-urlrequest.md)。

##### $1 =  (data?: Data, response?: URLResponse, error?: Error) => void
提供一个回调方法，在 HTTP 请求失败或成功后回调。