# tsconfig 编译选项

```json
{
	"compilerOptions": {
		/* 基本选项 */
		"target": "es5", // 指定输出 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
		"module": "commonjs", // 指定输出代码使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
		"lib": [], // 指定要包含在编译中的库文件
		"allowJs": true, // 允许编译 javascript 文件
		"checkJs": true, // 报告 javascript 文件中的错误
		"jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
		"declaration": true, // 生成相应的 '.d.ts' 文件 默认为 false，即不生成对应的声明文件
		"sourceMap": true, // 生成相应的 '.map' 文件
		"outFile": "./", // 将输出文件合并为一个文件
		"outDir": "./", // 指定输出目录
		"rootDir": "./", // 用来控制输出目录结构 --outDir.
		"removeComments": true, // 删除编译后的所有的注释
		"noEmit": false, // 不生成输出文件, (为 true, 则不进行输出)
		"importHelpers": true, // 从 tslib 导入辅助工具函数
		"isolatedModules": true, // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）. (如果文件中, 没有导出则报错)

		/* 严格的类型检查选项 */
		"strict": true, // 启用所有严格类型检查选项
		"noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
		"strictNullChecks": true, // 启用严格的 null 检查
		"noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
		"alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

		/* 额外的检查 */
		"noUnusedLocals": true, // 有未使用的变量时，抛出错误
		"noUnusedParameters": true, // 有未使用的参数时，抛出错误
		"noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
		"noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

		/* 模块解析选项 */
		"moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
		"baseUrl": "./", // 用于解析非相对模块名称的基目录
		"paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
		"rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
		"typeRoots": [], // 包含类型声明的文件列表
		"types": [], // 需要包含的类型声明文件名列表
		"allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

		/* Source Map Options */
		"sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
		"mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
		"inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
		"inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

		/* 其他选项 */
		"experimentalDecorators": true, // 启用装饰器
		"emitDecoratorMetadata": true // 为装饰器提供元数据的支持
	}
}
```

### 模块解析规则 `moduleResolution`

这个是用于配置模块的解析规则，主要有两种，分别为`classic`和`node`。

默认值为`module ==="amd" or "system" or "es6" or "es2015"?"classic" : "node"`，所以其默认值和 module 的配置有关联，由于`module`的默认值和`target`有关，而`target`默认值为 es3，所以`module`的默认值 commonjs，所以`moduleResolution`的默认值为`node`。这里解释一下`classic`和`node`两种解析规则的不同:

**`classic`模块解析规则:**

① 对于相对路径模块: 例: `import { b } from "./b"`

-   查找`b.ts`文件
-   查找结束

② 对于非相对路径模块: 例: `import { b } from "b"` ,那么其查找过程如下:

-   查找`b.ts`文件
-   查找`b.d.ts`文件
-   逐级向上级文件夹查找, 直到根目录

```javascript
/*
/Users/xx/ts-test/src/b.ts
/Users/xx/ts-test/src/b.d.ts
/Users/xx/ts-test/b.ts
/Users/xx/ts-test/b.d.ts
/Users/xx/b.ts
/Users/xx/b.d.ts
/Users/b.ts
/Users/b.d.ts
/b.ts
/b.d.ts
*/
```

**node 模块解析规则:**

① 对于相对路径模块查找顺序:

-   查找`xx.ts`文件
-   查找`xx.d.ts`文件
-   查找`xx/package.json`中 main 属性, 如果配置了，则加载 main 所指向的文件(.ts 或者.d.ts)
-   查找`xx/index.ts`
-   查找`xx/index.d.ts`
-   查找结束

② 对于非相对路径模块: 对于非相对路径模块，那么会直接到`a.ts`所在目录下的`node_modules`目录下去查找，也是遵循逐层遍历的规则，查找规则同上，同上 node 模块解析规则查找如下:

```javascript
/*

/Users/xx/ts-test/src/node_modules/b.ts
/Users/xx/ts-test/src/node_modules/b.d.ts
/Users/xx/ts-test/src/node_modules/b/package.json(如果指定了main)
/Users/xx/ts-test/src/node_modules/b/index.ts
/Users/xx/ts-test/src/node_modules/b/index.d.ts
 
/Users/xx/ts-test/node_modules/b.ts
/Users/xx/ts-test/node_modules/b.d.ts
/Users/xx/ts-test/node_modules/b/package.json(如果指定了main)
/Users/xx/ts-test/node_modules/index.ts
/Users/xx/ts-test/node_modules/index.d.ts
 
/Users/xx/node_modules/b.ts
/Users/xx/node_modules/b.d.ts
/Users/xx/node_modules/b/package.json(如果指定了main)
/Users/xx/node_modules/index.ts
/Users/xx/node_modules/index.d.ts
 
/Users/node_modules/b.ts
/Users/node_modules/b.d.ts
/Users/node_modules/b/package.json(如果指定了main)
/Users/node_modules/index.ts
/Users/node_modules/index.d.ts
 
/node_modules/b.ts
/node_modules/b.d.ts
/node_modules/b/package.json(如果指定了main)
/node_modules/index.ts
/node_modules/index.d.ts

*/
```

**参考**

-   [tsconfig 官网](https://www.typescriptlang.org/tsconfig)
-   [tsconfig 常用配置解析](https://blog.csdn.net/qq_45534118/article/details/104301916)
