# 模块

## 全局模块

在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中。如在 foo.ts 里的以下代码。

```typescript
const foo = 123
```

如果你在相同的项目里创建了一个新的文件 bar.ts，TypeScript 类型系统将会允许你使用变量 foo，就好像它在全局可用一样：

```typescript
const bar = foo
```

毋庸置疑，使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块。

## 文件模块

**模块之 CommonJS, AMD, UMD, ES6 module**

> 从`ECMAScript 2015`开始，`JavaScript`引入了模块的概念。`TypeScript`也沿用这个概念。

[https://es6.ruanyifeng.com/#docs/module](https://es6.ruanyifeng.com/#docs/module)

### ES 模块

#### 导出声明

任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加`export`关键字来导出。

```typescript
export interface StringValidator {
	isAcceptable(s: string): boolean
}
```

#### 导出语句

```typescript
class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
		return s.length === 5 && numberRegexp.test(s)
	}
}
export const name = 'zhangsan'
export function downloadImage() {}

export { ZipCodeValidator }
export { ZipCodeValidator as mainValidator }
```

#### 重新导出

```typescript
export class ParseIntBasedZipCodeValidator {
	isAcceptable(s: string) {
		return s.length === 5 && parseInt(s).toString() === s
	}
}

// 导出原先的验证器但做了重命名
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator'
```

#### 默认导入 & 默认导出

```typescript
// 默认导出
export default axios

// 默认导出
import axios from 'axios'
```

#### 部分导入&导出

```typescript
// export function throttle(...)

// export function debounce(...)

import { throttle, debounce } from 'lodash-es'

// 合并导入
import * as _ from 'lodash-es'

// 使用
_.throttle(function () {}, 1000)
```

## 其他

### node & CommonJS

```typescript
// user.js 导出
module.exports.getUserInfo = function getUserInfo() {}
// or
module.exports = {
	getUserInfo() {}
}

// 导入
const getUserInfo = require('./user.js')

const fs = require('fs')
```

### UMD

UMD：Universal Module Definition（通用模块规范）是由社区想出来的一种整合了 CommonJS 和 AMD 两个模块定义规范的方法。

```javascript
;(function (global, factory) {
	if (typeof exports === 'object' && typeof module !== undefined) {
		//检查CommonJS是否可用
		module.exports = factory(require('jquery'))
	} else if (typeof define === 'function' && define.amd) {
		//检查AMD是否可用
		define('toggler', ['jquery', factory])
	} else {
		//两种都不能用，把模块添加到JavaScript的全局命名空间中。
		global.toggler = factory(global, factory)
	}
})(this, function ($) {
	function init() {}
	return {
		init: init
	}
})
```

### 为模块重写声明

```typescript
// global.d.ts
declare module 'foo' {
	// some variable declarations
	export var bar: number
}
```

接着:

```typescript
// anyOtherTsFileInYourProject.ts
import * as foo from 'foo'
// TypeScript 将假设（在没有做其他查找的情况下）
// foo 是 { bar: number }
```

**参考**

-   [https://www.typescriptlang.org/docs/handbook/2/modules.html](https://www.typescriptlang.org/docs/handbook/2/modules.html)
-   [https://jkchao.github.io/typescript-book-chinese/project/modules.html#import-require-%E4%BB%85%E4%BB%85%E6%98%AF%E5%AF%BC%E5%85%A5%E7%B1%BB%E5%9E%8B](https://jkchao.github.io/typescript-book-chinese/project/modules.html#import-require-%E4%BB%85%E4%BB%85%E6%98%AF%E5%AF%BC%E5%85%A5%E7%B1%BB%E5%9E%8B)
