---
author: Pony Cui
title: UITextView
---

用于展示一个多行文本输入框，具体使用方法参阅[教程](./guide-input.md)。

## API

### Instance Fields

#### text: `string | undefined`
文本输入框中的文本。

#### textColor: `UIColor | undefined`
文字颜色。

#### font: `UIFont | undefined`
字体。

#### textAlignment: `UITextAlignment`
文本对齐方式。

#### editable: `boolean`
是否可编辑文本。

#### selectable: `boolean`
是否可选择文本。

#### editing: `boolean` *`readonly`*
当前是否正处于编辑状态。

#### autocapitalizationType: UITextAutocapitalizationType
自动拼写的行为模式。

#### autocorrectionType: UITextAutocorrectionType
自动纠正的行为模式。

#### spellCheckingType: UITextSpellCheckingType
拼写检查的行为模式。

#### keyboardType: UIKeyboardType
键盘类型。

#### returnKeyType: UIReturnKeyType
返回键类型。

#### secureTextEntry: boolean
是否为 `password` 字段，当设为 `true` 时，输入文本会被掩码遮挡。

### Instance Methods

#### scrollRangeToVisible(range: UIRange): `void`
滚动至指定文本位置。

#### focus(): `void`
聚焦。

#### blur(): `void`
失焦。

### Events

#### "shouldBeginEditing": (sender: UITextView) => boolean
当输入框将要聚焦时触发，返回 `false` 可禁止输入框得到焦点。

#### "didBeginEditing": (sender: UITextView) => void
在输入框得到焦点后触发。

#### "shouldEndEditing": (sender: UITextView) => boolean
当输入框将要失去焦点时触发，返回 `false` 可禁止输入框失去焦点。

#### "didEndEditing": (sender: UITextView) => void
在输入框失去焦点后触发。

#### "shouldChange": (sender: UITextView, charactersInRange: UIRange, replacementString: string) => boolean
当输入框中的文本变更时触发，返回 `false` 可禁止变更。