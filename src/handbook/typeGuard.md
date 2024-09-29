# 类型守卫

**什么是类型守卫:**

`TS` 在遇到以下这些条件语句时，会在语句的块级作用域内「收紧`Narrowing`」变量的类型，这种类型推断的行为称作类型守卫 `(Type Guard)`。

常用的:

-   空值推断
-   类型判断: `typeof`
-   实例判断: `instanceof`
-   属性判断: `in`
-   字面量相等判断：`==`, `===`, `!=`, `!==`
-   类型谓词: `is`

**空值检验**

```typescript
function hello(name?: string) {
	if (name) {
		// 此处被推断为string类型 而不是 string|undefined
		console.log(`Hello, ${name.toUpperCase()}`)
	} else {
		console.log('Hello')
	}
}
```

**类型判断: typeof**

```typescript
function test(input: string | number) {
	if (typeof input == 'string') {
		// 这里 input 的类型「收紧」为 string
	} else {
		// 这里 input 的类型「收紧」为 number
	}
}
```

**实例判断：instanceof**

```typescript
class Foo {
	name: string = ''
}

class Bar {
	age = 12
}

function test(input: Foo | Bar) {
	if (input instanceof Foo) {
		input.name
		// 这里 input 的类型「收紧」为 Foo
	} else {
		input.age
		// 这里 input 的类型「收紧」为 Bar
	}
}
```

**属性判断：in**

```typescript
interface Foo {
	foo: string
}

interface Bar {
	bar: string
}

function test(input: Foo | Bar) {
	if ('foo' in input) {
		// 这里 input 的类型「收紧」为 Foo
	} else {
		// 这里 input 的类型「收紧」为 Bar
	}
}
```

**字面量相等判断 ==, !=, ===, !==**

```typescript
type Foo = 'foo' | 'bar' | 'unknown'

function test(input: Foo) {
	if (input !== 'unknown') {
		// 这里 input 的类型「收紧」为 'foo' | 'bar'
	} else {
		// 这里 input 的类型「收紧」为 'unknown'
	}
}
```

**自定义: 类型谓词 is**

```typescript
function isString(x: any): x is string {
	return Object.prototype.toString.call(x) === '[object String]'
}

function foo(s: string | number): number {
	if (isString(s)) {
		// 此处被推断为 string 类型
		return s.length
	}
	return s
}
```
