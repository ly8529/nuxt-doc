# 基础类型

## javascript 中的数据类型

JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
原始数据类型包括：`boolean`、`number`、`string`、`null`、`undefined` 以及 ES6 中的新类型 [Symbol](https://es6.ruanyifeng.com/#docs/symbol) 和 ES10 中的新类型 [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

## typescript 中的类型

Typescript 中的类型有:

与 javascript 中一致的原始类型
`boolean`、`number`、`string`、`null`, `Symbol`、`undefined`

其他常用类型
`unknown`、`void`、`never`、`any`、`Enum 类型`、`Array 类型`、`Tuple 类型`、`Function 类型`

内置函数如 `Date`, `RegExp` 以及值类型等, 都可作类型使用

`String` | `Number` 不建议使用, 建议使用`string`, `number` 替代

### string

使用 string 定义字符串类型：

```typescript
let name: string = '张三'
// ES5：var name = '张三';
```

### boolean

使用 boolean 定义布尔值类型：

```typescript
let isDone: boolean = false
// ES5：var isDone = false;
```

注意，使用构造函数 Boolean 创造的对象不是布尔值：

```typescript
let createdByNewBoolean: boolean = new Boolean(1)

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```

事实上 new Boolean() 返回的是一个 Boolean 对象：

### number

```typescript
let num1: number = 12
let num2 = 14

num1.toFixed()
num1.toString()
// num1.slice() error
```

### Symbol

```typescript
const symbol1: Symbol = Symbol()

let obj = {
	[symbol1]: '张三'
}
```

### void

JavaScript 没有空值（void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：

```typescript
export function print(...arg: any): void {
	console.log(...arg)
}

let v: void = print('Hello')
v = undefined
// v = null
```

声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null

### null 和 undefined

可以使用 null 和 undefined 来定义这两个原始数据类型：

```typescript
let u: undefined = undefined
let n: null = null
```

与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

```typescript
// 这样不会报错
let num: number = undefined

// 这样也不会报错
let u: undefined
let num2: number = u
```

而 void 类型的变量不能赋值给 number 类型的变量：

```typescript
let u: void
let num: number = u

// Type 'void' is not assignable to type 'number'.
```

### unknown

```typescript
let u: unknown = '12'
u = 22
```

### never

```typescript
// 14. never
function nevFunc(): never {
	throw new Error('err')
}

const nev_ = nevFunc()
```
