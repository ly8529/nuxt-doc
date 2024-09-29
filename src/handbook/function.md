# 函数

## 为参数声明类型

```typescript
const foo = (str: string, num1: number) => {
	return str.length + num1
}
```

## 对象格式的参数

```typescript
const bar = (param: { name: string; age: number }) => {
	return param
}
```

## 对象参数 & 参数解构 & 剩余参数

```typescript
const bar2 = ({ name, age = 18, ...others }: { name: string; age: number; like: string }) => {
	return { name, age, ...others }
}
```

## 可选参数

```typescript
const addFunc2 = (a: string, b: number | string = 12, c?: number) => {
	return a + b + c
}
const addFunc2Res = addFunc2('1', 1, 2)
```

## 函数重载

```typescript
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: string, b: string): string
function add(a: number, b: number): number

function add(a: string | number, b: string | number) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

var addRe = add(1, 2)
console.log(addRe)
```

## 添加注释

```typescript
/**
 * 这是一条注释
 */
function add(a: string | number, b: string | number) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

var addRe = add(1, 2)
console.log(addRe)
```
