---
author: Pony Cui
title: UIWebView
---

用于展示一个内嵌网页浏览器。

## Extends

[UIView](./api-uikit-uiview.md)

## API

### Instance Fields

#### title: `string | undefined` *`readonly`*
网页标题。

#### URL: `URL | undefined` *`readonly`*
网页 URL 地址。

#### loading: `boolean` *`readonly`*
网页是否正在加载中。

### Instance Methods

#### loadRequest(request: URLRequest): void
加载一个请求。

#### loadHTMLString(HTMLString: string, baseURL: URL): void
加载指定的 HTML 字符串。

#### goBack(): void
后退。

#### goForward(): void
前进。

#### reload(): void
重新加载网页。

#### stopLoading(): void
停止加载网页。

#### evaluateJavaScript(script: string, completed: (result?: any, error?: Error) => void): void
在当前网页中执行 JavaScript 代码。

### Events

#### "newRequest": (request: URLRequest) => boolean
当新的请求到达时触发，返回 `false` 可禁止加载此请求。

#### "didStart": () => void
当网页开始加载时触发。

#### "didFinish": () => void
当网页加载完成时触发。

#### "didFail": (error: Error) => void
当网页加载失败时触发。