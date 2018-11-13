---
author: Pony Cui
title: UITextField
---

用于展示一个单行文本输入框，具体使用方法参阅[教程](./guide-input.md)。

## Extends

[UIView](./api-uikit-uiview.md)

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

#### placeholder: `string | undefined`
占位文本。

#### clearsOnBeginEditing: `boolean`
当开始编辑时，是否要清空所有文字。

#### editing: `boolean` *`readonly`*
当前是否正处于编辑状态。

#### clearButtonMode: `UITextFieldViewMode`
右侧清除按钮的出现时机。

#### leftView: UIView | undefined
左侧视图。

#### leftViewMode: UITextFieldViewMode
左侧视图的出现时机。

#### rightView: UIView | undefined
右侧视图。

#### rightViewMode: UITextFieldViewMode
右侧视图的出现时机。

#### clearsOnInsertion: boolean
?

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

#### focus(): `void`
聚焦。

#### blur(): `void`
失焦。

### Events

#### "shouldBeginEditing": (sender: UITextField) => boolean
当输入框将要聚焦时触发，返回 `false` 可禁止输入框得到焦点。

#### "didBeginEditing": (sender: UITextField) => void
在输入框得到焦点后触发。

#### "shouldEndEditing": (sender: UITextField) => boolean
当输入框将要失去焦点时触发，返回 `false` 可禁止输入框失去焦点。

#### "didEndEditing": (sender: UITextField) => void
在输入框失去焦点后触发。

#### "shouldChange": (sender: UITextField, charactersInRange: UIRange, replacementString: string) => boolean
当输入框中的文本变更时触发，返回 `false` 可禁止变更。

#### "shouldClear": (sender: UITextField) => boolean
当用户点按右侧清除文本按钮时触发，返回 `false` 可禁止文本被清除。

#### "shouldReturn": (sender: UITextField) => boolean
当用户点按键盘 Return 键时触发，返回值无含义。