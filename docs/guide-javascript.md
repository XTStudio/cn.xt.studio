---
author: Pony Cui
title: JavaScript 环境
---

在使用 XT 时，你的代码将运行在对应的宿主环境上。

* 在 iOS 原生平台，代码将运行在 `JavaScriptCore` 中，大部分代码可以无差别地运行在 iOS 9.0+，要完整地支持 ES6 特性，则需要 iOS 10.3 版本以上。
* 在 Android 原生平台，代码将运行在 `V8` 中，该环境支持所有 ES6 特性。
* 在 Web 平台上，代码将根据宿主 `WebView` 提供的 `JavaScript` 环境而异。

只要你使用的是 XT 提供的 API，框架已经为你抹平大部分的平台差异，只需放心使用即可。