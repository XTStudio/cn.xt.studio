---
author: Pony Cui
title: UIDevice
---

描述用户机器信息。

## API

### Static Fields

#### current: `UIDevice` *`readonly`*
返回用户当前机器。

### Instance Fields

#### name: `string` *`readonly`*
机器名称。

#### model: `string` *`readonly`*
机器型号。

#### systemName: `string` *`readonly`*
机器操作系统名称。

#### systemVersion: `string` *`readonly`*
机器操作系统版本。

#### identifierForVendor: `UUID` *`readonly`*
机器编号，该 UUID 在应用安装时确定，不同应用间 UUID 不一致，该 UUID 在应用删除后会变更。