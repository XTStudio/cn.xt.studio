---
author: Pony Cui
title: MutableURLRequest
---

使用 MutableURLRequest 创建一个可修改请求信息的请求。

## Extends

[URLRequest](./api-foundation-urlrequest.md)

## API

### constructor(aURL: `URL | string`, cachePolicy?: `URLRequestCachePolicy`, timeout?: `number`)

* aURL - URL 或或 url 字符串。
* cachePolicy - 缓存的处理方法，可选值[参考](./api-foundation-urlrequestcachepolicy.md)。
* timeout - 超时值，单位`秒`。

### Instance Fields

#### HTTPMethod: `string | undefined`
HTTP 的请求方法，一般为 GET POST PUT DELETE 中的其中一个。

#### allHTTPHeaderFields: `{ [key: string]: any } | undefined`
HTTP 的请求头部信息。

#### HTTPBody: `Data | undefined`
HTTP 的请求体内容。

### Instance Methods

#### setValueForHTTPHeaderField(value: `string`, field: `string`): `void`
将指定的内容设置到 HTTP 头部信息指定键中。

#### immutable(): `URLRequest`
返回一个 [URLRequest](./api-foundation-urlrequest.md) 实例。