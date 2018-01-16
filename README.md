# 前端开发风格指南

本项目采用React开发，基于[dva](https://github.com/dvajs/dva)前端开发框架。

## 开发工具

### [VS Code](https://code.visualstudio.com/)

### 初次使用说明

1. 安装成功后，点击右侧『扩展』菜单

2. 搜索并安装 『Settings Sync』插件，该插件用于同步 VS Code 配置的插件，VS Code 本身不带同步功能

3. 插件安装成功后，使用Shift + Alt + D ，顶部会弹出文本框，相继输入『46b6f96dab375dbb96c0c04067955181cb0d4d6b』，『255f1b9fc49254037dea9940ddfab62d』，等待 VS Code 更新配置完成

### 重要插件说明

* vscode-icons：文件图标主题，需要在首选项-文件图标主题中选中

* ES7 React/Redux/React-Native/JS snippets：提供 React 快捷语法

* Prettier formatter：代码格式化工具，保存时会强制格式化一次代码

* Settings Sync：VS Code 配置文件同步工具

## 代码风格

### [JavaScript Standard Style](https://standardjs.com/readme-zhcn.html)

### 一些细节

* 使用两个空格 – 进行缩进

* 字符串使用单引号 – 需要转义的地方除外

* 不再有冗余的变量 – 这是导致 大量 bug 的源头!

* 无分号 – 这没什么不好。不骗你！

* 行首不要以 (, [, or ` 开头

  * 这是省略分号时唯一会造成问题的地方 – 工具里已加了自动检测！

  * [详情](https://standardjs.com/rules-zhcn.html#semicolons)

* 关键字后加空格 if (condition) { ... }

* 函数名后加空格 function name (arg) { ... }

* 坚持使用全等 === 摒弃 == 一但在需要检查 null || undefined 时可以使用 obj == null。

### 说明

本项目大致遵循『JavaScript Standard Style』代码风格，但由『Prettier formatter』插件提供代码风格的检查和格式化。项目开发过程中，多使用代码格式化功能，为保证代码风格的一致，每次保存都将自动格式化代码。