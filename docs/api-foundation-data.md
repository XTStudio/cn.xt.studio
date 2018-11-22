---
author: Pony Cui
title: Data
---

使用 Data 读写二进制数据。

## API

### constructor

* 允许传入 ```ArrayBuffer``` 作为第一个参数，初始化一个 ```Data``` 对象。
* 允许传入 ```{utf8String: 'aString'}``` 作为第一个参数，通过 UTF8 字符串初始化 ```Data``` 对象。
* 允许传入 ```{base64EncodedData: Data}``` 作为第一个参数，通过 Base64 编码的 ```Data``` 对象初始化 ```Data``` 对象。
* 允许传入 ```{base64EncodedString: 'base64 encode string.'}``` 作为第一个参数，通过 Base64 编码的字符串初始化 ```Data``` 对象。

### Instance Methods

#### arrayBuffer(): `ArrayBuffer` 
返回一个 JavaScript ```ArrayBuffer``` 对象。

#### json(): `any | undefined`
返回 JSON 解码结果，如果解码失败则返回 `undefined`。

#### utf8String(): `string | undefined` 
返回字符串，如果 Data 不是 UTF-8 编码，则返回 ```undefined```。

#### base64EncodedData(): `Data` 
返回一个经 Base64 编码后的 Data 实例。

#### base64EncodedString(): `string` 
返回一个经 Base64 编码后的字符串。

#### mutable(): `MutableData` 
返回一个 [MutableData](./api-foundation-mutabledata.md) 实例。
