---
author: Pony Cui
title: Bundle
---

使用 Bundle 类获取应用包内的文件路径。

## API

### Static Fields

#### native: `Bundle` *`readonly`*

获取当前应用包实例

#### js: `Bundle` *`readonly`*

获取当前 JS 包实例

### Instance Methods

#### resourcePath(name: string, type?: string, inDirectory?: string): `string | undefined` 

获取当前包内的资源路径，其中 name 为文本名，type 为后缀, inDirectory 为相对目录。

如果文件不存在，则返回 ```undefined```。

#### resourceURL(name: string, type?: string, inDirectory?: string): URL | undefined: `string | undefined` 

获取当前包内的资源的绝对 URL 地址，其中 name 为文本名，type 为后缀, inDirectory 为相对目录。

如果文件不存在，则返回 ```undefined```。
