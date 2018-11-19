---
author: Pony Cui
title: 配置信息持久化
---

要实现数据的持久化，你可以使用 ```FileManager``` 将数据写入文件，而对于小量的 KeyValue 配置信息，则可以使用 ```UserDefaults``` 进行持久化。

### 读写配置信息

下面的代码简单地描述了读写的方法，这个例子会从仓库中读取 `lastVisit` 键值，接着更新该值。[（示例）](https://stackblitz.com/edit/xt-sample-userdefaults)

```typescript
const lastDate = UserDefaults.standard.valueForKey("lastVisit")
const currentDate = new Date().toISOString()
UserDefaults.standard.setValue(currentDate, "lastVisit")
```

你可以刷新示例页面，页面会显示你上次访问的时间。

### 允许存储的数据类型

你可以在 ```UserDefaults``` 中存储以下类型数据。

* number
* string
* boolean
* array
* map

只要该数据类型可以被 JSON 序列化和反序列化均可。