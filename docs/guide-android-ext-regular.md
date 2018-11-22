---
author: Pony Cui
title: 原生类（Android）
---

> 教程均使用 Kotlin 进行编码，如需使用 Java 编码，请稍作翻译即可。

有时候 App 需要访问平台 API，但 XT 可能还没有相应的模块封装；或者你需要复用 Java、Kotlin 代码，而不是用 JavaScript 重新实现一遍；又或者你需要实现某些高性能、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。

我们把 XT 设计为可以在其基础上编写真正的原生代码，并且可以访问平台所有的能力。这是一个相对高级的特性，我们并不认为它应当在日常开发的过程中经常出现，但具备这样的能力是很重要的。如果 XT 还不支持某个你需要的原生特性，你应当可以自己实现该特性的封装。

本文是关于如何封装原生类的高级向导，我们假设您已经具备 Java 或者 Kotlin，以及 Android 核心库的相关知识。

我们将原生扩展分为两类，原生类（不涉及 UI 的扩展），原生界面（涉及 UI 的扩展），本文描述的是原生类。

## engine 库

XT 的核心是 [`engine`](https://github.com/XTStudio/engine-android.git) 库，通过该库，`Java` 层 API 得以暴露至 `JavaScript` 环境。

### 类型映射

在 Java 与 JS 交互中，存在以下类型映射关系。

| Java | JS |
| ------ | ------ |
| String | string |
| Int | number |
| Float | number |
| Double | number |
| Bool | boolean |
| List | array |
| Map | object |
| null | undefined |
| EDOCallback | function |
| CGRect | UIRect |
| CGPoint | UIPoint |
| CGSize | UISize |
| CGAffineTransform | UIAffineTransform |
| UIEdgeInsets | UIEdgeInsets |
| UIRange | UIRange |

## 导出示例

在教学前，建议先下载[模板工程](https://github.com/XTStudio/sample-ext)。

### FooManager

假定我们要导出的类是 ```FooManager```，有以下需要导出的属性和方法。

* 导出类方法 `sharedManager`。
* 导出可读可写实例属性 `name`，类型为 `NSString`。
* 导出只读实例属性 `location`，类型为 `NSString`。
* 导出实例方法 `changeName`。
* 在 JS 端监听 `locationChanged` 事件，并响应变化。

### 创建并注册插件包

在 Android Studio 中创建一个包用于存放插件类，在模板工程中，我们创建 `com.opensource.plugin` 包。

然后，创建入口类，`PluginPackage`，类名称可以随意发挥，没有强制的命名。

```kotlin
class PluginPackage: EDOPackage() {

    init {
        
    }

}
```

接着，在该包对应的 `manifests` 中添加注册信息 `meta-data`，其中 `name` 为入口类类名全称，`value` 保持 `EDOPackage` 不变。

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.opensource.sample_ext">

    <application>

        <meta-data android:name="com.opensource.plugin.PluginPackage" android:value="EDOPackage" />

    </application>

</manifest>
```

### 创建原生类

根据上述导出信息，我们先创建对应的原生类和方法。

```kotlin
package com.opensource.plugin

import android.os.Handler
import com.xt.endo.EDOJavaHelper
import java.util.*
import kotlin.concurrent.timerTask

var staticLocation = "佛山"

class FooManager {

    var name: String = ""

    val location: String
        get() {
            return staticLocation
        }

    init {
        val handler = Handler()
        Timer().schedule(timerTask {
            handler.post {
                staticLocation = "广州"
                EDOJavaHelper.emit(this@FooManager, "locationChanged")
            }
        }, 6000)
    }

    fun changeName(name: String) {
        this.name = name
    }

    companion object {

        val sharedInstance = FooManager()

        @JvmStatic fun sharedManager(): FooManager {
            return sharedInstance
        }

    }

}
```

### 导出类

在 `PluginPackage` 入口类的 `init` 方法中，使用 `EDOExporter.sharedExporter.exportClass` 方法导出类。

```kotlin
class PluginPackage: EDOPackage() {

    init {
        EDOExporter.sharedExporter.exportClass(FooManager::class.java, "FooManager") // <<<---
    }

}
```

### 导出类方法

使用 `EDO_EXPORT_STATIC_METHOD` 宏导出类方法。

```kotlin
package com.opensource.plugin

import com.xt.endo.EDOExporter
import com.xt.endo.EDOPackage

class PluginPackage: EDOPackage() {

    init {
        EDOExporter.sharedExporter.exportClass(FooManager::class.java, "FooManager")
        EDOExporter.sharedExporter.exportStaticMethodToJavaScript(FooManager::class.java, "sharedManager") // <<<---
    }

}
```

### 导出实例属性

使用 `EDOExporter.sharedExporter.exportProperty` 方法导出实例属性。

```kotlin
package com.opensource.plugin

import com.xt.endo.EDOExporter
import com.xt.endo.EDOPackage

class PluginPackage: EDOPackage() {

    init {
        EDOExporter.sharedExporter.exportClass(FooManager::class.java, "FooManager")
        EDOExporter.sharedExporter.exportStaticMethodToJavaScript(FooManager::class.java, "sharedManager")
        EDOExporter.sharedExporter.exportProperty(FooManager::class.java, "name") // <<<---
        EDOExporter.sharedExporter.exportProperty(FooManager::class.java, "location", true) // <<<--- 第三个参数 true 代表该属性是只读的
    }

}
```

### 导出实例方法

使用 `EDOExporter.sharedExporter.exportMethodToJavaScript` 方法导出实例方法。

```kotlin
package com.opensource.plugin

import com.xt.endo.EDOExporter
import com.xt.endo.EDOPackage

class PluginPackage: EDOPackage() {

    init {
        EDOExporter.sharedExporter.exportClass(FooManager::class.java, "FooManager")
        EDOExporter.sharedExporter.exportStaticMethodToJavaScript(FooManager::class.java, "sharedManager")
        EDOExporter.sharedExporter.exportProperty(FooManager::class.java, "name")
        EDOExporter.sharedExporter.exportProperty(FooManager::class.java, "location", true)
        EDOExporter.sharedExporter.exportMethodToJavaScript(FooManager::class.java, "changeName") // <<<---
    }

}
```

### 编写 d.ts 文件

回到 `TypeScript` 工程，在工程目录下添加 `[YourProjectName].d.ts` 文件。接着编写 `typing` 描述（如果忽略这一步，TypeScript 将无法编译通过哦）。

```typescript
interface FooManagerEventMap extends BaseEventMap {
    "locationChanged": () => void,
}

declare class FooManager {
    static sharedManager(): FooManager
    name: string
    readonly location: string
    changeName(name: string): void
    // EventEmitter
    on<K extends keyof FooManagerEventMap>(type: K, listener: FooManagerEventMap[K]): this
    once<K extends keyof FooManagerEventMap>(type: K, listener: FooManagerEventMap[K]): this
    off<K extends keyof FooManagerEventMap>(type: K, listener: FooManagerEventMap[K]): this
    emit<K extends keyof FooManagerEventMap>(type: K, ...args: any[]): this
}
```

### 编写测试代码

回到 `TypeScript` 工程，在 `main.ts` 文件中编写测试代码。

```typescript
/// <reference path="../sample-ext.d.ts" />

class MainViewController extends UIViewController {

    fooLabel = new UILabel

    viewDidLoad() {
        super.viewDidLoad()
        this.fooLabel.textAlignment = UITextAlignment.center
        FooManager.sharedManager().name = "Pony"
        this.fooLabel.text = `${FooManager.sharedManager().name} @${FooManager.sharedManager().location}`
        this.view.addSubview(this.fooLabel)
        DispatchQueue.main.asyncAfter(3.0, () => {
            FooManager.sharedManager().changeName("Benji")
            this.fooLabel.text = `${FooManager.sharedManager().name} @${FooManager.sharedManager().location}`
        })
        FooManager.sharedManager().on("locationChanged", () => {
            this.fooLabel.text = `${FooManager.sharedManager().name} @${FooManager.sharedManager().location}`
        })
    }

    viewWillLayoutSubviews() {
        super.viewWillLayoutSubviews()
        this.fooLabel.frame = this.view.bounds
    }

}

global.main = new MainViewController
```

在命令行执行 `npm run build` 后，从 Android Studio 中启动应用，如果出现 `Pony @佛山`，在 3 秒后变为 `Benji @佛山`，在 6 秒后变为 `Benji @广州`。恭喜，你已经完成了第一个扩展类。

## 前缀规则

如果 Java 类中存在 `edo_` 前缀的类方法、实例属性、实例方法，导出后，在 JS 环境中，`edo_` 前缀是忽略的。

通过这种方法，我们可以为任意类（包括系统框架类）创建 `category`，在分类实现中，添加属性以及方法，以达到导出系统类的目的。


