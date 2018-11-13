---
author: Pony Cui
title: UIMenu
---

用于显示菜单视图。

## Preview

![](./api-uikit-uimenu.png)

## Sample

```typescript
const menu = new UIMenu
menu.addMenuItem("复制", () => {
    // callback
})
menu.addMenuItem("删除", () => {
    // callback
})
menu.show(button)
```

## API

### Instance Methods

#### addMenuItem(title: `string`, actionBlock: `() => void`): `void`
添加一个选项。

#### show(inView: `UIView`): `void`
在指定视图附近弹出菜单。