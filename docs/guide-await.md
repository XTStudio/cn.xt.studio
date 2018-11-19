---
author: Pony Cui
title: Async / Await
---

XT 在各个运行时中提供 `Promise` 运行环境，并在部分异步 API 中提供 `Promise` 支持。

## Promise

我们可以使用 `Promise` 发起一个网络请求。[（示例）](https://stackblitz.com/edit/xt-sample-promise)

```typescript
URLSession.shared.fetch("https://api.github.com").then(data => {
    console.log(data.utf8String())
}).catch((error) => {
    console.log(error)
})
```

## Async / Await

`async / await` 是 ES7 提供的语法糖，同样是发起网络请求，我们可以这样写。[（示例）](https://stackblitz.com/edit/xt-sample-await)

```typescript
async sendRequest() {
    try {
        const data = await URLSession.shared.fetch("https://api.github.com")
        console.log(data.utf8String())
    } catch (e) {
        console.log(e)
    }
}
```