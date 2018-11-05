---
author: Pony Cui
title: FileManager
---

使用 FileManager 读写文件。

## API

### Static Fields

#### defaultManager: `FileManager` *`readonly`*
返回一个 FileManger 实例。

#### documentDirectory: `string` *`readonly`*
返回 document 目录，该目录只能存放用户生成的文件。

#### libraryDirectory: `string` *`readonly`*
返回 library 目录。

#### cacheDirectory: `string` *`readonly`*
返回 cache 目录，该目录文件会在机器存储空间不足时，自动清空。

#### temporaryDirectory: `string` *`readonly`*
返回 tmp 目录，该目录文件会随时被清空。

#### jsBundleDirectory: `string` *`readonly`*
返回 js 包目录。

### Instance Methods

#### subpaths(atPath: string, deepSearch?: boolean = true): `string[]`
遍历指定目录下的所有文件，并返回路径数组，当 ```deepSearch``` 为 ```true``` 时，会进行深度遍历。

#### createDirectory(atPath: string, withIntermediateDirectories: boolean): `Error | undefined`
在指定路径创建文件夹，创建失败时返回 ```Error```，否则返回 ```undefined```。

#### createFile(atPath: string, data: Data): `Error | undefined`
在指定路径写入文件，写入失败时返回 ```Error```，否则返回 ```undefined```。

#### readFile(atPath: string): `Data | undefined`
读取指定路径的文件内容，成功后返回 ```Data``` 实例，读取失败时返回 ```undefined```。

#### removeItem(atPath: string): `Error | undefined`
删除指定路径文件或文件夹，失败时返回 ```Error```，否则返回 ```undefined```。

#### copyItem(atPath: string, toPath: string): `Error | undefined`
复制指定路径文件到目录路径，失败时返回 ```Error```，否则返回 ```undefined```。

#### moveItem(atPath: string, toPath: string): `Error | undefined`
移动指定路径文件到目录路径，失败时返回 ```Error```，否则返回 ```undefined```。

#### fileExists(atPath: string): `boolean`
检查指定路径文件是否存在。

#### dirExists(atPath: string): `boolean`
检查指定路径文件夹是否存在。