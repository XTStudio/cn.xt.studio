---
author: Pony Cui
title: URL
---

## API

### Static Methods

#### URLWithString(string: `string`, baseURL?: `URL`): `URL | undefined`
使用字符串创建一个 URL，当 ```baseURL``` 不为空时，返回一个相对该 ```baseURL``` 的 ```URL```。

#### fileURLWithPath(path: `string`): `URL | undefined`
使用文件路径创建一个 URL。

### Instance Fields

#### absoluteString: `string` *`readonly`*
返回该 URL 的字符串形式。