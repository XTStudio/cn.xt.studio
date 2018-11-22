---
author: Pony Cui
title: 原生类（iOS）
---

有时候 App 需要访问平台 API，但 XT 可能还没有相应的模块封装；或者你需要复用 Objective-C、Swift 或 C++代码，而不是用 JavaScript 重新实现一遍；又或者你需要实现某些高性能、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。

我们把 XT 设计为可以在其基础上编写真正的原生代码，并且可以访问平台所有的能力。这是一个相对高级的特性，我们并不认为它应当在日常开发的过程中经常出现，但具备这样的能力是很重要的。如果 XT 还不支持某个你需要的原生特性，你应当可以自己实现该特性的封装。

本文是关于如何封装原生类的高级向导，我们假设您已经具备 Objective-C 或者 Swift，以及 iOS 核心库（Foundation、UIKit）的相关知识。

我们将原生扩展分为两类，原生类（不涉及 UI 的扩展），原生界面（涉及 UI 的扩展），本文描述的是原生类。

## engine 库

XT 的核心是 [`engine`](https://github.com/XTStudio/engine-ios.git) 库，通过该库，`OC` 层 API 得以暴露至 `JavaScript` 环境。

### 类型映射

在 OC 与 JS 交互中，存在以下类型映射关系。

| OC | JS |
| ------ | ------ |
| NSString | string |
| NSNumber | number |
| NSInteger | number |
| CGFloat | number |
| BOOL | boolean |
| NSArray | array |
| NSDictionary | object |
| NSNull | undefined |
| nil | undefined |
| Block | function |
| CGRect | UIRect |
| CGPoint | UIPoint |
| CGSize | UISize |
| CGAffineTransform | UIAffineTransform |
| UIEdgeInsets | UIEdgeInsets |
| NSRange | UIRange |

## 导出示例

在教学前，建议先下载[模板工程](https://github.com/XTStudio/sample_ext)。

### FooManager

假定我们要导出的类是 ```FooManager```，有以下需要导出的属性和方法。

* 导出类方法 `sharedManager`。
* 导出可读可写实例属性 `name`，类型为 `NSString`。
* 导出只读实例属性 `location`，类型为 `NSString`。
* 导出实例方法 `changeName`。
* 在 JS 端监听 `locationChanged` 事件，并响应变化。

### 创建原生类

根据上述导出信息，我们先创建对应的原生类和方法。

```objective-c
//
//  FooManager.h

#import <Foundation/Foundation.h>

@interface FooManager : NSObject

+ (FooManager *)sharedManager;

@property (nonatomic, copy) NSString *name;
@property (nonatomic, readonly) NSString *location;

- (void)changeName:(NSString *)name;

@end
```

```objective-c
//
//  FooManager.m

#import "FooManager.h"

@implementation FooManager

+ (FooManager *)sharedManager {
    static FooManager *instance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [FooManager new];
    });
    return instance;
}

- (instancetype)init
{
    self = [super init];
    if (self) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(6.0 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            staticLocation = @"广州";
            [self edo_emitWithEventName:@"locationChanged" arguments:nil];
        });
    }
    return self;
}

static NSString *staticLocation = @"佛山";

- (NSString *)location {
    return staticLocation;
}

- (void)changeName:(NSString *)name {
    self.name = name;
}

@end
```

### 导出类

在 `load` 方法中使用 `EDO_EXPORT_CLASS` 宏导出类，其中第一个参数是该类在 JS 环境中的类名，第二个参数是该类的父类 JS 类名（`nil` 代表无父类）。

```objective-c
//...

#import <xt-engine/EDOExporter.h>

@implementation FooManager

+ (void)load {
    EDO_EXPORT_CLASS(@"FooManager", nil);
}

//...
```

### 导出类方法

使用 `EDO_EXPORT_STATIC_METHOD` 宏导出类方法。

```objective-c
//...

#import <xt-engine/EDOExporter.h>

@implementation FooManager

+ (void)load {
    EDO_EXPORT_CLASS(@"FooManager", nil);
    EDO_EXPORT_STATIC_METHOD(sharedManager); // <<<---
}

//...
```

### 导出实例属性

使用 `EDO_EXPORT_PROPERTY` 和 `EDO_EXPORT_READONLY_PROPERTY` 宏导出实例属性。

```objective-c
//...

#import <xt-engine/EDOExporter.h>

@implementation FooManager

+ (void)load {
    EDO_EXPORT_CLASS(@"FooManager", nil);
    EDO_EXPORT_STATIC_METHOD(sharedManager);
    EDO_EXPORT_PROPERTY(@"name"); // <<<---
    EDO_EXPORT_READONLY_PROPERTY(@"location"); // <<<---
}

//...
```

### 导出实例方法

使用 `EDO_EXPORT_METHOD` 宏导出实例方法。

```objective-c
//...

#import <xt-engine/EDOExporter.h>

@implementation FooManager

+ (void)load {
    EDO_EXPORT_CLASS(@"FooManager", nil);
    EDO_EXPORT_STATIC_METHOD(sharedManager);
    EDO_EXPORT_PROPERTY(@"name");
    EDO_EXPORT_READONLY_PROPERTY(@"location");
    EDO_EXPORT_METHOD(changeName:); // <<<---
}

//...
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
/// <reference path="../sample_ext.d.ts" />

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

在命令行执行 `npm run build` 后，从 Xcode 中启动应用，如果出现 `Pony @佛山`，在 3 秒后变为 `Benji @佛山`，在 6 秒后变为 `Benji @广州`。恭喜，你已经完成了第一个扩展类。

## 前缀规则

如果 OC 类中存在 `edo_` 前缀的类方法、实例属性、实例方法，导出后，在 JS 环境中，`edo_` 前缀是忽略的。

通过这种方法，我们可以为任意类（包括系统框架类）创建 `category`，在分类实现中，添加属性以及方法，以达到导出系统类的目的。


