---
author: Pony Cui
title: 处理文本输入
---

开发者可以使用 ```UITextField``` 和 ```UITextView``` 处理文本输入。前者是一个单行文本输入框，后者是一个多行文本输入框。

## UITextField

借助 ```UITextField```，可以很方便地定制一个单行文本输入模块。

该组件提供以下能力：

* 捕获文本输入事件（聚焦、失焦、文本变化、响应 Return 键）
* 修改键盘类型（英文、数字、密码）
* 控制输入行为（自动补全、拼写检查、智能大写）
* 快捷清空按钮
* 左侧、右侧自定义视图能力

### 一个简单的例子

我们使用 ```UITextField``` 实现一个登录界面，该界面有两个输入框（用户名、密码），并模拟登录的过程。[（例子）](https://stackblitz.com/edit/xt-sample-uitextfield)

```typescript
class MainViewController extends UIViewController {

  usernameTextField = new UITextField
  passwordTextField = new UITextField
  loginButton = new UIButton
  
  viewDidLoad() {
    super.viewDidLoad()
    this.setupViews()
    this.setupEvents()
  }

  setupViews() {
    this.usernameTextField.placeholder = "Enter Username"
    this.usernameTextField.backgroundColor = new UIColor(0.95, 0.95, 0.95, 1.0)
    this.usernameTextField.clearButtonMode = UITextFieldViewMode.whileEditing
    this.view.addSubview(this.usernameTextField)
    this.passwordTextField.placeholder = "Enter Password"
    this.passwordTextField.backgroundColor = new UIColor(0.95, 0.95, 0.95, 1.0)
    this.passwordTextField.secureTextEntry = true
    this.view.addSubview(this.passwordTextField)
    this.loginButton.backgroundColor = new UIColor(0.95, 0.95, 0.95, 1.0)
    this.loginButton.setTitle("Login", UIControlState.normal)
    this.view.addSubview(this.loginButton)
  }

  setupEvents() {
    this.usernameTextField.on("shouldReturn", () => {
      this.passwordTextField.focus()
      return true
    })
    this.passwordTextField.on("shouldReturn", () => {
      this.passwordTextField.blur()
      this.doLogin()
      return true
    })
    this.loginButton.on("touchUpInside", () => {
      this.doLogin()
    })
  }

  doLogin() {
    new UIAlert("Hello, " + this.usernameTextField.text + ".").show()
  }
  
  viewWillLayoutSubviews() {
    super.viewWillLayoutSubviews()
    this.usernameTextField.frame = {x: 44, y: 44, width: 160, height: 32}
    this.passwordTextField.frame = {x: 44, y: 88, width: 160, height: 32}
    this.loginButton.frame = {x: 44, y: 136, width: 160, height: 36}
  }

}
```

* ```UITextField``` 默认是没有任何样式的，你需要为它手动添加背景、边框等修饰元素。
* 可以使用 ```placeholder``` 属性为输入框添加一行占位文本。
* 可以通过监听各个事件，实现 ```UITextField``` 的交互控制。

### 左侧视图

你可以为 ```UITextField``` 添加左侧、右侧视图，该视图会在特定场景下出现。[（例子）](https://stackblitz.com/edit/xt-sample-uitextfield-extraview)

```typescript
const leftView = new UIView
leftView.frame = {x: 0, y: 0, width: 12, height: 12}
leftView.backgroundColor = UIColor.blue
this.fooTextField.leftView = leftView
this.fooTextField.leftViewMode = UITextFieldViewMode.always
```

请查看例子，注意到输入框左侧的蓝色小方块了吗？这就是我们添加的左侧视图。

#### 试一试

* 尝试修改 ```leftViewMode```，使左侧视图在特定情况下出现。
* 添加右侧视图到输入框中。