---
author: Pony Cui
title: MutableData
---

使用 MutableData 创建一个可变的数据实例。

## Extends

[Data](./api-foundation-data.md)

## API

### constructor

* 允许传入 ```ArrayBuffer``` 作为第一个参数，初始化一个 ```MutableData``` 对象。
* 允许传入 ```{utf8String: 'aString'}``` 作为第一个参数，通过 UTF8 字符串初始化 ```MutableData``` 对象。
* 允许传入 ```{base64EncodedData: Data}``` 作为第一个参数，通过 Base64 编码的 ```Data``` 对象初始化 ```MutableData``` 对象。
* 允许传入 ```{base64EncodedString: 'base64 encode string.'}``` 作为第一个参数，通过 Base64 编码的字符串初始化 ```MutableData``` 对象。

### Instance Methods

#### appendData(data: Data): `void`
往数据的末端添加数据。

#### appendArrayBuffer(arrayBuffer: ArrayBufferLike): `void`
往数据的末端添加 ```ArrayBuffer``` 数据。

#### setData(data: Data): `void`
使用 ```data``` 重置所有数据。

#### immutable(): `Data`
返回一个 [Data](./api-foundation-data.md) 实例。
