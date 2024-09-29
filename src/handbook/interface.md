# 接口 interface

interface 可以为对象, 函数声明类型

```typescript
// interface

interface Person {
	name: string
	age: number
}
```

#### 只读属性 & 可选属性

```typescript
interface Person {
	readonly name: string
	age?: number
}
```

#### 索引签名

```typescript
interface Person {
	[age: string]: number
}

interface Person {
	[name: string]: string
}
```

### interface VS type

官方的表述:
[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

>

#### 1. Objects/Function

接口和类型别名都可以用来描述对象的形状或函数签名：

##### 接口

```typescript
interface Person {
	[name: string]: string
}

interface Point {
	x: number
	y: number
}

interface SetPoint {
	(x: number, y: number): void
}

// 接口扩展
interface Person {
	name: string
}
interface Person {
	age: number
}

const p: Person = {
	name: '张三',
	age: 12
}
```

##### 类型别名

```typescript
type Point = {
	x: number
	y: number
}

type SetPoint = (x: number, y: number) => void

type Person = {
	[name: string]: string
}

// 对象扩展
type Point = {
	x: number
	y: number
}
type Point2 = Point & { z: number }
var point: Point2 = {
	x: 1,
	y: 1,
	z: 1
}
```

#### 2. 其他类型

与接口类型不一样，类型别名可以用于对象&函数以外的其他类型，比如原始类型、联合类型和元组：

```typescript
// 基础类型
type Name = string
type Age = number

// 联合类型
type B = string | null | { x: string }

// tuple
type A = [number, string]
```

#### 3. 扩展

都可实现扩展, 语法不同

```typescript
// 接口继承接口
interface PartialPerson {
	name: string
}
interface Person extends PartialPerson {
	age: number
}
const p: Person = {
	name: 'string',
	age: 12
}

// 接口继承类型别名
type PartialPerson = {
	name: string
}
interface Person extends PartialPerson {
	age: number
}

const p: Person = {
	name: 'string',
	age: 12
}

// 类型别名拓展接口
interface PartialPerson {
	name: string
}
type Person = PartialPerson & {
	age: number
}
const p: Person = {
	name: 'string',
	age: 12
}

// 类型别名拓展类型别名
type PartialPerson = {
	name: string
}
type Person = PartialPerson & {
	age: number
}

const p: Person = {
	name: 'string',
	age: 12
}
```

#### 4. 重新打开

接口重复声明会自动合并, 类型别名不能重新打开

```typescript
// 接口扩展
interface Person {
	name: string
}
interface Person {
	age: number
}
const p: Person = {
	name: '张三',
	age: 12
}

// 类型别名扩展
type Point = {
	x: number
	y: number
}

// error
type Point = {
	x: number
}
```

#### 5. Implements

类实现接口

```typescript
interface Point {
	x: number
	y: number
}

class SomePoint implements Point {
	x = 1
	y = 2
}

interface Point {
	x: number
	y: number
}

class SomePoint implements Point {
	x = 1
	y = 2
}
```
