---
author: Pony Cui
title: URLRequestCachePolicy
---

URLRequestCachePolicy 用于定义缓存的处理方法。

#### useProtocol
根据服务器返回的 Header 处理。

#### ignoringLocalCache
忽略本地缓存。

#### returnCacheElseLoad
如果存在本地缓存，则使用本地缓存，否则加载远程数据。

#### returnCacheDontLoad
如果存在本地缓存，则使用本地缓存，否则返回错误，相当于离线模式。