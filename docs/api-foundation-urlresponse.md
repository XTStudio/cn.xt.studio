---
author: Pony Cui
title: URLResponse
---

URLResponse 用以表达网络请求返回信息。

## API

### Instance Fields

#### URL: `URL | undefined` *`readonly`*
当前请求结果的原始 ```URL```。

#### expectedContentLength: `number` *`readonly`*
当前请求结果的期望内容长度。

#### MIMEType: `string | undefined` *`readonly`*
当前请求结果的 MIMEType。

#### textEncodingName: `string | undefined` *`readonly`*
当前请求结果的字符编码。

#### statusCode: `number` *`readonly`*
当前请求结果的 HTTP 状态码。

#### allHeaderFields: `{ [key: string]: any }` *`readonly`*
返回当前请求结果的头部信息。