# 安装 Typescript

TypeScript 的命令行工具安装方法如下：

```shell
$ npm install -g typescript
```

### 查看

```shell
$ tsc -v
# Version 4.0.2
```

### 编译 TypeScript 文件

以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。

编译一个 TypeScript 文件：

```shell
$ tsc helloworld.ts
# helloworld.ts => helloworld.js
```

对刚入门 TypeScript 的小伙伴来说，也可以不用安装 typescript，直接使用线上的 [TypeScript Playground](https://www.typescriptlang.org/play) 来学习新的语法或新特性。通过配置 TS Config 的 Target，可以设置不同的编译目标，从而编译生成不同的目标代码。

我们约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 或 Vue 需要 Jsx 语法时，以 .tsx 为后缀。

## 编辑器

TypeScript 最大的优势之一便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。

主流的编辑器都支持 TypeScript，这里我推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。

它是一款开源，跨终端的轻量级编辑器，内置了对 TypeScript 的支持。

另外它本身也是[用 TypeScript 编写的](https://github.com/Microsoft/vscode/)。

下载安装：https://code.visualstudio.com/

获取其他编辑器或 IDE 对 TypeScript 的支持：

-   Sublime Text
-   WebStorm
-   Vim
-   Emacs
-   Eclipse
-   Atom
-   Visual Studio 2019
-   Visual Studio 2017
