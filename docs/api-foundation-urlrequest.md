---
author: Pony Cui
title: URLRequest
---

使用 URLRequest 创建一个网络请求。

## API

### constructor(aURL: URL | string, cachePolicy?: URLRequestCachePolicy, timeout?: number)

* aURL - URL 或或 url 字符串。
* cachePolicy - 缓存的处理方法，可选值[参考](./api-foundation-urlrequestcachepolicy.md)。
* timeout - 超时值，单位`秒`。

### Instance Fields

#### HTTPMethod: `string | undefined` *`readonly`*
HTTP 的请求方法，一般为 GET POST PUT DELETE 中的其中一个。

#### URL: `URL` *`readonly`*
HTTP 的请求 URL。

#### allHTTPHeaderFields: `{ [key: string]: any } | undefined` *`readonly`*
HTTP 的请求头部信息。

#### HTTPBody: `Data | undefined` *`readonly`*
HTTP 的请求体内容。

### Instance Methods

#### valueForHTTPHeaderField(field: string): `any | undefined`
从 HTTP 请求头中，返回指定键的内容。

#### mutable(): `MutableURLRequest`
返回一个 [MutableURLRequest](./api-foundation-mutableurlrequest.md) 实例。