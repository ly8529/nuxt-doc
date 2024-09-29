# 数组

在 TypeScript 中，数组类型有多种定义方式，比较灵活。

## 「类型 + 方括号」表示法

最简单的方法是使用「类型 + 方括号」来表示数组：

```typescript
let fibonacci: number[] = [1, 1, 2, 3, 5]
```

数组的项中不允许出现其他的类型：

```typescript
let fibonacci: number[] = [1, '1', 2, 3, 5]

// 类型“string”的参数不能赋给类型“number”的参数。ts(2345)
```

数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：

```typescript
let fibonacci: number[] = [1, 1, 2, 3, 5]
fibonacci.push('8')

// 类型“string”的参数不能赋给类型“number”的参数。ts(2345)
```

上例中，push 方法只允许传入 number 类型的参数，但是却传了一个 string 类型的参数，所以报错了。

## 数组泛型

我们也可以使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：
let fibonacci: Array<number> = [1, 1, 2, 3, 5];

## 用接口表示数组

接口也可以用来描述数组：

```typescript
interface NumberArray {
	[index: number]: number
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5]
```

NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

## any 在数组中的应用

一个比较常见的做法是，用 any 表示数组中允许出现任意类型：

```typescript
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]
```
