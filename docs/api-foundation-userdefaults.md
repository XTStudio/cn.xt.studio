---
author: Pony Cui
title: UserDefaults
---

使用 UserDefaults 保存一些与用户相关的 Key-Value 信息，这些信息会在应用删除以后被清除。

## API

### Static Fields

#### standard: `UserDefaults` *`readonly`*
返回一个默认 ```UserDefaults``` 实例。

#### constructor(suiteName?: string)
通过指定标识，创建一个 ```UserDefaults``` 实例。

### Instance Methods

#### valueForKey(forKey: string): `any | undefined`
返回指定键的内容。

#### setValue(value: any, forKey: string): `void`
设置指定键内容。

#### reset(): `void`
重置所有内容。

