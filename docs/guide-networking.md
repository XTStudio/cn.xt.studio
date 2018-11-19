---
author: Pony Cui
title: 网络
---

很多移动应用都需要从远程地址中获取数据或资源。你可能需要给某个 REST API 发起 POST 请求以提交用户数据，又或者可能仅仅需要从某个服务器上获取一些静态内容——以下就是你会用到的东西。

开发者可以使用 XT 提供的 ```URLSession``` 类创建、发起 HTTP 请求。

## 发起请求

要从任意地址获取内容的话，只需简单地将网址作为参数传递给 ```dataTask``` 方法即可。

这个例子将向 `https://api.github.com` 发起 GET 请求，如果请求成功，将得到一个 `Data` 实例。[（示例）](https://stackblitz.com/edit/xt-sample-networking)

```typescript
URLSession.shared.dataTask("https://api.github.com", (data, res, error) => {
    if (error) {
        // 请求失败。
    }
    else if (data) {
        const responseText = data.utf8String()
        if (responseText) {
            new UIAlert(responseText).show()
        }
    }
}).resume()
```

## 发起 POST 请求

你需要使用 ```MutableURLRequest``` 类创建请求，并使用 ```URLSession``` 发起 POST 请求。[（示例）](https://stackblitz.com/edit/xt-sample-networking-post)

```typescript
const request = new MutableURLRequest("https://api.github.com")
request.HTTPMethod = "POST"
request.HTTPBody = new Data({utf8String: "put your post body here."})
URLSession.shared.dataTask(request, (data) => {
    if (data) {
        const responseText = data.utf8String()
        if (responseText) {
            new UIAlert(responseText).show()
        }
    }
}).resume()
```

你也可以使用 ```MutableURLRequest``` 设置更多的请求参数。

## 跨域限制

在 iOS / Android 原生平台上，不存在跨域限制。

在 Web 页面中发起 HTTP 请求会有跨域限制，具体解决方案请[参考此处](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)。